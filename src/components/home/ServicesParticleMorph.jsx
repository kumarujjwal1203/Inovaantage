import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Network, Database, Activity, Radio, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';
import { UtilityNetworkWatermark, TopoContourWatermark } from '../common/GisUtilityBackgroundWatermarks';

const capabilitiesCardsData = [
  {
    num: '01',
    title: 'GIS Utility Network Migration',
    desc: "End-to-end migration of legacy utility networks into ESRI's Utility Network model — powered by our proprietary rUNr® engine for zero data loss.",
    icon: Network,
    shapeIndex: 0,
    badgeText: 'GIS'
  },
  {
    num: '02',
    title: 'Geospatial Data Management',
    desc: 'Enterprise-scale GIS data lakes, spatial data enrichment, and governance frameworks built for utility and telecom operators.',
    icon: Database,
    shapeIndex: 1,
    badgeText: 'GEOSPATIAL'
  },
  {
    num: '03',
    title: 'SCADA & ADMS Integration',
    desc: 'Real-time integration between GIS, SCADA, and Advanced Distribution Management Systems for unified grid visibility.',
    icon: Activity,
    shapeIndex: 2,
    badgeText: 'SCADA'
  },
  {
    num: '04',
    title: 'Telecom Network Data Migration',
    desc: 'Fiber optic GIS mapping, 5G network inventory pipelines, and large-scale telecom data migration with full traceability.',
    icon: Radio,
    shapeIndex: 3,
    badgeText: 'TELECOM'
  }
];

