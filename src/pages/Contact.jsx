import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, Send, Linkedin, Twitter, Youtube } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { Button } from '../components/common/Button';

// Abstract Tech Map Component for Singapore / Global HQ
function TechMapVisual() {
  return (
    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#080811] border border-white/10 flex items-center justify-center">
      {/* Grid Mesh */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Abstract Concentric Radial Rings */}
      <div className="absolute w-64 h-64 rounded-full border border-cyan-electric/20 animate-ping opacity-30" style={{ animationDuration: '4s' }} />
      <div className="absolute w-48 h-48 rounded-full border border-violet-glow/30" />
      <div className="absolute w-32 h-32 rounded-full border border-cyan-electric/40" />

      {/* Glowing Pulsing Map Pin Center */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full bg-[#FF6B00]/30 blur-md animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF6B00] to-cyan-electric p-1 shadow-lg shadow-[#FF6B00]/50 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-black fill-black" />
          </div>
        </div>
        <div className="mt-3 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-electric/40 text-xs font-bold font-mono text-cyan-electric shadow-xl">
          SINGAPORE • GLOBAL HQ • AUSTRALIA • INDIA • UK
        </div>
      </div>

      {/* Decorative Nodes */}
      <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
      <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-cyan-electric animate-pulse" />
      <div className="absolute top-16 right-20 w-1.5 h-1.5 rounded-full bg-purple-400" />
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: 'Geospatial (GIS) Services',
    budget: '$25k - $50k',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#050507] text-white">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#7B61FF]/10 blur-[180px] pointer-events-none" />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something"
          gradientTitle="Extraordinary."
          description="Tell us about your digital infrastructure requirements and our principal software architects will follow up within 24 hours."
        />
      </section>

      {/* FORM & INFO SPLIT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <GlassCard glow className="p-8 sm:p-10 rounded-3xl border border-white/15">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold font-heading text-white">
                      Message Received!
                    </h3>
                    <p className="text-slate-300 max-w-md mx-auto text-base leading-relaxed">
                      Thanks! Your message has been received. One of our lead architects will contact you shortly.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          phone: '',
                          service: 'Geospatial (GIS) Services',
                          budget: '$25k - $50k',
                          message: ''
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold font-heading text-white mb-6">
                      Project Intake Form
                    </h3>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        />
                        {errors.fullName && <span className="block mt-1 text-xs text-rose-400">{errors.fullName}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        />
                        {errors.email && <span className="block mt-1 text-xs text-rose-400">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Utility Corp"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+65 6100 0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service & Budget Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Interested Capability
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                        >
                          <option value="Geospatial (GIS) Services">Geospatial (GIS) & rUNr® Migration</option>
                          <option value="Managed Services">Managed Cloud & DevOps</option>
                          <option value="Custom Development">Custom Software Engineering</option>
                          <option value="CRM Strategy">CRM & Enterprise Systems Integration</option>
                          <option value="Healthcare Applications">Healthcare & Telehealth Apps</option>
                          <option value="IoT & Telecom Systems">IoT & 5G Fiber Telemetry Systems</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0a0a12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                        >
                          <option value="<$25k">&lt; $25,000</option>
                          <option value="$25k - $50k">$25,000 - $50,000</option>
                          <option value="$50k - $100k">$50,000 - $100,000</option>
                          <option value="$100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Project Overview *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your system requirements, network migration, or AI goals..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors resize-none"
                      />
                      {errors.message && <span className="block mt-1 text-xs text-rose-400">{errors.message}</span>}
                    </div>

                    <Button type="submit" variant="primary" size="lg" loading={loading} showIcon className="w-full justify-center">
                      Submit Project Inquiry
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

          {/* Right Column: Contact Info & Tech Map */}
          <div className="lg:col-span-5 space-y-8">
            <GlassCard className="p-8 space-y-6 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold font-heading text-white">Contact Information</h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Global Presence</div>
                    <div>Singapore (HQ) • Australia • India • United Kingdom</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-electric/10 border border-cyan-electric/20 flex items-center justify-center text-cyan-electric shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Email Us</div>
                    <div className="text-cyan-electric">info@inovaantage.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Phone Support</div>
                    <div>+65 6100 0000</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a href="https://www.linkedin.com/company/inovaantage/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://x.com/inovaantage" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors" aria-label="Twitter X">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-rose-500 hover:text-rose-500 transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>

            {/* Abstract Tech Map Visual */}
            <TechMapVisual />
          </div>
        </div>
      </section>
    </div>
  );
}
