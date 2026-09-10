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
    <section className="relative py-16 bg-[#004B70] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17233A] border border-stone-700/80 p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
          
          {/* Left Text */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#E58A1F]/15 border border-[#E58A1F]/30 text-[#E58A1F] px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified Cloud & IT Consulting Partner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-stone-300">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
                <span>Zero-Liability Remote Teams</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
                <span>Guaranteed 99.99% SLAs</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
                <span>ISO 27001 & SOC 2 Security</span>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition bg-[#E58A1F] hover:bg-[#C97210]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            <Link
              to="/about-us"
              className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold text-stone-200 hover:text-white bg-[#0A1220] hover:bg-slate-900 border border-stone-600 transition"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-[#E58A1F]" />
              <span>Discover About Us</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

