import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Sparkles, Layers, Code2 } from 'lucide-react';
import { TopoContourWatermark } from '../common/GisUtilityBackgroundWatermarks';

export function BrandStatementSection() {
  return (
    <section className="relative bg-[#FAFAFD] py-28 border-b border-slate-200 overflow-hidden">
      {/* Topographic Contour Watermark Background */}
      <TopoContourWatermark position="center" className="opacity-20" />

      {/* Background ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#FF6B00]/10 to-[#FF8800]/10 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Statement Big Text */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            OUR MANIFESTO
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            We are a <span className="italic font-extrabold text-gradient">design-led software & GIS engineering studio</span>, building mission-critical infrastructure for the world's utility and telecom networks.
          </h2>

          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            We believe utility and telecom networks shouldn't compromise on precision or speed. By combining geospatial intelligence, real-time SCADA & IoT telemetry, and private enterprise AI, we build GIS platforms that scale without friction.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group hover:border-[#FF6B00]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Zero-Downtime Reliability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Systems designed for mission-critical operations across national power grids, telecommunications, and high-concurrency SaaS applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group hover:border-[#FF6B00]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Geospatial Intelligence
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Proprietary spatial data models, rUNr® migration engine, and interactive GIS mapping built for enterprise telecom and utilities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group hover:border-[#FF6B00]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
              Autonomous AI Workflows
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Secure on-premise RAG hubs, custom fine-tuned LLM agents, and automated data pipelines tuned for domain-specific accuracy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
