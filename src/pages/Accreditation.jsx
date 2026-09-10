import React from 'react';
import { ShieldCheck, CheckCircle2, Award, FileCheck, Lock, ArrowRight } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { clientsData } from '../data/clients';

export default function Accreditation() {
  return (
    <div>
      <SeoMeta 
        title="Accreditation & Compliance - ISO 9001, ISO 27001, SOC 2, CMMI"
        description="PetaBytz Technologies is certified in ISO 9001:2015, ISO 27001:2013, SOC 2 Type II, and CMMI Level 3 ensuring enterprise quality and cybersecurity."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Security & Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industry Accreditations & <span className="gradient-text-orange">Certifications</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Our strict compliance with international security and quality frameworks guarantees that your mission-critical data, intellectual property, and operations are safeguarded under world-class standards.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientsData.accreditations.map((acc, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                    {acc.badge}
                  </span>
                  <ShieldCheck className="w-7 h-7 text-emerald-500" />
                </div>

                <h3 className="text-2xl font-bold text-[#022f46]">
                  {acc.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {acc.subtitle}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {acc.desc}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Audited annually by independent accredited registrars.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
