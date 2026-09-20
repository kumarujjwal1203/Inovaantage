import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-cyan-electric via-cyan-glow to-violet-glow transition-all duration-150 ease-out shadow-sm shadow-cyan-electric/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
