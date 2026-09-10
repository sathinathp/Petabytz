import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function GenAIBlogs() {
  const blogs = [
    {
      id: 1,
      title: "Maximizing Enterprise Efficiency with Generative AI and LLMs",
      category: "Enterprise AI",
      date: "March 2025",
      image: "/images/background/service-card-preview.jpg",
      excerpt: "How forward-thinking enterprises deploy production-grade Large Language Models to automate complex customer workflows."
    },
    {
      id: 2,
      title: "Retrieval-Augmented Generation (RAG) Architecture for Data Privacy",
      category: "Cloud Architecture",
      date: "February 2025",
      image: "/images/casestudy/data-powered.png",
      excerpt: "Designing resilient vector database pipelines that keep enterprise intellectual property secure and compliant."
    },
    {
      id: 3,
      title: "The Strategic Guide to Responsible AI & Copilot Adoption",
      category: "Digital Transformation",
      date: "January 2025",
      image: "/images/casestudy/driving digital.png",
      excerpt: "Frameworks for integrating intelligent AI assistants across multi-tenant Microsoft 365 and hybrid cloud environments."
    }
  ];

  return (
    <section className="w-full bg-[#FAF7F2]/40 py-12 sm:py-16 border-b border-[#ECE6DC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A] tracking-tight">
            Blogs
          </h2>
        </div>

        {/* 3 Compact Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-md border border-[#DDDDDD] shadow-xs hover:border-[#FF8A00]/50 hover:shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Image at Top */}
              <div className="w-full h-40 bg-[#F5F5F5] overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
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
                  <div className="flex items-center space-x-2 text-[11px] font-semibold text-[#FF8A00] uppercase tracking-wider">
                    <span>{blog.category}</span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-slate-500 font-normal">{blog.date}</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#17233A] leading-snug group-hover:text-[#FF8A00] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0F0F0]">
                  <a
                    href="https://petabytz.com/blogs"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#17233A] group-hover:text-[#FF8A00] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
