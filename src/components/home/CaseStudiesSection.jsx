import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Database, Globe, Network, Cpu, ShieldCheck, Zap, Activity, Server, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RUNrMigrationPlatformCard } from '../common/RUNrMigrationPlatformCard';

const caseStudiesData = [
  {
    id: 'runr-utility-network-migration',
    num: '01',
    category: 'GIS & Telecom Infrastructure',
    title: 'rUNr® Utility Network Migration Engine',
    urlSlug: 'utility-network-migration',
    url: 'inovaantage.com/case-studies/utility-network-migration',
    description: "End-to-end migration of legacy utility networks into ESRI's Utility Network model — powered by our proprietary rUNr® engine for zero data loss.",
    tags: ['Esri UN', 'rUNr® Engine', 'Spatial ETL', 'FME', 'ArcGIS Enterprise'],
    stats: '99.99% Migration Accuracy · Zero Data Loss',
    client: 'Global Utility Provider',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#FF6B00] via-[#7B61FF] to-[#00F0FF]',
    isInteractiveCard: true
  },
  {
    id: '5g-fiber-telemetry',
    num: '02',
    category: 'IoT & Telecommunications',
    title: '5G Fiber Grid Telemetry Platform',
    urlSlug: '5g-fiber-grid-telemetry',
    url: 'inovaantage.com/case-studies/5g-fiber-grid-telemetry',
    description: 'Real-time telemetry stream processing hub tracking 5G optical fiber nodes, signal quality, and automated grid outage localization.',
    tags: ['Apache Kafka', '5G Fiber', 'TimescaleDB', 'Go Microservices'],
    stats: '1.2M Events/Sec · <10ms Latency',
    client: 'Tier-1 Telecom Operator',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#00F0FF] via-indigo-600 to-[#FF2E93]'
  },
  {
    id: 'enterprise-gis-data-lake',
    num: '03',
    category: 'Geospatial Data Engineering',
    title: 'Enterprise GIS Data Lake & Governance Platform',
    urlSlug: 'gis-data-lake-governance',
    url: 'inovaantage.com/case-studies/gis-data-lake-governance',
    description: 'Centralized spatial data lake with automated enrichment, QA/QC validation, and governance workflows — processing millions of utility asset records.',
    tags: ['ArcGIS', 'Python', 'PostGIS', 'AWS'],
    stats: '50M+ Records Reconciled · Sub-Second Queries',
    client: 'National Energy Grid',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-[#7B61FF] via-[#FF6B00] to-cyan-400'
  },
  {
    id: 'smart-grid-predictive-maintenance',
    num: '04',
    category: 'Clean Energy & Smart Utilities',
    title: 'Smart Grid Predictive Maintenance Portal',
    urlSlug: 'smart-grid-predictive-maintenance',
    url: 'inovaantage.com/case-studies/smart-grid-predictive-maintenance',
    description: 'AI-driven grid anomaly detection, transformer load forecasting, and automated outage prevention for renewable energy transmission networks.',
    tags: ['SCADA / ADMS', 'PyTorch', 'IoT Sensors', 'Databricks'],
    stats: '94.2% Fault Prediction · 35% Outage Reduction',
    client: 'Renewable Power Transmission',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-emerald-400 via-teal-500 to-[#7B61FF]'
  }
];

export function CaseStudiesSection() {
  // Card 03 (index 2: Enterprise GIS Data Lake) is expanded/active by default
  const [activeIdx, setActiveIdx] = useState(2);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeProject = caseStudiesData[activeIdx];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // -6 to +6 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12; // -6 to +6 deg
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Render distinct domain-specific UI preview widgets for each card
  const renderCardVisualWidget = (project) => {
    switch (project.num) {
      case '02':
        // 5G Fiber Grid Telemetry Dashboard UI Widget
        return (
          <div className="w-full p-4 rounded-2xl bg-black/75 border border-[#00F0FF]/40 backdrop-blur-md space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-electric font-bold flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-electric" />
                5G Fiber Node Telemetry Stream
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-electric border border-cyan-500/40">
                LIVE 1.2M EVT/S
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Optical Signal Quality</span>
                <div className="text-lg font-extrabold text-white mt-0.5">99.98%</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-cyan-electric h-full w-[98%]" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Network Latency</span>
                <div className="text-lg font-extrabold font-mono text-[#FF2E93] mt-0.5">&lt; 8.4ms</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#FF2E93] h-full w-[95%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case '03':
        // Enterprise GIS Data Lake & Governance UI Widget
        return (
          <div className="w-full p-4 rounded-2xl bg-black/75 border border-[#7B61FF]/50 backdrop-blur-md space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#7B61FF] font-bold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#7B61FF]" />
                PostGIS & Esri Spatial Data Lake
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/40">
                50M+ ASSETS SYNCED
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400">QA/QC</div>
                <div className="text-sm font-extrabold text-white mt-0.5">100% Pass</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400">ArcGIS Lake</div>
                <div className="text-sm font-extrabold text-cyan-electric mt-0.5">Active</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] font-mono text-slate-400">Queries</div>
                <div className="text-sm font-extrabold text-[#FF6B00] mt-0.5">&lt; 0.2s</div>
              </div>
            </div>
          </div>
        );

      case '04':
        // Smart Grid Predictive Maintenance Portal UI Widget
        return (
          <div className="w-full p-4 rounded-2xl bg-black/75 border border-emerald-400/50 backdrop-blur-md space-y-3 shadow-xl">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                Grid Transformer T-804 AI Monitor
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                HEALTHY · 94.2% AI ACCURACY
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Fault Risk Prediction</div>
                <div className="text-base font-extrabold text-white mt-0.5">0.02% Outage Risk</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Outage Prevented</div>
                <div className="text-base font-extrabold text-emerald-400 mt-0.5">-35% Blackouts</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative bg-[#050507] py-28 border-b border-white/10 select-none overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#7B61FF]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6B00]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-cyan-electric mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric animate-ping" />
              Featured Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Engineering <span className="text-gradient">Digital Backbone</span> Solutions.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#FF6B00] hover:text-[#ff8533] transition-colors shrink-0 group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main Grid: Large Left Browser Preview Mockup (7 cols) + Right Stacked Cards List (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: LARGE BROWSER-WINDOW MOCKUP PREVIEW CARD */}
          <div
            className="lg:col-span-7 perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{ rotateX: mousePos.y, rotateY: mousePos.x }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="glass-panel p-3 sm:p-5 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/10 to-white/[0.02]"
            >
              {/* Top Browser Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 rounded-t-2xl border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Synced URL Bar */}
                <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 truncate max-w-[280px] sm:max-w-[360px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{activeProject.url}</span>
                </div>

                <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center text-[9px] font-mono text-slate-400">
                  ⚡
                </div>
              </div>

              {/* Crossfading Preview Visual Container */}
              <AnimatePresence mode="wait">
                {activeProject.isInteractiveCard ? (
                  <motion.div
                    key="runr-interactive"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                  >
                    <RUNrMigrationPlatformCard />
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/90 border border-white/10 flex flex-col justify-between p-6 shadow-2xl"
                  >
                    {/* Unique Domain Background Image with distinct visual tone */}
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-500"
                    />

                    {/* Gradient Overlay for crisp text contrast */}
                    <motion.div
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className={`absolute inset-0 opacity-50 bg-gradient-to-br ${activeProject.gradient} blur-[60px] pointer-events-none`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 pointer-events-none" />

                    {/* Top Overlay Category Badge & Icon */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 border border-white/20 text-cyan-electric backdrop-blur-md">
                          <ShieldCheck className="w-3 h-3 text-[#FF6B00]" />
                          {activeProject.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-3 drop-shadow-md">
                          {activeProject.title}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-full glass-panel border border-white/20 flex items-center justify-center text-white shrink-0 shadow-lg">
                        <activeProject.icon className="w-5 h-5 text-cyan-electric animate-pulse" />
                      </div>
                    </div>

                    {/* Center Custom Domain UI Widget (Distinct for each case study) */}
                    <div className="relative z-10 my-auto py-2">
                      {renderCardVisualWidget(activeProject)}
                    </div>

                    {/* Bottom Overlay Stat Bar */}
                    <div className="relative z-10 flex items-center justify-between p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 shadow-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] animate-pulse" />
                        <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-tight">
                          {activeProject.stats}
                        </span>
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        {activeProject.client}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT: STACKED LIST OF 4 CASE STUDY CARDS (01-04) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="space-y-4"
            >
              {caseStudiesData.map((project, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                    }}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-white/[0.07] border-[#7B61FF]/70 shadow-xl shadow-[#7B61FF]/15'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Category Label & Card Number Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider group-hover:text-cyan-electric transition-colors">
                        {project.category}
                      </span>
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40'
                          : 'bg-white/5 text-slate-500 border border-white/10'
                      }`}>
                        {project.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold font-heading transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {project.title}
                    </h3>

                    {/* Active/Expanded Card Content: Smooth Expand Transition */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-slate-300 leading-relaxed font-normal mt-3">
                            {project.description}
                          </p>

                          {/* Staggered Tag Pills */}
                          <motion.div
                            initial="hidden"
                            animate="show"
                            variants={{
                              hidden: { opacity: 0 },
                              show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 }
                              }
                            }}
                            className="flex flex-wrap gap-1.5 pt-3"
                          >
                            {project.tags.map((tag) => (
                              <motion.span
                                key={tag}
                                variants={{
                                  hidden: { opacity: 0, y: 5 },
                                  show: { opacity: 1, y: 0 }
                                }}
                                className="px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-white/10 text-slate-200 border border-white/10 hover:border-cyan-electric/40 transition-colors"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
