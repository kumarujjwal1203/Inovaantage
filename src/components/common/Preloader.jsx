import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Activity } from 'lucide-react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  // 1. Slow & Graceful Arc Reactor Charge-Up Sequence (0% -> 100% over 4.5 seconds)
  useEffect(() => {
    const duration = 4500; // 4.5 seconds slow cinematic build-up
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        // Unibeam Blast Delay before fading overlay
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // 2. Realistic Slow-Motion Electrical Lightning Engine on Pure Black
  useEffect(() => {
    if (!loading) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Active Slow Lightning Bolts State Queue
    let activeBolts = [];

    // Class for Realistic Slow-Growing Electrical Lightning Strokes
    class RealisticLightningBolt {
      constructor(startX, startY, angle, length, color, width, isBranch = false) {
        this.startX = startX;
        this.startY = startY;
        this.angle = angle;
        this.length = length;
        this.color = color;
        this.width = width;
        this.isBranch = isBranch;

        this.points = [{ x: startX, y: startY }];
        this.branches = [];
        this.generatePath();
        this.currentStep = 0;
        this.totalSteps = this.points.length;
        this.alpha = 1.0;
        this.decaying = false;
      }

      generatePath() {
        const segments = Math.floor(this.length / 14);
        let currX = this.startX;
        let currY = this.startY;
        let currAngle = this.angle;

        for (let i = 0; i < segments; i++) {
          // Slow organic fractal zig-zag angle drift
          currAngle += (Math.random() - 0.5) * 0.45;
          const segLen = 12 + Math.random() * 10;
          currX += Math.cos(currAngle) * segLen;
          currY += Math.sin(currAngle) * segLen;
          this.points.push({ x: currX, y: currY });

          // Spawn slow child branch with 20% probability
          if (!this.isBranch && Math.random() < 0.20 && i > 2 && i < segments - 2) {
            const branchAngle = currAngle + (Math.random() > 0.5 ? 1 : -1) * (0.5 + Math.random() * 0.4);
            const branchLen = this.length * (0.35 + Math.random() * 0.35);
            this.branches.push(
              new RealisticLightningBolt(currX, currY, branchAngle, branchLen, this.color, this.width * 0.65, true)
            );
          }
        }
      }

      update() {
        // Step forward slowly
        if (this.currentStep < this.totalSteps - 1) {
          this.currentStep += 0.4; // Slow propagation speed
        } else {
          this.decaying = true;
          this.alpha -= 0.025; // Slow fading decay
        }

        // Update child branches
        this.branches.forEach(branch => branch.update());
      }

      draw(ctx) {
        if (this.alpha <= 0) return;

        const maxIdx = Math.min(Math.floor(this.currentStep) + 1, this.points.length);
        if (maxIdx < 2) return;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < maxIdx; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 18;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Draw intense white-hot inner core line for ultra-realistic electric look
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < maxIdx; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = Math.max(1, this.width * 0.4);
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();

        // Draw child branches
        this.branches.forEach(branch => branch.draw(ctx));
      }
    }

    let frameCounter = 0;

    // Render Frame Loop
    const render = () => {
      frameCounter++;

      // Motion Blur Fade on Pure Pitch Black
      ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 - 50; // Center Arc Reactor Heart

      // Periodically trigger new SLOW lightning strikes from center core (every ~45 frames)
      if (frameCounter % 45 === 0 || Math.random() < 0.02) {
        const angle = Math.random() * Math.PI * 2;
        const startR = 105;
        const startX = cx + Math.cos(angle) * startR;
        const startY = cy + Math.sin(angle) * startR;
        const boltLength = 160 + Math.random() * 260;

        const isCyan = Math.random() < 0.55;
        const boltColor = isCyan ? '#00F0FF' : '#FF6B00';
        const boltWidth = 2.5 + Math.random() * 2;

        activeBolts.push(new RealisticLightningBolt(startX, startY, angle, boltLength, boltColor, boltWidth));
      }

      // Filter & Render Active Lightning Strokes
      activeBolts = activeBolts.filter(bolt => bolt.alpha > 0);
      activeBolts.forEach(bolt => {
        bolt.update();
        bolt.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Background Lightning Canvas Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Pure Black Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-radial from-[#FF6B00]/15 via-[#00F0FF]/10 to-transparent blur-[180px] pointer-events-none"
          />

          {/* ------------------------------------------------------------- */}
          {/* PURE BLACK CINEMATIC IRONMAN ARC REACTOR HEART CORE CONTAINER */}
          {/* ------------------------------------------------------------- */}
          <div className="relative z-10 flex flex-col items-center justify-center -mt-12">
            
            {/* UNIBEAM SHOCKWAVE BLAST PULSE AT 100% POWER */}
            {progress >= 95 && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 4.5, opacity: 0 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="absolute w-60 h-60 rounded-full border-4 border-[#00F0FF] shadow-[0_0_150px_#00F0FF] pointer-events-none"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 3.8, opacity: 0 }}
                  transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
                  className="absolute w-60 h-60 rounded-full border-4 border-[#FF6B00] shadow-[0_0_120px_#FF6B00] pointer-events-none"
                />
              </>
            )}

            {/* ARC REACTOR MAIN ASSEMBLY ENTRANCE ANIMATION (320px x 320px) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.35, filter: 'blur(20px) brightness(2.5)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' }}
              transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center"
            >
              
              {/* 1. OUTER METALLIC TITANIUM CHASSIS & LASER DEGREES (Slow Rotation) */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
                className="absolute inset-0 w-full h-full text-[#1E293B]"
                viewBox="0 0 400 400"
              >
                {/* Outer Black Titanium Bezel */}
                <circle cx="200" cy="200" r="190" stroke="#0F172A" strokeWidth="10" fill="none" />
                <circle cx="200" cy="200" r="182" stroke="#00F0FF" strokeWidth="2" strokeDasharray="6 14" opacity="0.8" fill="none" />
                <circle cx="200" cy="200" r="170" stroke="#FF6B00" strokeWidth="1.5" strokeDasharray="2 20" opacity="0.7" fill="none" />
                
                {/* 360-Degree Laser Calibration Ticks */}
                {[...Array(36)].map((_, i) => {
                  const angle = (i * 10 * Math.PI) / 180;
                  const x1 = 200 + 174 * Math.cos(angle);
                  const y1 = 200 + 174 * Math.sin(angle);
                  const x2 = 200 + 186 * Math.cos(angle);
                  const y2 = 200 + 186 * Math.sin(angle);
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 3 === 0 ? '#00F0FF' : '#475569'} strokeWidth={i % 3 === 0 ? '2.5' : '1'} opacity={i % 3 === 0 ? '0.9' : '0.4'} />
                  );
                })}
              </motion.svg>

              {/* 2. SOLENOID COPPER WIRE COILS (Slow Counter-Clockwise Rotation) */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
                className="absolute inset-4 w-[92%] h-[92%]"
                viewBox="0 0 360 360"
              >
                {/* 10 Solenoid Copper Wire Coils wrapped around inner rim */}
                {[...Array(10)].map((_, i) => {
                  const angle = (i * 36 * Math.PI) / 180;
                  const cx = 180 + 140 * Math.cos(angle);
                  const cy = 180 + 140 * Math.sin(angle);
                  return (
                    <g key={i}>
                      {/* Solenoid Housing */}
                      <rect x={cx - 14} y={cy - 10} width="28" height="20" rx="4" fill="#020617" stroke="#334155" strokeWidth="2" transform={`rotate(${i * 36 + 90} ${cx} ${cy})`} />
                      {/* Copper Wire Wraps */}
                      <line x1={cx - 8} y1={cy - 8} x2={cx - 8} y2={cy + 8} stroke="#F59E0B" strokeWidth="2.5" transform={`rotate(${i * 36 + 90} ${cx} ${cy})`} />
                      <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} stroke="#FF6B00" strokeWidth="2.5" transform={`rotate(${i * 36 + 90} ${cx} ${cy})`} />
                      <line x1={cx + 8} y1={cy - 8} x2={cx + 8} y2={cy + 8} stroke="#00F0FF" strokeWidth="2.5" transform={`rotate(${i * 36 + 90} ${cx} ${cy})`} />
                      {/* Pulsing Energy Dot */}
                      <circle cx={cx} cy={cy} r="3.5" fill={i % 2 === 0 ? '#00F0FF' : '#FF6B00'} className="animate-pulse" />
                    </g>
                  );
                })}

                {/* Concentric Energy Track */}
                <circle cx="180" cy="180" r="120" stroke="#00F0FF" strokeWidth="2" strokeDasharray="14 10" fill="none" opacity="0.8" />
              </motion.svg>

              {/* 3. INNER APERTURE RING (Slow Pulse & Rotation) */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
                className="absolute inset-12 w-[74%] h-[74%]"
                viewBox="0 0 280 280"
              >
                <circle cx="140" cy="140" r="110" stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="30 15" fill="none" opacity="0.9" />
                <circle cx="140" cy="140" r="95" stroke="#00F0FF" strokeWidth="2" strokeDasharray="8 8" fill="none" opacity="0.85" />
                <circle cx="140" cy="140" r="82" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.7" />
              </motion.svg>

              {/* 4. THE ICONIC IRONMAN TRIANGULAR ARC REACTOR CORE (MARK 85 / MARK L HYBRID) */}
              <div className="relative z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-black border-4 border-[#00F0FF] shadow-[0_0_80px_#00F0FF,inset_0_0_50px_#FF6B00] flex items-center justify-center p-4 overflow-hidden">
                
                {/* Slow Breathing Lens Sunburst Rays */}
                <motion.div
                  animate={{ opacity: [0.6, 0.95, 0.6], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#00F0FF_35%,#FF6B00_65%,transparent_85%)] opacity-80"
                />

                {/* Inner Titanium Triangular Housing */}
                <svg className="absolute inset-2 w-[92%] h-[92%] text-[#00F0FF]" viewBox="0 0 200 200" fill="none">
                  {/* Ironman Inverted Triangle Arc Frame */}
                  <polygon points="100,20 180,160 20,160" stroke="#00F0FF" strokeWidth="4.5" fill="none" opacity="0.95" />
                  <polygon points="100,32 170,152 30,152" stroke="#FF6B00" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.9" />
                  {/* Corner Solenoid Bolts */}
                  <circle cx="100" cy="20" r="5.5" fill="#FFFFFF" />
                  <circle cx="180" cy="160" r="5.5" fill="#FFFFFF" />
                  <circle cx="20" cy="160" r="5.5" fill="#FFFFFF" />
                </svg>

                {/* CENTER CORE: Glowing Inovaantage Twin Peak Chevron ("AA") in Pure Electric Energy */}
                <motion.div
                  animate={{ scale: [0.96, 1.06, 0.96] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-30 flex items-center justify-center"
                >
                  <svg
                    className="w-20 h-20 sm:w-24 sm:h-24 text-white drop-shadow-[0_0_30px_#FFFFFF]"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Inner Peak White Hot Flare */}
                    <path d="M12 32L26 8L40 32" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 32L38 8L52 32" stroke="#FF6B00" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 32H28" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round"/>
                    <path d="M24 32H40" stroke="#FF6B00" strokeWidth="6" strokeLinecap="round"/>
                  </svg>
                </motion.div>

              </div>

            </motion.div>

            {/* TYPOGRAPHY & BRAND IGNITION ENTRANCE ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 text-center space-y-2.5 relative z-20"
            >
              {/* Brand Name */}
              <div className="flex items-center justify-center font-heading font-extrabold tracking-[0.25em] text-3xl sm:text-5xl text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.8)]">
                <span>INOV</span>
                <span className="text-gradient-orange mx-1">AA</span>
                <span>NTAGE</span>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-mono font-bold tracking-[0.38em] text-[#00F0FF] uppercase flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-[#FF6B00] animate-pulse" />
                <span>STAY DIGITALLY AHEAD WITH US</span>
                <Zap className="w-4 h-4 text-[#FF6B00] animate-pulse" />
              </motion.p>
            </motion.div>

            {/* DIGITAL PROGRESS BAR & POWER READOUT ENTRANCE ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 w-72 sm:w-96 flex flex-col items-center space-y-2.5 relative z-20"
            >
              <div className="w-full flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-bold flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#00F0FF]" />
                  ARC REACTOR CORE :: MARK 85
                </span>
                <span className="text-[#00F0FF] font-extrabold text-base tracking-wider">{progress}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 rounded-full bg-slate-950 border border-slate-800 overflow-hidden relative shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00F0FF] via-[#FF6B00] to-[#FF4500] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </div>

              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest pt-1 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#FF6B00] animate-spin" />
                <span>
                  {progress < 30 ? 'CHARGING SOLENOID COILS SLOWLY...' : progress < 75 ? 'POWERING DIGITAL BACKBONE CORE...' : 'ARC REACTOR ONLINE · UNIBEAM READY'}
                </span>
              </span>
            </motion.div>

          </div>

          {/* Quick Skip Intro Button Entrance */}
          <motion.button
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setLoading(false)}
            className="absolute top-6 right-6 z-30 px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 hover:bg-[#FF6B00] text-slate-200 hover:text-white border border-white/20 transition-all cursor-pointer shadow-xl backdrop-blur-md"
          >
            SKIP INTRO ⚡
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
