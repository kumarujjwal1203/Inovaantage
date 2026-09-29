import React, { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateBar = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        if (totalHeight <= 0) {
          barRef.current.style.transform = 'scaleX(0)';
        } else {
          const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          barRef.current.style.transform = `scaleX(${progress})`;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateBar();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-white/5">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-electric via-cyan-glow to-violet-glow shadow-sm shadow-cyan-electric/50 transform-gpu will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export default React.memo(ScrollProgress);
