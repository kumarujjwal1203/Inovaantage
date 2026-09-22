import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = '', showTagline = false, size = 'md' }) {
  const textSizeClasses = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl lg:text-[32px]',
    lg: 'text-3xl sm:text-4xl lg:text-5xl',
    xl: 'text-4xl sm:text-6xl lg:text-7xl',
  };

  const peakSizeClasses = {
    sm: 'w-6 h-6 sm:w-7 sm:h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9 lg:w-9.5 lg:h-9.5',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
    xl: 'w-14 h-14 sm:w-18 sm:h-18',
  };

  const taglineSizeClasses = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[9.5px] sm:text-[10.5px] tracking-[0.26em]',
    lg: 'text-xs sm:text-sm tracking-[0.32em]',
    xl: 'text-sm sm:text-base tracking-[0.38em]',
  };

  return (
    <Link to="/" className={`inline-flex flex-col items-start group ${className}`}>
      {/* Official Inovaantage Vector Typography Logo */}
      <div className={`flex items-center font-heading font-extrabold tracking-wider text-slate-900 leading-none ${textSizeClasses[size] || textSizeClasses.md}`}>
        <span>INOV</span>
        
        {/* Signature Twin Peak Orange Chevron "AA" */}
        <svg
          className={`${peakSizeClasses[size] || peakSizeClasses.md} -mx-0.5 text-[#FF6B00] inline-block transition-transform duration-300 group-hover:scale-110 shrink-0`}
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 32L26 8L40 32" stroke="#FF6B00" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 32L38 8L52 32" stroke="#FF8800" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 32H28" stroke="#FF6B00" strokeWidth="4.5" strokeLinecap="round"/>
          <path d="M24 32H40" stroke="#FF8800" strokeWidth="4.5" strokeLinecap="round"/>
        </svg>

        <span>NTAGE</span>
      </div>

      {showTagline && (
        <span className={`font-mono font-extrabold text-[#FF6B00] uppercase mt-1 leading-tight ${taglineSizeClasses[size] || taglineSizeClasses.md}`}>
          STAY DIGITALLY AHEAD WITH US
        </span>
      )}
    </Link>
  );
}
