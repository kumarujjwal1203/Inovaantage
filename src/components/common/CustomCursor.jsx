import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth Spring physics for fluid cursor lag effect
  const cursorX = useSpring(-100, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 30 });

  const ringX = useSpring(-100, { stiffness: 250, damping: 22 });
  const ringY = useSpring(-100, { stiffness: 250, damping: 22 });

  useEffect(() => {
    // Hide custom cursor on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX);
      cursorY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);

      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e) => {
      const target = e.target;
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

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

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
          borderColor: isHovered ? 'rgba(255, 107, 0, 0.8)' : 'rgba(0, 240, 255, 0.5)',
          backgroundColor: isHovered ? 'rgba(255, 107, 0, 0.08)' : 'rgba(0, 240, 255, 0.03)',
        }}
        transition={{ scale: { type: 'spring', stiffness: 400, damping: 25 } }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-cyan-electric/50 backdrop-blur-[1px] shadow-[0_0_15px_rgba(0,240,255,0.2)]"
      />

      {/* Inner Precision Glow Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? '#FF6B00' : '#00F0FF',
          boxShadow: isHovered
            ? '0 0 12px 2px rgba(255, 107, 0, 0.9)'
            : '0 0 10px 2px rgba(0, 240, 255, 0.8)',
        }}
        transition={{ scale: { type: 'spring', stiffness: 600, damping: 20 } }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
      />
    </div>
  );
}

export default CustomCursor;
