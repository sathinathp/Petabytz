import React from 'react';
import SeoMeta from '../components/SeoMeta';

// GenAI Components
import GenAIHero from '../components/genai/GenAIHero';
import GenAIIntro from '../components/genai/GenAIIntro';
import GenAICapabilities from '../components/genai/GenAICapabilities';
import GenAISuccessStory from '../components/genai/GenAISuccessStory';
import GenAIClientsAndPartners from '../components/genai/GenAIClientsAndPartners';
import GenAITestimonial from '../components/genai/GenAITestimonial';
import GenAIRequestCall from '../components/genai/GenAIRequestCall';
import GenAIFAQ from '../components/genai/GenAIFAQ';
import GenAIBlogs from '../components/genai/GenAIBlogs';
import GenAICaseStudies from '../components/genai/GenAICaseStudies';

export default function GenAIServices() {
  return (
    <div className="w-full bg-white text-[#17233A] antialiased">
      <SeoMeta
        title="Generative AI (GenAI) Services - Enterprise AI & Automation Solutions"
        description="Revolutionize creativity and automation with PetaBytz enterprise Generative AI services. Secure LLM engineering, intelligent conversational agents, and autonomous document workflows."
      />

      {/* 1. Hero / Banner */}
      <GenAIHero />

      {/* 2. Introduction Section */}
      <GenAIIntro />

      {/* 3. Gen AI Capabilities */}
      <GenAICapabilities />

      {/* 4. AI IN ACTION – PETABYTZ SUCCESS STORY */}
      <GenAISuccessStory />

      {/* 5 & 6. Client Logos & Partner Logos */}
      <GenAIClientsAndPartners />

      {/* 7. Customer Testimonial */}
      <GenAITestimonial />

      {/* 8. Request-a-call CTA */}
      <GenAIRequestCall />

      {/* 9. Frequently Asked Questions */}
      <GenAIFAQ />

      {/* 10. Blogs */}
      <GenAIBlogs />

      {/* 11. Case Studies */}
      <GenAICaseStudies />
    </div>
  );
}
