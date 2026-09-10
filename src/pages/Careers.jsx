import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  GraduationCap, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Layers,
  Globe,
  Award,
  FileText
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import CTASection from '../components/CTASection';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [cvForm, setCvForm] = useState({ name: '', email: '', phone: '', linkedin: '', resumeNote: '' });

  const openings = [
    {
      id: "sr-cloud-architect",
      title: "Senior AWS / Azure Cloud Solutions Architect",
      department: "Cloud Engineering",
      location: "Hyderabad, India / Remote",
      type: "Full-Time",
      experience: "6-10 Years",
      desc: "Design and implement complex multi-cloud migrations, FinOps governance frameworks, and automated landing zones for global enterprise clients."
    },
    {
      id: "lead-devops-engineer",
      title: "Lead DevOps & Kubernetes Engineer",
      department: "DevOps & SRE",
      location: "Hyderabad, India / Remote",
      type: "Full-Time",
      experience: "5-8 Years",
      desc: "Architect enterprise CI/CD pipelines using GitHub Actions, Terraform IaC, Istio service mesh, and managed Amazon EKS / Azure AKS clusters."
    },
    {
      id: "l1-l2-support-lead",
      title: "ITSM L1 / L2 Service Desk Team Lead",
      department: "Managed Operations",
      location: "Hyderabad, India / Dallas, USA",
      type: "Full-Time (24/7 Rotational)",
      experience: "3-6 Years",
      desc: "Lead omnichannel technical support desk, triage incident escalations, manage ITIL SLAs, and ensure >90% first-contact resolution rates."
    },
    {
      id: "salesforce-lead-developer",
      title: "Senior Salesforce Developer & Consultant",
      department: "Enterprise CRM",
      location: "Toronto, Canada / Remote",
      type: "Full-Time",
      experience: "4-8 Years",
      desc: "Develop custom Apex, Lightning Web Components (LWC), and MuleSoft integrations across Sales Cloud, Service Cloud, and CRM Analytics."
    },
    {
      id: "gen-ai-engineer",
      title: "Generative AI & LLM Machine Learning Engineer",
      department: "AI Solutions",
      location: "Hyderabad, India / Remote",
      type: "Full-Time",
      experience: "3-6 Years",
      desc: "Build enterprise RAG pipelines, fine-tune open-source models (Llama 3, Mistral), and develop autonomous multi-agent workflows."
    }
  ];

  const [loading, setLoading] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState({ type: '', message: '' });

  const handleCvSubmit = async (e) => {
    e.preventDefault();
    if (!cvForm.name.trim() || !cvForm.email.trim() || !selectedJob) return;

    setLoading(true);
    setSubmissionFeedback({ type: '', message: '' });

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cvForm.name,
          email: cvForm.email,
          phone: cvForm.phone,
          jobId: selectedJob.id,
          jobTitle: selectedJob.title,
          linkedin: cvForm.linkedin,
          resumeNote: cvForm.resumeNote
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setCvSubmitted(true);
        setSubmissionFeedback({
          type: 'success',
          message: data.message || 'Your application has been received. Our talent acquisition team will review your profile.'
        });
        setTimeout(() => {
          setCvSubmitted(false);
          setSelectedJob(null);
          setCvForm({ name: '', email: '', phone: '', linkedin: '', resumeNote: '' });
          setSubmissionFeedback({ type: '', message: '' });
        }, 4000);
      } else {
        setSubmissionFeedback({
          type: 'error',
          message: data.error || 'Failed to submit application. Please check your details.'
        });
      }
    } catch (err) {
      setSubmissionFeedback({
        type: 'error',
        message: 'Network error submitting application. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SeoMeta 
        title="Careers at PetaBytz - Join Our Global Technology Team"
        description="Explore exciting career opportunities at PetaBytz Technologies. Work on cutting-edge cloud architecture, AI solutions, and 24/7 global IT operations."
      />

      {/* Enterprise Hero Banner */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D9] overflow-hidden py-10 sm:py-14">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: "url('/images/background/subheader.jpg')" }}
        />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="inline-block bg-[#FF8A00]/15 text-[#FF8A00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm border border-[#FF8A00]/30">
            Join Our Team
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17233A] tracking-tight">
            Build Your Career with PetaBytz Technologies
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] max-w-2xl mx-auto leading-relaxed">
            We are looking for passionate cloud architects, software engineers, DevOps practitioners, and AI specialists to engineer the future of enterprise technology.
          </p>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-[#022f46]">Continuous Learning</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                100% sponsored cloud certifications (AWS, Microsoft, Salesforce) and ongoing technical workshops.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-[#022f46]">Inclusive Culture</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Collaborative, supportive environment with merit-based fast-track promotions and global mobility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold text-[#022f46]">Modern Tech Stack</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Work directly on cutting-edge generative AI, Kubernetes clusters, and large-scale cloud transformations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Enterprise Benefits */}
      <section className="py-16 bg-[#FAF7F2]/40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
              Holistic Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A]">
              Benefits Designed for Exceptional Engineers
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              We provide the compensation, autonomy, and security you need to do your life's best work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comprehensive Health & Wellness",
                desc: "Premium family health insurance, annual wellness checkups, mental health support, and maternity/paternity allowances.",
                icon: ShieldCheck
              },
              {
                title: "100% Certification Sponsorship",
                desc: "Full coverage for AWS, Azure, Google Cloud, Salesforce, and ITIL exam vouchers, plus paid study time.",
                icon: Award
              },
              {
                title: "Global Hybrid & Remote Flexibility",
                desc: "Choose between our state-of-the-art regional hubs or work remotely with ergonomic equipment stipends.",
                icon: Globe
              },
              {
                title: "Merit-Based Fast Track",
                desc: "Bi-annual performance evaluations with transparent milestones for promotion to Lead, Principal, and Architect bands.",
                icon: Layers
              },
              {
                title: "Modern Engineering Hardware",
                desc: "Top-tier MacBook Pro or enterprise Dell Precision workstations, high-speed monitors, and secure cloud sandboxes.",
                icon: Zap
              },
              {
                title: "Paid Time Off & Sabbaticals",
                desc: "Generous paid annual leave, international public holidays, and tenure-based sabbatical opportunities.",
                icon: HeartHandshake
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-md border border-[#DDDDDD] hover:border-[#FF8A00] transition flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#FFF7EE] border border-[#FFE2C2] text-[#FF8A00] flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#17233A] mb-2">{benefit.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">{benefit.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center text-[11px] font-semibold text-[#FF8A00]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Standard Benefit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Hiring Journey */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8A00] block mb-1">
              Transparent Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A]">
              Our 5-Stage Hiring & Onboarding Journey
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              A respectful, transparent recruitment experience designed to evaluate engineering depth without bureaucratic hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Application Review", time: "Within 48 Hours", desc: "Our technical recruiting team reviews your background and alignment with open mandates." },
              { step: "02", title: "Architecture Screening", time: "30-45 Min", desc: "Initial exploratory conversation covering core engineering philosophy and recent project work." },
              { step: "03", title: "Technical Deep-Dive", time: "60 Min", desc: "Collaborative systems design session or hands-on problem solving with senior staff architects." },
              { step: "04", title: "Leadership & Culture", time: "30 Min", desc: "Discussion on values, team dynamics, career goals, and growth opportunities at PetaBytz." },
              { step: "05", title: "Formal Offer", time: "Within 5 Days", desc: "Transparent offer package details, benefit orientation, and seamless digital onboarding." }
            ].map((stage, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-[#DDDDDD] rounded p-5 flex flex-col justify-between hover:border-[#FF8A00] transition shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-black text-[#FF8A00] font-mono">
                      {stage.step}
                    </span>
                    <span className="text-[9.5px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded font-mono">
                      {stage.time}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#17233A] mb-1.5">{stage.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022f46] mt-2">
              Explore Our Current Career Openings
            </h2>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div 
                key={job.id}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-orange/50 transition flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {job.experience}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#022f46]">{job.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{job.desc}</p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center px-6 py-3 bg-[#022f46] hover:bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-xl transition"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-100">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg font-bold"
            >
              &times;
            </button>

            <div className="text-xs font-bold uppercase text-brand-orange">Apply for Position</div>
            <h3 className="text-xl font-bold text-[#022f46] mt-1 mb-4">{selectedJob.title}</h3>

            {cvSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <div className="font-bold text-base">Application Submitted!</div>
                <div className="text-xs">Our recruitment team will review your profile and reach out shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleCvSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={cvForm.name}
                    onChange={(e) => setCvForm({ ...cvForm, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={cvForm.email}
                    onChange={(e) => setCvForm({ ...cvForm, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={cvForm.phone}
                    onChange={(e) => setCvForm({ ...cvForm, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn Profile or Portfolio URL</label>
                  <input
                    type="url"
                    value={cvForm.linkedin}
                    onChange={(e) => setCvForm({ ...cvForm, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Key Experience / Skills Summary</label>
                  <textarea
                    rows="3"
                    value={cvForm.resumeNote}
                    onChange={(e) => setCvForm({ ...cvForm, resumeNote: e.target.value })}
                    placeholder="Summarize your years of experience, primary tech stack, and current notice period..."
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-glow transition"
                >
                  Submit Application
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
