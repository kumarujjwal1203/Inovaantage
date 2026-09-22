import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Sparkles, Target, Compass } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';
import { teamMembers, coreValues } from '../data/team';

const timelineEvents = [
  { year: '2018', title: 'Company Founded', desc: 'Inovaantage was established to redefine enterprise software and geospatial intelligence consulting.' },
  { year: '2020', title: '25+ Enterprise Deployments', desc: 'Expanded engineering team to 40+ senior developers, partnering with energy utilities and telecom pioneers.' },
  { year: '2022', title: 'rUNr® Migration Engine Launch', desc: 'Released proprietary Esri Utility Network data migration engine with 99.99% data integrity.' },
  { year: '2024', title: 'Global Delivery Centers Expansion', desc: 'Established delivery hubs across Singapore, Australia, India, and the UK serving Tier-1 operators.' },
  { year: '2026', title: '150+ Digital Products Delivered', desc: 'Serving energy grids, telecom carriers, and enterprise AI leaders with sub-second infrastructure.' }
];

export function About() {
  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10">
        <SectionHeading
          badge="ABOUT INOVAANTAGE"
          title="We Build Technology"
          gradientTitle="With Purpose."
          description="Inovaantage is a premier software engineering firm delivering mission-critical applications, cloud architectures, geospatial intelligence, and enterprise AI solutions worldwide."
        />

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-left">
          <div className="p-8 space-y-4 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-[#FF6B00]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              To solve complex technical challenges for utility grids, telecom carriers, and ambitious tech enterprises by building production-grade software that operates without downtime.
            </p>
          </div>

          <div className="p-8 space-y-4 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-[#FF6B00]/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              To be the world's most trusted software engineering partner for organizations creating the future of digital energy networks, telecom infrastructure, and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STORY TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <SectionHeading
          badge="OUR JOURNEY"
          title="Milestones of Engineering"
          gradientTitle="Excellence"
          description="From a specialized spatial data consulting team to a global digital transformation partner."
        />

        <div className="relative border-l-2 border-[#FF6B00]/40 ml-4 sm:ml-32 space-y-12 my-12">
          {timelineEvents.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Year indicator desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24 text-xl font-bold font-mono text-[#FF6B00]">
                {item.year}
              </div>

              {/* Glowing Timeline Dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-[#FAFAFD] border-2 border-[#FF6B00] shadow-md shadow-[#FF6B00]/30" />

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:border-slate-300">
                <span className="sm:hidden inline-block text-xs font-mono font-bold text-[#FF6B00] mb-1">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold font-heading text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <SectionHeading
          badge="OUR PRINCIPLES"
          title="Built On Uncompromising"
          gradientTitle="Core Values"
          description="The engineering standards that dictate every line of code we ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <div key={value.title} className="p-6 rounded-2xl space-y-3 bg-white border border-slate-200 shadow-md hover:border-[#FF6B00]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-heading text-slate-900">{value.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <SectionHeading
          badge="LEADERSHIP"
          title="Meet the Engineering"
          gradientTitle="Architects"
          description="Senior technical leadership with decades of experience at world-class technology institutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const linkedinUrl = member.social?.linkedin || member.linkedin || 'https://linkedin.com';
            const twitterUrl = member.social?.twitter || member.twitter || 'https://twitter.com';
            const githubUrl = member.social?.github || member.github || 'https://github.com';

            return (
              <div key={member.name} className="group p-5 text-center overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-[#FF6B00]/40 transition-colors">
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="flex gap-3">
                      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 text-white hover:bg-[#FF6B00] transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 text-white hover:bg-[#FF6B00] transition-colors" aria-label="Twitter">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 text-white hover:bg-[#FF6B00] transition-colors" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold font-heading text-slate-900">{member.name}</h4>
                <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{member.bio}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center relative z-10">
        <div className="p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mb-4">
            Ready to Stay Digitally Ahead?
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-base mb-8 font-normal">
            Schedule a technical discovery call with our principal architects today.
          </p>
          <Button to="/contact" variant="primary" size="lg" showIcon className="bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
