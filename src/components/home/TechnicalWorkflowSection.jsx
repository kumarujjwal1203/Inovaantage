import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Database, Rocket, Workflow } from 'lucide-react';


const workflowSteps = [
  {
    num: '01',
    title: 'GIS Assessment',
    desc: 'Analyze utility networks, telecom infrastructure, spatial datasets, and operational requirements.',
    icon: Search
  },
  {
    num: '02',
    title: 'Network Design',
    desc: 'Design GIS architectures, fiber routes, telecom mapping systems, and geospatial workflows.',
    icon: MapPin
  },
  {
    num: '03',
    title: 'Data Integration',
    desc: 'Integrate telecom assets, GIS databases, spatial analytics, and enterprise platforms.',
    icon: Database
  },
  {
    num: '04',
    title: 'Deployment',
    desc: 'Deploy scalable GIS and telecom solutions with validation, monitoring, and 24×7 support.',
    icon: Rocket
  }
];

export function TechnicalWorkflowSection() {
  return (
    <section id="workflow" className="relative bg-[#FAFAFD] py-28 border-b border-slate-200 select-none overflow-hidden">


      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF8800]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="mb-20 text-left sm:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-ping" />
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Technical <span className="text-gradient">Workflow</span>
          </h2>
        </div>

        {/* Workflow Timeline Block */}
        <div className="relative">
          {/* Desktop/Tablet Horizontal Connecting Line behind circle nodes */}
          <div className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-[#FF6B00]/30 via-[#FF6B00] to-[#FF8800]/30 z-0" />

          {/* Staggered Grid of 4 Steps */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10"
          >
            {workflowSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                  }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col items-start md:items-center text-left md:text-center relative"
                >
                  {/* Glowing Circular Icon Node */}
                  <div className="relative mb-6">
                    {/* Pulsing ring aura on hover */}
                    <div className="absolute inset-0 rounded-full bg-[#FF6B00]/20 blur-md group-hover:scale-125 transition-transform duration-300" />
                    
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-[#FF6B00] flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300 shadow-xl shadow-[#FF6B00]/15">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Step Number Tag */}
                    <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FF6B00] text-white shadow-md">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2.5 group-hover:text-[#FF6B00] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