// Generate 3D volumetric text particle coordinates with ultra-sharp HD letter resolution & precise centering
function generateTextParticlePositions(text, count = 3600) {
  if (typeof document === 'undefined') return new Float32Array(count * 3);

  const canvas = document.createElement('canvas');
  canvas.width = 960;
  canvas.height = 360;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#FFFFFF';

  // Tailored canvas font size based on text length to keep letter strokes razor-sharp and perfectly proportioned
  let fontSize = 135;
  if (text.length >= 10) {
    fontSize = 66;  // GEOSPATIAL: crisp thin stroke profile
  } else if (text.length >= 7) {
    fontSize = 86;  // TELECOM
  } else if (text.length >= 5) {
    fontSize = 106; // SCADA
  }

  ctx.font = `900 ${fontSize}px "Plus Jakarta Sans", "Inter", "Arial Black", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  let minX = canvas.width, maxX = 0, minY = canvas.height, maxY = 0;
  const validPixels = [];

  const step = 2;
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const idx = (y * canvas.width + x) * 4;
      if (data[idx] > 140) { // Sharp threshold to isolate stroke pixels
        validPixels.push({ x, y });
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const positions = new Float32Array(count * 3);
  const numValid = validPixels.length;

  if (numValid > 0) {
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    // Precise world scale factor for HD clarity and zero blur/smear
    const worldScale = 0.0068;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const pixel = validPixels[i % numValid];
      // Micro-jitter keeps strokes crystal clear while maintaining 3D volumetric feel
      positions[idx]     = (pixel.x - centerX) * worldScale + (Math.random() - 0.5) * 0.012;
      positions[idx + 1] = -(pixel.y - centerY) * worldScale + (Math.random() - 0.5) * 0.012;
      positions[idx + 2] = (Math.random() - 0.5) * 0.20;
    }
  } else {
    // Fallback torus field
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const rad = 1.8 + Math.random() * 0.4;
      positions[idx]     = rad * Math.cos(angle);
      positions[idx + 1] = rad * Math.sin(angle);
      positions[idx + 2] = (Math.random() - 0.5) * 0.5;
    }
  }

  return positions;
}

// 3D Particle Cloud component with particle morphing to 3D Volumetric typography
function MorphingParticleCloud({ activeShape }) {
  const pointsRef = useRef();
  const count = 3600;

  // Generate target shapes dynamically for cards (GIS, GEOSPATIAL, SCADA, TELECOM)
  const shapes = useMemo(() => {
    const gisPositions        = generateTextParticlePositions('GIS', count);
    const geospatialPositions = generateTextParticlePositions('GEOSPATIAL', count);
    const scadaPositions      = generateTextParticlePositions('SCADA', count);
    const telecomPositions    = generateTextParticlePositions('TELECOM', count);

    return [gisPositions, geospatialPositions, scadaPositions, telecomPositions];
  }, [count]);

  // Buffer Geometry setup
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const initPos = new Float32Array(shapes[0]);
    geom.setAttribute('position', new THREE.BufferAttribute(initPos, 3));
    return geom;
  }, [shapes]);

  // Soft glowing particle sprite texture
  const dotTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(0.35, 'rgba(255, 120, 0, 0.9)');
    gradient.addColorStop(0.7, 'rgba(255, 107, 0, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 107, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  }, []);

  // Frame animation & position LERP
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const targetIndex = activeShape !== null ? activeShape % shapes.length : 0;
    const targetArr = shapes[targetIndex];
    const posArr = pointsRef.current.geometry.attributes.position.array;

    const lerpSpeed = Math.min(delta * 6.5, 0.3);
    for (let i = 0; i < count * 3; i++) {
      posArr[i] += (targetArr[i] - posArr[i]) * lerpSpeed;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Smooth floating movement with gentle rotation
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.x = 0;
    pointsRef.current.rotation.y = Math.sin(t * 0.7) * 0.08; // Subtle horizontal sway
    pointsRef.current.position.y = Math.sin(t * 1.2) * 0.04; // Gentle vertical float
  });

  const getParticleColor = () => {
    switch (activeShape) {
      case 0: return "#FF6B00"; // Signature Electric Orange for GIS
      case 1: return "#FF5500"; // Deep Vivid Orange
      case 2: return "#FF8800"; // Warm Amber Orange
      case 3: return "#FF4500"; // Bright Red-Orange
      default: return "#FF6B00";
    }
  };

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.042}
        color={getParticleColor()}
        transparent
        opacity={0.92}
        map={dotTexture}
        blending={THREE.NormalBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export function ServicesParticleMorph() {
  const [selectedShape, setSelectedShape] = useState(null);
  const [hoveredShape, setHoveredShape] = useState(null);

  const activeShape = hoveredShape !== null ? hoveredShape : (selectedShape !== null ? selectedShape : 0);
  const currentCardData = capabilitiesCardsData[activeShape] || capabilitiesCardsData[0];

  return (
    <section id="services" className="relative py-28 bg-[#FAFAFD] border-t border-slate-200 select-none overflow-hidden">
      {/* GIS & Utility Network Background Watermarks */}
      <UtilityNetworkWatermark position="bottom-left" className="opacity-20" />
      <TopoContourWatermark position="top-right" className="opacity-15" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF8800]/10 blur-[150px] pointer-events-none" opacity="0.6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: STICKY 3D PARTICLE MORPH CANVAS WITH ANIMATED GIS TEXT BADGE */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 h-[320px] sm:h-[460px] lg:h-[530px] relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl flex flex-col justify-between p-6">
            
            {/* Top Interactive Animated Mode Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono uppercase bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00] animate-pulse" />
                <span>3D HOLOGRAM CANVAS</span>
              </div>

              {/* Dynamic Animated Badge Pill showing GIS / GEOSPATIAL / SCADA / TELECOM */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCardData.badgeText}
                  initial={{ opacity: 0, scale: 0.85, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#FF4500] to-[#FF6B00] text-white shadow-md flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>3D {currentCardData.badgeText} MORPH ACTIVE</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3D Particle Canvas */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <CanvasErrorBoundary>
                <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
                  <ambientLight intensity={0.8} />
                  <MorphingParticleCloud activeShape={activeShape} />
                </Canvas>
              </CanvasErrorBoundary>
            </div>

            {/* Bottom Hint Footer */}
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono font-bold text-slate-600 bg-slate-100/90 border border-slate-200/90 shadow-xs">
                HOVER CARDS TO MORPH 3D PARTICLES INTO <strong className="text-[#FF6B00]">GIS, GEOSPATIAL, SCADA & TELECOM</strong>
              </span>
            </div>
          </div>

          {/* RIGHT: NUMBERED CARD LIST WITH CONNECTING VERTICAL LINE */}
          <div className="lg:col-span-6 space-y-4 relative">
            {/* Header Block */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
                Signature Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
                Architected For <span className="text-gradient">Impact</span>
              </h2>
            </div>

            {/* Connecting Vertical Line behind numbers */}
            <div className="absolute left-[37px] top-[140px] bottom-[30px] w-0.5 bg-gradient-to-b from-[#FF6B00]/40 via-[#FF8800]/30 to-[#E65C00]/40 pointer-events-none hidden sm:block" />

            {/* Staggered Cards List */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              className="space-y-4"
            >
              {capabilitiesCardsData.map((card) => {
                const IconComp = card.icon;
                const isSelected = selectedShape === card.shapeIndex;
                const isHovered = hoveredShape === card.shapeIndex;
                const isCardHighlight = isSelected || isHovered;

                return (
                  <motion.div
                    key={card.num}
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
                    }}
                    onClick={() => setSelectedShape(card.shapeIndex)}
                    onMouseEnter={() => setHoveredShape(card.shapeIndex)}
                    onMouseLeave={() => setHoveredShape(null)}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className={`group relative p-4 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isCardHighlight
                        ? 'bg-orange-50/70 border-[#FF6B00] shadow-xl shadow-[#FF6B00]/15'
                        : 'bg-white border-slate-200 hover:border-[#FF6B00]/40 hover:bg-slate-50/50 shadow-sm'
                    }`}
                  >
                    {/* Slow pulsing glow on highlighted card border */}
                    {isCardHighlight && (
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 rounded-2xl border-2 border-[#FF6B00]/60 pointer-events-none shadow-inner"
                      />
                    )}

                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`text-xs sm:text-sm font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                            isCardHighlight
                              ? 'bg-[#FF6B00] text-white border border-[#FF6B00]'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}>
                            {card.num}
                          </span>

                          {/* Floating active dot indicator when card is hovered or selected */}
                          {isCardHighlight && (
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B00]" />
                            </span>
                          )}
                        </div>

                        {/* Title & Icon & Description */}
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold font-heading transition-colors flex items-center gap-2.5 ${
                            isCardHighlight ? 'text-[#FF6B00]' : 'text-slate-900 group-hover:text-[#FF6B00]'
                          }`}>
                            <span>{card.title}</span>
                            <IconComp className={`w-4 h-4 inline-block transition-colors ${
                              isCardHighlight ? 'text-[#FF6B00]' : 'text-slate-500 group-hover:text-[#FF6B00]'
                            }`} />
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                            {card.desc}
                          </p>
                        </div>
                      </div>

                      {/* Small circular arrow-icon button on the right */}
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isCardHighlight
                          ? 'bg-[#FF6B00] border-[#FF6B00] text-white scale-110 rotate-45'
                          : 'bg-slate-100 border-slate-200 text-slate-600 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] group-hover:rotate-45 group-hover:scale-110'
                      }`}>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
