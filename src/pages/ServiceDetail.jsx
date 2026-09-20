import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { services } from '../data/services';

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = service.icon;

  return (
    <div className="relative pt-24 pb-16">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-cyan-electric hover:text-cyan-glow mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-start space-y-6 max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-electric/20 to-violet-glow/20 border border-cyan-electric/30 flex items-center justify-center text-cyan-electric">
              <IconComponent className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-electric/10 text-cyan-electric border border-cyan-electric/20">
              SERVICE ID: {service.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>

          <Button to="/contact" variant="primary" size="lg" showIcon>
            Schedule Service Inquiry
          </Button>
        </div>
      </section>

      {/* WHAT WE BUILD / CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-white mb-8">What We Deliver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, idx) => (
            <GlassCard key={idx} className="p-6 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-electric/10 border border-cyan-electric/20 flex items-center justify-center text-cyan-electric shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-base text-slate-200 font-medium leading-snug">{cap}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GlassCard className="p-8">
          <h3 className="text-xl font-bold font-heading text-white mb-6">Core Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-mono text-sm font-semibold hover:border-cyan-electric/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-white mb-8">Key Commercial Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.benefits.map((benefit, idx) => (
            <GlassCard key={idx} glow className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violet-glow/20 border border-violet-glow/30 flex items-center justify-center text-violet-accent">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-white">{benefit.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <GlassCard glow className="p-12">
          <h3 className="text-3xl font-extrabold font-heading text-white mb-4">
            Ready to Build Your {service.title} Solution?
          </h3>
          <p className="text-slate-300 max-w-lg mx-auto text-base mb-8">
            Get in touch with our tech lead for a detailed scope, architecture preview, and estimate.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon>
            Start Your Project
          </Button>
        </GlassCard>
      </section>
    </div>
  );
}
