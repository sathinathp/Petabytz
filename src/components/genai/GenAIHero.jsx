import React from 'react';

export default function GenAIHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D9] overflow-hidden py-7 sm:py-9">
      {/* Subtle map / architectural texture background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/images/background/subheader.jpg')" }}
      />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#17233A] tracking-tight">
          Generative AI (GenAI)
        </h1>
      </div>
    </section>
  );
}
