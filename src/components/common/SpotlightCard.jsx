import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 107, 0, 0.08)',
  borderColor = '#E2E8F0',
  hoverBorderColor = 'rgba(255, 107, 0, 0.5)',
  onClick
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      style={{
        borderColor: isHovered ? hoverBorderColor : borderColor
      }}
    >
      {/* Interactive Cursor Spotlight Radial Glow */}
      {isHovered && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 40%)`
          }}
        />
      )}

      {/* Subtle Corner Ambient Glow Accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-radial from-[#FF6B00]/10 to-transparent blur-2xl opacity-60" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
