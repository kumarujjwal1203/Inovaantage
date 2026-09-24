import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Cpu, Radio, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';


// 3D Digital GIS Earth Globe Particle Component (Dark Orange Palette)
function FocusedSphereGlobe3D() {
  const globeGroupRef = useRef();
  const orbitGroupRef = useRef();

  const radius = 1.8;

  // Procedural Canvas Dot Texture for smooth particle points
  const circleTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.4, 'rgba(255, 107, 0, 0.9)');
    gradient.addColorStop(0.8, 'rgba(255, 69, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }, []);

  // Generate Earth Continent Particles with Highlighting Dark Orange Colors
  const { pointsPos, pointsColors } = useMemo(() => {
    const totalPoints = 4800;
    const pos = [];
    const cols = [];

    const colorDarkOrange  = new THREE.Color('#FF4500'); // Continent Landmass Highlight
    const colorBrandOrange = new THREE.Color('#FF6B00'); // Signature Safety Orange
    const colorWarmOrange  = new THREE.Color('#FF9900'); // Ocean Grid Accent

    // Latitude & Longitude Continent Landmass Sampler
    const isLand = (lat, lon) => {
      // North America
      if (lat > 12 && lat < 72 && lon > -168 && lon < -52) return true;
      // South America
      if (lat > -56 && lat < 14 && lon > -82 && lon < -34) return true;
      // Europe
      if (lat > 36 && lat < 72 && lon > -12 && lon < 45) return true;
      // Africa
      if (lat > -35 && lat < 37 && lon > -18 && lon < 52) return true;
      // Asia
      if (lat > 5 && lat < 75 && lon > 45 && lon < 180) return true;
      // Australia & NZ
      if (lat > -48 && lat < -10 && lon > 110 && lon < 178) return true;
      // Antarctica
      if (lat < -65) return true;
      return false;
    };

    let count = 0;
    while (count < totalPoints) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI; // Longitude 0..2PI
      const phi = Math.acos(2.0 * v - 1.0); // Latitude 0..PI

      const latDeg = 90 - (phi * 180) / Math.PI;
      const lonDeg = (theta * 180) / Math.PI - 180;

      const isLandPoint = isLand(latDeg, lonDeg);
      
      // High density for continents, subtle ocean grid for planet shape
      if (isLandPoint || Math.random() < 0.12) {
        const r = radius + (isLandPoint ? 0.02 : 0) + (Math.random() - 0.5) * 0.035;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        pos.push(x, y, z);

        let pColor = new THREE.Color();
        if (isLandPoint) {
          pColor.copy(Math.random() > 0.35 ? colorDarkOrange : colorBrandOrange);
        } else {
          pColor.copy(colorWarmOrange);
        }

        cols.push(pColor.r, pColor.g, pColor.b);
        count++;
      }
    }

    return {
      pointsPos: new Float32Array(pos),
      pointsColors: new Float32Array(cols)
    };
  }, [radius]);

  // Generate Latitude & Longitude Wireframe Grid Rings for GIS Earth Globe
  const gridRings = useMemo(() => {
    const rings = [];

    // Latitude rings
    const lats = [-60, -30, 0, 30, 60];
    lats.forEach((latDeg) => {
      const phi = ((90 - latDeg) * Math.PI) / 180;
      const ringRadius = radius * Math.sin(phi);
      const y = radius * Math.cos(phi);
      const points = [];
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(ringRadius * Math.cos(theta), y, ringRadius * Math.sin(theta)));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      rings.push(geom);
    });

    // Longitude meridian rings
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI;
      const points = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI * 2;
        const x = radius * Math.cos(theta) * Math.cos(angle);
        const y = radius * Math.sin(theta);
        const z = radius * Math.cos(theta) * Math.sin(angle);
        points.push(new THREE.Vector3(x, y, z));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      rings.push(geom);
    }

    return rings;
  }, [radius]);

  // Frame Animation: Rotate Earth Globe smoothly & tilt 23.5°
  useFrame((state) => {
    if (!globeGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Smooth Earth axial rotation & mouse parallax
    globeGroupRef.current.rotation.y = t * 0.15 + pointer.x * 0.25;
    globeGroupRef.current.rotation.x = 0.25 + Math.sin(t * 0.05) * 0.08 - pointer.y * 0.15;

    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y = -t * 0.35;
      orbitGroupRef.current.rotation.z = Math.sin(t * 0.2) * 0.18;
    }
  });

  return (
    <group ref={globeGroupRef} position={[0, 0, 0]}>
      {/* 1. Earth Continent & Ocean Grid Particle Cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPos, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[pointsColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.052}
          map={circleTexture}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* 2. Latitude & Longitude Wireframe Lines */}
      {gridRings.map((geom, idx) => (
        <line key={idx} geometry={geom}>
          <lineBasicMaterial color="#FF6B00" transparent opacity={0.3} />
        </line>
      ))}

      {/* 3. Orbiting GIS Telemetry Satellite Ring */}
      <group ref={orbitGroupRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[radius * 1.35, 0.008, 16, 100]} />
          <meshBasicMaterial color="#FF8800" transparent opacity={0.65} />
        </mesh>
        <mesh position={[radius * 1.35, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#FF4500" />
        </mesh>
      </group>
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
      <div className="text-xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight flex items-center">
        <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] bg-clip-text text-transparent">{count}</span>
        <span className="text-[#FF8800]">{suffix}</span>
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-slate-600 font-semibold mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

// Floating GIS Domain Chips positioned cleanly around the Earth Globe
const gisChips = [
  { icon: Layers, label: 'Esri Utility Network', pos: 'top-2 left-0', color: 'text-[#FF6B00] border-[#FF6B00]/30 bg-orange-50/95' },
  { icon: Radio, label: '5G Fiber GIS Telemetry', pos: 'top-8 right-0', color: 'text-slate-800 border-slate-300 bg-white/95' },
  { icon: Database, label: 'Spatial Data Migration', pos: 'bottom-10 left-2', color: 'text-slate-800 border-slate-300 bg-white/95' },
  { icon: Cpu, label: 'Sub-Second SCADA Grid', pos: 'bottom-2 right-2', color: 'text-[#FF6B00] border-[#FF6B00]/30 bg-orange-50/95' }
];

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden select-none bg-[#FAFAFD]">
      {/* GIS Spatial Technical Grid Background Overlay */}
      <div className="absolute inset-0 gis-grid-pattern opacity-25 pointer-events-none" />



      {/* Ambient soft background glows */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FF6B00]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FF8800]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean, Crisp Typography & Call to Action (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Animated Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider bg-orange-50 border border-[#FF6B00]/30 text-[#FF6B00] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping shrink-0" />
              <span>TRUSTED ACROSS 10+ COUNTRIES WORLDWIDE</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-heading"
            >
              Accelerating Your <br />
              <span className="italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#FF6B00] to-[#FF8800]">
                Digital Transformation
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              Inovaantage provides IT and geospatial solutions for utilities, telecom, and infrastructure sectors worldwide. Our deliverables in GIS, ADMS, SCADA, OSS/BSS, and workforce management support efficient operations.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white font-extrabold text-xs sm:text-base shadow-xl shadow-[#FF4500]/25 hover:shadow-[#FF4500]/40 hover:scale-[1.02] transition-all duration-300 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-base hover:border-[#FF6B00] hover:text-[#FF6B00] hover:bg-orange-50/50 shadow-xs hover:scale-[1.02] transition-all duration-300"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Dedicated 3D Digital GIS Earth Globe Particle Canvas (5 cols) */}
          <div className="lg:col-span-5 relative h-[280px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 0, 4.6], fov: 48 }}>
                <ambientLight intensity={0.8} />
                <FocusedSphereGlobe3D />
              </Canvas>
            </CanvasErrorBoundary>

            {/* Clean floating GIS badges around Earth Globe */}
            {gisChips.map((chip, idx) => {
              const IconComponent = chip.icon;
              return (
                <motion.div
                  key={chip.label}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4.5 + idx, ease: 'easeInOut', repeat: Infinity, delay: idx * 0.4 }}
                  className={`absolute ${chip.pos} z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] sm:text-[11px] font-mono font-bold shadow-md backdrop-blur-md pointer-events-none ${chip.color}`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{chip.label}</span>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* FLOATING GLASSMORPHISM STATS BAR */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/80">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 py-4 sm:py-6 px-3 sm:px-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl"
          >
            <HeroStat number="10+" label="Countries" />
            <HeroStat number="100%" label="Migration Accuracy" />
            <HeroStat number="24/7" label="Global Support" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
