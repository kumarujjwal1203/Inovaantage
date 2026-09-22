import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CtaCountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative bg-[#FAFAFD] py-20 sm:py-24 border-b border-slate-200 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF6B00]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl border border-slate-200 relative overflow-hidden text-center bg-white shadow-2xl">
          
          {/* Ticking Live Countdown Pill Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-50 border border-[#FF6B00]/30 text-xs font-mono font-bold text-slate-800 mb-8 shadow-xs">
            <Clock className="w-4 h-4 text-[#FF6B00] animate-pulse" />
            <span className="text-slate-600">Q4 ENTERPRISE ROADMAP DISCOVERY ENDS IN:</span>
            <span className="text-[#FF6B00] tracking-widest text-sm font-extrabold">
              {formatTwoDigits(timeLeft.hours)}:{formatTwoDigits(timeLeft.minutes)}:{formatTwoDigits(timeLeft.seconds)}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-heading tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Build <span className="italic font-extrabold bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-500 bg-clip-text text-transparent">Digital Backbone Systems</span> That Never Fail?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule a 30-minute discovery call with our principal software architects. Get an immediate architecture roadmap and cost breakdown.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold font-heading text-sm text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8800] hover:brightness-105 shadow-lg shadow-[#FF6B00]/25 transition-all group"
            >
              <span>BOOK DISCOVERY CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold font-heading text-sm text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200/80 transition-all"
            >
              <span>EXPLORE SOLUTIONS</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-slate-200 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#FF6B00]" /> ISO 27001 & SOC2 Type II Certified
            </span>
            <span className="flex items-center gap-2 font-semibold">
              <Zap className="w-4 h-4 text-[#FF6B00]" /> 99.99% Availability Guarantee
            </span>
            <span className="flex items-center gap-2 font-semibold">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" /> Dedicated Principal Architects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
