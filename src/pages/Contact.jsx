import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, Send, Linkedin, Twitter, Youtube } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';

// Abstract Tech Map Component for Singapore / Global HQ
function TechMapVisual() {
  return (
    <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
      {/* Abstract Concentric Radial Rings */}
      <div className="absolute w-64 h-64 rounded-full border border-[#FF6B00]/20 animate-ping opacity-30" style={{ animationDuration: '4s' }} />
      <div className="absolute w-48 h-48 rounded-full border border-[#FF6B00]/30" />
      <div className="absolute w-32 h-32 rounded-full border border-[#FF6B00]/40" />

      {/* Glowing Pulsing Map Pin Center */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 rounded-full bg-[#FF6B00]/20 blur-md animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] p-1 shadow-md flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white fill-white" />
          </div>
        </div>
        <div className="mt-3 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold font-mono text-[#FF6B00] shadow-md">
          SINGAPORE • GLOBAL HQ • AUSTRALIA • INDIA • UK
        </div>
      </div>

      {/* Decorative Nodes */}
      <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
      <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
      <div className="absolute top-16 right-20 w-1.5 h-1.5 rounded-full bg-slate-400" />
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
    <div className="relative pt-24 pb-16 min-h-screen bg-[#FAFAFD] text-slate-900">
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
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-extrabold font-heading text-slate-900">
                      Message Received!
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto text-base leading-relaxed">
                      Thanks! Your message has been received. One of our lead architects will contact you shortly.
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-slate-200"
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
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                      Project Intake Form
                    </h3>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors shadow-xs"
                        />
                        {errors.fullName && <span className="block mt-1 text-xs text-rose-600 font-medium">{errors.fullName}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors shadow-xs"
                        />
                        {errors.email && <span className="block mt-1 text-xs text-rose-600 font-medium">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Utility Corp"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+65 6100 0000"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Service & Budget Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Interested Capability
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors shadow-xs font-medium"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors shadow-xs font-medium"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-mono">
                        Project Overview *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your system requirements, network migration, or AI goals..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-colors resize-none shadow-xs"
                      />
                      {errors.message && <span className="block mt-1 text-xs text-rose-600 font-medium">{errors.message}</span>}
                    </div>

                    <Button type="submit" variant="primary" size="lg" loading={loading} showIcon className="w-full justify-center bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white">
                      Submit Project Inquiry
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact Info & Tech Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 space-y-6 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold font-heading text-slate-900">Contact Information</h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Global Presence</div>
                    <div className="text-slate-600">Singapore (HQ) • Australia • India • United Kingdom • USA</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Us</div>
                    <div className="text-[#FF6B00] font-semibold">info@inovaantage.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Phone Support</div>
                    <div className="text-slate-600 font-mono">+1 720 263 9280</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <a href="https://www.linkedin.com/company/inovaantage/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://x.com/inovaantage" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors" aria-label="Twitter X">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Abstract Tech Map Visual */}
            <TechMapVisual />
          </div>
        </div>
      </section>
    </div>
  );
}
