import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    try {
      setStatus('loading');
      setMessage('');
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <footer className="bg-[#050B14] text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white/95 px-3 py-2 rounded-xl border border-white/20 shadow-sm">
              <img 
                src="/images/logo/logo.png" 
                alt="PetaBytz Technologies" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm">
              PetaBytz Technologies is a global IT consulting and managed services provider, helping enterprises innovate, transform and grow with the power of Cloud and AI.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2 text-slate-400 text-xs">
              <a href="https://linkedin.com/company/petabytz-technologies" target="_blank" rel="noreferrer" className="hover:text-[#E58A1F] transition">
                LinkedIn
              </a>
              <span>&bull;</span>
              <a href="https://twitter.com/peta_bytz" target="_blank" rel="noreferrer" className="hover:text-[#E58A1F] transition">
                Twitter
              </a>
              <span>&bull;</span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#E58A1F] transition">
                YouTube
              </a>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/cloud-transformation" className="hover:text-white transition">Cloud Transformation</Link></li>
              <li><Link to="/digital-transformation" className="hover:text-white transition">Digital Transformation</Link></li>
              <li><Link to="/managed-services" className="hover:text-white transition">Managed Services</Link></li>
              <li><Link to="/ai-solutions" className="hover:text-white transition">AI & Cognitive</Link></li>
              <li><Link to="/business-consulting" className="hover:text-white transition">Business Consulting</Link></li>
              <li><Link to="/vapt" className="hover:text-white transition">IT Security</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/about-us" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/our-partners" className="hover:text-white transition">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/press-release" className="hover:text-white transition">News & Insights</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/blogs" className="hover:text-white transition">Blogs & Insights</Link></li>
              <li><Link to="/casestudies" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link to="/whitepapers" className="hover:text-white transition">Whitepapers</Link></li>
              <li><Link to="/datasheets" className="hover:text-white transition">Data Sheets</Link></li>
              <li><Link to="/accreditation" className="hover:text-white transition">Accreditation</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition">Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated & Signature Accent */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Updated</h4>
            <p className="text-xs text-slate-400">
              Get the latest insights and news.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex items-center">
                <input
                  type="email"
                  value={email}
                  disabled={status === 'loading'}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-lg py-2 pl-3 pr-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E58A1F] disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#E58A1F] hover:bg-[#C97210] disabled:bg-stone-600 text-white rounded flex items-center justify-center transition shadow-xs"
                >
                  {status === 'loading' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {message}
                </p>
              )}
              {status === 'error' && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {message}
                </p>
              )}
            </form>

            <div className="font-handwriting text-2xl text-slate-500 pt-2 leading-tight">
              Technology<br />People<br />Progress
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PetaBytz Technologies. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/privacy-policy" className="hover:text-slate-400 transition">Terms of Use</Link>
            <span>&bull;</span>
            <Link to="/contact-us" className="hover:text-slate-400 transition">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
