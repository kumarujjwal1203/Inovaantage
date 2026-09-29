import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({
  children,
  width = 'w-full',
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  blur = false,
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
          y: yOffset
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="transform-gpu will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default React.memo(Reveal);
