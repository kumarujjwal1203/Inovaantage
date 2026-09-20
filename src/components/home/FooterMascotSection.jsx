import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Zap, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { Logo } from '../common/Logo';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';

// 3D Floating Wireframe Mascot Object
function FloatingMascot3D() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const particlesRef = useRef();

  const count = 400;
  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0 + Math.random() * 0.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geom;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.4;
      coreRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      coreRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.6;
      ring1Ref.current.rotation.y = t * 0.3;
      ring1Ref.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.5;
      ring2Ref.current.rotation.z = -t * 0.4;
      ring2Ref.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#7B61FF" wireframe transparent opacity={0.8} />
      </mesh>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.7, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.6} />
      </mesh>

      <points ref={particlesRef} geometry={geometry}>
        <pointsMaterial size={0.03} color="#FF6B00" transparent opacity={0.6} />
      </points>
    </group>
  );
}

const driftingTags = [
  { label: 'GIS Utility Migration', color: 'border-cyan-electric/40 text-cyan-electric', pos: 'top-4 left-6' },
  { label: '5G Telemetry', color: 'border-[#FF6B00]/40 text-[#FF6B00]', pos: 'top-12 right-8' },
  { label: 'Private LLM RAG', color: 'border-purple-400/40 text-purple-400', pos: 'bottom-16 left-10' },
  { label: 'Zero-Downtime Cloud', color: 'border-emerald-400/40 text-emerald-400', pos: 'bottom-8 right-6' }
];

export function FooterMascotSection() {
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <footer className="relative bg-[#050507] pt-24 pb-12 border-t border-white/10 overflow-hidden text-slate-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-t from-[#7B61FF]/10 to-[#FF6B00]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 relative overflow-hidden mb-16 shadow-2xl bg-gradient-to-b from-white/[0.03] to-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                <Zap className="w-3.5 h-3.5" /> INNOVATE WITH INOVAANTAGE
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Architecting the <span className="italic font-extrabold text-gradient">Next-Gen Digital Infrastructure</span>.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with our global software team in Singapore, Australia, India, and the UK to transform your geospatial, cloud, and AI capabilities.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-heading text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#ff8533] hover:brightness-110 shadow-lg shadow-[#FF6B00]/25 transition-all"
                >
                  START A CONVERSATION
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[320px] flex items-center justify-center">
              <CanvasErrorBoundary>
                <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <FloatingMascot3D />
                </Canvas>
              </CanvasErrorBoundary>

              {driftingTags.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4 + i, ease: 'easeInOut', repeat: Infinity, delay: i * 0.5 }}
                  className={`absolute ${tag.pos} glass-panel px-3 py-1.5 rounded-full border ${tag.color} text-[11px] font-mono font-bold shadow-lg backdrop-blur-md pointer-events-none hidden sm:block`}
                >
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Inovaantage is a global software services and geospatial intelligence provider empowering utility networks, telecom operators, and enterprise SaaS companies with mission-critical applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/inovaantage/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/inovaantage"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter X"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-500 hover:border-rose-500/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services" className="hover:text-cyan-electric transition-colors">Managed Services</Link></li>
              <li><Link to="/services" className="hover:text-cyan-electric transition-colors">Geospatial (GIS) Services</Link></li>
              <li><Link to="/services" className="hover:text-cyan-electric transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-electric transition-colors">CRM & Enterprise Systems</Link></li>
              <li><Link to="/services" className="hover:text-cyan-electric transition-colors">Healthcare Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/portfolio" className="hover:text-[#FF6B00] transition-colors">rUNr® Migration Engine</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FF6B00] transition-colors">5G Fiber Telemetry</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FF6B00] transition-colors">Enterprise AI Knowledge Hub</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FF6B00] transition-colors">Smart Grid Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-mono">
              <li>
                <a href="mailto:info@inovaantage.com" className="flex items-center gap-2 hover:text-[#FF6B00] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#FF6B00]" /> info@inovaantage.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-electric" /> +1 720 263 9280
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /> Singapore • Australia • India • UK • USA
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Inovaantage. All rights reserved. Built with precision for global infrastructure.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#FF6B00]/50 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
