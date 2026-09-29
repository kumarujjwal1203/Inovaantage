import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({
  children,
  width = 'w-full',
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  blur = true,
  className = ''
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`${width} ${className}`}>{children}</div>;
  }

  return (
    <div className={`${width} ${className}`}>
      <motion.div
        initial={{
          opacity: 0,
          y: yOffset,
          filter: blur ? 'blur(6px)' : 'none'
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)'
        }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
