import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = '', showTagline = false, size = 'md' }) {
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  };

  const peakSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7 sm:w-8 sm:h-8',
    lg: 'w-9 h-9 sm:w-10 sm:h-10',
  };

  return (
    <Link to="/" className={`inline-flex flex-col items-start group ${className}`}>
      {/* Orange Inovaantage Vector Logo */}
      <div className={`flex items-center font-heading font-extrabold tracking-wider text-white ${textSizeClasses[size]}`}>
        <span>INOV</span>
        
        {/* Signature Twin Peak Orange Chevron "AA" */}
        <svg
          className={`${peakSizeClasses[size]} -mx-0.5 text-[#FF6B00] inline-block transition-transform duration-300 group-hover:scale-110`}
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 32L26 8L40 32" stroke="#FF6B00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 32L38 8L52 32" stroke="#FF8800" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 32H28" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round"/>
          <path d="M24 32H40" stroke="#FF8800" strokeWidth="4" strokeLinecap="round"/>
        </svg>

        <span>NTAGE</span>
      </div>

      {showTagline && (
        <span className="text-[9px] font-mono tracking-[0.25em] text-[#FF6B00] font-bold uppercase -mt-1">
          STAY DIGITALLY AHEAD WITH US
        </span>
      )}
    </Link>
  );
}
