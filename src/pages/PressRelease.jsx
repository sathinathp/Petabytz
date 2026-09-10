import React from 'react';
import { Newspaper, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';

export default function PressRelease() {
  const releases = [
    {
      id: 1,
      date: "September 2024",
      title: "PetaBytz Technologies Expands Multi-Cloud ITSM Support Across North America and EMEA",
      summary: "Strengthening round-the-clock enterprise support capabilities with enhanced follow-the-sun service desks and automated incident triage."
    },
    {
      id: 2,
      date: "June 2024",
      title: "PetaBytz Launches Enterprise Generative AI Practice for Cognitive Process Automation",
      summary: "Enabling global enterprises to leverage secure Retrieval-Augmented Generation (RAG) and private LLM models with zero customer data leakage."
    },
    {
      id: 3,
      date: "January 2024",
      title: "PetaBytz Attains Recertification for ISO 9001:2015 and ISO 27001:2013 Standards",
      summary: "Reaffirming our unwavering commitment to information security governance, customer data privacy, and global software engineering excellence."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Press Releases & Corporate Announcements"
        description="Read the latest company announcements, milestones, and technology partnerships from PetaBytz Technologies."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Corporate News
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Press <span className="gradient-text-orange">Releases</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Stay updated with our latest technology launches, global expansions, and industry recognitions.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {releases.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition space-y-3"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-brand-orange">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#022f46]">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
