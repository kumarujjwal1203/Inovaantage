import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SubsurfaceVisual({ className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState('wellA');

  return (
    <div className={`relative w-full aspect-[4/3] max-w-xl mx-auto rounded-3xl bg-white border-2 border-[#FF6B00]/30 p-5 sm:p-7 shadow-2xl overflow-hidden select-none text-slate-900 ${className}`}>
      
      {/* Ambient Radial Orange/Sky Background Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 gis-grid-pattern opacity-40 pointer-events-none" />

      {/* SOFT SWEEPING ORANGE RADAR SCANNER */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: ['-100%', '350%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#FF6B00]/15 to-transparent pointer-events-none border-b border-[#FF6B00]/40 z-10"
        />
      )}

      {/* Header HUD Bar */}
      <div className="flex items-center justify-between bg-orange-50/80 p-3 rounded-2xl border border-[#FF6B00]/25 mb-4 relative z-20 font-mono text-xs shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[#FF6B00] font-extrabold tracking-wider uppercase">SPATIAL SUBSURFACE ENGINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-[10px] text-slate-700 font-bold shadow-xs">
            E&P LAYER v4.2
          </span>
        </div>
      </div>

      {/* Main SVG Subsurface Composition */}
      <div className="relative w-full h-[calc(100%-4rem)] flex flex-col justify-between pb-14">
        <svg 
          viewBox="0 0 600 320" 
          className="w-full h-full" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. TOPOGRAPHIC CONTOUR LINES (SURFACE ELEVATION - ROYAL CYAN) */}
          <g opacity="0.85" stroke="#0284C7" strokeWidth="2" strokeDasharray="5 5">
            <path d="M 40 40 Q 150 15 300 50 T 560 30" />
            <path d="M 40 65 Q 200 30 380 75 T 560 55" />
            <path d="M 40 90 Q 180 55 340 95 T 560 75" />
          </g>

          {/* 2. SEISMIC WAVEFORM SHUTTLE (EXPLORATION FREQUENCY - VIVID SAFETY ORANGE) */}
          <motion.path
            d="M 40 130 L 120 130 L 140 100 L 160 160 L 180 110 L 200 140 L 220 130 L 320 130 L 340 90 L 360 170 L 380 120 L 400 130 L 560 130"
            stroke="#FF6B00"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={shouldReduceMotion ? { pathLength: 1 } : { pathLength: [0, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          {/* 3. GEOLOGICAL STRATA LAYERS (SUBSURFACE FORMATION - DEEP SLATE) */}
          <g stroke="#334155" strokeWidth="2" opacity="0.85">
            <path d="M 40 180 C 180 160 320 210 560 170" />
            <path d="M 40 220 C 220 190 380 240 560 210" stroke="#475569" strokeDasharray="6 4" />
            <path d="M 40 260 C 160 240 360 280 560 250" stroke="#FF6B00" strokeWidth="2.5" opacity="0.95" />
          </g>

          {/* 4. SPATIAL NETWORK WELLS & CONNECTOR PIPELINES */}
          {/* Well A (Offshore/Onshore Rig Axis) */}
          <g className="cursor-pointer" onClick={() => setActiveNode('wellA')}>
            <line x1="160" y1="30" x2="160" y2="260" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="160" cy="30" r="7" fill="#0284C7" className="animate-pulse" />
            <circle cx="160" cy="130" r="4.5" fill="#FF6B00" />
            <circle cx="160" cy="260" r="8" fill="#0284C7" />
            <text x="172" y="35" fill="#0284C7" fontSize="12" fontFamily="monospace" fontWeight="900">WELLHEAD A-01 ⚡</text>
          </g>

          {/* Well B (Secondary Well Trajectory) */}
          <g className="cursor-pointer" onClick={() => setActiveNode('wellB')}>
            <line x1="380" y1="50" x2="380" y2="260" stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="4 4" />
            <circle cx="380" cy="50" r="7" fill="#FF6B00" className="animate-pulse" />
            <circle cx="380" cy="170" r="4.5" fill="#0284C7" />
            <circle cx="380" cy="260" r="8" fill="#FF6B00" />
            <text x="392" y="55" fill="#D95B00" fontSize="12" fontFamily="monospace" fontWeight="900">WELLHEAD B-04 ⚡</text>
          </g>

          {/* Subsurface Reservoir Spatial Cluster Grid */}
          <g opacity="1">
            <path d="M 160 260 Q 270 290 380 260" stroke="#FF6B00" strokeWidth="3.5" fill="none" />
            <circle cx="220" cy="272" r="5" fill="#0284C7" />
            <circle cx="270" cy="278" r="6" fill="#FF6B00" />
            <circle cx="320" cy="272" r="5" fill="#0284C7" />
          </g>

          {/* Reservoir Label */}
          <text x="180" y="305" fill="#0F172A" fontSize="12" fontFamily="monospace" fontWeight="900">
            RESERVOIR PAYZONE (SPATIAL DATA LAKE)
          </text>
        </svg>

        {/* Pulse Beacon Overlay Bar */}
        <div className="absolute bottom-1 left-2 right-2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 rounded-2xl bg-white border-2 border-[#FF6B00]/40 shadow-xl flex items-center justify-between text-xs font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-slate-700 font-bold">SYNCHRONIZATION:</span>
              <span className="text-emerald-700 font-extrabold">100% UNIFIED MODEL</span>
            </div>

            <span className="px-2.5 py-1 rounded-md bg-orange-50 border border-[#FF6B00]/30 text-[#FF6B00] font-extrabold text-[11px]">
              {activeNode === 'wellA' ? 'WELL A-01 ACTIVE' : 'WELL B-04 ACTIVE'}
            </span>
          </motion.div>
        </div>

      </div>

    </div>
  );
}
