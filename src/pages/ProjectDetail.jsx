import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#e05e00] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30 w-fit shadow-xs">
            {project.categoryLabel}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* RESULTS METRICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold font-heading text-slate-900 mb-6">Key Results & Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.results.map((res, idx) => (
            <div key={idx} className="p-6 text-center space-y-1 bg-white rounded-2xl border border-slate-200 shadow-md">
              <div className="text-3xl font-extrabold font-heading text-[#FF6B00]">{res.metric}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{res.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 space-y-4 bg-white rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-rose-600">The Technical Challenge</h3>
            <p className="text-slate-600 leading-relaxed text-base font-normal">{project.challenge}</p>
          </div>

          <div className="p-8 space-y-4 bg-white rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-[#FF6B00]">The Inovaantage Solution</h3>
            <p className="text-slate-600 leading-relaxed text-base font-normal">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* TECH STACK BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl">
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-6">Technology Stack Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-sm font-bold shadow-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl">
          <h3 className="text-3xl font-extrabold font-heading text-slate-900 mb-4">
            Build Your Enterprise Product With Inovaantage
          </h3>
          <p className="text-slate-600 max-w-lg mx-auto text-base mb-8 font-normal">
            Let's discuss how we can engineer similar results for your technology platform.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
            Start Project Discussion
          </Button>
        </div>
      </section>
    </div>
  );
}
