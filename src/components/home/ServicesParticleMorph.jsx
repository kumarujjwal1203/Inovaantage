import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowUpRight, Network, Database, Activity, Radio } from 'lucide-react';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';

const capabilitiesCardsData = [
  {
    num: '01',
    title: 'GIS Utility Network Migration',
    desc: "End-to-end migration of legacy utility networks into ESRI's Utility Network model — powered by our proprietary rUNr® engine for zero data loss.",
    icon: Network,
    shapeIndex: 0
  },
  {
    num: '02',
    title: 'Geospatial Data Management',
    desc: 'Enterprise-scale GIS data lakes, spatial data enrichment, and governance frameworks built for utility and telecom operators.',
    icon: Database,
    shapeIndex: 1
  },
  {
    num: '03',
    title: 'SCADA & ADMS Integration',
    desc: 'Real-time integration between GIS, SCADA, and Advanced Distribution Management Systems for unified grid visibility.',
    icon: Activity,
    shapeIndex: 2
  },
  {
    num: '04',
    title: 'Telecom Network Data Migration',
    desc: 'Fiber optic GIS mapping, 5G network inventory pipelines, and large-scale telecom data migration with full traceability.',
    icon: Radio,
    shapeIndex: 3
  }
];

// 3D Particle Morph Component supporting 4 distinct 3D geometry states
function MorphingParticleCloud({ activeShape }) {
  const pointsRef = useRef();
  const count = 3000;

  // Pre-generate target positions for 4 3D shapes
  const shapes = useMemo(() => {
    const sphere = new Float32Array(count * 3);
    const cube = new Float32Array(count * 3);
    const diamond = new Float32Array(count * 3);
    const ring = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // 1. Sphere Shape (GIS Utility Network)
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2;
      sphere[idx] = r * Math.sin(phi) * Math.cos(theta);
      sphere[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
      sphere[idx + 2] = r * Math.cos(phi);

      // 2. Cube Box Shape (Geospatial Data Lakes)
      cube[idx] = (Math.random() - 0.5) * 3.8;
      cube[idx + 1] = (Math.random() - 0.5) * 3.8;
      cube[idx + 2] = (Math.random() - 0.5) * 3.8;

      // 3. Diamond Star Shape (SCADA & ADMS Integration)
      const dRad = (Math.random() * 0.8 + 0.2) * 2.5;
      const dAng = (i % 4) * (Math.PI / 2) + Math.random() * 0.4;
      diamond[idx] = dRad * Math.cos(dAng);
      diamond[idx + 1] = (Math.random() - 0.5) * 3.5;
      diamond[idx + 2] = dRad * Math.sin(dAng);

      // 4. Torus Ring Shape (Telecom 5G Network)
      const ringAng = Math.random() * Math.PI * 2;
      const ringRad = 2.3 + (Math.random() - 0.5) * 0.4;
      ring[idx] = ringRad * Math.cos(ringAng);
      ring[idx + 1] = (Math.random() - 0.5) * 0.6;
      ring[idx + 2] = ringRad * Math.sin(ringAng);
    }

    return [sphere, cube, diamond, ring];
  }, [count]);

  // Create native THREE BufferGeometry
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const initPos = new Float32Array(shapes[0]);
    geom.setAttribute('position', new THREE.BufferAttribute(initPos, 3));
    return geom;
  }, [shapes]);

  // Frame Interpolation (lerp between active shape positions)
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const targetIndex = activeShape !== null ? activeShape % shapes.length : 0;
    const targetArr = shapes[targetIndex];
    const posArr = pointsRef.current.geometry.attributes.position.array;

    const lerpSpeed = Math.min(delta * 4.5, 0.22);
    for (let i = 0; i < count * 3; i++) {
      posArr[i] += (targetArr[i] - posArr[i]) * lerpSpeed;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.003;
  });

  const getParticleColor = () => {
    switch (activeShape) {
      case 0: return "#FF6B00"; // Signature accent orange for Card 01
      case 1: return "#00F0FF"; // Cyan electric
      case 2: return "#7B61FF"; // Electric purple
      case 3: return "#FF2E93"; // Vibrant pink/magenta
      default: return "#FF6B00";
    }
  };

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.038}
        color={getParticleColor()}
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export function ServicesParticleMorph() {
  const [selectedShape, setSelectedShape] = useState(null);
  const [hoveredShape, setHoveredShape] = useState(null);

  const activeShape = hoveredShape !== null ? hoveredShape : (selectedShape !== null ? selectedShape : 0);

  return (
    <section id="services" className="relative py-28 bg-[#050507] border-t border-white/10 select-none overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7B61FF]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: STICKY 3D PARTICLE MORPH CANVAS (Clean without overlay text) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 h-[400px] sm:h-[500px] relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
            <CanvasErrorBoundary>
              <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <MorphingParticleCloud activeShape={activeShape} />
              </Canvas>
            </CanvasErrorBoundary>
          </div>

          {/* RIGHT: NUMBERED CARD LIST WITH CONNECTING VERTICAL LINE */}
          <div className="lg:col-span-6 space-y-4 relative">
            {/* Header Block */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
                Signature Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                Architected For <span className="text-gradient">Impact</span>
              </h2>
            </div>

            {/* Connecting Vertical Line behind numbers */}
            <div className="absolute left-[37px] top-[140px] bottom-[30px] w-0.5 bg-gradient-to-b from-[#FF6B00]/40 via-cyan-electric/30 to-[#7B61FF]/40 pointer-events-none hidden sm:block" />

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
                    className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isCardHighlight
                        ? 'bg-gradient-to-r from-white/[0.05] to-black/80 border-[#FF6B00]/70 shadow-xl shadow-[#FF6B00]/25'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
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
                              ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40'
                              : 'bg-white/5 text-slate-400 border border-white/10'
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
                            isCardHighlight ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}>
                            <span>{card.title}</span>
                            <IconComp className={`w-4 h-4 inline-block transition-colors ${
                              isCardHighlight ? 'text-[#FF6B00]' : 'text-slate-400 group-hover:text-cyan-electric'
                            }`} />
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                            {card.desc}
                          </p>
                        </div>
                      </div>

                      {/* Small circular arrow-icon button on the right */}
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isCardHighlight
                          ? 'bg-[#FF6B00]/20 border-[#FF6B00]/50 text-[#FF6B00] scale-110 rotate-45'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:rotate-45 group-hover:scale-110'
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
