import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Filter } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { projects } from '../data/projects';

const filterCategories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative pt-24 pb-16">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <SectionHeading
          badge="OUR PORTFOLIO"
          title="Engineered Products &"
          gradientTitle="Case Studies"
          description="Explore how we built mission-critical web applications, mobile platforms, and AI engines for industry leaders."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 my-8 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md max-w-md mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'text-black font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {selectedCategory === cat && (
                <motion.div
                  layoutId="portfolioFilterPill"
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8800] rounded-full shadow-md shadow-[#FF6B00]/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID WITH ANIMATE PRESENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard glow className="h-full flex flex-col justify-between group p-0 overflow-hidden">
                  <div>
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-electric border border-cyan-electric/30">
                        {project.categoryLabel}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-cyan-electric transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-cyan-electric font-semibold uppercase tracking-wider mb-3">
                        Client: {project.client}
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-cyan-electric hover:text-cyan-glow transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <GlassCard glow className="p-12">
          <h3 className="text-3xl font-extrabold font-heading text-white mb-4">
            Want to Build Something Similar?
          </h3>
          <p className="text-slate-300 max-w-lg mx-auto text-base mb-8">
            Tell us about your project vision and we’ll prepare a detailed architectural proposal.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon>
            Start Your Project
          </Button>
        </GlassCard>
      </section>
    </div>
  );
}
