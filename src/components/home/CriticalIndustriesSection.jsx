import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Zap, Truck, Check, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const industriesData = [
  {
    id: 'telecom',
    tabLabel: 'Telecom',
    tabIcon: Radio,
    badgeEmoji: '⚡',
    heading: 'Telecom Network Intelligence',
    description: 'End-to-end OSS/BSS implementation, GIS-based network management, and fiber infrastructure digitization for modern telecom operators.',
    checklist: [
      'OSS/BSS platform implementation & integration',
      'Fiber & duct network GIS migration',
      'Workforce management for field teams',
      'Network performance analytics & dashboards'
    ],
    stats: [
      { value: '40+', label: 'Telecom Projects' },
      { value: '99.9%', label: 'Migration Accuracy' }
    ],
    previewIcon: Radio,
    gradient: 'from-[#FF6B00]/20 via-[#7B61FF]/10 to-transparent',
    accentColor: '#FF6B00'
  },
  {
    id: 'utilities',
    tabLabel: 'Utilities',
    tabIcon: Zap,
    badgeEmoji: '🔋',
    heading: 'Smart Utility Operations',
    description: 'SCADA, ADMS, AMI, and GIS solutions for electricity, gas, and water utilities — enabling real-time network control and operational excellence.',
    checklist: [
      'SCADA & ADMS deployment for grid control',
      'AMI smart metering infrastructure',
      'GIS-based outage management (Energize & Deenergize)',
      'ArcGIS Utility Network migration'
    ],
    stats: [
      { value: '70-90%', label: 'Migration Time Saved' },
      { value: '10', label: 'Countries Served' }
    ],
    previewIcon: Zap,
    gradient: 'from-amber-500/20 via-[#FF6B00]/10 to-transparent',
    accentColor: '#FF8800'
  },
  {
    id: 'transportation',
    tabLabel: 'Transportation',
    tabIcon: Truck,
    badgeEmoji: '🚚',
    heading: 'Logistics & Transport Solutions',
    description: 'Field force management, route optimization, and geospatial analytics for transportation and logistics operators.',
    checklist: [
      'Fuerza field force management platform',
      'Real-time GPS tracking & route optimization',
      'GIS-based logistics intelligence',
      'Operational dashboards & reporting'
    ],
    stats: [
      { value: '24/7', label: 'Platform Support' },
      { value: 'ISO', label: '27001 Certified' }
    ],
    previewIcon: Truck,
    gradient: 'from-cyan-electric/20 via-[#7B61FF]/10 to-transparent',
    accentColor: '#00F0FF'
  }
];

export function CriticalIndustriesSection() {
  const [activeTab, setActiveTab] = useState('telecom');
  const activeIndustry = industriesData.find((item) => item.id === activeTab) || industriesData[0];

  return (
    <section id="industries" className="relative bg-[#FAFAFD] py-28 border-b border-slate-200 select-none overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF8800]/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
            INDUSTRIES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Built for <span className="text-gradient">Critical Industries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 max-w-2xl">
            Sector-deep expertise across utilities, telecoms, transportation, and logistics.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {industriesData.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComp = tab.tabIcon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold font-mono transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#FF6B00]/40 hover:bg-slate-50'
                }`}
              >
                <span>{tab.badgeEmoji}</span>
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
          >
            {/* LEFT COLUMN: Text Details, Checklist & Action Buttons (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                  {activeIndustry.heading}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeIndustry.description}
                </p>

                {/* Checklist with Orange Checkmarks */}
                <div className="space-y-3 pt-4">
                  {activeIndustry.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-full bg-[#FF6B00] hover:bg-[#ff8533] text-white font-bold font-mono text-sm transition-all shadow-lg shadow-[#FF6B00]/25 flex items-center gap-2 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full border border-[#FF6B00] text-[#FF6B00] font-bold font-mono text-sm hover:bg-orange-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Glass Preview Card with Stats (5 Cols) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 relative overflow-hidden flex flex-col justify-between shadow-xl">
              
              {/* Background ambient radial tint */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${activeIndustry.gradient} blur-3xl pointer-events-none`} />

              <div>
                {/* 3D Graphic Node Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#FF8800] p-0.5 shadow-xl shadow-[#FF6B00]/25 mb-6">
                  <div className="w-full h-full bg-[#FF6B00] rounded-[14px] flex items-center justify-center text-white">
                    <activeIndustry.previewIcon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold font-heading text-slate-900 mb-2">
                  {activeIndustry.heading}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Bottom Stat Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200 relative z-10">
                {activeIndustry.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF6B00]/40 transition-colors">
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FF6B00]">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
