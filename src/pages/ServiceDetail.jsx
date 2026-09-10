import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  PhoneCall, 
  Send, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';

export default function ServiceDetail({ explicitSlug }) {
  const params = useParams();
  const slug = explicitSlug || params.slug || 'cloud-transformation';
  const service = servicesData[slug] || servicesData['cloud-transformation'];

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <div>
      <SeoMeta 
        title={service.title}
        description={service.subtitle || service.overview}
      />

      {/* Hero Banner */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">{service.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-orange font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-orange/30">
                {service.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {service.subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-slate-900/80 border border-slate-700/80 p-6 rounded-2xl backdrop-blur-xl shadow-xl w-full">
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                  Connect with a Specialist
                </div>
                <div className="text-sm font-bold text-white mb-4">
                  Schedule Free Architecture Assessment
                </div>
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center py-3 px-4 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-glow transition"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Overview, Core Pillars, Benefits */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Executive Overview */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-[#022f46]">
                  Service Overview & Strategic Value
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Key Features / Solutions Pillars */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#022f46]">
                  Key Technical Capabilities & Scope
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-orange/50 hover:shadow-md transition space-y-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-[#022f46]">{feat.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              {service.benefits && (
                <div className="bg-[#022f46] text-white p-8 rounded-2xl shadow-xl space-y-6">
                  <h2 className="text-2xl font-bold text-white">
                    Measurable Business Outcomes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Capabilities */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-[#022f46]">
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
                          className="bg-white hover:bg-brand-navy hover:text-white text-[#022f46] text-xs font-semibold px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition"
                        >
                          {rel.title} &rarr;
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Right Col: Quick Inquiry Form + Certifications Badge */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Inquiry Card */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-md sticky top-24">
                <h3 className="text-lg font-bold text-[#022f46] mb-1">
                  Inquire About This Service
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Speak directly with our enterprise solution architects.
                </p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center text-xs space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <div className="font-bold text-sm">Thank You!</div>
                    <div>Your inquiry for {service.title} has been received. Our lead architect will reach out within 2 business hours.</div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Project Requirements</label>
                      <textarea
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`Tell us about your ${service.title} project requirements...`}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-glow transition flex items-center justify-center space-x-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center space-x-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>NDA Signed & Strictly Confidential</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
