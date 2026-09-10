import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function GenAIRequestCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState({ type: '', message: '' }); // type: 'success' | 'error' | ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerStatus({ type: '', message: '' });

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setServerStatus({
        type: 'error',
        message: 'Please complete all required fields (Name, Email, and Message).'
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.organization,
          serviceInterest: 'Generative AI Services',
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerStatus({
          type: 'success',
          message: data.message || 'Thank you for reaching out! Our GenAI specialists will contact you shortly.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          message: ''
        });
      } else {
        setServerStatus({
          type: 'error',
          message: data.error || 'Submission failed. Please try again or call us directly.'
        });
      }
    } catch (err) {
      setServerStatus({
        type: 'error',
        message: 'Network error communicating with the server. Please check your connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FFFBEA] py-12 sm:py-16 border-b border-[#F0E8D0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Consultant / Support Illustration */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[360px]">
              <img
                src="/images/services/contact.png"
                alt="PetaBytz Consultation Representative"
                className="w-full h-auto max-h-[340px] object-contain drop-shadow-sm"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/casestudy/l1support.png';
                }}
              />
            </div>
          </div>

          {/* Right: Request a Call Header & Form */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#17233A] leading-tight">
                Petabytz would love to talk about how we can work together.
              </h2>
              <p className="text-xs sm:text-[13px] text-[#555555] mt-1.5 leading-relaxed">
                Give us some information so that our experts can get back to you.
              </p>
            </div>

            {/* Server Feedback Alert */}
            {serverStatus.type === 'success' && (
              <div className="flex items-start space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-md text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{serverStatus.message}</span>
              </div>
            )}

            {serverStatus.type === 'error' && (
              <div className="flex items-start space-x-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-xs">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{serverStatus.message}</span>
              </div>
            )}

            {/* Compact Corporate Form */}
            <form onSubmit={handleSubmit} className="space-y-3 bg-white p-5 sm:p-6 rounded-lg border border-[#E4DCC8] shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full text-xs px-3 py-2 bg-white rounded border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="corporate@company.com"
                    className="w-full text-xs px-3 py-2 bg-white rounded border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    className="w-full text-xs px-3 py-2 bg-white rounded border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company or Organization"
                    className="w-full text-xs px-3 py-2 bg-white rounded border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#17233A] uppercase tracking-wider mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or challenge..."
                  className="w-full text-xs px-3 py-2 bg-white rounded border border-[#CCCCCC] focus:border-[#FF8A00] focus:outline-none transition resize-none"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF8A00] hover:bg-[#E07900] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider rounded transition shadow-xs cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <span>SUBMIT</span>
                  )}
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
