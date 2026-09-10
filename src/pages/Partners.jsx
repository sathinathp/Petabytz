import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Building2, ExternalLink } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';

export default function Partners() {
  const partnerAlliances = [
    {
      name: "Microsoft Solutions Partner",
      level: "Gold Cloud Platform & Productivity",
      desc: "Deep integration across Microsoft Azure, Microsoft 365, Copilot AI Studio, and Power Platform migrations with tier-1 enterprise escalations.",
      icon: "/images/microsoft-products.png",
      benefits: ["Azure FastTrack Architecture reviews", "Enterprise Microsoft 365 tenant consolidations", "Funded Cloud PoCs and migration grants"]
    },
    {
      name: "AWS Advanced Tier Partner",
      level: "Certified Cloud Migration & Well-Architected",
      desc: "Delivering resilient AWS cloud foundations, serverless architectures, DevOps CI/CD automation, and Cost Optimization assessments.",
      icon: "/images/services/AWS managed services.png",
      benefits: ["Automated Terraform/CloudFormation IaC pipelines", "AWS Well-Architected operational reviews", "24/7 AWS Cloud Operations with guaranteed response times"]
    },
    {
      name: "Salesforce Registered Partner",
      level: "Consulting, Integrations & Managed Services",
      desc: "End-to-end Salesforce implementations, Sales Cloud, Service Cloud, and Einstein 1 AI automation for global commercial organizations.",
      icon: "/images/clients/Salesforce Service.png",
      benefits: ["Custom Lightning component development", "Seamless ERP & CRM data synchronizations", "Dedicated certified Salesforce administrators on demand"]
    },
    {
      name: "SAP Enterprise Partner",
      level: "SAP on Azure & S/4HANA Migration Specialists",
      desc: "Specialized in migrating business-critical SAP landscapes to hyperscaler clouds with near-zero downtime and optimized compute architectures.",
      icon: "/images/new/sap/SAP SERVICES.png",
      benefits: ["Certified SAP Basis 24/7 monitoring and patching", "Zero-downtime database upgrades and custom ABAP remediation", "Integrated data analytics using Azure Synapse and PowerBI"]
    }
  ];

  const ecosystemPartners = [
    { name: "SoftwareONE Alliance", logo: "/images/softwareone-logo-blk.svg", role: "Cloud Software & Licensing" },
    { name: "Readington Distribution", logo: "/images/logo/readington.svg", role: "Enterprise Technology Distribution" },
    { name: "Bitwise Global", logo: "/images/bitwise.png", role: "Data Modernization & Analytics" },
    { name: "Nordem Systems", logo: "/images/clients/nordem.png", role: "Infrastructure Solutions" }
  ];

  return (
    <div className="bg-white text-[#17233A] antialiased">
      <SeoMeta 
        title="Our Strategic Partners & Cloud Alliances - PetaBytz"
        description="PetaBytz Technologies partners with Microsoft, AWS, Salesforce, SAP, and global ecosystem leaders to deliver certified enterprise-grade technology consulting."
      />

      {/* Hero Banner */}
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
            <Link to="/" className="hover:text-[#FF8A00] transition">Home</Link>
            <span>/</span>
            <span className="text-[#17233A]">Our Partners</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            World-Class <span className="text-[#FF8A00]">Technology Partnerships</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            We collaborate with the world’s leading technology giants to bring certified enterprise solutions, funding incentives, and tier-1 support directly to our clients.
          </p>
        </div>
      </section>

      {/* Core Alliances */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
              Certified Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A]">
              Strategic Technology Alliances
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Deep, accredited partner relationships delivering direct engineering escalations and architectural co-innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerAlliances.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-md border border-[#DDDDDD] hover:border-[#FF8A00] transition-all duration-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-[#F0F0F0]">
                    <div className="h-12 w-32 bg-[#FAF7F2] rounded border border-[#E8E2D9] p-1.5 flex items-center justify-center">
                      <img 
                        src={partner.icon} 
                        alt={partner.name}
                        className="max-h-9 max-w-[110px] object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-xs">
                      {partner.level}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#17233A]">
                    {partner.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-[13px] mt-2.5 leading-relaxed">
                    {partner.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-stone-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#17233A]">Enterprise Benefits:</div>
                    {partner.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0 mt-0.5" />
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

      {/* Strategic Technology Ecosystem */}
      <section className="py-14 sm:py-16 bg-white border-t border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
              Extended Network
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#17233A]">
              Strategic Technology Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
              Collaborating across specialized vendors, system integrators, and software licensing providers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {ecosystemPartners.map((p, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF7F2]/50 border border-[#E8E2D9] rounded p-5 text-center flex flex-col items-center justify-center h-32 hover:border-[#FF8A00] hover:bg-white transition"
              >
                <img 
                  src={p.logo} 
                  alt={p.name}
                  className="max-h-10 max-w-[130px] object-contain mb-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-[11px] font-semibold text-[#17233A] block">{p.name}</span>
                <span className="text-[10px] text-stone-500">{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
