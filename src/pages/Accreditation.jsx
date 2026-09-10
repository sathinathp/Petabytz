import React from 'react';
import { Link } from 'react-router-dom';
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
      <section 
        className="relative bg-[#FAF7F2] border-b border-stone-200 py-12 lg:py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/background/subheader.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#FAF7F2]/85 backdrop-blur-[1px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
            <Link to="/" className="hover:text-[#E58A1F] transition">Home</Link>
            <span>/</span>
            <span className="text-[#17233A]">Accreditation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Industry Accreditations & <span className="text-[#E58A1F]">Certifications</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Our strict compliance with international security and quality frameworks guarantees that your mission-critical data, intellectual property, and operations are safeguarded under world-class standards.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientsData.accreditations.map((acc, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 border border-stone-200 hover:border-[#E58A1F] transition space-y-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E58A1F] bg-amber-50 border border-amber-200 px-3 py-1">
                    {acc.badge}
                  </span>
                  <ShieldCheck className="w-6 h-6 text-[#004B70]" />
                </div>

                <h3 className="text-xl font-bold text-[#17233A]">
                  {acc.title}
                </h3>
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  {acc.subtitle}
                </div>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {acc.desc}
                </p>

                <div className="pt-4 border-t border-stone-100 flex items-center space-x-2 text-xs text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A1F]" />
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

