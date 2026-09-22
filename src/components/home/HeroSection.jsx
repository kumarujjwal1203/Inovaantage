import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Globe, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';

// Convert Latitude & Longitude to 3D Sphere Vector3
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Global Office Locations
const globalLocations = [
  { name: 'Singapore (HQ)', lat: 1.3521, lng: 103.8198 },
  { name: 'Denver, USA', lat: 39.7392, lng: -104.9903 },
  { name: 'Hyderabad, India', lat: 17.3850, lng: 78.4867 },
  { name: 'Manchester, UK', lat: 53.4808, lng: -2.2426 },
  { name: 'Adelaide, Australia', lat: -34.9285, lng: 138.6007 }
];

// Hub Connections for 3D Data Flow Arcs
const networkConnections = [
  [0, 1], // Singapore <-> USA
  [0, 2], // Singapore <-> India
  [0, 4], // Singapore <-> Australia
  [2, 3], // India <-> UK
  [1, 3]  // USA <-> UK
];

// 3D Digital Earth Globe Canvas Component
function DigitalEarthGlobe3D() {
  const groupRef = useRef();
  const dotsRef = useRef();
  const packetsRef = useRef([]);

  const radius = 2.2;

  // 1. Generate Dotted World Surface & Latitude/Longitude Lines
  const { pointsPos, gridGeometries, locationPins, arcCurves } = useMemo(() => {
    // Surface Particles
    const count = 3600;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius + (Math.random() - 0.5) * 0.08;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    // Latitude & Longitude Wireframe Rings
    const grids = [];
    // Lat rings
    for (let lat = -75; lat <= 75; lat += 25) {
      const rRing = radius * Math.cos((lat * Math.PI) / 180);
      const yRing = radius * Math.sin((lat * Math.PI) / 180);
      const points = [];
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * 2 * Math.PI;
        points.push(new THREE.Vector3(rRing * Math.cos(theta), yRing, rRing * Math.sin(theta)));
      }
      grids.push(new THREE.BufferGeometry().setFromPoints(points));
    }

    // Location Pin Positions
    const pins = globalLocations.map((loc) => {
      const vec = latLngToVector3(loc.lat, loc.lng, radius);
      const outerVec = latLngToVector3(loc.lat, loc.lng, radius + 0.35);
      return { ...loc, position: vec, outerPosition: outerVec };
    });

    // Network Arcs (3D Quadratic Curves elevated above globe)
    const curves = networkConnections.map(([startIndex, endIndex]) => {
      const p1 = pins[startIndex].position;
      const p2 = pins[endIndex].position;
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(radius + distance * 0.35);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const points = curve.getPoints(50);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      return { curve, geom };
    });

    return {
      pointsPos: pos,
      gridGeometries: grids,
      locationPins: pins,
      arcCurves: curves
    };
  }, [radius]);

  // Frame Loop for Smooth Rotation, Pulsing Pins & Network Packets Movement
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth Auto Rotation + Inertial Mouse Parallax
    const targetRotY = time * 0.12 + pointer.x * 0.4;
    const targetRotX = Math.sin(time * 0.08) * 0.15 - pointer.y * 0.3;

    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.04;

    // Move Network Data Packet Particles along Curves
    packetsRef.current.forEach((mesh, idx) => {
      if (mesh && arcCurves[idx]) {
        const speed = 0.3 + (idx % 3) * 0.1;
        const progress = ((time * speed) + idx * 0.2) % 1;
        const point = arcCurves[idx].curve.getPoint(progress);
        mesh.position.copy(point);
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      {/* 1. Dotted Globe Particles */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPos, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          color="#FF6B00"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      {/* 2. Lat/Lng Grid Wireframe Rings */}
      {gridGeometries.map((geom, i) => (
        <line key={i} geometry={geom}>
          <lineBasicMaterial color="#FF8800" transparent opacity={0.18} />
        </line>
      ))}

      {/* 3. Global Location Pins (Glowing Nodes & Radar Beams) */}
      {locationPins.map((pin, i) => (
        <group key={pin.name} position={pin.position}>
          {/* Core Glowing Node */}
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#FF6B00" />
          </mesh>
          {/* Outer Pulse Ring */}
          <mesh>
            <ringGeometry args={[0.09, 0.13, 32]} />
            <meshBasicMaterial color="#FF8800" transparent opacity={0.6} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}

      {/* 4. Network Data Flow Arcs */}
      {arcCurves.map((arc, i) => (
        <group key={i}>
          {/* Curved Line Path */}
          <line geometry={arc.geom}>
            <lineBasicMaterial color="#FF8800" transparent opacity={0.35} />
          </line>
          {/* Data Packet Pulse Particle traveling on curve */}
          <mesh ref={(el) => (packetsRef.current[i] = el)}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Hero Stat Component with Smooth Intersection Counter
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
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight flex items-center">
        <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] bg-clip-text text-transparent">{count}</span>
        <span className="text-[#FF8800]">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden select-none bg-[#FAFAFD]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#FF6B00]/15 to-amber-300/10 blur-[160px] pointer-events-none" />

      {/* 3D DIGITAL EARTH GLOBE CANVAS IN BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-85">
        <CanvasErrorBoundary>
          <Canvas camera={{ position: [0, 0, 5.2], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <DigitalEarthGlobe3D />
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* HERO CENTERED HEADLINE & COPY */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-6 sm:pt-10 pointer-events-none">
        
        {/* Animated Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-orange-50/90 border border-[#FF6B00]/30 text-[#FF6B00] mb-6 shadow-xs pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span>🌍 TRUSTED ACROSS 10+ COUNTRIES WORLDWIDE</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-heading pointer-events-auto"
        >
          Accelerating Your <br />
          <span className="italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-500">
            Digital Transformation
          </span>
        </motion.h1>

        {/* Body Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed pointer-events-auto"
        >
          Inovaantage provides IT and geospatial solutions for utilities, telecom, and infrastructure sectors worldwide. Our deliverables in GIS, ADMS, SCADA, OSS/BSS, and workforce management support efficient operations.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 hover:scale-[1.03] transition-all duration-300 group"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[#FF6B00]/80 text-[#FF6B00] font-bold text-sm sm:text-base hover:bg-orange-50/80 shadow-md hover:scale-[1.02] transition-all duration-300"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* FLOATING GLASSMORPHISM STATS BAR */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-2 sm:gap-6 py-5 sm:py-6 px-4 sm:px-10 rounded-2xl sm:rounded-3xl bg-white/90 border border-slate-200/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10"
        >
          <HeroStat number="10+" label="Countries" />
          <HeroStat number="100%" label="Migration Accuracy" />
          <HeroStat number="24/7" label="Global Support" />
        </motion.div>
      </div>
    </section>
  );
}
