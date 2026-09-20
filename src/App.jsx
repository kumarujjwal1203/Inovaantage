import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { PageTransition } from './components/layout/PageTransition';
import { Preloader } from './components/common/Preloader';
import { BackgroundSystem } from './components/common/BackgroundSystem';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative text-slate-100 bg-[#050507]">
      {/* Global Background Visual System */}
      <BackgroundSystem />

      {/* Global Utilities */}
      <ScrollProgress />
      <Preloader />
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Routing Container */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services/:serviceId" element={<PageTransition><ServiceDetail /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio/:projectId" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Global Footer (Rendered on non-home pages; Home page uses FooterMascotSection) */}
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
