import React from 'react';
import { FileSpreadsheet, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { dataSheetsData } from '../data/whitepapers';

export default function DataSheets() {
  return (
    <div>
      <SeoMeta 
        title="Technical Data Sheets - Service Capabilities & SLA Matrices"
        description="Download technical data sheets from PetaBytz Technologies for cloud managed services, remote workforce (RWaaS), and ITSM support specifications."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Technical Specifications
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Service <span className="gradient-text-orange">Data Sheets</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Quick-reference architecture matrices, SLA breakdowns, and operational scope documents for enterprise evaluation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSheetsData.map((ds) => (
              <div 
                key={ds.id}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded">
                      {ds.category}
                    </span>
                    <FileSpreadsheet className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#022f46]">
                    {ds.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {ds.description}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <span className="font-bold text-[#022f46]">Key Highlights: </span>
                    {ds.summary}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <a
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#022f46] hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Request Full Spec Sheet</span>
                  </a>
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
