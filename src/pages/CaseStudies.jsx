import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Tag, Layers, Sparkles } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { caseStudiesData } from '../data/caseStudies';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cloud & Kubernetes', 'DevOps Automation', 'Digital Workplace', 'ITSM Managed Services', 'Salesforce Solutions', 'Cloud Migration'];

  const filtered = selectedCategory === 'All' 
    ? caseStudiesData 
    : caseStudiesData.filter(c => c.category === selectedCategory);

  return (
    <div>
      <SeoMeta 
        title="Case Studies - Real Enterprise Transformations & ROI"
        description="Explore how PetaBytz Technologies helped enterprises migrate to Kubernetes, automate DevOps, modernize Microsoft 365, and optimize ITSM operations."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Proven Results
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Client <span className="gradient-text-orange">Case Studies</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Real enterprise transformation stories detailing challenges, solutions, and quantified business impact.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-[#022f46] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cs) => (
              <div 
                key={cs.id}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded">
                      {cs.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{cs.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#022f46] leading-snug">
                    {cs.title}
                  </h3>

                  <div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Challenge:</div>
                    <p className="text-slate-600 text-xs leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Solution:</div>
                    <p className="text-slate-600 text-xs leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-800">Quantified Outcomes:</div>
                    {cs.results.map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start space-x-1.5 text-xs text-emerald-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
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
