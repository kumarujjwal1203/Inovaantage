import React, { useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 107, 0, 0.12)',
  borderColor = '#E2E8F0',
  hoverBorderColor = '#FF6B00',
  enableTilt = true,
  onClick
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Direct DOM CSS custom property mutation to eliminate React re-renders on mousemove
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotY = ((x - centerX) / centerX) * 4; // max 4deg tilt
      const rotX = -((y - centerY) / centerY) * 4;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
  }, [shouldReduceMotion, enableTilt]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (cardRef.current && enableTilt) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  }, [enableTilt]);

  return (
    <div className="relative group perspective-1000">
      
      {/* 3D BACK LAYER CARD FOR DEPTH */}
      {!shouldReduceMotion && (
        <div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B00]/15 via-orange-100/50 to-amber-100/30 border border-[#FF6B00]/30 transform translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform-gpu"
        />
      )}

      {/* MAIN 3D TILT FOREGROUND CARD */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={`relative rounded-3xl bg-white border border-slate-200 shadow-xl group-hover:shadow-[0_25px_60px_-15px_rgba(255,107,0,0.18)] transition-all duration-300 overflow-hidden transform-gpu will-change-transform ${className}`}
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%'
        }}
      >
        {/* Top Hover Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Interactive Cursor Spotlight Radial Glow */}
        {isHovered && !shouldReduceMotion && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(550px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`
            }}
          />
        )}

        {/* Ambient Corner Glow */}
        <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-radial from-[#FF6B00]/12 via-orange-50/20 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export default React.memo(SpotlightCard);
