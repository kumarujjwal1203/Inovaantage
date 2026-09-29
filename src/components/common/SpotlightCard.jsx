import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 107, 0, 0.1)',
  borderColor = '#E2E8F0',
  hoverBorderColor = '#FF6B00',
  enableTilt = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const springConfig = { stiffness: 400, damping: 25 };
  const dx = useSpring(rotateX, springConfig);
  const dy = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotY = ((x - centerX) / centerX) * 5; // max 5deg tilt
      const rotX = -((y - centerY) / centerY) * 5; // max 5deg tilt
      setRotateX(rotX);
      setRotateY(rotY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative group perspective-1000">
      
      {/* 3D LAYER 1: BACK STACK LAYER CARD (APPEARS ON HOVER FOR DEPTH) */}
      {!shouldReduceMotion && (
        <div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B00]/15 via-orange-100/50 to-amber-100/30 border border-[#FF6B00]/30 transform translate-x-2.5 translate-y-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        />
      )}

      {/* 3D LAYER 2: SECONDARY OFFSET BACK STACK */}
      {!shouldReduceMotion && (
        <div 
          className="absolute inset-0 rounded-3xl bg-white/80 border border-slate-200 transform translate-x-1 translate-y-1 opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none"
        />
      )}

      {/* MAIN 3D TILT FOREGROUND CARD */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d'
        }}
        whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`relative rounded-3xl bg-white border border-slate-200 shadow-xl group-hover:shadow-[0_25px_60px_-15px_rgba(255,107,0,0.18)] transition-all duration-300 overflow-hidden ${className}`}
      >
        {/* Top Hover Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Interactive Cursor Spotlight Radial Glow */}
        {isHovered && !shouldReduceMotion && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 40%)`
            }}
          />
        )}

        {/* Ambient Corner Glow */}
        <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-radial from-[#FF6B00]/12 via-orange-50/20 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
