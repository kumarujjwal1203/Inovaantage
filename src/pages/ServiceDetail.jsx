import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
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
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#e05e00] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-start space-y-6 max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shadow-xs">
              <IconComponent className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-orange-50 text-[#FF6B00] border border-[#FF6B00]/30 shadow-xs">
              SERVICE ID: {service.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            {service.fullDescription}
          </p>

          <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
            Schedule Service Inquiry
          </Button>
        </div>
      </section>

      {/* WHAT WE BUILD / CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">What We Deliver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="p-6 flex items-start gap-4 bg-white rounded-2xl border border-slate-200 shadow-md">
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-base text-slate-800 font-medium leading-snug">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES STACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl">
          <h3 className="text-xl font-bold font-heading text-slate-900 mb-6">Core Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono text-sm font-bold shadow-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Key Commercial Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 space-y-3 bg-white rounded-2xl border border-slate-200 shadow-md hover:border-slate-300">
              <div className="w-10 h-10 rounded-lg bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-900">{benefit.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl">
          <h3 className="text-3xl font-extrabold font-heading text-slate-900 mb-4">
            Ready to Build Your {service.title} Solution?
          </h3>
          <p className="text-slate-600 max-w-lg mx-auto text-base mb-8 font-normal">
            Get in touch with our tech lead for a detailed scope, architecture preview, and estimate.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
