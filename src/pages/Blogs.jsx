import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { blogsData } from '../data/blogs';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Enterprise AI', 'Cloud Architecture', 'Digital Transformation', 'Cloud Migration', 'ITSM Managed Services', 'FinOps & Governance'];

  const filtered = selectedCategory === 'All'
    ? blogsData
    : blogsData.filter(b => b.category === selectedCategory);

  return (
    <div className="w-full bg-white text-[#17233A]">
      <SeoMeta
        title="Enterprise Tech Blogs & Industry Insights - PetaBytz Technologies"
        description="Explore technical architecture guides, FinOps strategies, Generative AI adoption, and cloud engineering insights authored by PetaBytz principal consultants."
      />

      {/* Compact Enterprise Hero Banner */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D9] overflow-hidden py-9 sm:py-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/images/background/subheader.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="inline-block bg-[#FF8A00]/15 text-[#FF8A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm border border-[#FF8A00]/30">
            Insights & Perspectives
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17233A] tracking-tight">
            PetaBytz Technology Blogs
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl mx-auto leading-relaxed">
            In-depth analysis, architectural frameworks, and engineering best practices from our cloud transformation and AI specialists.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-4 sm:py-5 bg-white border-b border-[#EBEBEB]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#17233A] text-white shadow-xs'
                    : 'bg-[#F4F4F4] text-[#555555] hover:bg-[#EAEAEA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2]/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-md border border-[#DDDDDD] shadow-xs hover:border-[#FF8A00]/60 hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                {/* Thumbnail Image */}
                <div className="w-full h-44 bg-[#F5F5F5] overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/background/service-card-preview.jpg';
                    }}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#17233A]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                    {blog.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[11px] text-[#747474]">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-[#FF8A00]" />
                        <span>{blog.date}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-sm sm:text-[15px] font-bold text-[#17233A] leading-snug group-hover:text-[#FF8A00] transition-colors">
                      {blog.title}
                    </h2>

                    <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-xs">
                    <div className="text-[11px] text-[#747474]">
                      By <span className="font-semibold text-[#17233A]">{blog.author}</span>
                    </div>
                    <span className="inline-flex items-center font-bold text-[#FF8A00] group-hover:translate-x-0.5 transition-transform">
                      Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
