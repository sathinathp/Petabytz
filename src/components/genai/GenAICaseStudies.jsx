import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GenAICaseStudies() {
  const caseStudies = [
    {
      id: 1,
      category: "Energy & Utilities",
      title: "Modernizing Operations for a Sustainable Future",
      image: "/images/case-studies/cs-energy.jpg",
      href: "/casestudies",
      desc: "Consolidating legacy infrastructure and deploying predictive maintenance algorithms for a major multinational utility."
    },
    {
      id: 2,
      category: "Enterprise Transformation",
      title: "Driving Procurement Transformation with AI",
      image: "/images/case-studies/cs-enterprise.jpg",
      href: "/casestudies",
      desc: "Accelerating contract processing and supplier intelligence by 60% through custom GenAI document extraction pipelines."
    },
    {
      id: 3,
      category: "Global Manufacturing",
      title: "Strengthening Security Across Global Operations",
      image: "/images/case-studies/cs-manufacturing.jpg",
      href: "/casestudies",
      desc: "Implementing zero-trust architecture and 24/7 ITSM monitoring across 12 worldwide manufacturing facilities."
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A] tracking-tight">
            Case Studies
          </h2>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-md border border-[#DDDDDD] shadow-xs hover:border-[#FF8A00] hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Compact Image */}
              <div className="w-full h-40 bg-[#F5F5F5] overflow-hidden relative">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/background/service-card-preview.jpg';
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="inline-block text-[11px] font-semibold text-[#FF8A00] uppercase tracking-wider">
                    {cs.category}
                  </span>

                  <h3 className="text-sm font-bold text-[#17233A] leading-snug group-hover:text-[#FF8A00] transition-colors line-clamp-2">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-2">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0F0F0]">
                  <Link
                    to={cs.href}
                    className="inline-flex items-center text-xs font-bold text-[#17233A] group-hover:text-[#FF8A00] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
