import React from 'react';
import { Link } from 'react-router-dom';
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
            <span className="text-[#17233A]">Data Sheets</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Technical <span className="text-[#E58A1F]">Data Sheets</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Quick-reference architecture matrices, SLA breakdowns, and operational scope documents for enterprise evaluation.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataSheetsData.map((ds) => (
              <div 
                key={ds.id}
                className="bg-white p-8 border border-stone-200 hover:border-[#E58A1F] transition flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E58A1F] bg-amber-50 border border-amber-200 px-2.5 py-0.5">
                      {ds.category}
                    </span>
                    <FileSpreadsheet className="w-5 h-5 text-stone-400" />
                  </div>

                  <h3 className="text-xl font-bold text-[#17233A]">
                    {ds.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {ds.description}
                  </p>

                  <div className="p-4 bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <span className="font-bold text-[#17233A]">Key Highlights: </span>
                    {ds.summary}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <Link
                    to="/contact-us"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#17233A] hover:bg-[#E58A1F] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 mr-2" />
                    <span>Request Full Spec Sheet</span>
                  </Link>
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
