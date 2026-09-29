import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SubsurfaceVisual({ className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full aspect-[4/3] max-w-xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl overflow-hidden select-none ${className}`}>
      
      {/* Background Subsurface Grid & Topo Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 gis-grid-pattern opacity-30 pointer-events-none" />

      {/* Header HUD Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 relative z-10 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase">SPATIAL SUBSURFACE ENGINE</span>
        </div>
        <span className="text-slate-500 font-medium">E&P WORKFLOW LAYER v4.2</span>
      </div>

      {/* Main SVG Subsurface Composition */}
      <div className="relative w-full h-full flex flex-col justify-between">
        <svg 
          viewBox="0 0 600 400" 
          className="w-full h-full text-slate-700" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. TOPOGRAPHIC CONTOUR LINES (SURFACE ELEVATION) */}
          <g opacity="0.65" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 4">
            <path d="M 40 50 Q 150 20 300 60 T 560 40" />
            <path d="M 40 80 Q 200 40 380 90 T 560 70" />
            <path d="M 40 110 Q 180 70 340 115 T 560 95" />
          </g>

          {/* 2. SEISMIC WAVEFORM SHUTTLE (EXPLORATION FREQUENCY) */}
          <motion.path
            d="M 40 160 L 120 160 L 140 130 L 160 190 L 180 140 L 200 170 L 220 160 L 320 160 L 340 120 L 360 200 L 380 150 L 400 160 L 560 160"
            stroke="#FF6B00"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={shouldReduceMotion ? { pathLength: 1 } : { pathLength: [0, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          {/* 3. GEOLOGICAL STRATA LAYERS (SUBSURFACE FORMATION) */}
          <g stroke="#64748B" strokeWidth="1.5" opacity="0.75">
            <path d="M 40 220 C 180 200 320 250 560 210" />
            <path d="M 40 270 C 220 240 380 290 560 260" stroke="#94A3B8" strokeDasharray="6 4" />
            <path d="M 40 320 C 160 300 360 340 560 310" stroke="#FF6B00" strokeWidth="2" opacity="0.9" />
          </g>

          {/* 4. SPATIAL NETWORK WELLS & CONNECTOR PIPELINES */}
          {/* Well A (Offshore/Onshore Rig Axis) */}
          <line x1="160" y1="40" x2="160" y2="320" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" opacity="0.9" />
          <circle cx="160" cy="40" r="5" fill="#0284C7" />
          <circle cx="160" cy="160" r="4" fill="#FF6B00" />
          <circle cx="160" cy="320" r="6" fill="#0284C7" />

          {/* Well B (Secondary Well Trajectory) */}
          <line x1="360" y1="60" x2="360" y2="320" stroke="#FF6B00" strokeWidth="2" strokeDasharray="4 4" opacity="0.9" />
          <circle cx="360" cy="60" r="5" fill="#FF6B00" />
          <circle cx="360" cy="200" r="4" fill="#0284C7" />
          <circle cx="360" cy="320" r="6" fill="#FF6B00" />

          {/* Subsurface Reservoir Spatial Cluster Grid */}
          <g opacity="0.95">
            <path d="M 160 320 Q 260 350 360 320" stroke="#FF6B00" strokeWidth="2.5" fill="none" />
            <circle cx="210" cy="335" r="3.5" fill="#0284C7" />
            <circle cx="260" cy="340" r="4.5" fill="#FF6B00" />
            <circle cx="310" cy="335" r="3.5" fill="#0284C7" />
          </g>

          {/* Spatial Coordinates Markers */}
          <text x="172" y="45" fill="#0284C7" fontSize="10" fontFamily="monospace" fontWeight="bold">WELLHEAD A-01</text>
          <text x="372" y="65" fill="#FF6B00" fontSize="10" fontFamily="monospace" fontWeight="bold">WELLHEAD B-04</text>
          <text x="215" y="365" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="bold">RESERVOIR PAYZONE (SPATIAL DATA LAKE)</text>
        </svg>

        {/* Pulse Beacon Overlay */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-900 text-white shadow-lg flex items-center justify-between text-xs font-mono"
          >
            <span className="text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              E&P PIPELINE SYNCHRONIZATION:
            </span>
            <span className="text-emerald-400 font-bold">100% UNIFIED SPATIAL MODEL</span>
          </motion.div>
        )}
      </div>

    </div>
  );
}
