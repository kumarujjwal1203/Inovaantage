import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF4500] via-[#FF6B00] to-[#FF8800] z-50 origin-left transition-all duration-75 shadow-xs"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'py-3.5 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md shadow-slate-900/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Inovaantage Logo */}
          <Logo size="md" showTagline={!isScrolled} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive: isExactActive }) => {
                    const active = link.path === '/' ? isExactActive : isActive;
                    return `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                      active ? 'text-[#FF6B00] font-bold' : 'text-slate-700 hover:text-[#FF6B00]'
                    }`;
                  }}
                >
                  {(link.path === '/' ? location.pathname === '/' : isActive) && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white border border-[#FF6B00]/40 rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button to="/contact" variant="primary" size="sm" showIcon showIconPosition="right">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden relative z-50 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-white/98 backdrop-blur-2xl flex flex-col justify-center px-6 sm:px-12 md:hidden overflow-y-auto pt-24 pb-12"
          >
            {/* Subtle background glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#FF6B00]/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col space-y-4 max-w-sm w-full mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-2xl font-bold font-heading py-2.5 px-4 rounded-2xl transition-all ${
                      location.pathname === link.path
                        ? 'text-[#FF6B00] bg-orange-50 border border-[#FF6B00]/30'
                        : 'text-slate-800 hover:text-[#FF6B00] hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07, duration: 0.4 }}
                className="pt-6"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  showIcon
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
