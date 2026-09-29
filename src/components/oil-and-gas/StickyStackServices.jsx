import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  Workflow, 
  Cloud, 
  CheckCircle2, 
  ArrowUpRight,
  Database,
  Cpu,
  Layers,
  Globe2,
  Activity,
  Server
} from 'lucide-react';

// Service Cards Data Definition — Enhanced with full authoritative text
const serviceCardsData = [
  {
    number: '01',
    tag: 'E&P WORKFLOWS',
    title: 'Domain Translation — Subsurface to Spatial',
    headline: 'Bridge the gap between subsurface science, spatial data and modern technology.',
    description: 'Complex subsurface information needs to be understood in the context of how exploration and production teams actually work. Our consultants bring knowledge of key E&P workflows—including seismic interpretation, well and log data, geological modelling, basin analysis and subsurface data management—and translate these requirements into robust spatial data frameworks.',
    features: [
      'Translate subsurface concepts and workflows into spatial data models',
      'Structure seismic, well, geological and interpretation datasets for GIS environments',
      'Develop spatial frameworks that reflect real-world E&P workflows',
      'Standardize complex datasets for consistent use across teams and applications',
      'Automate repetitive data preparation and spatial processing workflows',
      'Connect subsurface information with broader enterprise geospatial datasets'
    ],
    callout: {
      label: 'RESULT',
      text: 'A clear connection between subsurface interpretation and the spatial information used across the wider organization.'
    },
    chips: [
      'Seismic Interpretation',
      'Well & Log Data',
      'Geological Modelling',
      'Basin Analysis',
      'Subsurface Data Management'
    ],
    accent: 'from-[#FF6B00] via-[#FF8800] to-amber-500',
    glow: 'shadow-[#FF6B00]/15 hover:shadow-[#FF6B00]/25',
    buttonColor: 'bg-[#FF6B00] text-white',
    badgeText: 'E&P GIS INTEGRATION',
    badgeIcon: Sparkles,
    previewWindowLabel: 'Subsurface GIS Workbench',
    links: [
      { label: 'Talk to Inovaantage', url: '/contact' },
      { label: 'Explore Workflows', url: '#pipeline' }
    ],
    previewType: 'subsurface'
  },
  {
    number: '02',
    tag: 'MULTIDISCIPLINARY DELIVERY',
    title: 'Scalable Operations & Delivery',
    headline: 'Design and delivery of multidisciplinary teams spanning geoscience, GIS, and data engineering.',
    description: 'Modern Oil & Gas data programs require collaboration across multiple specialist disciplines. Inovaantage can support the design and delivery of multidisciplinary teams spanning geoscience, GIS, data engineering and software development. We provide delivery leadership and technical oversight to help operators establish repeatable processes and scalable data architectures.',
    features: [
      'Multidisciplinary team leadership and coordination',
      'Data architecture and information modelling',
      'GIS and spatial data engineering',
      'Geoscience and subsurface data integration',
      'Data quality and governance frameworks',
      'Workflow standardization and automation',
      'Delivery models designed for mid-tier and major Oil & Gas operators',
      'Transitioning from project-based data management to sustainable operational capabilities'
    ],
    callout: {
      label: 'FOCUS',
      text: 'We focus on building delivery models that can scale across assets, regions, disciplines and business units while maintaining consistency and data quality.'
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
    previewWindowLabel: 'Multidisciplinary Operations Telemetry',
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
    headline: 'Modernize legacy desktop environments into cloud-based enterprise spatial infrastructures.',
    description: 'Traditional subsurface mapping environments can be highly dependent on static datasets, desktop applications and fragmented workflows. We help Oil & Gas organizations modernize these environments by connecting subsurface data with cloud-based, automated and enterprise spatial data infrastructures.',
    features: [
      'Modernizing legacy subsurface and spatial datasets',
      'Designing cloud-ready spatial data architectures',
      'Migrating data from legacy environments into modern GIS platforms',
      'Building automated data ingestion and transformation pipelines',
      'Integrating subsurface, well, geological and spatial datasets',
      'Establishing scalable spatial databases and services',
      'Supporting enterprise GIS and cloud adoption',
      'Creating automated workflows for data refresh, validation and distribution'
    ],
    callout: {
      label: 'OBJECTIVE',
      text: 'The objective is to move from static maps and disconnected datasets to dynamic, governed and reusable spatial information.'
    },
    chips: [
      'Cloud GIS',
      'Automated ETL',
      'Spatial Databases',
      'Web Map Services',
      'Real-time Pipelines'
    ],
    accent: 'from-emerald-500 via-teal-500 to-lime-400',
    glow: 'shadow-emerald-500/15 hover:shadow-emerald-500/25',
    buttonColor: 'bg-emerald-600 text-white',
    badgeText: 'CLOUD INFRASTRUCTURE',
    badgeIcon: Cloud,
    previewWindowLabel: 'Cloud SDI Architecture Monitor',
    links: [
      { label: 'Talk to Inovaantage', url: '/contact' },
      { label: 'View Data Pipeline', url: '#pipeline' }
    ],
    previewType: 'cloud'
  }
];

// Single Sticky Card Component with Scroll Depth Scaling & Dimming
function StickyCardItem({ card, index, totalCards, shouldReduceMotion }) {
  const cardRef = useRef(null);
  
  // Track scroll position of card for scale-down & dimming depth effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start']
  });

  // Scale down (1 -> 0.93) & Dim (opacity 1 -> 0.65) when covered by next card
  const isLast = index === totalCards - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, isLast ? 1 : 0.85, isLast ? 1 : 0.65]);

  const BadgeIcon = card.badgeIcon;

  return (
    <motion.article
      ref={cardRef}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 72, scale: 0.985 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky overflow-hidden rounded-[1.6rem] sm:rounded-[2.2rem] lg:rounded-[2.8rem] border-2 border-slate-200/90 bg-white p-5 sm:p-8 lg:p-11 shadow-2xl transition-colors duration-300 hover:border-[#FF6B00]/70 group cursor-default"
      style={{
        zIndex: 20 + index,
        top: `${6 + index * 1.75}rem`
      }}
    >
      {/* Decorative Inner Wrapper (absolute inset-0 rounded-[inherit]) */}
      <div className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
        <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${card.accent}`} />
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF6B00]/05 via-amber-400/05 to-transparent blur-3xl" />
        <div className="absolute inset-0 gis-grid-pattern opacity-10" />
      </div>

      {/* Inner Scalable / Dimmable Motion Layer (Bonus Depth Effect) */}
      <motion.div 
        style={shouldReduceMotion ? {} : { scale, opacity }}
        className="relative z-10 flex flex-col gap-8"
      >
        
        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="flex items-start gap-4 sm:gap-7">
            <span className={`text-6xl sm:text-8xl font-black font-heading leading-none tracking-tight bg-gradient-to-br ${card.accent} bg-clip-text text-transparent select-none shrink-0`}>
              {card.number}
            </span>
            <div className="space-y-1.5">
              <span className={`bg-gradient-to-r ${card.accent} bg-clip-text text-xs font-mono font-black uppercase tracking-[0.3em] text-transparent block`}>
                {card.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Right Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {card.links.map((link, lIdx) => (
              <motion.a
                key={lIdx}
                href={link.url}
                whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="group/btn inline-flex items-center gap-2.5 rounded-full border border-slate-300/80 bg-slate-50 hover:bg-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-mono font-bold text-slate-800 shadow-xs hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all cursor-pointer"
              >
                <span>{link.label}</span>
                <span className={`grid h-6 w-6 place-items-center rounded-full ${card.buttonColor} text-white transition-transform duration-300 group-hover/btn:rotate-45 shadow-xs`}>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* BODY (2-COLUMN LAYOUT) */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          
          {/* LEFT COLUMN: HEADLINE, DESCRIPTION, FEATURES & CHIPS */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-extrabold leading-tight font-heading text-slate-900">
              {card.headline}
            </p>
            
            <p className="text-base leading-relaxed text-slate-600 font-normal">
              {card.description}
            </p>

            {/* Checklist */}
            <div className="pt-1">
              <h4 className="text-xs font-bold font-mono text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BadgeIcon className="w-4 h-4 text-[#FF6B00]" />
                <span>WE HELP ORGANIZATIONS / CAPABILITIES:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {card.features.map((feat, fIdx) => (
                  <motion.div 
                    key={fIdx}
                    whileHover={shouldReduceMotion ? {} : { x: 5 }}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium group/feat"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-100/90 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5 group-hover/feat:bg-[#FF6B00] group-hover/feat:text-white transition-colors">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="group-hover/feat:text-[#FF6B00] transition-colors">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Result / Focus / Objective Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-orange-50/90 border-2 border-[#FF6B00]/30 shadow-md flex items-center gap-3.5">
              <span className="px-2.5 py-1 rounded-md bg-[#FF6B00] text-white text-xs font-mono font-bold uppercase shrink-0 shadow-xs">
                {card.callout.label}
              </span>
              <span className="text-xs sm:text-sm text-slate-900 font-semibold leading-snug">
                {card.callout.text}
              </span>
            </div>

            {/* Chips */}
            <div className="pt-2">
              <span className="text-[0.68rem] font-mono text-slate-500 font-bold block mb-2 uppercase tracking-wider">
                SCOPE & DISCIPLINE CHIPS:
              </span>
              <div className="flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-1.5 text-xs font-mono font-bold text-slate-700 transition duration-200 hover:-translate-y-1 hover:border-[#FF6B00] hover:bg-orange-50 hover:text-[#FF6B00] cursor-pointer shadow-xs"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREVIEW BOX (WINDOW HEADER WITH 3 DOTS + GRAPHICAL WIDGET) */}
          <motion.div 
            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.025 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-900 p-4 sm:p-6 shadow-2xl text-white group/preview"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 mb-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                {card.previewWindowLabel}
              </span>
            </div>

            {/* Visual Content inside Preview Box */}
            {card.previewType === 'subsurface' && (
              <div className="relative min-h-[220px] sm:min-h-[260px] rounded-xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-[#FF6B00]/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Simulated Stratigraphic Visual */}
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-[#FF6B00] font-bold">
                      <Layers className="w-3.5 h-3.5" /> SEISMIC HORIZON ALPHA
                    </span>
                    <span>3,420m TVD</span>
                  </div>
                  <div className="h-16 w-full rounded-lg border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-amber-900/30 to-orange-950/40 p-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[0.68rem] font-mono text-orange-300 font-bold">PERMEABILITY INDEX</div>
                      <div className="text-lg font-bold font-mono text-white">412 mD</div>
                    </div>
                    <Activity className="w-6 h-6 text-[#FF6B00] animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-10 pt-4 border-t border-slate-800 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">WELLBORES</div>
                    <div className="text-sm font-bold text-white">128 ACTIVE</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">CRS</div>
                    <div className="text-sm font-bold text-emerald-400">WGS84 UTM</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">STATUS</div>
                    <div className="text-sm font-bold text-[#FF6B00]">GOVERNED</div>
                  </div>
                </div>
              </div>
            )}

            {card.previewType === 'telemetry' && (
              <div className="relative min-h-[220px] sm:min-h-[260px] rounded-xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-sky-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                      <Globe2 className="w-3.5 h-3.5" /> GLOBAL ASSET MESH
                    </span>
                    <span className="text-emerald-400 font-bold">● 99.9% UPTIME</span>
                  </div>
                  <div className="h-16 w-full rounded-lg border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-blue-900/30 to-sky-950/40 p-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[0.68rem] font-mono text-sky-300 font-bold">CROSS-DISCIPLINE SYNC</div>
                      <div className="text-lg font-bold font-mono text-white">14 REGIONS ACTIVE</div>
                    </div>
                    <Workflow className="w-6 h-6 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-10 pt-4 border-t border-slate-800 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">GIS TEAMS</div>
                    <div className="text-sm font-bold text-white">24 GLOBAL</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">LATENCY</div>
                    <div className="text-sm font-bold text-sky-400">&lt;14ms</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">SECURITY</div>
                    <div className="text-sm font-bold text-emerald-400">ENTERPRISE</div>
                  </div>
                </div>
              </div>
            )}

            {card.previewType === 'cloud' && (
              <div className="relative min-h-[220px] sm:min-h-[260px] rounded-xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <Server className="w-3.5 h-3.5" /> AUTOMATED SDI ETL STREAM
                    </span>
                    <span className="text-emerald-400 font-bold">HEALTHY</span>
                  </div>
                  <div className="h-16 w-full rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-900/30 to-emerald-950/40 p-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-[0.68rem] font-mono text-emerald-300 font-bold">INGESTION PIPELINE RATE</div>
                      <div className="text-lg font-bold font-mono text-white">2.4 GB / SEC</div>
                    </div>
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 relative z-10 pt-4 border-t border-slate-800 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">SERVICES</div>
                    <div className="text-sm font-bold text-white">REST / OGC</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">STORAGE</div>
                    <div className="text-sm font-bold text-emerald-400">CLOUD SDI</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[0.62rem] text-slate-400">REFRESH</div>
                    <div className="text-sm font-bold text-lime-400">AUTOMATED</div>
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
      className="relative z-10 overflow-visible py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,107,0,0.06),transparent_30rem),radial-gradient(circle_at_78%_20%,rgba(56,189,248,0.06),transparent_28rem)]" />

      {/* Header Title */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
          OUR OIL & GAS CONSULTING SERVICES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
          Subsurface Expertise Meets Modern Spatial Data
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto">
          Explore our domain-led consulting services designed to transform E&P data into governed enterprise spatial intelligence.
        </p>
      </div>

      {/* STICKY STACKING CARDS GRID (Parent with bottom padding pb-[45vh] lg:pb-[35vh]) */}
      <div className="grid gap-8 sm:gap-12 lg:gap-16 pb-[45vh] lg:pb-[35vh] overflow-visible">
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
