import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp, Lock, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040B16] text-white pt-7 sm:pt-8 pb-4 border-t border-slate-800/80 overflow-hidden select-none">
      
      {/* Photorealistic Dark Atmosphere & Night Earth Network Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        
        {/* Full-width Seamless Earth Network Background Across Entire Footer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Global Network"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040B16]/80 via-[#040B16]/50 to-[#040B16]/80" />
          <div className="absolute inset-0 bg-[#040B16]/50" />
        </div>

        {/* Sweeping Full-Height Animated Arc with Train Light Tracer */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] lg:w-[48%] pointer-events-none overflow-hidden">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 450 300" 
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="trainLightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFA500" stopOpacity="0" />
                <stop offset="70%" stopColor="#FFB703" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFBEB" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="baseTrackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E58A1F" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E58A1F" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E58A1F" stopOpacity="0.1" />
              </linearGradient>

              <filter id="trainGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Glowing Amber Track */}
            <path 
              d="M 230 0 C 360 80, 370 210, 240 300" 
              stroke="url(#baseTrackGrad)" 
              strokeWidth="1.5" 
            />

            {/* Animated Passing Train Light (High-Speed Glowing Beam) */}
            <path 
              d="M 230 0 C 360 80, 370 210, 240 300" 
              stroke="url(#trainLightGrad)" 
              strokeWidth="3.5" 
              strokeDasharray="90 360"
              filter="url(#trainGlow)"
              style={{
                animation: 'trainPass 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            />

            {/* Secondary subtle trailing beam */}
            <path 
              d="M 230 0 C 360 80, 370 210, 240 300" 
              stroke="#FFF" 
              strokeWidth="2" 
              strokeDasharray="25 425"
              filter="url(#trainGlow)"
              style={{
                animation: 'trainPass 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                animationDelay: '0.1s'
              }}
            />
          </svg>
        </div>

        {/* Embedded Keyframe for Train Light Motion */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes trainPass {
            0% {
              stroke-dashoffset: 450;
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            85% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: -450;
              opacity: 0;
            }
          }
        `}} />

      </div>

      {/* Main Footer Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        
        {/* Top Grid: 5 Columns - No Vertical Dividers, Compact Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5 pb-5 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Tagline (Col span 4) */}
          <div className="lg:col-span-4 space-y-2.5">
            
            {/* Official PetaBytz Logo with Hover Color Shift */}
            <Link to="/" className="inline-block group">
              <img 
                src="/images/logo.png" 
                alt="PetaBytz Technologies" 
                className="h-10 sm:h-11 w-auto object-contain transition-all duration-300 ease-out group-hover:brightness-125 group-hover:hue-rotate-[20deg] group-hover:drop-shadow-[0_0_14px_rgba(255,165,0,0.75)] group-hover:scale-[1.04]"
              />
            </Link>

            {/* Headline Tagline */}
            <div className="pt-1.5 space-y-1">
              <div className="w-6 h-[2px] bg-[#E58A1F] rounded-full mb-2" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                Ideas.<br />
                Technology.<br />
                A Brighter <span className="text-[#E58A1F] italic font-serif font-normal">Tomorrow.</span>
              </h3>
            </div>

            {/* Paragraph */}
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs font-normal">
              A global IT consulting and managed services provider, helping enterprises innovate, transform and grow with the power of Cloud and AI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-0.5">
              <a 
                href="https://linkedin.com/company/petabytz-technologies" 
                target="_blank" 
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 border border-slate-700/80 hover:border-[#E58A1F] hover:bg-[#E58A1F] hover:text-white flex items-center justify-center text-slate-300 transition shadow-xs group"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a 
                href="https://twitter.com/peta_bytz" 
                target="_blank" 
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 border border-slate-700/80 hover:border-[#E58A1F] hover:bg-[#E58A1F] hover:text-white flex items-center justify-center text-slate-300 transition shadow-xs group font-bold text-xs"
                aria-label="Twitter X"
              >
                <svg className="w-3 h-3 fill-current group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white/5 border border-slate-700/80 hover:border-[#E58A1F] hover:bg-[#E58A1F] hover:text-white flex items-center justify-center text-slate-300 transition shadow-xs group"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Bottom Accent line: PEOPLE TECHNOLOGY IMPACT ─────── */}
            <div className="pt-1.5 hidden lg:flex items-center space-x-3 select-none">
              <span className="text-[8.5px] font-bold tracking-[0.22em] text-slate-400 uppercase font-mono whitespace-nowrap">
                PEOPLE &nbsp; TECHNOLOGY &nbsp; IMPACT
              </span>
              <div className="h-[1px] bg-slate-700 w-12" />
            </div>

          </div>

          {/* Right Block: SERVICES to STAY UPDATED (Shifted Right) */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 lg:pl-8 xl:pl-14">
            
            {/* Column 2: SERVICES */}
            <div className="space-y-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-mono">
                  SERVICES
                </h4>
                <div className="w-4 h-[1.5px] bg-[#E58A1F] mt-1 mb-2" />
              </div>
              
              <ul className="space-y-1.5 text-[11px] text-slate-400 font-normal">
                <li><Link to="/cloud-transformation" className="hover:text-[#E58A1F] transition">Cloud Transformation</Link></li>
                <li><Link to="/digital-transformation" className="hover:text-[#E58A1F] transition">Digital Transformation</Link></li>
                <li><Link to="/managed-services" className="hover:text-[#E58A1F] transition">Managed Services</Link></li>
                <li><Link to="/ai-solutions" className="hover:text-[#E58A1F] transition">AI & Cognitive</Link></li>
                <li><Link to="/business-consulting" className="hover:text-[#E58A1F] transition">Business Consulting</Link></li>
                <li><Link to="/vapt" className="hover:text-[#E58A1F] transition">IT Security</Link></li>
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div className="space-y-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-mono">
                  COMPANY
                </h4>
                <div className="w-4 h-[1.5px] bg-[#E58A1F] mt-1 mb-2" />
              </div>

              <ul className="space-y-1.5 text-[11px] text-slate-400 font-normal">
                <li><Link to="/about-us" className="hover:text-[#E58A1F] transition">About Us</Link></li>
                <li><Link to="/our-partners" className="hover:text-[#E58A1F] transition">Our Team</Link></li>
                <li><Link to="/careers" className="hover:text-[#E58A1F] transition">Careers</Link></li>
                <li><Link to="/press-release" className="hover:text-[#E58A1F] transition">News & Insights</Link></li>
                <li><Link to="/contact-us" className="hover:text-[#E58A1F] transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div className="space-y-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-mono">
                  RESOURCES
                </h4>
                <div className="w-4 h-[1.5px] bg-[#E58A1F] mt-1 mb-2" />
              </div>

              <ul className="space-y-1.5 text-[11px] text-slate-400 font-normal">
                <li><Link to="/blogs" className="hover:text-[#E58A1F] transition">Blogs & Insights</Link></li>
                <li><Link to="/casestudies" className="hover:text-[#E58A1F] transition">Case Studies</Link></li>
                <li><Link to="/whitepapers" className="hover:text-[#E58A1F] transition">Whitepapers</Link></li>
                <li><Link to="/datasheets" className="hover:text-[#E58A1F] transition">Data Sheets</Link></li>
                <li><Link to="/accreditation" className="hover:text-[#E58A1F] transition">Accreditation</Link></li>
                <li><Link to="/contact-us" className="hover:text-[#E58A1F] transition">Support</Link></li>
              </ul>
            </div>

            {/* Column 5: STAY UPDATED */}
            <div className="space-y-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-mono">
                  STAY UPDATED
                </h4>
                <div className="w-4 h-[1.5px] bg-[#E58A1F] mt-1 mb-2" />
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                Get the latest insights and news delivered to your inbox.
              </p>

              {/* Email Subscribe Input Form with Inner Round Orange Arrow Button */}
              <form onSubmit={handleSubscribe} className="pt-0.5">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#081324] border border-slate-700/80 rounded-full py-1.5 pl-3 pr-9 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-[#E58A1F] shadow-inner transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 w-5 h-5 rounded-full bg-[#E58A1F] hover:bg-[#c97210] text-white flex items-center justify-center transition shadow-md hover:scale-105 active:scale-95"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                
                {status === 'success' ? (
                  <p className="text-[10px] text-emerald-400 mt-1 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> {message || 'Thank you for subscribing!'}
                  </p>
                ) : status === 'error' ? (
                  <p className="text-[10px] text-rose-400 mt-1 font-medium flex items-center gap-1">
                    <AlertCircle className="w-2.5 h-2.5" /> {message}
                  </p>
                ) : (
                  <div className="flex items-center space-x-1.5 text-[9.5px] text-slate-400 mt-1.5 select-none font-mono">
                    <Lock className="w-2.5 h-2.5 text-slate-500" />
                    <span>We respect your privacy.</span>
                  </div>
                )}
              </form>

            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright + Policy Links + Back To Top */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-normal">
          
          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} PetaBytz Technologies. All rights reserved.
          </div>

          {/* Right Links & Back to Top Button */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <span>/</span>
            <Link to="/privacy-policy" className="hover:text-slate-300 transition">Terms of Use</Link>
            <span>/</span>
            <Link to="/contact-us" className="hover:text-slate-300 transition">Sitemap</Link>

            {/* Back to top circular button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 pl-2 group hover:text-white transition"
              title="Back to top"
            >
              <div className="w-7 h-7 rounded-full border border-slate-700/80 group-hover:border-[#E58A1F] group-hover:bg-[#E58A1F] group-hover:text-white flex items-center justify-center text-slate-400 transition shadow-xs">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition hidden sm:inline">
                Back to top
              </span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}


