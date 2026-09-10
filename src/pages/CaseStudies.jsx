import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <span className="text-[#17233A]">Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Enterprise <span className="text-[#E58A1F]">Case Studies</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Real enterprise transformation stories detailing technical challenges, engineered solutions, and quantified business impact across global organizations.
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
