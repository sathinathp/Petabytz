import React from 'react';

export default function GenAIIntro() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 border-b border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Compact Professional GenAI Artwork */}
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[380px] rounded-lg overflow-hidden border border-[#EBEBEB] bg-[#FAFAFA] p-3 shadow-xs">
              <img
                src="/images/new/ai/generative_ai.png"
                alt="Generative AI Enterprise Solutions"
                className="w-full h-auto max-h-[260px] object-contain mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/services/AI_services.png';
                }}
              />
            </div>
          </div>

          {/* Right Column: Heading & Concise Enterprise Narrative */}
          <div className="md:col-span-7 space-y-3.5">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#17233A] leading-snug">
              Revolutionize Creativity and Automation with Generative AI
            </h2>

            <div className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#555555] leading-relaxed">
              <p>
                Generative AI is redefining enterprise boundaries by converting unstructured organizational knowledge into high-velocity business capabilities. Beyond experimental prompts, modern enterprises leverage tailored Large Language Models (LLMs) and cognitive automation pipelines to augment human intelligence, accelerate cycle times, and streamline complex business operations.
              </p>
              <p>
                At PetaBytz, we architect secure, enterprise-grade Generative AI solutions that seamlessly integrate with your existing data warehouses, cloud infrastructure, and business applications. From intelligent conversational agents and autonomous document synthesis to deep automated data quality auditing, our solutions ensure ironclad data privacy, zero model leakage, and measurable return on investment.
              </p>
              <p>
                By anchoring our deployments in responsible AI frameworks and rigorous governance, we enable global enterprises to elevate workplace productivity, scale personalized customer experiences, and achieve sustainable operational efficiency with predictable, enterprise-ready precision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
