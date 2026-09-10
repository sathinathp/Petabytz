import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const defaultFaqs = [
  {
    id: 0,
    question: "How experienced is your team in delivering Cloud, Microsoft 365 and ITSM services?",
    answer: "PetaBytz brings over a decade of verified enterprise engineering experience with 300+ certified architects across Microsoft Azure, AWS, Google Cloud, and ITIL-aligned 24/7 ITSM environments. We have completed 1,500+ cloud migrations with a 98.7% customer retention rate."
  },
  {
    id: 1,
    question: "How do I get started with your services? What is the typical engagement process?",
    answer: "Our engagement begins with an initial technical discovery session and architecture assessment. We map out key objectives, evaluate security and compliance prerequisites, establish milestone-based deliverables, and deliver a detailed proof-of-concept before commencing phased deployment."
  },
  {
    id: 2,
    question: "Do you have success stories or case studies from previous client projects?",
    answer: "Yes. We have demonstrated high-impact transformations across healthcare, financial services, retail, and manufacturing. Our case studies detail measurable outcomes such as 40% reduction in cloud compute expenditure, 99.999% portal uptime, and sub-4-hour average incident resolution times."
  },
  {
    id: 3,
    question: "Can you provide a cost estimate or pricing details for the services we're interested in?",
    answer: "We offer transparent, milestone-driven consulting pricing as well as structured monthly SLA managed service tiers. Following our initial architectural scoping call, we provide a transparent, itemized proposal tailored to your workload scale and compliance needs."
  },
  {
    id: 4,
    question: "What sets your professional services apart from other providers in the industry?",
    answer: "Unlike transactional vendors, PetaBytz operates as a true outcome-driven partner. We combine deep engineering capabilities with ISO 27001 and SOC 2 security compliance, guaranteed 99.99% operational SLAs, and direct access to senior solution architects throughout your journey."
  },
  {
    id: 5,
    question: "How do you ensure enterprise data privacy, model governance, and regulatory compliance?",
    answer: "All solutions deployed by PetaBytz run strictly within your isolated VPC or dedicated enterprise boundary. We implement zero-data-retention agreements, encryption in transit and at rest, and guardrail layers to eliminate data leakage and ensure complete compliance with SOC 2, HIPAA, and GDPR."
  }
];

export default function FAQ({ faqs = defaultFaqs, title = "Frequently Asked Questions?" }) {
  const [openItems, setOpenItems] = useState({
    0: true // First item open by default
  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  const renderFaqItem = (faq) => {
    const isOpen = !!openItems[faq.id];
    return (
      <div key={faq.id} className="border-b border-[#E2E8F0] py-4">
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full flex items-center justify-between text-left space-x-3 group cursor-pointer focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="text-[13.5px] sm:text-sm font-semibold text-[#17233A] group-hover:text-[#FF8A00] transition-colors leading-snug">
            {faq.question}
          </span>
          <span className="w-5 h-5 rounded-sm bg-[#FFF4E5] text-[#FF8A00] flex items-center justify-center shrink-0 transition-transform">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>

        {isOpen && (
          <div className="mt-2.5 text-xs sm:text-[13px] text-[#555555] leading-relaxed pr-6">
            {faq.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 border-t border-[#E8E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-9 sm:mb-11">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
            Support & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A] tracking-tight">
            {title}
          </h2>
        </div>

        {/* 2-Column FAQ Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14">
          <div>
            {col1.map(renderFaqItem)}
          </div>
          <div>
            {col2.map(renderFaqItem)}
          </div>
        </div>

      </div>
    </section>
  );
}
