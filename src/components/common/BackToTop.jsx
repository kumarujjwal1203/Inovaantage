import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl glass-panel bg-black/60 border border-white/20 text-[#00F0FF] hover:text-white hover:border-[#FF6B00]/60 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md transition-colors group"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 text-[#00F0FF] group-hover:text-[#FF6B00]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
