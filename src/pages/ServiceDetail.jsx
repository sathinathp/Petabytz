import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Send, 
  ChevronRight,
  Layers,
  AlertCircle,
  Loader2,
  Calendar,
  Sparkles,
  Activity,
  Workflow,
  Lock
} from 'lucide-react';
import { servicesData } from '../data/services';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import NotFound from './NotFound';

export default function ServiceDetail({ explicitSlug }) {
  const params = useParams();
  const slug = explicitSlug || params.slug;
  const service = servicesData[slug];

  // Return real 404 if service does not exist (no silent fallback!)
  if (!service) {
    return <NotFound />;
  }

  // Form State with real API
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // type: 'success' | 'error' | ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all required fields (Name, Email, Message).' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          serviceInterest: service.title,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || `Thank you! Your inquiry for ${service.title} has been received.`
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Submission failed. Please try again.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error communicating with the server. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white text-[#17233A] antialiased">
      <SeoMeta 
        title={`${service.title} - Enterprise IT Solutions | PetaBytz`}
        description={service.subtitle || service.overview}
      />

      {/* Compact Enterprise Hero Banner (80–120px) */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D9] overflow-hidden py-8 sm:py-10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/images/background/subheader.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-[11px] text-[#747474] mb-3">
            <Link to="/" className="hover:text-[#FF8A00] transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#555555]">{service.category}</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#FF8A00] font-semibold">{service.title}</span>
          </div>

          <div className="space-y-1.5 max-w-3xl">
            <span className="inline-block bg-[#FF8A00]/15 text-[#FF8A00] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-xs border border-[#FF8A00]/30">
              {service.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#17233A] tracking-tight leading-tight">
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                {service.subtitle}
              </p>
            )}
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2]/30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Overview, Capabilities, Benefits, Related Services */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Executive Overview with Supporting Visual Rhythm */}
              <div className="bg-white p-6 sm:p-7 rounded-md border border-[#DDDDDD] shadow-xs space-y-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {service.heroImage && (
                    <div className="w-full md:w-64 shrink-0 bg-[#FAF7F2] rounded border border-[#E8E2D9] p-4 flex items-center justify-center">
                      <img 
                        src={service.heroImage} 
                        alt={service.title} 
                        className="max-h-44 w-auto object-contain mx-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/services/cloud-transformation.png';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-2.5">
                    <h2 className="text-lg sm:text-xl font-bold text-[#17233A]">
                      Service Overview & Strategic Value
                    </h2>
                    <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                      {service.overview}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Technical Capabilities (Matching GenAI Reference Card Design) */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-[#17233A]">
                  Key Technical Capabilities & Scope
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="group flex bg-white rounded-md border border-[#DDDDDD] shadow-xs hover:border-[#FF8A00]/60 hover:shadow-sm transition-all duration-200 overflow-hidden"
                    >
                      {/* Orange Vertical Accent Strip on Left (8-12px) */}
                      <div className="w-2.5 sm:w-3 bg-[#FF8A00] shrink-0" />

                      <div className="p-4 sm:p-5 flex items-start space-x-3 w-full">
                        <div className="w-7 h-7 rounded shrink-0 bg-[#FFF7EE] border border-[#FFE2C2] text-[#FF8A00] flex items-center justify-center font-bold text-xs mt-0.5">
                          0{idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-bold text-[#17233A] leading-snug">
                            {feat.title}
                          </h3>
                          <p className="text-xs text-[#555555] leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Business Outcomes */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="bg-[#004B70] text-white p-6 sm:p-8 rounded-md shadow-xs space-y-4">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Measurable Business Outcomes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                        <span className="text-slate-100 text-xs sm:text-[13px] leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Strategic Implementation Methodology */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-[#17233A]">
                    Engagement & Delivery Methodology
                  </h2>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A00] font-mono">
                    Milestone-Driven
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      step: "01",
                      title: "Technical Discovery & TCO Audit",
                      desc: `Comprehensive assessment of current workloads, compliance boundaries, and architectural prerequisites for ${service.title}.`,
                      icon: Activity
                    },
                    {
                      step: "02",
                      title: "Target Blueprint Architecture",
                      desc: "Engineering a Well-Architected target state, zero-trust security guardrails, and rapid proof-of-concept validation.",
                      icon: Layers
                    },
                    {
                      step: "03",
                      title: "Phased Deployment & Cutover",
                      desc: "Automated IaC implementation, dual-run testing, data synchronization, and zero-downtime production cutover.",
                      icon: Workflow
                    },
                    {
                      step: "04",
                      title: "24/7 SLA Management & FinOps",
                      desc: "Continuous proactive monitoring, ITIL incident management, quarterly architectural reviews, and monthly cost tuning.",
                      icon: ShieldCheck
                    }
                  ].map((phase, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-md border border-[#DDDDDD] p-4.5 space-y-2 hover:border-[#FF8A00] transition shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#FF8A00] font-mono">
                          PHASE {phase.step}
                        </span>
                        <phase.icon className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#17233A]">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Technology Practices */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-[#E8E2D8]">
                  <h3 className="text-sm font-bold text-[#17233A] uppercase tracking-wider">
                    Related Technology Practices
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.relatedServices.map((relSlug) => {
                      const rel = servicesData[relSlug];
                      if (!rel) return null;
                      return (
                        <Link
                          key={relSlug}
                          to={`/${relSlug}`}
                          className="bg-white hover:bg-[#17233A] hover:text-white text-[#17233A] text-xs font-semibold px-3.5 py-1.5 rounded-sm border border-[#DDDDDD] shadow-xs transition"
                        >
                          {rel.title} &rarr;
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Compact Sticky Inquiry Card */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-md border border-[#DDDDDD] shadow-xs">
                <div className="space-y-1 mb-4">
                  <h3 className="text-base font-bold text-[#17233A]">
                    Inquire About This Service
                  </h3>
                  <p className="text-xs text-[#555555]">
                    Speak directly with our enterprise solution architects.
                  </p>
                </div>

                {status.type === 'success' && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3.5 rounded text-xs space-y-1.5 mb-4">
                    <div className="font-bold flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Inquiry Received</span>
                    </div>
                    <div className="text-[11.5px] leading-relaxed">{status.message}</div>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded text-xs flex items-start space-x-1.5 mb-4">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full text-xs px-3 py-2 rounded bg-white border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className="w-full text-xs px-3 py-2 rounded bg-white border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-xs px-3 py-2 rounded bg-white border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enterprise Organization"
                      className="w-full text-xs px-3 py-2 rounded bg-white border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                      Requirements *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={`Tell us about your ${service.title} requirements...`}
                      className="w-full text-xs px-3 py-2 rounded bg-white border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 bg-[#FF8A00] hover:bg-[#E07900] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded transition flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 pt-3 border-t border-[#F0F0F0] flex items-center justify-center space-x-1.5 text-[11px] text-[#747474]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>NDA Signed & Strictly Confidential</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQ title={`Frequently Asked Questions: ${service.title}`} />

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
