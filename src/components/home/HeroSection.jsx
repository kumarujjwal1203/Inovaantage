import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';

// 3D Glowing Particle Sphere Canvas Component with Interactive Mouse Dispersion & Positioned Above Stats
function ParticleSphere() {
  const pointsRef = useRef();
  const count = 3500;

  // Compact, focused sphere geometry (radius = 1.8 for clear breathing room)
  const [geometry, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const radius = 1.8;

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius + (Math.random() - 0.5) * 0.22;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return [geom, new Float32Array(pos)];
  }, [count]);

  const currentDisplacements = useRef(new Float32Array(count * 3));

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const pointer = state.pointer; // NDC: [-1, 1]
    const viewport = state.viewport;

    // Convert pointer to 3D world space at z=0 plane
    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2 - 0.4; // Offset to match elevated sphere position

    // Smooth rotation following cursor position with inertia
    const targetRotY = time * 0.08 + pointer.x * 0.35;
    const targetRotX = Math.sin(time * 0.05) * 0.1 - pointer.y * 0.25;

    pointsRef.current.rotation.y += (targetRotY - pointsRef.current.rotation.y) * 0.05;
    pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * 0.05;

    const rotY = pointsRef.current.rotation.y;
    const rotX = pointsRef.current.rotation.x;

    const posArr = pointsRef.current.geometry.attributes.position.array;
    const disp = currentDisplacements.current;

    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const ix = initialPositions[idx];
      const iy = initialPositions[idx + 1];
      const iz = initialPositions[idx + 2];

      const jx = Math.sin(time * 1.5 + i) * 0.015;
      const jy = Math.cos(time * 1.5 + i) * 0.015;
      const jz = Math.sin(time * 1.2 + i * 0.5) * 0.015;

      const px = ix + jx;
      const py = iy + jy;
      const pz = iz + jz;

      const x1 = px * cosY + pz * sinY;
      const z1 = -px * sinY + pz * cosY;
      const y1 = py * cosX - z1 * sinX;

      const dx = x1 - mouseX;
      const dy = y1 - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const radiusThreshold = 1.5;
      let targetDispX = 0;
      let targetDispY = 0;
      let targetDispZ = 0;

      if (dist < radiusThreshold && dist > 0.001) {
        const force = Math.pow((radiusThreshold - dist) / radiusThreshold, 1.5);
        const angle = Math.atan2(dy, dx);
        targetDispX = Math.cos(angle) * force * 0.85 + (Math.sin(time * 4 + i) * 0.1 * force);
        targetDispY = Math.sin(angle) * force * 0.85 + (Math.cos(time * 4 + i) * 0.1 * force);
        targetDispZ = force * 0.75;
      }

      const lerpFactor = Math.min(delta * 6.0, 0.25);
      disp[idx] += (targetDispX - disp[idx]) * lerpFactor;
      disp[idx + 1] += (targetDispY - disp[idx + 1]) * lerpFactor;
      disp[idx + 2] += (targetDispZ - disp[idx + 2]) * lerpFactor;

      posArr[idx] = px + disp[idx];
      posArr[idx + 1] = py + disp[idx + 1];
      posArr[idx + 2] = pz + disp[idx + 2];
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group position={[0, 0.45, 0]}>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.038}
          color="#7B61FF"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Stat counter component
function HeroStat({ number, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [count, setCount] = useState(0);

  const isSlash = number.includes('/');
  const target = isSlash ? 24 : parseInt(number.replace(/\D/g, ''), 10);
  const suffix = isSlash ? '/7' : number.includes('+') ? '+' : number.includes('%') ? '%' : '';

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const stepTime = 25;
    const increment = Math.max(1, Math.floor(target / (duration / stepTime)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight flex items-center">
        <span>{count}</span>
        <span className="text-[#7B61FF]">{suffix}</span>
      </div>
      <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 sm:mt-1">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 overflow-hidden select-none">
      {/* 3D INTERACTIVE PARTICLE CANVAS IN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <CanvasErrorBoundary>
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <ParticleSphere />
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* HERO CENTERED HEADLINE */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-6 sm:pt-12 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-heading pointer-events-auto"
        >
          Powering the <br />
          <span className="italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B61FF] via-[#5D5FEF] to-[#FF6B00]">
            Digital Backbone
          </span> <br className="hidden sm:inline" />
          of Utilities & Telecom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed pointer-events-auto"
        >
          Inovaantage empowers global utility grids, telecommunication networks, and enterprise providers with mission-critical software, IoT telemetry, and high-availability cloud platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex justify-center pointer-events-auto"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#7B61FF] via-[#5D5FEF] to-[#FF6B00] text-black font-extrabold text-sm sm:text-base shadow-xl shadow-[#7B61FF]/30 hover:shadow-[#7B61FF]/50 hover:scale-[1.03] transition-all duration-300 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM STATS BAR POSITIONED SLIGHTLY HIGHER FOR ABOVE-THE-FOLD VISIBILITY */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 w-full mt-8 sm:mt-14 pb-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-5 px-3 sm:px-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
          <HeroStat number="60+" label="Projects Delivered" />
          <HeroStat number="100%" label="Client Satisfaction" />
          <HeroStat number="24/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
}
