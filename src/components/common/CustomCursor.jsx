import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const visibleRef = useRef(false);

  // Smooth Spring physics for fluid cursor lag effect
  const cursorX = useSpring(-100, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 450, damping: 28 });

  const ringX = useSpring(-100, { stiffness: 220, damping: 20 });
  const ringY = useSpring(-100, { stiffness: 220, damping: 20 });

  useEffect(() => {
    // Hide custom cursor on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let rAfId = null;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (rAfId) cancelAnimationFrame(rAfId);

      rAfId = requestAnimationFrame(() => {
        cursorX.set(clientX);
        cursorY.set(clientY);
        ringX.set(clientX);
        ringY.set(clientY);

        if (!visibleRef.current) {
          visibleRef.current = true;
          setIsVisible(true);
        }
      });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };
    const onMouseEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('mouseenter', onMouseEnter, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      if (rAfId) cancelAnimationFrame(rAfId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Motion Spring Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(255, 69, 0, 0.95)' : 'rgba(255, 107, 0, 0.65)',
          backgroundColor: isHovered ? 'rgba(255, 69, 0, 0.12)' : 'rgba(255, 107, 0, 0.04)',
        }}
        transition={{ scale: { type: 'spring', stiffness: 400, damping: 25 } }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[#FF6B00]/60 backdrop-blur-[1px] shadow-[0_0_15px_rgba(255,107,0,0.3)] transform-gpu will-change-transform"
      />

      {/* Inner Precision Glow Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#FF4500' : '#FF6B00',
          boxShadow: isHovered
            ? '0 0 14px 3px rgba(255, 69, 0, 0.95)'
            : '0 0 10px 2px rgba(255, 107, 0, 0.85)',
        }}
        transition={{ scale: { type: 'spring', stiffness: 400, damping: 25 } }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10 pointer-events-none transform-gpu will-change-transform"
      />
    </div>
  );
}

export default React.memo(CustomCursor);
