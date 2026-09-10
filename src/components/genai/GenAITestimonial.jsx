import React from 'react';

export default function GenAITestimonial() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-[#F0F0F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading Hierarchy */}
        <div className="text-center mb-8 sm:mb-10 space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-[#17233A] tracking-tight">
            What Our Customers Speak
          </h2>
          <div className="text-sm sm:text-base font-semibold text-[#FF8A00]">
            About PetaBytz
          </div>
        </div>

        {/* Deep Navy/Blue Rounded Rectangle */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#004B70] rounded-xl p-8 sm:p-12 text-center text-white shadow-md space-y-5">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal text-slate-100">
              "Working with Petabytz has been an absolute game-changer. Their precision in understanding our enterprise needs, deploying robust AI automation pipelines, and streamlining our IT operations delivered immediate measurable value."
            </p>
            <div className="pt-2 border-t border-white/15 max-w-xs mx-auto">
              <div className="text-sm font-bold text-white tracking-wide">
                Sanjay Verma
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                VP of Engineering, Vaibhav Global Limited (VGL)
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
