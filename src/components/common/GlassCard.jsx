import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={onClick}
      className={twMerge(
        clsx(
          'relative rounded-2xl p-6 md:p-8',
          'bg-white/95 backdrop-blur-xl border border-slate-200/90',
          'shadow-xl shadow-slate-900/5 text-slate-900',
          hoverEffect && 'transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/40 hover:shadow-2xl hover:shadow-orange-500/10',
          glow && 'glow-border',
          className
        )
      )}
      {...props}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rounded-t-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
