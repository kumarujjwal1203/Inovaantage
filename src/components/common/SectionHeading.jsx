import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  title,
  gradientTitle,
  description,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30 mb-4 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
      >
        {title}{' '}
        {gradientTitle && (
          <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-500 bg-clip-text text-transparent block sm:inline">{gradientTitle}</span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
