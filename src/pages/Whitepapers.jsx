import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';
import { whitepapersData } from '../data/whitepapers';

export default function Whitepapers() {
  const [selectedWp, setSelectedWp] = useState(null);
  const [downloadForm, setDownloadForm] = useState({ name: '', email: '', company: '' });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setSelectedWp(null);
      setDownloadForm({ name: '', email: '', company: '' });
    }, 4000);
  };

  return (
    <div>
      <SeoMeta 
        title="Whitepapers & Research - Technical Architecture Guides"
        description="Download free enterprise whitepapers by PetaBytz Technologies on DevOps maturity, Kubernetes security, Microsoft 365 governance, and next-gen ITSM."
      />

      {/* Hero */}
      <section className="relative gradient-hero-bg text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="hero-pattern absolute inset-0 opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-orange/30 mb-4">
            Research & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technical <span className="gradient-text-orange">Whitepapers</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            In-depth engineering frameworks, compliance architectures, and cloud modernization blueprints authored by our principal architects.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapersData.map((wp) => (
              <div 
                key={wp.id}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded">
                      {wp.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{wp.pages}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#022f46] leading-snug">
                    {wp.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {wp.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-800">Topics Explored:</div>
                    {wp.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={() => setSelectedWp(wp)}
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#022f46] hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span>Download Whitepaper (PDF)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedWp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-100">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedWp(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              &times;
            </button>

            <div className="text-xs font-bold uppercase text-brand-orange">Download Resource</div>
            <h3 className="text-lg font-bold text-[#022f46] mt-1 mb-4">{selectedWp.title}</h3>

            {downloadSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <div className="font-bold text-base">Whitepaper Ready!</div>
                <div className="text-xs">Your PDF download link has been emailed and unlocked.</div>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={downloadForm.name}
                    onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={downloadForm.email}
                    onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={downloadForm.company}
                    onChange={(e) => setDownloadForm({ ...downloadForm, company: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-glow transition"
                >
                  Unlock Free Download
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <CTASection />
    </div>
  );
}
