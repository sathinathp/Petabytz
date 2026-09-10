import React from 'react';

export default function GenAISuccessStory() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#17233A] tracking-tight uppercase">
            AI IN ACTION – PETABYTZ SUCCESS STORY
          </h2>
        </div>

        {/* Centered Narrow Case Study Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-md border border-[#DDDDDD] p-6 sm:p-7 shadow-xs space-y-4">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
                Client:
              </span>
              <p className="text-sm font-semibold text-[#17233A] mt-0.5">
                Major healthcare / enterprise client
              </p>
            </div>

            <div className="border-t border-[#F0F0F0] pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17233A]">
                Challenge:
              </span>
              <p className="text-xs sm:text-[13px] text-[#555555] mt-1 leading-relaxed">
                The client needed faster and more reliable processing of a large volume of documents/data and wanted to improve operational workflows across distributed clinical and administrative teams.
              </p>
            </div>

            <div className="border-t border-[#F0F0F0] pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17233A]">
                Solution:
              </span>
              <p className="text-xs sm:text-[13px] text-[#555555] mt-1 leading-relaxed">
                PetaBytz implemented an AI-assisted automation workflow using GenAI techniques, combining secure document extraction, custom prompt pipelines, and continuous quality audit loops.
              </p>
            </div>

            <div className="border-t border-[#F0F0F0] pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#17233A]">
                Outcome:
              </span>
              <p className="text-xs sm:text-[13px] text-[#555555] mt-1 leading-relaxed">
                Improved turnaround time, reduced manual effort, and better operational visibility with strict compliance adherence and zero data privacy compromises.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
