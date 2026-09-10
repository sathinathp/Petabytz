import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Globe2, 
  MapPin, 
  Phone, 
  Mail,
  Award,
  ArrowRight,
  Lock,
  Server,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import StatCounters from '../components/StatCounters';
import CTASection from '../components/CTASection';
import { locationsData } from '../data/locations';

export default function AboutUs() {
  const [selectedOffice, setSelectedOffice] = useState('india');

  const principles = [
    {
      title: "Customer-First Philosophy",
      desc: "We measure our success purely through our clients' operational efficiency, uptime, and digital business growth."
    },
    {
      title: "World-Class Engineering",
      desc: "Adopting the latest cloud-native, microservice, and DevSecOps best practices to deliver resilient codebases."
    },
    {
      title: "Transparency & Trust",
      desc: "Clear milestone commitments, transparent monthly SLAs, and direct access to senior cloud architects."
    },
    {
      title: "Continuous Innovation",
      desc: "Constantly integrating cutting-edge AI, machine learning, and automation workflows to reduce operating debt."
    }
  ];

  return (
    <div>
      <SeoMeta 
        title="About Us - Global IT Solutions and Services Partner"
        description="PetaBytz Technologies is a customer-centric transformational global IT solutions and services partner specialized in cloud excellence, digital transformation, and 24/7 ITSM operations."
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
            <Link to="/" className="hover:text-[#E58A1F] transition">Home</Link>
            <span>/</span>
            <span className="text-[#17233A]">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17233A] tracking-tight">
            Catalysts for Enterprise <span className="text-[#E58A1F]">Digital Transformation</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            A customer-centric transformational global IT partner with deep expertise across multi-cloud architectures, 24/7 managed operations, and modern AI engineering.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatCounters />

      {/* Company Story & Mission / Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46]">
                Transforming Enterprise IT into a Competitive Advantage
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to simplify enterprise IT complexity, PetaBytz Technologies delivers consulting-led, outcome-driven technology solutions. We partner with fast-growing startups and Fortune 500 enterprises to design, migrate, modernize, and support their core infrastructure.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From our global headquarters in India to our regional innovation hubs in the United States and Canada, our teams work around the clock to ensure maximum availability, ironclad cybersecurity, and uninterrupted business operations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-brand-orange">1500+</div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">Successful Migrations</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-[#022f46]">98.7%</div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">Customer Retention Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Mission Box */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="p-3.5 bg-brand-orange/10 rounded-xl text-brand-orange shrink-0">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#022f46]">Our Mission</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    To deliver agile, secure, and world-class IT solutions that empower global enterprises to innovate rapidly, optimize operational costs, and achieve sustainable digital leadership.
                  </p>
                </div>
              </div>

              {/* Vision Box */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="p-3.5 bg-[#022f46]/10 rounded-xl text-[#022f46] shrink-0">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#022f46]">Our Vision</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    To be the world’s most trusted partner for cloud transformation, managed ITSM operations, and cognitive AI technologies, recognized for technical excellence and client commitment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              The Values That Drive Our Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-brand-orange/50 hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#022f46]">{p.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Governance & Strategic Commitments */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] bg-[#FF8A00]/10 px-3 py-1 rounded-full">
              Enterprise Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              Our Architectural & Operational Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              How we enforce security, uptime, and financial transparency across every customer engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Zero-Trust Security by Design",
                desc: "Every cloud environment enforces least-privilege IAM, automated KMS encryption in transit/at rest, and continuous vulnerability telemetry.",
                icon: Lock
              },
              {
                title: "ITIL v4 SLA Excellence",
                desc: "Guaranteed 15-minute response for critical P1 incidents with automated escalation matrices and root cause analysis (RCA) reporting.",
                icon: Server
              },
              {
                title: "FinOps Spend Accountability",
                desc: "Continuous cloud right-sizing, reserved instance utilization monitoring, and zero-waste budget alerting to protect client capital.",
                icon: TrendingUp
              },
              {
                title: "Certified Center of Excellence",
                desc: "300+ certified architects across AWS, Microsoft, and Salesforce undergoing quarterly recertification and sandbox testing.",
                icon: Award
              }
            ].map((gov, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-[#FF8A00] transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#022f46] text-white flex items-center justify-center mb-4">
                    <gov.icon className="w-5 h-5 text-[#FF8A00]" />
                  </div>
                  <h3 className="text-base font-bold text-[#022f46] mb-2">{gov.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{gov.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center text-[11px] font-semibold text-[#FF8A00]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Audited Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Interactive Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              Our International Headquarters & Hubs
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Office Buttons */}
            <div className="lg:col-span-5 space-y-4">
              {['india', 'usa', 'canada'].map((locKey) => {
                const loc = locationsData[locKey];
                const active = selectedOffice === locKey;
                return (
                  <button
                    key={locKey}
                    onClick={() => setSelectedOffice(locKey)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all ${
                      active 
                        ? 'bg-[#022f46] text-white border-[#022f46] shadow-lg' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={loc.flag} 
                          alt={loc.country} 
                          className="w-6 h-4 object-cover rounded shadow-sm" 
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="font-bold text-base">{loc.country} Office</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${active ? 'text-brand-orange' : 'text-slate-400'}`} />
                    </div>
                    <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                      {loc.address}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Selected Office Visual Details */}
            <div className="lg:col-span-7 bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-brand-orange/20 rounded-xl text-brand-orange">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{locationsData[selectedOffice].country} Regional Hub</h3>
                    <div className="text-xs text-slate-400">PetaBytz Technologies Inc.</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs font-semibold text-brand-orange uppercase">Address</div>
                  <div className="text-slate-200 mt-1 leading-relaxed">{locationsData[selectedOffice].address}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="text-xs font-semibold text-brand-orange uppercase">Phone</div>
                    <a href={`tel:${locationsData[selectedOffice].phone}`} className="text-white hover:text-brand-orange font-semibold transition block mt-0.5">
                      {locationsData[selectedOffice].phone}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-brand-orange uppercase">Email</div>
                    <a href={`mailto:${locationsData[selectedOffice].email}`} className="text-white hover:text-brand-orange font-semibold transition block mt-0.5">
                      {locationsData[selectedOffice].email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition"
                >
                  <span>Connect with this Office</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
