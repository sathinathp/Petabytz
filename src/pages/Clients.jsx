import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, Building2, Quote, ArrowRight } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import StatCounters from '../components/StatCounters';
import { clientsData } from '../data/clients';

export default function Clients() {
  const clientIndustries = [
    { name: "Financial Services & Banking", desc: "Zero-data-loss M365 migrations, SOC 2 compliance, and secure cloud infrastructures." },
    { name: "Healthcare & Life Sciences", desc: "HIPAA-compliant cloud hosting, automated EHR disaster recovery, and patient portal telemetry." },
    { name: "Retail & E-Commerce", desc: "High-traffic Kubernetes scaling, sub-second product search, and 24/7 servicedesk during peak holiday sales." },
    { name: "SaaS & High-Tech Startups", desc: "DevOps CI/CD automation, AWS Well-Architected reviews, and dedicated remote tech scaling (RWaaS)." },
    { name: "Manufacturing & Supply Chain", desc: "SAP S/4HANA Azure hosting, predictive maintenance ML, and IoT data analytics." }
  ];

  return (
    <div>
      <SeoMeta 
        title="Our Clients & Success Stories - Enterprise IT Trust"
        description="See how PetaBytz Technologies empowers leading global brands with cloud transformation, 24/7 ITSM managed operations, and modern digital engineering."
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
            <span className="text-[#17233A]">Clients</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Trusted by 250+ <span className="text-[#E58A1F]">Industry Leaders</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            From high-growth tech disruptors to established global conglomerates, we engineer resilient technological backbones that fuel sustained business growth.
          </p>
        </div>
      </section>

      <StatCounters />

      {/* Client Logo Grid */}
      <section className="py-14 sm:py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
              Global Enterprise Reach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A]">
              Our Valued Clients
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Empowering leading institutions across technology, finance, legal, and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {clientsData.clientList?.map((client, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#E8E2D9] rounded p-4 h-24 flex items-center justify-center hover:border-[#FF8A00] hover:shadow-xs transition duration-200"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-[120px] object-contain mx-auto"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Enterprise Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              What Technology Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientsData.testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-orange/20 mb-2" />
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#022f46] text-white flex items-center justify-center font-bold text-base shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#022f46]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.designation}</div>
                    <div className="text-xs font-semibold text-brand-orange">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Sector Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              Industries We Accelerate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientIndustries.map((ind, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-orange/50 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center font-bold text-sm mb-3">
                  <Building2 className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-base font-bold text-[#022f46]">{ind.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
