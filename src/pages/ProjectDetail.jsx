import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ExternalLink, Zap, Award, Layers } from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="relative pt-24 pb-16">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-cyan-electric hover:text-cyan-glow mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/20 w-fit">
            {project.categoryLabel}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* RESULTS METRICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold font-heading text-white mb-6">Key Results & Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.results.map((res, idx) => (
            <GlassCard key={idx} glow className="p-6 text-center space-y-1">
              <div className="text-3xl font-extrabold font-heading text-cyan-electric">{res.metric}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{res.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 space-y-4">
            <h3 className="text-2xl font-bold font-heading text-rose-400">The Technical Challenge</h3>
            <p className="text-slate-300 leading-relaxed text-base">{project.challenge}</p>
          </GlassCard>

          <GlassCard className="p-8 space-y-4">
            <h3 className="text-2xl font-bold font-heading text-cyan-electric">The NexaTech Solution</h3>
            <p className="text-slate-300 leading-relaxed text-base">{project.solution}</p>
          </GlassCard>
        </div>
      </section>

      {/* TECH STACK BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold font-heading text-white mb-6">Technology Stack Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-mono text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <GlassCard glow className="p-12">
          <h3 className="text-3xl font-extrabold font-heading text-white mb-4">
            Build Your Enterprise Product With NexaTech
          </h3>
          <p className="text-slate-300 max-w-lg mx-auto text-base mb-8">
            Let's discuss how we can engineer similar results for your technology platform.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon>
            Start Project Discussion
          </Button>
        </GlassCard>
      </section>
    </div>
  );
}
