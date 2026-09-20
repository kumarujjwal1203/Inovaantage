import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2, Radio, Truck, Network, Database } from 'lucide-react';

const challengeSolutionData = [
  {
    id: 'network-intelligence',
    category: 'TELECOM SOLUTIONS',
    title: 'Network Intelligence',
    icon: Radio,
    challenge: 'Manual, inconsistent mapping of fiber and duct infrastructure leads to planning errors and costly rework.',
    solution: 'GIS-native conduit & duct management with ConduitPro® — fully integrated into ESRI Utility Network.',
    accentColor: '#FF6B00'
  },
  {
    id: 'field-force-management',
    category: 'LOGISTICS OPTIMIZATION',
    title: 'Field Force Management',
    icon: Truck,
    challenge: 'Disconnected field teams, manual scheduling, and zero real-time visibility across distributed operations.',
    solution: "Fuerza's intelligent field force management with live GPS tracking, automated dispatch, and mobile offline support.",
    accentColor: '#FF8800'
  },
  {
    id: 'utility-migration',
    category: 'UTILITY NETWORK MIGRATION',
    title: 'rUNr® Data Integrity',
    icon: Network,
    challenge: 'High risk of data loss, topology breakages, and months of system downtime when converting legacy CAD/GIS to Esri UN.',
    solution: 'Proprietary rUNr® automated migration engine delivering 99.99% data integrity with zero operational downtime.',
    accentColor: '#00F0FF'
  },
  {
    id: 'spatial-data-lake',
    category: 'ENTERPRISE GIS GOVERNANCE',
    title: 'Spatial Data Lake',
    icon: Database,
    challenge: 'Siloed spatial data, sluggish spatial query speeds, and lack of automated topological validation across asset records.',
    solution: 'Centralized spatial data lake architecture delivering sub-second queries and automated continuous governance.',
    accentColor: '#7B61FF'
  }
];

export function WhyInovaantageSection() {
  return (
    <section id="why-inovaantage" className="relative bg-[#050507] py-28 border-b border-white/10 select-none overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#7B61FF]/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-[#FF6B00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
            CHALLENGE VS. SOLUTION
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Why <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-amber-400 bg-clip-text text-transparent">Inovaantage</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light mt-3 max-w-2xl">
            We solve the problems that generic IT vendors can't — because we're built for your industry.
          </p>
        </div>

        {/* 2x2 Grid of Challenge vs Solution Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {challengeSolutionData.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                whileHover={{ y: -6 }}
                className="group glass-panel p-7 sm:p-8 rounded-3xl border border-white/15 relative overflow-hidden bg-gradient-to-b from-white/[0.05] via-black/60 to-black/90 shadow-2xl flex flex-col justify-between"
              >
                {/* Background Concentric Circles Pattern in Top Right */}
                <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <svg className="w-full h-full text-[#FF6B00]" viewBox="0 0 200 200" fill="none">
                    <circle cx="160" cy="40" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="160" cy="40" r="80" stroke="currentColor" strokeWidth="2" />
                    <circle cx="160" cy="40" r="40" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </div>

                <div>
                  {/* Category Badge & Title */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className="text-[11px] font-mono font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/30">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-[#FF6B00]/50 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-6 relative z-10">
                    {item.title}
                  </h3>

                  {/* CHALLENGE Box */}
                  <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-4 relative z-10 group-hover:border-rose-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 mb-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400" />
                      <span>CHALLENGE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.challenge}
                    </p>
                  </div>

                  {/* SOLUTION Box */}
                  <div className="p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/40 relative z-10 group-hover:border-[#FF6B00] transition-colors shadow-lg shadow-[#FF6B00]/10">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF6B00] mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                      <span>SOLUTION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
