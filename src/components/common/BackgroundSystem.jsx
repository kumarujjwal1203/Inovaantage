import React from 'react';

export function BackgroundSystem() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Aurora Ambient Glow 1 (Cyan) */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-electric/10 blur-[140px] animate-pulse-glow" />
      
      {/* Aurora Ambient Glow 2 (Purple) */}
      <div className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-violet-glow/15 blur-[150px] animate-pulse-glow" style={{ animationDelay: '3s' }} />

      {/* Aurora Ambient Glow 3 (Deep Bottom Blue) */}
      <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-cyan-glow/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '6s' }} />

      {/* Subtle Technological Mesh Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Light beam sweep effect */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-cyan-electric/[0.04] to-transparent animate-beam" />
    </div>
  );
}
