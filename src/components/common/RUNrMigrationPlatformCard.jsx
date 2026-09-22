import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function RUNrMigrationPlatformCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto py-6 select-none">
      {/* Floating Certification Badge 1: TOP RIGHT (ISO 27001 · Certified) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -15 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute -top-3 -right-2 z-30 pointer-events-auto"
      >
        <motion.div
          animate={{ y: [3, -3, 3], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
          className="glass-panel px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 shadow-lg flex items-center gap-2 -rotate-2 hover:rotate-0 transition-transform cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[11px] font-bold font-mono text-slate-800 tracking-wide">
            ISO 27001 · Certified
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Certification Badge 2: BOTTOM LEFT (GDPR Compliant · Data Protection) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -bottom-3 -left-2 z-30 pointer-events-auto"
      >
        <motion.div
          animate={{ y: [-3, 3, -3], rotate: [1.5, -1.5, 1.5] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
          className="glass-panel px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 shadow-lg flex items-center gap-2 rotate-2 hover:rotate-0 transition-transform cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span className="text-[11px] font-bold font-mono text-slate-800 tracking-wide">
            GDPR Compliant · Data Protection
          </span>
        </motion.div>
      </motion.div>

      {/* MAIN LIGHT FUTURISTIC GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        className="rounded-3xl p-6 sm:p-7 border border-slate-200/90 relative overflow-hidden bg-white shadow-2xl group"
      >
        {/* Background Radial Glow */}
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-[#FF6B00]/15 via-[#FF8800]/10 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        {/* HEADER: LOGO ICON + TITLE + SUBTITLE */}
        <div className="flex items-start gap-4 mb-6 relative z-10">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FF6B00] via-[#FF8800] to-[#E65C00] p-0.5 shadow-lg shadow-[#FF6B00]/30 shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#FF6B00] rounded-[14px] flex items-center justify-center text-white">
              <Zap className="w-7 h-7 fill-white text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 tracking-tight flex items-center gap-2">
              <span>rUNr® Migration Platform</span>
            </h3>
            <p className="text-xs font-mono font-bold text-[#FF6B00] mt-1">
              ESRI Utility Network Migration
            </p>
          </div>
        </div>

        {/* METRIC TILES: ACCURACY & TIME SAVED */}
        <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
          {/* Tile 1: Accuracy */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 backdrop-blur-md hover:border-[#FF6B00]/40 transition-all group/tile">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider">Accuracy</span>
              {/* Upward Line Chart SVG */}
              <svg className="w-10 h-5 overflow-visible" viewBox="0 0 40 20" fill="none">
                <motion.path
                  d="M 2 18 L 12 12 L 20 14 L 30 5 L 38 2"
                  stroke="url(#accGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />
                <circle cx="38" cy="2" r="2.5" fill="#FF6B00" />
                <defs>
                  <linearGradient id="accGrad" x1="0" y1="0" x2="40" y2="0">
                    <stop stopColor="#FF6B00" />
                    <stop offset="1" stopColor="#FF8800" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF6B00]">
              99.99%
            </div>
            <p className="text-[10px] font-mono text-slate-500 mt-1">
              Validated across GIS datasets
            </p>
          </div>

          {/* Tile 2: Time Saved */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 backdrop-blur-md hover:border-[#FF6B00]/40 transition-all group/tile">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold text-slate-600 uppercase tracking-wider">Time Saved</span>
              {/* Animated Growing Bar Chart */}
              <div className="flex items-end gap-1 h-5">
                {[30, 50, 70, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-t bg-gradient-to-t from-[#FF6B00] to-[#FF8800]"
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${h}%` } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  />
                ))}
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF6B00]">
              70–90%
            </div>
            <p className="text-[10px] font-mono text-slate-500 mt-1">
              vs manual network migration
            </p>
          </div>
        </div>

        {/* 3 PROGRESS BARS WITH LIGHT SHIMMER */}
        <div className="space-y-3.5 relative z-10 pt-2 border-t border-slate-200">
          {/* Bar 1 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-700 font-semibold">Data Integrity</span>
              <span className="font-mono font-bold text-[#FF6B00]">98%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-150 bg-slate-200/80 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] rounded-full relative"
                initial={{ width: 0 }}
                animate={inView ? { width: '98%' } : {}}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bar 2 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-700 font-semibold">Migration Automation</span>
              <span className="font-mono font-bold text-[#FF6B00]">95%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200/80 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] rounded-full relative"
                initial={{ width: 0 }}
                animate={inView ? { width: '95%' } : {}}
                transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Bar 3 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-700 font-semibold">Zero Downtime</span>
              <span className="font-mono font-bold text-[#FF6B00]">100%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200/80 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] rounded-full relative"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
