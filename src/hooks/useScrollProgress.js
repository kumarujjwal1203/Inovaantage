import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastProgress = -1;

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        if (lastProgress !== 0) {
          lastProgress = 0;
          setScrollProgress(0);
        }
        ticking = false;
        return;
      }
      
      const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      // Only update state if change is greater than 0.2% to prevent micro-renders
      if (Math.abs(currentProgress - lastProgress) > 0.2) {
        lastProgress = currentProgress;
        setScrollProgress(currentProgress);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}
