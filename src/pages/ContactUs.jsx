import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Building,
  Sparkles
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import { locationsData } from '../data/locations';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Cloud Transformation',
    message: '',
    ndaRequested: false
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ 
          state: 'success', 
          message: data.message || 'Thank you for contacting PetaBytz! Our lead solution architect will review your project and get in touch within 2 business hours.' 
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: 'Cloud Transformation',
          message: '',
          ndaRequested: false
        });
      } else {
        setStatus({
          state: 'error',
          message: data.error || 'Submission failed. Please check your information and try again.'
        });
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Network error communicating with the server. Please try again.'
      });
    }
  };

  return (
    <div>
      <SeoMeta 
        title="Contact Us - Enterprise IT Solutions & Cloud Consulting"
        description="Looking for Digital Transformation, Cloud Services, or 24/7 ITSM Managed Support? Connect with PetaBytz Technologies today for expert consulting."
      />

      {/* Enterprise Hero Banner */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D9] overflow-hidden py-10 sm:py-14">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/images/background/subheader.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="inline-block bg-[#FF8A00]/15 text-[#FF8A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm border border-[#FF8A00]/30">
            Get In Touch
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17233A] tracking-tight">
            Connect with PetaBytz Enterprise Architects
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Have an upcoming modernization project or need 24/7 enterprise IT managed services? Our certified cloud architects are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Consultation Request</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#022f46]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
                Fill out the form below and we will get back to you promptly.
              </p>

              {status.state === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-emerald-700 leading-relaxed max-w-md mx-auto">
                    {status.message}
                  </p>
                  <button
                    onClick={() => setStatus({ state: 'idle', message: '' })}
                    className="mt-4 px-6 py-2 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-emerald-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise Inc."
                        className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition"
                    >
                      <option value="Cloud Transformation">Cloud Transformation & Migration</option>
                      <option value="Digital Transformation">Digital Transformation & M365</option>
                      <option value="ITSM Managed Services">ITSM Managed Services (L1 & L2)</option>
                      <option value="AI Solutions">Generative AI & Machine Learning</option>
                      <option value="Salesforce Services">Salesforce Consulting & CRM</option>
                      <option value="RWaaS">RWaaS - Remote Workforce as a Service</option>
                      <option value="VAPT Security">VAPT & Cyber Security Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Details / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project requirements, timeline, and current infrastructure..."
                      className="w-full text-sm p-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:border-brand-orange transition resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-1">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="w-4 h-4 text-brand-orange border-slate-300 rounded focus:ring-brand-orange"
                    />
                    <label htmlFor="nda" className="text-xs text-slate-600 cursor-pointer">
                      Please send a standard Mutual Non-Disclosure Agreement (NDA) before detailed discussion.
                    </label>
                  </div>

                  {status.state === 'error' && (
                    <p className="text-red-500 text-xs">{status.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status.state === 'submitting'}
                    className="w-full py-4 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-glow transition duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status.state === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}</span>
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your information is protected under ISO 27001 confidentiality.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Global Office Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* India */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <img 
                    src={locationsData.india.flag} 
                    alt="India" 
                    className="w-6 h-4 object-cover rounded shadow-xs" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h3 className="text-base font-bold text-[#022f46]">India Global Headquarters</h3>
                    <div className="text-[11px] text-slate-400">PetaBytz Technologies Pvt Ltd</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{locationsData.india.address}</span>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2 pt-1">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`tel:${locationsData.india.phone}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.india.phone}
                  </a>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`mailto:${locationsData.india.email}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.india.email}
                  </a>
                </div>
              </div>

              {/* USA */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <img 
                    src={locationsData.usa.flag} 
                    alt="USA" 
                    className="w-6 h-4 object-cover rounded shadow-xs" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h3 className="text-base font-bold text-[#022f46]">USA Regional Office</h3>
                    <div className="text-[11px] text-slate-400">PetaBytz Technologies Inc.</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{locationsData.usa.address}</span>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2 pt-1">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`tel:${locationsData.usa.phone}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.usa.phone}
                  </a>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`mailto:${locationsData.usa.email}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.usa.email}
                  </a>
                </div>
              </div>

              {/* Canada */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                  <img 
                    src={locationsData.canada.flag} 
                    alt="Canada" 
                    className="w-6 h-4 object-cover rounded shadow-xs" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <h3 className="text-base font-bold text-[#022f46]">Canada Regional Office</h3>
                    <div className="text-[11px] text-slate-400">PetaBytz Technologies Canada Inc.</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{locationsData.canada.address}</span>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2 pt-1">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`tel:${locationsData.canada.phone}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.canada.phone}
                  </a>
                </div>
                <div className="text-xs text-slate-700 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <a href={`mailto:${locationsData.canada.email}`} className="font-semibold hover:text-brand-orange transition">
                    {locationsData.canada.email}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
