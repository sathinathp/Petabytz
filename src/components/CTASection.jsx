import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CTASection({
  title = "Ready to Accelerate Your Enterprise Transformation?",
  subtitle = "Partner with PetaBytz Technologies for high-impact cloud architectures, 24/7 ITSM support, and modern digital engineering.",
  buttonText = "Schedule an Expert Consultation",
  buttonLink = "/contact-us"
}) {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#011e2f] via-[#022f46] to-[#011420] text-white overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 border border-slate-700/80 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified Cloud & IT Consulting Partner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero-Liability Remote Teams</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Guaranteed 99.99% SLAs</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ISO 27001 & SOC 2 Security</span>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 bg-brand-orange rounded-xl shadow-glow hover:bg-brand-orangeHover hover:scale-[1.02] focus:outline-none"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link
              to="/about-us"
              className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/80 rounded-xl transition"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-brand-orange" />
              <span>Discover About Us</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
