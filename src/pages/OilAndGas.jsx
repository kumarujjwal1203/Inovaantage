import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Database, 
  Layers, 
  Cpu, 
  Cloud, 
  Globe2, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Workflow, 
  Zap, 
  Server,
  ArrowDown,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { Reveal } from '../components/common/Reveal';
import { SpotlightCard } from '../components/common/SpotlightCard';
import { Button } from '../components/common/Button';
import { SubsurfaceVisual } from '../components/oil-and-gas/SubsurfaceVisual';

// Data Pipeline Nodes Definition
const pipelineNodes = [
  { id: '01', title: 'Subsurface Data', subtitle: 'Seismic, Well & Log Records', icon: Compass },
  { id: '02', title: 'Data Engineering', subtitle: 'Ingestion & Standardization', icon: Cpu },
  { id: '03', title: 'Spatial Data', subtitle: 'E&P Spatial Models', icon: Database },
  { id: '04', title: 'Cloud Infrastructure', subtitle: 'Automated Spatial Pipelines', icon: Cloud },
  { id: '05', title: 'Enterprise GIS', subtitle: 'Governed Spatial Services', icon: Globe2 },
  { id: '06', title: 'Business Applications', subtitle: 'Operational Decision Making', icon: Zap },
];

// Why Inovaantage Bento Pillars
const bentoPillars = [
  {
    title: 'Domain-led',
    description: 'We understand that successful spatial transformation starts with understanding the underlying E&P workflows, terminology and data.',
    icon: Compass,
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Technology-enabled',
    description: 'We combine GIS, data engineering, automation and cloud technologies to modernize traditional data environments.',
    icon: Cpu,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Multidisciplinary',
    description: 'Our approach brings together geoscience, GIS, data architecture and engineering capabilities rather than treating them as separate disciplines.',
    icon: Layers,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Scalable',
    description: 'We design solutions and operating models that can expand across assets, datasets, teams and geographies.',
    icon: Cloud,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Delivery-focused',
    description: 'We focus not only on architecture and strategy, but also on the practical implementation, governance and operationalization of modern data environments.',
    icon: Workflow,
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
];

export function OilAndGas() {
  const shouldReduceMotion = useReducedMotion();

  // Set Page Title & Meta Description on mount
  useEffect(() => {
    document.title = 'Oil & Gas GIS & Spatial Data Solutions | Inovaantage';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Inovaantage helps Oil & Gas organizations bridge the gap between subsurface science, spatial data and modern technology with enterprise spatial intelligence.'
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAFD] text-slate-900 overflow-hidden font-sans selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      
      {/* ------------------------------------------------------------- */}
      {/* 01 — HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Subtle Ambient Background Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial from-[#FF6B00]/10 via-amber-500/05 to-transparent blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 gis-grid-pattern opacity-30 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow */}
            <Reveal yOffset={16} blur={false}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-[#FF6B00]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
                <span>OIL & GAS</span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.1} yOffset={20}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.06]">
                Connecting Subsurface <br />
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-500 bg-clip-text text-transparent">
                  Intelligence to Spatial Data
                </span>
              </h1>
            </Reveal>

            {/* Sub copy */}
            <Reveal delay={0.2} yOffset={20}>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                The energy industry generates vast volumes of complex subsurface, well, geological and geospatial data. Turning that information into trusted, scalable and actionable spatial data requires more than GIS expertise—it requires a deep understanding of Exploration & Production workflows and the ability to translate domain knowledge into modern data architectures.
              </p>
            </Reveal>

            {/* Highlight Box */}
            <Reveal delay={0.3} yOffset={20}>
              <div className="p-6 rounded-2xl bg-white border border-[#FF6B00]/30 shadow-lg shadow-[#FF6B00]/05 relative overflow-hidden group hover:border-[#FF6B00] transition-colors">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF6B00] to-[#FF8800]" />
                <p className="text-sm sm:text-base font-semibold font-heading text-slate-900 leading-relaxed pl-2">
                  Inovaantage helps Oil & Gas organizations bridge the gap between subsurface science, spatial data and modern technology.
                </p>
              </div>
            </Reveal>

            {/* Body copy */}
            <Reveal delay={0.4} yOffset={20}>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                We bring together expertise across geoscience, GIS, data engineering and cloud technologies to help organizations transform complex E&P information into structured, automated and scalable spatial data environments.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.5} yOffset={20}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  to="/contact" 
                  variant="primary" 
                  size="lg" 
                  showIcon 
                  className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-lg shadow-[#FF6B00]/25"
                >
                  Talk to Inovaantage
                </Button>
                
                <a
                  href="#services"
                  className="px-8 py-4 rounded-full text-base font-bold text-slate-700 bg-white border border-slate-300 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-300 shadow-xs"
                >
                  Explore Services
                </a>
              </div>
            </Reveal>

          </div>

          {/* Right Subsurface Visual Column */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.3} yOffset={30}>
              <SubsurfaceVisual />
            </Reveal>
          </div>

        </div>

        {/* Scroll Cue */}
        <div className="hidden lg:flex justify-center pt-16">
          <motion.a
            href="#intro"
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-[#FF6B00] transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 text-[#FF6B00]" />
          </motion.a>
        </div>

      </section>


      {/* ------------------------------------------------------------- */}
      {/* 02 — INTRODUCTION / CONTEXT NARRATIVE */}
      {/* ------------------------------------------------------------- */}
      <section id="intro" className="py-20 border-y border-slate-200 bg-white/80 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal yOffset={20}>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
              ENTERPRISE SPATIAL TRANSFORMATION
            </span>
          </Reveal>

          <Reveal delay={0.1} yOffset={20}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
              Bridging Geoscience, Spatial Engineering & Cloud Architecture
            </h2>
          </Reveal>

          <Reveal delay={0.2} yOffset={20}>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              Inovaantage provides specialized consulting and technical delivery that converts isolated E&P data silos into governed, cloud-native spatial intelligence accessible across the entire enterprise.
            </p>
          </Reveal>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 03 — OIL & GAS CONSULTING SERVICES WITH STICKY CARD STACKING SCROLL ANIMATION */}
      {/* ------------------------------------------------------------- */}
      <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <Reveal yOffset={20}>
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
              OUR OIL & GAS CONSULTING SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
              Subsurface Expertise Meets Modern Spatial Data
            </h2>
          </div>
        </Reveal>

        {/* STICKY CARD STACK CONTAINER */}
        <div className="relative space-y-16 pb-32">
          
          {/* SERVICE CARD 01 STICKY STACK */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 60, scale: 0.98 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-5% 0px", once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-24 md:top-28 z-10 transition-all duration-300"
          >
            <SpotlightCard className="p-0 border-2 border-slate-200/90 bg-white shadow-2xl rounded-[32px] sm:rounded-[40px] overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400" />
              
              <div className="p-8 sm:p-12 space-y-8">
                {/* CARD TOP HEADER BAR — REMAINS VISIBLE WHEN STACKED */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-5xl sm:text-6xl font-black font-heading bg-gradient-to-br from-[#FF6B00] via-[#FF8800] to-slate-400 bg-clip-text text-transparent block select-none">
                      01
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block mb-1">
                        E&P WORKFLOWS
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                        Domain Translation — Subsurface to Spatial
                      </h3>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <span className="px-4 py-2 rounded-full bg-orange-50 border border-[#FF6B00]/30 text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider inline-flex items-center gap-2 shadow-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>E&P GIS INTEGRATION</span>
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT BODY */}
                <div className="space-y-6">
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    Complex subsurface information needs to be understood in the context of how exploration and production teams actually work. Our consultants bring knowledge of key E&P workflows—including seismic interpretation, well and log data, geological modelling, basin analysis and subsurface data management—and translate these requirements into robust spatial data frameworks.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-bold font-mono text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                      <span>We help organizations:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        'Translate subsurface concepts and workflows into spatial data models',
                        'Structure seismic, well, geological and interpretation datasets for GIS environments',
                        'Develop spatial frameworks that reflect real-world E&P workflows',
                        'Standardize complex datasets for consistent use across teams and applications',
                        'Automate repetitive data preparation and spatial processing workflows',
                        'Connect subsurface information with broader enterprise geospatial datasets'
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={shouldReduceMotion ? {} : { x: 6 }}
                          className="flex items-start gap-3 text-sm text-slate-700 font-medium group/item"
                        >
                          <div className="w-5 h-5 rounded-full bg-orange-100/80 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] group-hover/item:text-white transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="group-hover/item:text-[#FF6B00] transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Result Callout */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 border-2 border-[#FF6B00]/30 shadow-md flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FF6B00] text-white text-xs font-mono font-bold uppercase shrink-0 shadow-xs">RESULT</span>
                    <span className="text-sm text-slate-900 font-semibold">
                      A clear connection between subsurface interpretation and the spatial information used across the wider organization.
                    </span>
                  </div>

                  {/* Animated Keywords Chips */}
                  <div className="pt-2">
                    <span className="text-xs font-mono text-slate-500 block mb-2.5">KEYWORD CAPABILITIES:</span>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        'Seismic Interpretation',
                        'Well & Log Data',
                        'Geological Modelling',
                        'Basin Analysis',
                        'Subsurface Data Management'
                      ].map((kw) => (
                        <motion.span
                          key={kw}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                          className="px-4 py-2 rounded-xl text-xs font-mono bg-white border-2 border-slate-200 text-slate-800 font-bold hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-md hover:shadow-[#FF6B00]/10 transition-all cursor-pointer"
                        >
                          {kw}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>

          {/* SERVICE CARD 02 STICKY STACK */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 60, scale: 0.98 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-5% 0px", once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-48 md:top-56 z-20 transition-all duration-300"
          >
            <SpotlightCard className="p-0 border-2 border-slate-200/90 bg-white shadow-2xl rounded-[32px] sm:rounded-[40px] overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400" />
              
              <div className="p-8 sm:p-12 space-y-8">
                {/* CARD TOP HEADER BAR — REMAINS VISIBLE WHEN STACKED */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-5xl sm:text-6xl font-black font-heading bg-gradient-to-br from-[#FF6B00] via-[#FF8800] to-slate-400 bg-clip-text text-transparent block select-none">
                      02
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block mb-1">
                        MULTIDISCIPLINARY DELIVERY
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                        Scalable Operations & Delivery
                      </h3>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <span className="px-4 py-2 rounded-full bg-orange-50 border border-[#FF6B00]/30 text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider inline-flex items-center gap-2 shadow-xs">
                      <Workflow className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>ENTERPRISE SCALING</span>
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT BODY */}
                <div className="space-y-6">
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    Modern Oil & Gas data programs require collaboration across multiple specialist disciplines. Inovaantage can support the design and delivery of multidisciplinary teams spanning geoscience, GIS, data engineering and software development. We provide delivery leadership and technical oversight to help operators establish repeatable processes and scalable data architectures.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-bold font-mono text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                      <span>Our capabilities include:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        'Multidisciplinary team leadership and coordination',
                        'Data architecture and information modelling',
                        'GIS and spatial data engineering',
                        'Geoscience and subsurface data integration',
                        'Data quality and governance frameworks',
                        'Workflow standardization and automation',
                        'Delivery models designed for mid-tier and major Oil & Gas operators',
                        'Transitioning from project-based data management to sustainable operational capabilities'
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={shouldReduceMotion ? {} : { x: 6 }}
                          className="flex items-start gap-3 text-sm text-slate-700 font-medium group/item"
                        >
                          <div className="w-5 h-5 rounded-full bg-orange-100/80 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] group-hover/item:text-white transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="group-hover/item:text-[#FF6B00] transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Callout */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 border-2 border-[#FF6B00]/30 shadow-md flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FF6B00] text-white text-xs font-mono font-bold uppercase shrink-0 shadow-xs">FOCUS</span>
                    <span className="text-sm text-slate-900 font-semibold">
                      We focus on building delivery models that can scale across assets, regions, disciplines and business units while maintaining consistency and data quality.
                    </span>
                  </div>

                  {/* Animated Keywords Chips */}
                  <div className="pt-2">
                    <span className="text-xs font-mono text-slate-500 block mb-2.5">SCALING SCOPE:</span>
                    <div className="flex flex-wrap gap-2.5">
                      {['Assets', 'Regions', 'Disciplines', 'Business Units'].map((kw) => (
                        <motion.span
                          key={kw}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -2 }}
                          className="px-4 py-2 rounded-xl text-xs font-mono bg-white border-2 border-slate-200 text-slate-800 font-bold hover:border-[#FF6B00] hover:text-[#FF6B00] hover:shadow-md hover:shadow-[#FF6B00]/10 transition-all cursor-pointer"
                        >
                          {kw}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </motion.div>

          {/* SERVICE CARD 03 STICKY STACK */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 60, scale: 0.98 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ margin: "-5% 0px", once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-72 md:top-84 z-30 transition-all duration-300"
          >
            <SpotlightCard className="p-0 border-2 border-slate-200/90 bg-white shadow-2xl rounded-[32px] sm:rounded-[40px] overflow-hidden">
              <div className="h-2 w-full bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400" />
              
              <div className="p-8 sm:p-12 space-y-8">
                {/* CARD TOP HEADER BAR — REMAINS VISIBLE WHEN STACKED */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-5xl sm:text-6xl font-black font-heading bg-gradient-to-br from-[#FF6B00] via-[#FF8800] to-slate-400 bg-clip-text text-transparent block select-none">
                      03
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block mb-1">
                        CLOUD ARCHITECTURE
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                        Modern Spatial Data Infrastructure
                      </h3>
                    </div>
                  </div>
                  
                  <div className="shrink-0">
                    <span className="px-4 py-2 rounded-full bg-orange-50 border border-[#FF6B00]/30 text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider inline-flex items-center gap-2 shadow-xs">
                      <Cloud className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>CLOUD INFRASTRUCTURE</span>
                    </span>
                  </div>
                </div>

                {/* CARD CONTENT BODY */}
                <div className="space-y-6">
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    Traditional subsurface mapping environments can be highly dependent on static datasets, desktop applications and fragmented workflows. We help Oil & Gas organizations modernize these environments by connecting subsurface data with cloud-based, automated and enterprise spatial data infrastructures.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-sm font-bold font-mono text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                      <span>Our work can include:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        'Modernizing legacy subsurface and spatial datasets',
                        'Designing cloud-ready spatial data architectures',
                        'Migrating data from legacy environments into modern GIS platforms',
                        'Building automated data ingestion and transformation pipelines',
                        'Integrating subsurface, well, geological and spatial datasets',
                        'Establishing scalable spatial databases and services',
                        'Supporting enterprise GIS and cloud adoption',
                        'Creating automated workflows for data refresh, validation and distribution'
                      ].map((item, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={shouldReduceMotion ? {} : { x: 6 }}
                          className="flex items-start gap-3 text-sm text-slate-700 font-medium group/item"
                        >
                          <div className="w-5 h-5 rounded-full bg-orange-100/80 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 group-hover/item:bg-[#FF6B00] group-hover/item:text-white transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="group-hover/item:text-[#FF6B00] transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Objective Callout */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 border-2 border-[#FF6B00]/30 shadow-md flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FF6B00] text-white text-xs font-mono font-bold uppercase shrink-0 shadow-xs">OBJECTIVE</span>
                    <span className="text-sm text-slate-900 font-semibold">
                      The objective is to move from static maps and disconnected datasets to dynamic, governed and reusable spatial information.
                    </span>
                  </div>

                </div>

              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 04 — DATA PIPELINE SHOWPIECE (SLATE-900 CONTRAST BANNER) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#0F172A] text-white border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal yOffset={20}>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                DATA ARCHITECTURE LANDSCAPE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
                From Subsurface Data to Enterprise Intelligence
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                The value of Oil & Gas data increases when information can move seamlessly between disciplines. Our approach connects the different layers of the data landscape:
              </p>
            </div>
          </Reveal>

          {/* PIPELINE SHOWPIECE: DESKTOP (HORIZONTAL) & MOBILE (VERTICAL) */}
          <div className="py-8">
            
            {/* Desktop Horizontal View (md+) */}
            <div className="hidden md:grid md:grid-cols-6 gap-4 relative">
              
              {/* Connecting Background Pipeline Line with Pulse */}
              <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-800 z-0">
                {!shouldReduceMotion && (
                  <motion.div
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    className="w-24 h-full bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent shadow-[0_0_12px_#FF6B00]"
                  />
                )}
              </div>

              {pipelineNodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <Reveal key={node.id} delay={index * 0.1} yOffset={20}>
                    <div className="relative z-10 flex flex-col items-center text-center group">
                      <motion.div 
                        whileHover={shouldReduceMotion ? {} : { scale: 1.12, rotate: 6 }}
                        className="w-16 h-16 rounded-2xl bg-slate-900 border-2 border-slate-700 group-hover:border-[#FF6B00] flex items-center justify-center text-[#FF6B00] shadow-xl group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all mb-4"
                      >
                        <IconComponent className="w-7 h-7" />
                      </motion.div>
                      <span className="text-[10px] font-mono font-bold text-[#FF6B00] block mb-1">
                        NODE {node.id}
                      </span>
                      <h4 className="text-sm font-bold font-heading text-white group-hover:text-[#FF6B00] transition-colors leading-tight">
                        {node.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-1 leading-tight">
                        {node.subtitle}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Mobile Vertical View (< md) */}
            <div className="flex md:hidden flex-col space-y-6 relative pl-6 border-l-2 border-slate-800 ml-4">
              {pipelineNodes.map((node, index) => {
                const IconComponent = node.icon;
                return (
                  <Reveal key={node.id} delay={index * 0.1} yOffset={15}>
                    <div className="relative flex items-start gap-4">
                      {/* Node Bullet */}
                      <div className="absolute -left-[35px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-[#FF6B00] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 w-full">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="w-5 h-5 text-[#FF6B00]" />
                          <span className="text-[10px] font-mono font-bold text-[#FF6B00]">NODE {node.id}</span>
                        </div>
                        <h4 className="text-base font-bold font-heading text-white">{node.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

          {/* Pipeline Closing Paragraph */}
          <Reveal delay={0.4} yOffset={20}>
            <div className="mt-12 text-center max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                By bringing these capabilities together, Inovaantage helps organizations create a more connected foundation for exploration, development, asset management and operational decision-making.
              </p>
            </div>
          </Reveal>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 05 — WHY INOVAANTAGE (BENTO GRID WITH 3D TILT CARDS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <Reveal yOffset={20}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
              OUR DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
              Why Inovaantage
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoPillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.1} yOffset={20} className={pillar.colSpan}>
                <SpotlightCard className="p-8 h-full flex flex-col justify-between border-slate-200 bg-white">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border-2 border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

      </section>


      {/* ------------------------------------------------------------- */}
      {/* 06 — BEFORE / AFTER VISUAL TRANSITION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal yOffset={20}>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                VISUAL TRANSFORMATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                From Disconnected Maps to Governed Enterprise Data
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* BEFORE PANEL */}
            <Reveal delay={0.1} yOffset={20}>
              <SpotlightCard className="p-8 border-rose-200 bg-white h-full space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    TRADITIONAL ENVIRONMENT
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-slate-900">Before Transformation</h3>

                <div className="space-y-3 font-mono text-sm">
                  {['Static maps', 'Disconnected datasets', 'Manual workflows', 'Fragmented information'].map((item) => (
                    <motion.div 
                      key={item} 
                      whileHover={{ x: 4 }}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>

            {/* AFTER PANEL */}
            <Reveal delay={0.2} yOffset={20}>
              <SpotlightCard className="p-8 border-[#FF6B00]/40 bg-white h-full space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30">
                    MODERN SPATIAL DATA ENVIRONMENT
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900">After Transformation</h3>

                <div className="space-y-3 font-mono text-sm">
                  {['Dynamic spatial information', 'Connected datasets', 'Automated workflows', 'Governed enterprise data'].map((item) => (
                    <motion.div 
                      key={item} 
                      whileHover={{ x: 4 }}
                      className="p-3.5 rounded-xl bg-orange-50/60 border border-[#FF6B00]/30 text-emerald-800 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>

          </div>

          {/* Visual Metaphor Bar */}
          <Reveal delay={0.3} yOffset={20}>
            <div className="mt-12 p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-md flex flex-wrap items-center justify-around gap-4 font-mono text-xs text-center">
              <span className="text-slate-500 font-bold">STATIC MAP</span>
              <span className="text-[#FF6B00] font-bold">→</span>
              <span className="text-[#0284C7] font-bold">DATA CONNECTION</span>
              <span className="text-[#FF6B00] font-bold">→</span>
              <span className="text-emerald-700 font-bold">LIVE SPATIAL NETWORK</span>
            </div>
          </Reveal>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 07 — CLOSING STATEMENT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <Reveal yOffset={20}>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
            LOOKING AHEAD
          </span>
        </Reveal>

        <Reveal delay={0.1} yOffset={20}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Building the Next Generation of Oil & Gas Data
          </h2>
        </Reveal>

        <Reveal delay={0.2} yOffset={20}>
          <div className="space-y-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-left max-w-3xl mx-auto p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
            <p>
              As Oil & Gas organizations modernize their technology landscapes, the ability to connect subsurface knowledge, spatial intelligence and enterprise data becomes increasingly important.
            </p>
            <p className="font-semibold text-slate-900">
              Inovaantage helps organizations make that connection.
            </p>
            <p>
              From subsurface-to-spatial data modelling and E&P workflow translation to cloud migration, spatial data engineering and multidisciplinary delivery, we help transform complex Oil & Gas information into scalable digital foundations.
            </p>
          </div>
        </Reveal>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 08 — FINAL CTA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal yOffset={20}>
          <div className="p-10 sm:p-16 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl relative overflow-hidden text-center space-y-8">
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-[#FF6B00]/10 via-amber-500/05 to-transparent blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight relative z-10">
              Ready to modernize your Oil & Gas data environment?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal relative z-10">
              Talk to Inovaantage about your subsurface, spatial data and GIS transformation initiatives.
            </p>

            <div className="pt-2 relative z-10 flex justify-center">
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg" 
                showIcon 
                className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-xl shadow-[#FF6B00]/25"
              >
                Talk to Inovaantage
              </Button>
            </div>

          </div>
        </Reveal>
      </section>

    </div>
  );
}
