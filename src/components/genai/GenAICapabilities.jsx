import React from 'react';
import { 
  FileText, 
  Bot, 
  Search, 
  FileSpreadsheet, 
  BarChart3, 
  Sliders, 
  Image as ImageIcon, 
  Layers 
} from 'lucide-react';

export default function GenAICapabilities() {
  const capabilities = [
    {
      id: 'text-generation',
      title: 'Text Generation',
      desc: 'Create relevant, structured content for enterprise communications, documentation, and knowledge workflows with greater speed and consistency.',
      imageIcon: '/images/new/services/text_generation.png',
      fallbackIcon: FileText
    },
    {
      id: 'conversational-agents',
      title: 'Conversational Agents (Chatbots)',
      desc: 'Build intelligent assistants that answer questions, guide users, and support business workflows using approved enterprise knowledge.',
      imageIcon: '/images/new/services/chatbot.png',
      fallbackIcon: Bot
    },
    {
      id: 'document-querying',
      title: 'Document Querying',
      desc: 'Enable teams to retrieve answers and insights from large collections of business documents using natural-language queries.',
      imageIcon: '/images/new/services/question-and-answer.png',
      fallbackIcon: Search
    },
    {
      id: 'automated-text-analysis',
      title: 'Automated Text Analysis',
      desc: 'Analyze large volumes of text to identify patterns, topics, sentiment, entities, and actionable business insights.',
      imageIcon: '/images/new/services/Automated_Text_Analysis.png',
      fallbackIcon: FileSpreadsheet
    },
    {
      id: 'data-quality-reporting',
      title: 'Automated Data Quality Reporting',
      desc: 'Automate data-quality checks and reporting to help teams identify inconsistencies, missing information, and data risks.',
      imageIcon: '/images/new/services/Automated_Data_Quality_Reporting.png',
      fallbackIcon: BarChart3
    },
    {
      id: 'personalization',
      title: 'Personalization',
      desc: 'Deliver more relevant experiences by adapting content, recommendations, and interactions to user and customer context.',
      imageIcon: '/images/new/services/Personalization.png',
      fallbackIcon: Sliders
    },
    {
      id: 'image-generation',
      title: 'Image Generation',
      desc: 'Generate business-ready visual concepts and supporting imagery for creative and communication workflows.',
      imageIcon: '/images/new/services/Image_Generation.png',
      fallbackIcon: ImageIcon
    },
    {
      id: 'multimodal-capabilities',
      title: 'Multimodal Capabilities',
      desc: 'Combine text, images, documents, and other data types to enable more capable enterprise AI workflows.',
      imageIcon: '/images/new/services/Multimodal_Capabilities.png',
      fallbackIcon: Layers
    }
  ];

  return (
    <section className="w-full bg-[#FAF7F2]/40 py-12 sm:py-16 border-b border-[#ECE6DC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-9 sm:mb-11">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17233A] tracking-tight">
            Gen AI Capabilities
          </h2>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {capabilities.map((cap) => {
            const FallbackIcon = cap.fallbackIcon;
            return (
              <div
                key={cap.id}
                className="group relative flex bg-white rounded-md border border-[#DDDDDD] shadow-xs hover:border-[#FF8A00]/60 hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                {/* Orange Vertical Accent Strip on Left (8-12px) */}
                <div className="w-2.5 sm:w-3 bg-[#FF8A00] shrink-0" />

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex items-start space-x-3.5 w-full">
                  {/* Small Icon */}
                  <div className="w-8 h-8 rounded shrink-0 bg-[#FFF7EE] border border-[#FFE2C2] p-1.5 flex items-center justify-center mt-0.5">
                    <img
                      src={cap.imageIcon}
                      alt={cap.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const fallbackEl = parent.querySelector('.fallback-icon');
                        if (fallbackEl) fallbackEl.style.display = 'block';
                      }}
                    />
                    <FallbackIcon className="fallback-icon w-4 h-4 text-[#FF8A00] hidden" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#17233A] leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-[12.5px] text-[#555555] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
