import React from 'react';
import SeoMeta from '../components/SeoMeta';

export default function PrivacyPolicy() {
  return (
    <div>
      <SeoMeta 
        title="Privacy Policy - Data Protection & Compliance"
        description="PetaBytz Technologies Privacy Policy and compliance guidelines regarding information security and data confidentiality."
      />

      <section className="py-16 bg-[#022f46] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Privacy Policy</h1>
          <p className="text-slate-300 text-sm mt-2">Last Updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-sm leading-relaxed space-y-6 text-slate-700">
          <div>
            <h2 className="text-xl font-bold text-[#022f46]">1. Information We Collect</h2>
            <p className="mt-2">
              PetaBytz Technologies Inc. ("we", "us", "our") collects corporate contact information (such as your name, corporate email address, phone number, and company name) when you request an architecture assessment, download whitepapers, subscribe to newsletters, or submit an inquiry through our websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#022f46]">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use collected information solely for professional business purposes: responding to service inquiries, executing mutual NDAs, delivering requested technical documentation, providing technical support, and improving our digital service delivery. We strictly do not sell, rent, or trade your personal or corporate data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#022f46]">3. ISO 27001 Security & Data Safeguards</h2>
            <p className="mt-2">
              We implement industry-leading technical and organizational security controls in compliance with ISO 27001:2013 and SOC 2 standards. All web traffic is encrypted via TLS 1.3, and access to internal databases is restricted to authorized personnel under multi-factor authentication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#022f46]">4. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy or wish to request data erasure, please contact our Data Protection Officer at <a href="mailto:info@petabytz.com" className="text-brand-orange font-semibold">info@petabytz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
