import React from 'react';
import { Link } from 'react-router-dom';
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
            <span className="text-[#17233A]">Press Releases</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Corporate <span className="text-[#E58A1F]">Press Releases</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Stay updated with our latest technology launches, global expansions, and strategic corporate milestones.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {releases.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 border border-stone-200 hover:border-[#E58A1F] transition space-y-3 shadow-sm"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#E58A1F]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#17233A]">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
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
