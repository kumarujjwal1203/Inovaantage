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
          'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]',
          'shadow-2xl shadow-black/40',
          hoverEffect && 'transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.05] hover:border-cyan-electric/30 hover:shadow-cyan-electric/10',
          glow && 'glow-border',
          className
        )
      )}
      {...props}
    >
      {/* Subtle top inner highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
}
