import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  Workflow, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight,
  Layers,
  Globe2,
  Activity,
  Server,
  Cpu
} from 'lucide-react';

// Service Cards Data Definition — Compact, high-viewability enterprise dataset
const serviceCardsData = [
  {
    number: '01',
    tag: 'E&P WORKFLOWS',
    title: 'Domain Translation — Subsurface to Spatial',
    headline: 'Bridge subsurface science, spatial data and modern enterprise GIS.',
    description: 'Complex subsurface information needs to be understood in the context of how E&P teams actually work. Our consultants translate seismic interpretation, well logs, geological modelling, and basin analysis into robust spatial data frameworks.',
    features: [
      'Translate subsurface workflows into spatial data models',
      'Structure seismic, well & log datasets for GIS environments',
      'Develop spatial frameworks for real-world E&P operations',
      'Connect subsurface data with enterprise geospatial platforms'
    ],
    callout: {
      label: 'RESULT',
      text: 'A clear, direct connection between subsurface science and enterprise spatial information.'
    },
    chips: [
      'Seismic Interpretation',
      'Well & Log Data',
      'Geological Modelling',
      'Subsurface GIS'
    ],
    accent: 'from-[#FF6B00] via-[#FF8800] to-amber-500',
    glow: 'shadow-[#FF6B00]/15 hover:shadow-[#FF6B00]/25',
    buttonColor: 'bg-[#FF6B00] text-white',
    badgeText: 'E&P GIS INTEGRATION',
    badgeIcon: Sparkles,
    previewWindowLabel: 'Subsurface GIS Workbench',
    links: [
      { label: 'Talk to Inovaantage', url: '/contact' },
      { label: 'Workflows', url: '#pipeline' }
    ],
    previewType: 'subsurface'
  },
  {
    number: '02',
    tag: 'MULTIDISCIPLINARY DELIVERY',
    title: 'Scalable Operations & Technical Delivery',
    headline: 'Unify geoscience, GIS, data engineering and software teams.',
    description: 'Inovaantage supports the design and delivery of multidisciplinary teams spanning geoscience, GIS, data engineering and software development, providing delivery leadership and technical oversight for operators.',
    features: [
      'Multidisciplinary team leadership & technical oversight',
      'Enterprise data architecture & spatial information modelling',
      'GIS & spatial data engineering for regional asset operations',
      'Transition project data management to sustainable capabilities'
    ],
    callout: {
      label: 'FOCUS',
      text: 'Building delivery models that scale across assets, regions, disciplines and business units.'
    },
    chips: [
      'Assets',
      'Regions',
      'Disciplines',
      'Business Units'
    ],
    accent: 'from-sky-500 via-blue-600 to-cyan-400',
    glow: 'shadow-sky-500/15 hover:shadow-sky-500/25',
    buttonColor: 'bg-sky-600 text-white',
    badgeText: 'ENTERPRISE SCALING',
    badgeIcon: Workflow,
    previewWindowLabel: 'Multidisciplinary Telemetry',
    links: [
      { label: 'Delivery Model', url: '/contact' },
      { label: 'Why Inovaantage', url: '#why-inovaantage' }
    ],
    previewType: 'telemetry'
  },
  {
    number: '03',
    tag: 'CLOUD ARCHITECTURE',
    title: 'Modern Spatial Data Infrastructure',
    headline: 'Modernize legacy desktop maps into cloud-native spatial intelligence.',
    description: 'We help Oil & Gas organizations modernize static mapping environments by connecting subsurface data with cloud-based, automated, and enterprise spatial data infrastructures.',
    features: [
      'Modernize legacy subsurface & spatial datasets for cloud',
      'Design cloud-ready spatial data architectures (AWS/Azure/GCP)',
      'Automated data ingestion & transformation (ETL) pipelines',
      'High-performance web map services & spatial APIs'
    ],
    callout: {
      label: 'OBJECTIVE',
      text: 'Move from static disconnected maps to dynamic, governed and reusable spatial information.'
    },
    chips: [
      'Cloud GIS',
      'Automated ETL',
      'Spatial Databases',
      'Web Map Services'
    ],
    accent: 'from-emerald-500 via-teal-500 to-lime-400',
    glow: 'shadow-emerald-500/15 hover:shadow-emerald-500/25',
    buttonColor: 'bg-emerald-600 text-white',
    badgeText: 'CLOUD INFRASTRUCTURE',
    badgeIcon: Cloud,
    previewWindowLabel: 'Cloud SDI Architecture Monitor',
    links: [
      { label: 'Talk to Inovaantage', url: '/contact' },
      { label: 'Data Pipeline', url: '#pipeline' }
    ],
    previewType: 'cloud'
  }
];

