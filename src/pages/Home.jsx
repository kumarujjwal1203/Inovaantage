import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesParticleMorph } from '../components/home/ServicesParticleMorph';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { BrandStatementSection } from '../components/home/BrandStatementSection';
import { TechnicalWorkflowSection } from '../components/home/TechnicalWorkflowSection';
import { CriticalIndustriesSection } from '../components/home/CriticalIndustriesSection';
import { WhyInovaantageSection } from '../components/home/WhyInovaantageSection';
import { GlobalReachSection } from '../components/home/GlobalReachSection';
import { CtaCountdownSection } from '../components/home/CtaCountdownSection';
import { FooterMascotSection } from '../components/home/FooterMascotSection';

export function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-[#7B61FF]/30 selection:text-white overflow-x-hidden font-sans">
      {/* SECTION 1: HERO WITH 3D PARTICLE SPHERE */}
      <HeroSection />

      {/* SECTION 2: SERVICES WITH 3D PARTICLE MORPHING CANVAS */}
      <ServicesParticleMorph />

      {/* SECTION 3: CASE STUDIES WITH DEVICE MOCKUP PARALLAX TILT */}
      <CaseStudiesSection />

      {/* SECTION 4: BRAND MANIFESTO STATEMENT */}
      <BrandStatementSection />

      {/* SECTION 5: TECHNICAL WORKFLOW */}
      <TechnicalWorkflowSection />

      {/* SECTION 6: BUILT FOR CRITICAL INDUSTRIES (TELECOM, UTILITIES, TRANSPORTATION) */}
      <CriticalIndustriesSection />

      {/* SECTION 7: WHY INOVAANTAGE (CHALLENGE VS. SOLUTION) */}
      <WhyInovaantageSection />

      {/* SECTION 8: GLOBAL REACH & LOCATIONS FINDER */}
      <GlobalReachSection />

      {/* SECTION 8: CTA BANNER WITH LIVE COUNTDOWN TIMER */}
      <CtaCountdownSection />

      {/* SECTION 9: FOOTER WITH 3D MASCOT & DRIFTING GLASS CHIPS */}
      <FooterMascotSection />
    </div>
  );
}
