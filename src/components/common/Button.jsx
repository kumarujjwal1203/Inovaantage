import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon = ArrowRight,
  showIcon = false,
  iconPosition = 'right',
  showIconPosition, // Destructured to prevent spreading to DOM
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const effectiveIconPosition = showIconPosition || iconPosition;
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white font-bold shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-slate-100 text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-200/80 hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:scale-[0.98]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm md:text-base gap-2',
    lg: 'px-8 py-4 text-base md:text-lg gap-2.5 font-semibold'
  };

  const combinedClasses = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!loading && showIcon && effectiveIconPosition === 'left' && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {!loading && showIcon && effectiveIconPosition === 'right' && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
