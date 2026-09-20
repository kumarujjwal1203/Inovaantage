import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Subtle top glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Logo size="lg" showTagline={true} />

            <p className="text-sm leading-relaxed max-w-sm">
              Inovaantage delivers high-performance digital products, scalable cloud architectures, geospatial intelligence, and high-impact AI solutions for enterprise leaders worldwide.
            </p>

            {/* Newsletter Form */}
            <div className="pt-2 max-w-sm">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-mono">
                STAY DIGITALLY AHEAD WITH US
              </span>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for tech briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="enter your email..."
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      className="w-full px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50"
                    />
                    <Button type="submit" variant="primary" size="sm" showIcon className="shrink-0 px-5">
                      Subscribe
                    </Button>
                  </div>
                  {emailError && <span className="block mt-1 text-xs text-rose-400">{emailError}</span>}
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-heading mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-[#FF6B00] transition-colors">About Inovaantage</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#FF6B00] transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-[#FF6B00] transition-colors">Engineering Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF6B00] transition-colors">Careers & Hiring</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF6B00] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-heading mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Managed Services</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Geospatial (GIS) Services</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">GIS Data Management</Link></li>
              <li><Link to="/services" className="hover:text-[#FF6B00] transition-colors">Telecom Data Management</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-heading mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-sm mb-6 font-mono">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="mailto:info@inovaantage.com" className="hover:text-[#FF6B00] transition-colors">info@inovaantage.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>+1 720 263 9280</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/inovaantage/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 hover:text-[#FF6B00] hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/inovaantage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 hover:text-[#FF6B00] hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTcGWLYt5CXlVLa0Q251QZQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-rose-500/50 hover:text-rose-500 hover:bg-white/10 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} Inovaantage. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Security Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
