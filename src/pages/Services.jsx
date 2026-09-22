import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { services } from '../data/services';

export function Services() {
  return (
    <div className="relative pt-24 pb-16">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <SectionHeading
          badge="OUR SERVICES"
          title="Technology Services Built Around"
          gradientTitle="Your Business"
          description="From custom enterprise web engineering and mobile experiences to multi-cloud architecture and intelligent AI agents."
        />
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <GlassCard key={service.id} glow className="flex flex-col justify-between group p-8">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B00]/20 to-[#FF8800]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400">{service.badge}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-cyan-electric hover:text-cyan-glow group-hover:px-1 transition-all"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <GlassCard glow className="p-12">
          <h3 className="text-3xl font-extrabold font-heading text-white mb-4">
            Need a Customized Technology Solution?
          </h3>
          <p className="text-slate-300 max-w-lg mx-auto text-base mb-8">
            Our principal software architects are available to review your current tech stack and propose an optimal strategy.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon>
            Consult With Architects
          </Button>
        </GlassCard>
      </section>
    </div>
  );
}