// Single Sticky Card Component — Compact, GPU Accelerated, Perfectly Viewable
function StickyCardItem({ card, index, totalCards, shouldReduceMotion }) {
  const cardRef = useRef(null);
  
  // Track scroll position of card for scale-down & dimming depth effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  // Smooth hardware transform: Scale down (1 -> 0.95) & Dim (opacity 1 -> 0.8) when stacked
  const isLast = index === totalCards - 1;
  const scale = useTransform(scrollYProgress, [0, 0.9], [1, isLast ? 1 : 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, isLast ? 1 : 0.8]);

  const BadgeIcon = card.badgeIcon;

  return (
    <motion.article
      ref={cardRef}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 48, scale: 0.985 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky overflow-hidden rounded-[1.8rem] sm:rounded-[2.4rem] border-2 border-slate-200/90 bg-white p-5 sm:p-7 lg:p-9 shadow-xl transition-all duration-300 hover:border-[#FF6B00]/70 group cursor-default transform-gpu will-change-transform max-w-6xl mx-auto"
      style={{
        zIndex: 20 + index,
        top: `${5.5 + index * 2}rem`
      }}
    >
      {/* Decorative Inner Accent Strip */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
        <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${card.accent}`} />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#FF6B00]/05 via-amber-400/05 to-transparent blur-3xl" />
        <div className="absolute inset-0 gis-grid-pattern opacity-10" />
      </div>

      {/* Inner Motion Layer with GPU acceleration */}
      <motion.div 
        style={shouldReduceMotion ? {} : { scale, opacity }}
        className="relative z-10 flex flex-col gap-5 sm:gap-6 transform-gpu"
      >
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className={`text-4xl sm:text-6xl font-black font-heading leading-none tracking-tight bg-gradient-to-br ${card.accent} bg-clip-text text-transparent select-none shrink-0`}>
              {card.number}
            </span>
            <div>
              <span className={`bg-gradient-to-r ${card.accent} bg-clip-text text-[0.68rem] font-mono font-black uppercase tracking-[0.25em] text-transparent block mb-0.5`}>
                {card.tag}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Right Action Pill Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            {card.links.map((link, lIdx) => (
              <motion.a
                key={lIdx}
                href={link.url}
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="group/btn inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-slate-50 hover:bg-white px-3.5 py-1.5 text-xs font-mono font-bold text-slate-800 shadow-2xs hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all cursor-pointer"
              >
                <span>{link.label}</span>
                <span className={`grid h-5 w-5 place-items-center rounded-full ${card.buttonColor} text-white transition-transform duration-300 group-hover/btn:rotate-45 shadow-xs`}>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* BODY (2-COLUMN LAYOUT) */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION, FEATURES & CHIPS */}
          <div className="space-y-4">
            <p className="text-base sm:text-xl font-bold leading-tight font-heading text-slate-900">
              {card.headline}
            </p>
            
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
              {card.description}
            </p>

            {/* Compact 2-Column Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {card.features.map((feat, fIdx) => (
                <div 
                  key={fIdx}
                  className="flex items-start gap-2 text-xs text-slate-700 font-medium group/feat"
                >
                  <div className="w-4 h-4 rounded-full bg-orange-100/90 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 group-hover/feat:bg-[#FF6B00] group-hover/feat:text-white transition-colors">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="group-hover/feat:text-[#FF6B00] transition-colors leading-tight">{feat}</span>
                </div>
              ))}
            </div>

            {/* Result / Focus / Objective Callout Box */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 border border-[#FF6B00]/30 shadow-xs flex items-center gap-3">
              <span className="px-2 py-0.5 rounded-md bg-[#FF6B00] text-white text-[0.62rem] font-mono font-bold uppercase shrink-0">
                {card.callout.label}
              </span>
              <span className="text-xs text-slate-900 font-semibold leading-snug">
                {card.callout.text}
              </span>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[0.62rem] font-mono text-slate-400 font-bold uppercase tracking-wider mr-1">
                TAGS:
              </span>
              {card.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-slate-50/90 px-3 py-1 text-[0.68rem] font-mono font-bold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-[#FF6B00] hover:bg-orange-50 hover:text-[#FF6B00] cursor-pointer"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PREVIEW BOX (WINDOW HEADER WITH 3 DOTS + GRAPHICAL WIDGET) */}
          <motion.div 
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-3.5 sm:p-4 shadow-xl text-white group/preview"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 mb-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/90" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/90" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-[0.62rem] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                {card.previewWindowLabel}
              </span>
            </div>

            {/* Visual Content inside Preview Box */}
            {card.previewType === 'subsurface' && (
              <div className="relative min-h-[170px] sm:min-h-[190px] rounded-lg bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-[#FF6B00]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="space-y-2.5 relative z-10">
                  <div className="flex items-center justify-between text-[0.68rem] font-mono text-slate-400 border-b border-slate-800 pb-1.5">
                    <span className="flex items-center gap-1 text-[#FF6B00] font-bold">
                      <Layers className="w-3 h-3" /> SEISMIC HORIZON ALPHA
                    </span>
                    <span>3,420m TVD</span>
                  </div>
                  <div className="h-14 w-full rounded-md border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-amber-900/30 to-orange-950/40 p-2.5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[0.6rem] font-mono text-orange-300 font-bold">PERMEABILITY INDEX</div>
                      <div className="text-base font-bold font-mono text-white">412 mD</div>
                    </div>
                    <Activity className="w-5 h-5 text-[#FF6B00] animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 relative z-10 pt-3 border-t border-slate-800 text-center text-[0.68rem] font-mono">
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">WELLBORES</div>
                    <div className="text-xs font-bold text-white">128 ACTIVE</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">CRS</div>
                    <div className="text-xs font-bold text-emerald-400">WGS84 UTM</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">STATUS</div>
                    <div className="text-xs font-bold text-[#FF6B00]">GOVERNED</div>
                  </div>
                </div>
              </div>
            )}

            {card.previewType === 'telemetry' && (
              <div className="relative min-h-[170px] sm:min-h-[190px] rounded-lg bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-sky-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="space-y-2.5 relative z-10">
                  <div className="flex items-center justify-between text-[0.68rem] font-mono text-slate-400 border-b border-slate-800 pb-1.5">
                    <span className="flex items-center gap-1 text-sky-400 font-bold">
                      <Globe2 className="w-3 h-3" /> GLOBAL ASSET MESH
                    </span>
                    <span className="text-emerald-400 font-bold">● 99.9% UPTIME</span>
                  </div>
                  <div className="h-14 w-full rounded-md border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-blue-900/30 to-sky-950/40 p-2.5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[0.6rem] font-mono text-sky-300 font-bold">CROSS-DISCIPLINE SYNC</div>
                      <div className="text-base font-bold font-mono text-white">14 REGIONS ACTIVE</div>
                    </div>
                    <Workflow className="w-5 h-5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 relative z-10 pt-3 border-t border-slate-800 text-center text-[0.68rem] font-mono">
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">GIS TEAMS</div>
                    <div className="text-xs font-bold text-white">24 GLOBAL</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">LATENCY</div>
                    <div className="text-xs font-bold text-sky-400">&lt;14ms</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">SECURITY</div>
                    <div className="text-xs font-bold text-emerald-400">ENTERPRISE</div>
                  </div>
                </div>
              </div>
            )}

            {card.previewType === 'cloud' && (
              <div className="relative min-h-[170px] sm:min-h-[190px] rounded-lg bg-slate-950 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="space-y-2.5 relative z-10">
                  <div className="flex items-center justify-between text-[0.68rem] font-mono text-slate-400 border-b border-slate-800 pb-1.5">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <Server className="w-3 h-3" /> AUTOMATED SDI ETL STREAM
                    </span>
                    <span className="text-emerald-400 font-bold">HEALTHY</span>
                  </div>
                  <div className="h-14 w-full rounded-md border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-900/30 to-emerald-950/40 p-2.5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-[0.6rem] font-mono text-emerald-300 font-bold">INGESTION PIPELINE RATE</div>
                      <div className="text-base font-bold font-mono text-white">2.4 GB / SEC</div>
                    </div>
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 relative z-10 pt-3 border-t border-slate-800 text-center text-[0.68rem] font-mono">
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">SERVICES</div>
                    <div className="text-xs font-bold text-white">REST / OGC</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">STORAGE</div>
                    <div className="text-xs font-bold text-emerald-400">CLOUD SDI</div>
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.58rem] text-slate-400">REFRESH</div>
                    <div className="text-xs font-bold text-lime-400">AUTOMATED</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>

      </motion.div>
    </motion.article>
  );
}

// Main Section Export
export function StickyStackServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="services" 
      className="relative z-10 overflow-visible py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,107,0,0.05),transparent_30rem),radial-gradient(circle_at_78%_20%,rgba(56,189,248,0.05),transparent_28rem)]" />

      {/* Header Title */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
          OUR OIL & GAS CONSULTING SERVICES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Subsurface Expertise Meets Modern Spatial Data
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-normal max-w-2xl mx-auto">
          Explore our domain-led consulting services designed to transform E&P data into governed enterprise spatial intelligence.
        </p>
      </div>

      {/* STICKY STACKING CARDS GRID (Parent with bottom padding pb-[35vh]) */}
      <div className="grid gap-6 sm:gap-10 pb-[35vh] overflow-visible">
        {serviceCardsData.map((card, index) => (
          <StickyCardItem 
            key={card.number} 
            card={card} 
            index={index} 
            totalCards={serviceCardsData.length}
            shouldReduceMotion={shouldReduceMotion} 
          />
        ))}
      </div>
    </section>
  );
}
