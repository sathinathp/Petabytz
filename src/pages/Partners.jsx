import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';

export default function Partners() {
  const partnerAlliances = [
    {
      name: "Microsoft Solutions Partner",
      level: "Gold Cloud Platform & Productivity",
      desc: "Deep engineering integration across Microsoft Azure, Microsoft 365, Entra ID security, and Microsoft Copilot.",
      benefits: ["Direct escalation access to Microsoft Tier-3 engineering", "Fast-track tenant migration funding and proof-of-concept credits", "Certified Azure Solutions Architects and M365 Security administrators"]
    },
    {
      name: "Amazon Web Services (AWS)",
      level: "Select Consulting & Managed Service Partner",
      desc: "Proven track record in deploying Amazon EKS clusters, Serverless Lambda architectures, and RDS databases.",
      benefits: ["AWS Well-Architected Framework reviews and remediation", "Migration Acceleration Program (MAP) subsidy eligibility", "Dedicated AWS certified DevOps and Security engineers"]
    },
    {
      name: "Salesforce Registered Partner",
      level: "Consulting & Custom App Integration",
      desc: "Specialists in Sales Cloud, Service Cloud, Experience Cloud, and custom Lightning Web Components (LWC).",
      benefits: ["End-to-end CRM audits and technical debt elimination", "Bi-directional ERP and third-party API connectivity", "24/7 dedicated Salesforce administrator and developer support"]
    },
    {
      name: "SAP Partner Ecosystem",
      level: "Cloud ERP Modernization & Basis Support",
      desc: "Modernizing legacy SAP ECC systems to high-performance SAP S/4HANA instances hosted on Azure and AWS.",
      benefits: ["Certified SAP Basis 24/7 monitoring and patching", "Zero-downtime database upgrades and custom ABAP remediation", "Integrated data analytics using Azure Synapse and PowerBI"]
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="Our Strategic Partners & Cloud Alliances"
        description="PetaBytz Technologies partners with Microsoft, AWS, Salesforce, and SAP to deliver enterprise-grade cloud transformations."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Strategic Alliances
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            World-Class <span className="gradient-text-orange">Technology Partnerships</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We collaborate with the world’s leading technology giants to bring certified enterprise solutions, funding incentives, and tier-1 support directly to our clients.
          </p>
        </div>
      </section>

      {/* Partners Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerAlliances.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                      {partner.level}
                    </span>
                    <Award className="w-6 h-6 text-brand-orange" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#022f46]">
                    {partner.name}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {partner.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">Client Advantages:</div>
                    {partner.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
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
