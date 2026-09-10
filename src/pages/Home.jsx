import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Play, 
  Users, 
  ShieldCheck, 
  Award, 
  Globe,
  Globe2, 
  Cloud, 
  Settings, 
  Server, 
  Bot, 
  Cpu,
  TrendingUp, 
  Lock, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  BarChart3, 
  MapPin, 
  Sparkles,
  Layers,
  Phone,
  Mail,
  Mouse
} from 'lucide-react';
import SeoMeta from '../components/SeoMeta';
import { motion, AnimatePresence } from 'framer-motion';
import { blogsData } from '../data/blogs';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isSlidePaused, setIsSlidePaused] = useState(false);
  const [activeServiceAccordion, setActiveServiceAccordion] = useState(0);
  const [partnerCardIndex, setPartnerCardIndex] = useState(0);

  const partnerCards = [
    {
      id: 1,
      image: "/images/about/partner-hero.jpg",
      fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      tag: "REAL SOLUTIONS REAL PEOPLE",
      caption: "Built for what's next",
      title: "Executive Strategic Partnership"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      tag: "COLLABORATIVE INNOVATION",
      caption: "Engineering the future",
      title: "Agile Global Delivery Teams"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      fallback: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      tag: "NEXT-GEN CLOUD INFRA",
      caption: "Scale with confidence",
      title: "Cloud & Intelligent Systems"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      fallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      tag: "STRATEGIC TRANSFORMATION",
      caption: "Solving complex challenges",
      title: "Enterprise Advisory & Growth"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      tag: "AI & INTELLIGENT AUTOMATION",
      caption: "Future-ready systems",
      title: "Cognitive AI Architectures"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      fallback: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      tag: "CLIENT TRUST & SUCCESS",
      caption: "Sustainable outcomes",
      title: "Global Enterprise Excellence"
    }
  ];

  const nextPartnerCard = () => {
    setPartnerCardIndex((prev) => (prev + 1) % partnerCards.length);
  };

  const prevPartnerCard = () => {
    setPartnerCardIndex((prev) => (prev - 1 + partnerCards.length) % partnerCards.length);
  };

  const heroSlides = [
    {
      id: 'smarter-business',
      eyebrow: 'TECHNOLOGY FOR A BRIGHTER TOMORROW',
      titleLine1: 'Smarter Business',
      titleLine2Prefix: 'Through ',
      titleAccent: 'Cloud & AI',
      titleLine3: 'Innovation',
      desc: 'PetaBytz helps global enterprises modernize, automate and scale with secure, intelligent and future-ready technology solutions.'
    },
    {
      id: 'ai-solutions',
      eyebrow: 'NEXT-GENERATION INTELLIGENCE',
      titleLine1: 'Accelerate Growth',
      titleLine2Prefix: 'Through ',
      titleAccent: 'Advanced AI',
      titleLine3: 'Solutions',
      desc: 'Harness the power of Generative AI, Machine Learning, and NLP to automate processes and unlock unprecedented business insights.'
    },
    {
      id: 'm365-mastery',
      eyebrow: 'MODERN WORKPLACE PRODUCTIVITY',
      titleLine1: 'Empower Your Team',
      titleLine2Prefix: 'With ',
      titleAccent: 'Microsoft 365',
      titleLine3: 'Mastery',
      desc: 'Seamlessly integrate and optimize your M365 environment. Drive collaboration, security, and efficiency across your entire global workforce.'
    },
    {
      id: 'cloud-excellence',
      eyebrow: 'ENTERPRISE CLOUD TRANSFORMATION',
      titleLine1: 'Elevate Your Business',
      titleLine2Prefix: 'With ',
      titleAccent: 'IT Cloud',
      titleLine3: 'Excellence',
      desc: 'Transform your enterprise with world-class optimized business solutions. We deliver cutting-edge Cloud Transformation designed for scale.'
    },
    {
      id: 'itsm-services',
      eyebrow: 'RELIABLE SUPPORT INFRASTRUCTURE',
      titleLine1: 'Ensure Operations',
      titleLine2Prefix: 'With ',
      titleAccent: 'Leading ITSM',
      titleLine3: 'Services',
      desc: 'From L1 Deskside Support to advanced NOC/SOC Management, our 24/7 Managed Services keep your critical infrastructure running flawlessly.'
    }
  ];

  // Auto-advance hero slides every 3.5 seconds
  useEffect(() => {
    if (isSlidePaused) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isSlidePaused, heroSlides.length]);

  const nextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const clientLogos = [
    { name: 'Khaitan & Co', logo: '/images/clients/khaitan.png' },
    { name: 'Satin Creditcare', logo: '/images/clients/satin.png' },
    { name: 'Bitwise Global', logo: '/images/bitwise.png' },
    { name: 'Apmosys Technologies', logo: '/images/clients/apmosys.jpeg' },
    { name: 'SoftwareONE', logo: '/images/softwareone-logo-blk.svg' },
    { name: 'Nordem Systems', logo: '/images/clients/nordem.png' },
    { name: 'Global Enterprise', logo: '/images/clients/1.jpg' },
    { name: 'Tech Solutions', logo: '/images/clients/2.jpg' },
    { name: 'Financial Cloud', logo: '/images/clients/4.jpg' },
    { name: 'Digital Network', logo: '/images/clients/8.jpg' },
    { name: 'Healthcare Tech', logo: '/images/clients/10.jpg' },
    { name: 'Cloud Partner', logo: '/images/clients/11.png' },
    { name: 'Energy Group', logo: '/images/clients/17.png' },
    { name: 'ITSM Operations', logo: '/images/clients/18.png' }
  ];

  const testimonials = [
    {
      quote: "PetaBytz has been a strategic partner in our cloud journey. Their expertise and commitment to our success have made a real difference.",
      author: "Rajan Mehta",
      role: "CTO, Global Manufacturing Group"
    },
    {
      quote: "Working with Petabytz has been an absolute game-changer. Their precision in understanding our needs and presenting top talent streamlined our IT operations.",
      author: "Sanjay Verma",
      role: "VP of Engineering, Vaibhav Global Limited (VGL)"
    },
    {
      quote: "Their remote assistance and 24/7 ITSM monitoring gave our team unprecedented reliability and proactive issue resolution.",
      author: "Ananya Roy",
      role: "Head of Infrastructure, Khaitan & Co"
    }
  ];

  const enterpriseServices = [
    {
      num: "01",
      title: "Cloud & Infrastructure",
      desc: "Modern, scalable, and secure cloud environments.",
      icon: Cloud,
      tags: ["SCALABLE", "FLEXIBLE", "FUTURE-READY"],
      banner: "/images/background/service-card-preview.jpg",
      href: "/cloud-transformation"
    },
    {
      num: "02",
      title: "AI & Automation",
      desc: "Turn intelligence into real business outcomes.",
      icon: Cpu,
      tags: ["INTELLIGENT", "AUTONOMOUS", "HIGH-ROI"],
      banner: "/images/background/service-card-preview.jpg",
      href: "/ai-solutions"
    },
    {
      num: "03",
      title: "Managed IT",
      desc: "Reliable, proactive, and always-on support.",
      icon: Users,
      tags: ["24/7/365", "PROACTIVE", "ZERO-DOWNTIME"],
      banner: "/images/background/service-card-preview.jpg",
      href: "/managed-services"
    },
    {
      num: "04",
      title: "Security & Modernization",
      desc: "Stronger protection for a smarter, more modern enterprise.",
      icon: ShieldCheck,
      tags: ["ZERO-TRUST", "COMPLIANT", "RESILIENT"],
      banner: "/images/background/service-card-preview.jpg",
      href: "/vapt"
    }
  ];

  const services = enterpriseServices;

  const caseStudies = [
    {
      category: "Energy",
      title: "Modernizing Operations for a Sustainable Future",
      image: "/images/case-studies/cs-energy.jpg",
      href: "/casestudies"
    },
    {
      category: "Enterprise",
      title: "Driving Procurement Transformation with AI",
      image: "/images/case-studies/cs-enterprise.jpg",
      href: "/casestudies"
    },
    {
      category: "Manufacturing",
      title: "Strengthening Security Across Global Operations",
      image: "/images/case-studies/cs-manufacturing.jpg",
      href: "/casestudies"
    }
  ];

  return (
    <div className="bg-white text-slate-800">
      <SeoMeta 
        title="Innovation Lives Here - AventraInc Tech"
        description="Visit our Hyderabad office at DMR Corporate and discover how AventraInc Tech can help you modernize, transform and scale with cloud, AI and intelligent enterprise technology."
      />

      {/* 1. FULL-WIDTH HERO SECTION (DMR CORPORATE BACKGROUND WITH CLOUD & AI CONTENT) */}
      <section className="relative w-full h-[calc(100vh-70px)] min-h-[540px] max-h-[780px] flex flex-col justify-between overflow-hidden bg-[#EDF4FA] py-2 sm:py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Full-bleed DMR Corporate Building Photographic Canvas */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/mainb-clean.png"
            alt="PetaBytz Headquarters - DMR Corporate"
            className="w-full h-full object-cover object-[80%_96%] sm:object-[83%_95%] lg:object-[80%_94%] xl:object-[78%_92%] select-none"
          />
          
          {/* Multi-stage fade gradient on left so typography is crystal clear */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.93) 30%, rgba(237, 244, 250, 0.65) 50%, rgba(6, 16, 30, 0.3) 72%, transparent 100%)'
            }}
          />

          {/* Smooth bottom gradient fade blending road directly into the hard midnight navy block */}
          <div 
            className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(6, 16, 30, 0.25) 30%, rgba(6, 16, 30, 0.75) 70%, #06101E 100%)'
            }}
          />
        </div>

        {/* Center Main Content (Cinematic Layered Content Transitions without visual clutter) */}
        <div 
          className="relative z-10 max-w-7xl mx-auto w-full py-2 sm:py-4 my-auto"
          onMouseEnter={() => setIsSlidePaused(true)}
          onMouseLeave={() => setIsSlidePaused(false)}
        >
          <div className="max-w-lg lg:max-w-xl xl:max-w-2xl min-h-[340px] sm:min-h-[350px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3.5 sm:space-y-4 lg:space-y-4"
              >
                {/* Gold Eyebrow (Clean Monospace Text) */}
                <div className="inline-block text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#E58A1F] uppercase font-mono">
                  {heroSlides[currentHeroSlide].eyebrow}
                </div>

                {/* Headline with Serif Italic Accent */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[54px] font-extrabold text-[#08101E] tracking-tight leading-[1.08]">
                  {heroSlides[currentHeroSlide].titleLine1} <br />
                  {heroSlides[currentHeroSlide].titleLine2Prefix}
                  <span className="text-[#E58A1F] font-serif-accent italic font-normal inline-block drop-shadow-xs">
                    {heroSlides[currentHeroSlide].titleAccent}
                  </span>
                  {heroSlides[currentHeroSlide].titleLine3 && (
                    <>
                      {' '}
                      <br />
                      {heroSlides[currentHeroSlide].titleLine3}
                    </>
                  )}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] lg:text-[14px] text-slate-700 leading-relaxed max-w-lg font-normal">
                  {heroSlides[currentHeroSlide].desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-0.5">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-bold text-white bg-[#08101E] hover:bg-[#E58A1F] rounded-full transition-all duration-200 shadow-md hover:shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/about-us"
                    className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-[13px] font-semibold text-slate-800 hover:text-[#E58A1F] transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-300 flex items-center justify-center mr-2 group-hover:border-[#E58A1F] transition bg-white/80 shadow-xs">
                      <Play className="w-2.5 h-2.5 text-[#E58A1F] fill-current ml-0.5" />
                    </div>
                    <span>Watch Our Story</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </section>

      {/* 2. DELIVERING MEASURABLE IMPACT STRIP (SEAMLESS HARD NAVY BLOCK #06101E) */}
      <section id="impact-section" className="bg-[#06101E] text-white pt-8 sm:pt-10 pb-14 sm:pb-16 relative overflow-hidden">
        
        {/* Subtle geometric dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Dynamic Motion Blueprint Orbital Rings (High-Tech Developer Architecture) */}
        <div className="absolute -right-20 -top-28 bottom-0 w-[580px] h-[580px] pointer-events-none opacity-25 hidden md:block select-none">
          {/* Outer Clockwise Rotating Dashed Track */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full stroke-slate-400 fill-none" strokeWidth="1">
              <circle cx="250" cy="250" r="230" strokeDasharray="6 6" className="opacity-60" />
              {/* Satellite Node on Outer Orbit */}
              <circle cx="480" cy="250" r="4" className="fill-[#E58A1F] stroke-none drop-shadow-[0_0_6px_#E58A1F]" />
              <circle cx="20" cy="250" r="3" className="fill-slate-300 stroke-none opacity-75" />
            </svg>
          </motion.div>

          {/* Middle Counter-Clockwise Rotating Arc Track */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full stroke-slate-400 fill-none" strokeWidth="1">
              <circle cx="250" cy="250" r="170" strokeDasharray="12 8 3 8" className="opacity-70" />
              {/* Pulsing Beacon on Middle Orbit */}
              <circle cx="250" cy="80" r="4.5" className="fill-cyan-400 stroke-none drop-shadow-[0_0_8px_#38bdf8]" />
              <circle cx="250" cy="420" r="3" className="fill-[#E58A1F] stroke-none opacity-80" />
            </svg>
          </motion.div>

          {/* Inner Glowing Radar Core */}
          <motion.div 
            animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full stroke-slate-300 fill-none" strokeWidth="1.2">
              <circle cx="250" cy="250" r="110" strokeDasharray="4 4" className="opacity-80" />
              <circle cx="250" cy="250" r="60" className="stroke-[#E58A1F] opacity-70" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="6" className="fill-[#E58A1F] stroke-none drop-shadow-[0_0_10px_#E58A1F]" />
            </svg>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header Row with Motion Reveal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-8 sm:pb-10">
            
            {/* Left Header Column */}
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-3"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2">
                <span className="text-[#E58A1F] text-xs font-bold leading-none select-none">·</span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#E58A1F] uppercase font-mono">
                  TRUSTED BY BUSINESSES WORLDWIDE
                </span>
              </div>
              
              {/* Title: Editorial Serif with Gold Italic Accent */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-playfair font-semibold text-white tracking-tight leading-[1.12]">
                Delivering<br />
                Measurable <span className="italic text-[#E58A1F] font-serif font-normal">Impact</span>
              </h2>
            </motion.div>

            {/* Right Sub-Header / Description Column */}
            <motion.div 
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex items-start space-x-4 pt-1 lg:pt-3"
            >
              {/* Vertical Gold Divider Line with subtle pulse */}
              <motion.div 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[2px] h-12 bg-[#E58A1F] shrink-0 mt-0.5 rounded-full shadow-[0_0_8px_rgba(229,138,31,0.5)]" 
              />
              
              <div className="space-y-3 max-w-xl">
                <p className="text-xs sm:text-[13.5px] text-slate-300/90 font-normal leading-relaxed">
                  From strategy to execution, we partner with organizations to solve real challenges and create long-term value.
                </p>
                
                {/* Small horizontal gold accent line */}
                <div className="w-8 h-[1.5px] bg-[#E58A1F] rounded-full" />
                
                {/* Sub-tagline */}
                <div className="text-[9.5px] sm:text-[10.5px] font-mono tracking-[0.22em] text-slate-400 font-medium uppercase">
                  PEOPLE &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; A BRIGHTER TOMORROW
                </div>
              </div>
            </motion.div>

          </div>

          {/* Metrics / Stats Row (Interactive Motion Developer Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-6 relative border-t border-slate-800/70">
            
            {[
              { icon: Globe, count: '250+', label: 'Global Clients' },
              { icon: Users, count: '1,500+', label: 'Cloud Migrations' },
              { icon: Cloud, count: '300+', label: 'Certified Engineers' },
              { icon: ShieldCheck, count: '98.7%', label: 'Client Satisfaction' }
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                  className="flex items-center space-x-3.5 group cursor-default select-none"
                >
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-11 h-11 rounded-full bg-slate-800/80 border border-slate-700/70 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#E58A1F] group-hover:bg-slate-800 group-hover:shadow-[0_0_14px_rgba(229,138,31,0.25)] transition-all duration-300"
                  >
                    <IconComp className="w-5 h-5 text-slate-300 group-hover:text-[#E58A1F] group-hover:scale-105 stroke-[1.5] transition-all duration-300" />
                  </motion.div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-none font-outfit group-hover:text-amber-100 transition-colors">
                      {stat.count}
                    </div>
                    <div className="text-[10.5px] sm:text-[11.5px] font-medium text-slate-400 group-hover:text-slate-300 mt-1 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>
      {/* 3. END-TO-END ENTERPRISE IT & AI CAPABILITIES (EXACT DIGITAL GLOBE & CONSTELLATION SHOWCASE) */}
      <section id="services-section" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Subtitle & 01-04 Capability Rows */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-7">
              <div>
                
                {/* Eyebrow */}
                <div className="flex items-center space-x-2.5 mb-2.5">
                  <span className="w-6 h-[1.5px] bg-[#E58A1F] inline-block shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase font-mono">
                    WHAT WE PROVIDE
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black text-[#08101E] tracking-tight leading-[1.08] mb-2.5">
                  End-to-End Enterprise<br />
                  <span className="text-[#E58A1F]">IT & AI</span> Capabilities
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13.5px] text-slate-500 font-medium">
                  Technology built around the way your business works.
                </p>

                {/* Capability Rows (01, 02, 03, 04) */}
                <div className="divide-y divide-slate-200/70 mt-6 border-t border-slate-200/70">
                  {enterpriseServices.map((svc, idx) => {
                    const IconComp = svc.icon;
                    const isActive = activeServiceAccordion === idx;
                    return (
                      <Link
                        key={idx}
                        to={svc.href}
                        onMouseEnter={() => setActiveServiceAccordion(idx)}
                        className="py-4 sm:py-4.5 flex items-center justify-between group select-none transition-colors duration-200 block"
                      >
                        <div className="flex items-center space-x-3.5 sm:space-x-5">
                          {/* Number */}
                          <div className={`text-2xl sm:text-3xl font-black font-outfit transition-colors duration-200 w-8 ${isActive ? 'text-[#E58A1F]' : 'text-slate-300 group-hover:text-slate-500'}`}>
                            {svc.num}
                          </div>

                          {/* Vertical divider */}
                          <div className={`w-[1.5px] h-6 sm:h-7 transition-colors duration-200 ${isActive ? 'bg-[#E58A1F]/80' : 'bg-slate-200 group-hover:bg-slate-300'}`} />

                          {/* Icon Pill Circle */}
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${isActive ? 'bg-amber-100/90 text-[#E58A1F] ring-2 ring-[#E58A1F]/30 shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/80'}`}>
                            <IconComp className="w-5 h-5 stroke-[1.75]" />
                          </div>

                          {/* Title & Desc */}
                          <div>
                            <h3 className={`text-base sm:text-lg font-bold transition-colors duration-200 ${isActive ? 'text-[#08101E]' : 'text-slate-800 group-hover:text-[#08101E]'}`}>
                              {svc.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-slate-500 font-normal">
                              {svc.desc}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Footer Tagline */}
              <div className="flex items-center space-x-2.5 pt-2">
                <span className="w-6 h-[1.5px] bg-[#E58A1F] inline-block shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase font-mono">
                  TRUSTED BY BUSINESSES WORLDWIDE
                </span>
              </div>

            </div>

            {/* Right Column: 3D Digital Dot-Matrix Earth Globe & Golden Orbital Constellation */}
            <div className="lg:col-span-6 relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex items-center justify-center">
              
              {/* Background Globe & Constellation Image */}
              <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <img 
                  src="/images/background/services-globe.png"
                  alt="Global Digital Cloud & AI Network"
                  className="w-full h-full object-cover object-center select-none"
                />

                {/* Soft left gradient fade so it blends seamlessly into the white content area */}
                <div 
                  className="absolute inset-y-0 left-0 w-16 sm:w-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)'
                  }}
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION: MORE THAN TECHNOLOGY. A TRUE PARTNER. */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/15 to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Subtitle & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className="w-6 h-[1.5px] bg-[#E58A1F] inline-block shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase font-mono">
                    WHY PETABYTZ
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#08101E] tracking-tight leading-[1.12] mb-4">
                  More Than<br />
                  Technology.<br />
                  <span className="text-[#E58A1F] italic font-serif font-medium">A True Partner.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                  We don't just deliver IT services — we build lasting partnerships that help you solve real business challenges and create opportunities for sustainable growth.
                </p>

                {/* Action CTA */}
                <div className="flex items-center space-x-3.5 mb-7">
                  <Link
                    to="/about-us"
                    className="group inline-flex items-center space-x-3 select-none"
                  >
                    <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E58A1F] group-hover:bg-[#C97210] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105 shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-[#08101E] group-hover:text-[#E58A1F] transition-colors">
                      Explore Our Approach
                    </span>
                  </Link>
                  <span className="w-10 sm:w-14 h-[1px] bg-[#E58A1F]/40 inline-block shrink-0" />
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase font-mono">
                PEOPLE &nbsp;/&nbsp; TECHNOLOGY &nbsp;/&nbsp; A BRIGHTER TOMORROW
              </div>
            </div>

            {/* Center Column: Interactive Playing Cards Deck Stack */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] py-4">
              
              {/* Cards Deck Container with 3D Depth */}
              <div 
                className="w-full relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] max-w-[520px] cursor-pointer select-none"
                onClick={nextPartnerCard}
                title="Click card to deal next"
              >
                {partnerCards.map((card, idx) => {
                  const offset = (idx - partnerCardIndex + partnerCards.length) % partnerCards.length;
                  
                  // Only render the top 3 cards for the clean physical playing cards deck aesthetic
                  if (offset > 2) return null;

                  const isTop = offset === 0;
                  const isSecond = offset === 1;
                  const isThird = offset === 2;

                  return (
                    <motion.div
                      key={card.id}
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/90 shadow-2xl origin-bottom transition-shadow duration-300"
                      initial={false}
                      animate={{
                        scale: isTop ? 1 : isSecond ? 0.94 : 0.88,
                        y: isTop ? 0 : isSecond ? 14 : 26,
                        x: isTop ? 0 : isSecond ? 14 : -12,
                        rotate: isTop ? 0 : isSecond ? 3.5 : -3.5,
                        zIndex: isTop ? 30 : isSecond ? 20 : 10,
                        opacity: isTop ? 1 : isSecond ? 0.88 : 0.65,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24
                      }}
                      whileHover={isTop ? { scale: 1.02, rotate: -0.5 } : {}}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        onError={(e) => {
                          e.target.src = card.fallback;
                        }}
                      />

                      {/* Top Left Tag Overlay */}
                      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 text-[8.5px] sm:text-[9px] font-mono tracking-[0.2em] text-white/95 uppercase space-y-0.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/20 shadow-sm pointer-events-none">
                        <div className="w-4 h-[1.5px] bg-[#E58A1F] mb-1" />
                        <div>{card.tag}</div>
                      </div>

                      {/* Bottom Right Handwritten / Script Accent */}
                      <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 pointer-events-none">
                        <div className="font-serif italic text-sm sm:text-base text-white/95 drop-shadow-md bg-black/45 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                          {card.caption}
                        </div>
                      </div>

                      {/* Subtle glossy card sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Mini Indicator & Deck Counter */}
              <div className="flex items-center space-x-2 pt-6 select-none">
                {partnerCards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setPartnerCardIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      partnerCardIndex === dotIdx 
                        ? 'w-6 bg-[#E58A1F]' 
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to card ${dotIdx + 1}`}
                  />
                ))}
                <span className="text-[10px] font-mono text-slate-400 font-bold pl-2">
                  0{partnerCardIndex + 1} / 0{partnerCards.length}
                </span>
              </div>

            </div>

            {/* Right Column: Key Stats & Carousel Navigation */}
            <div className="lg:col-span-2 lg:border-l lg:border-slate-200/80 lg:pl-6 flex flex-col justify-between space-y-5 lg:space-y-6 py-1">
              {/* Stat 1 */}
              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#08101E] font-outfit tracking-tight">
                  12+
                </div>
                <div className="text-[11.5px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Years of<br />Partnership
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200/80" />

              {/* Stat 2 */}
              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#08101E] font-outfit tracking-tight">
                  250+
                </div>
                <div className="text-[11.5px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Global<br />Enterprises
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200/80" />

              {/* Stat 3 */}
              <div className="space-y-0.5">
                <div className="text-3xl sm:text-4xl font-black text-[#08101E] font-outfit tracking-tight">
                  99%
                </div>
                <div className="text-[11.5px] sm:text-xs text-slate-500 font-medium leading-tight">
                  Client<br />Satisfaction
                </div>
              </div>

              {/* Bottom Carousel Navigation Controls */}
              <div className="flex items-center space-x-2.5 pt-2">
                <button 
                  type="button"
                  onClick={prevPartnerCard}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 hover:bg-[#E58A1F] hover:text-white flex items-center justify-center text-slate-600 transition shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous card"
                  title="Previous card"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <div className="w-[1px] h-3.5 bg-slate-200" />
                <button 
                  type="button"
                  onClick={nextPartnerCard}
                  className="w-8 h-8 rounded-full border border-slate-200 hover:border-slate-400 hover:bg-[#E58A1F] hover:text-white flex items-center justify-center text-slate-600 transition shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next card"
                  title="Next card"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SUCCESS STORIES & BLOGS THAT INSPIRE */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]/70 border-b border-slate-200/80 relative overflow-hidden">
        {/* Decorative soft watermark circles in background */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-amber-200/30 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full border border-amber-200/20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[1.5px] bg-[#E58A1F] inline-block shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase font-mono">
                  REAL WORLD IMPACT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#08101E] tracking-tight leading-tight">
                Success Stories That <span className="text-[#E58A1F] italic font-serif font-medium">Inspire</span>
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/blogs"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#08101E] hover:text-[#E58A1F] transition-colors group"
              >
                <span>View All Blogs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E58A1F] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 3 Story / Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {blogsData.slice(0, 3).map((item, idx) => (
              <Link
                key={idx}
                to="/blogs"
                className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  onError={(e) => {
                    e.target.src = item.fallbackImage || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Bottom Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <div className="text-[11px] font-medium text-slate-300/90 tracking-wide mb-1.5 font-mono">
                    {item.industry || item.category}
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#E58A1F] text-white flex items-center justify-center shrink-0 transition-colors mb-0.5">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Footer Bar */}
          <div className="mt-12 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase font-mono">
              TRUSTED BY BUSINESSES WORLDWIDE
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-[1.5px] bg-[#E58A1F] inline-block shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase font-mono">
                IDEAS PEOPLE PROGRESS
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TRUSTED BY CLIENTS: INFINITE SCROLLING CLIENT LOGOS TICKER */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sky-50/40 via-slate-50/30 to-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8 sm:mb-10 space-y-1.5">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E58A1F] font-mono">
              OUR CLIENTS & PARTNERS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08101E] tracking-tight">
              Trusted by 250+ Innovative Global Enterprises
            </h2>
          </div>

          {/* Seamless Infinite Marquee Track with Smooth Edge Masks */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-3">
              {/* 1st copy of logos */}
              {clientLogos.map((client, idx) => (
                <div
                  key={`client-logo-1-${idx}`}
                  className="h-14 sm:h-16 min-w-[130px] sm:min-w-[150px] px-5 py-2.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0 select-none"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-9 sm:max-h-10 max-w-[115px] sm:max-w-[135px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}

              {/* 2nd copy of logos for continuous smooth loop */}
              {clientLogos.map((client, idx) => (
                <div
                  key={`client-logo-2-${idx}`}
                  className="h-14 sm:h-16 min-w-[130px] sm:min-w-[150px] px-5 py-2.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0 select-none"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-9 sm:max-h-10 max-w-[115px] sm:max-w-[135px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. PREMIUM INTEGRATED ARCHITECTURAL CTA SECTION */}
      <section className="relative w-full bg-[#08101E] text-white overflow-hidden border-t border-slate-800/80">

        {/* Seamless Integrated Workspace / Office Composition (Right 58% - PetaBytz Hyderabad Office) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[60%] pointer-events-none select-none overflow-hidden">
          {/* Workspace image with smooth motion and framing */}
          <motion.div
            initial={{ scale: 1.04, opacity: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <img
              src="/images/location.png"
              alt="PetaBytz Global Delivery Center & Headquarters - Kavuri Hills, Hyderabad"
              className="w-full h-full object-cover object-center lg:object-[center_right]"
            />

            {/* Seamless Left Fade Gradient (Exact same #08101E color for 100% unified backdrop) */}
            <div 
              className="absolute inset-y-0 left-0 w-full sm:w-3/4 lg:w-3/5 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #08101E 0%, #08101E 22%, rgba(8,16,30,0.85) 52%, rgba(8,16,30,0.2) 82%, transparent 100%)'
              }}
            />

            {/* Bottom Fade Gradient into Footer */}
            <div 
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, #08101E 0%, rgba(8,16,30,0.85) 35%, transparent 100%)'
              }}
            />

            {/* Top Fade Gradient for seamless section transition */}
            <div 
              className="absolute inset-x-0 top-0 h-28 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, #08101E 0%, rgba(8,16,30,0.6) 45%, transparent 100%)'
              }}
            />

            {/* Subtle Light Sweep Reflection across glass facade */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={{ x: '250%', opacity: [0, 0.2, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Foreground Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (Approximately 50% on desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-7 space-y-7"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#E58A1F] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E58A1F]">
                  LET'S BUILD WHAT'S NEXT
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
                Ready to Accelerate Your <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                  Enterprise Journey?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-[16.5px] text-slate-300 max-w-xl leading-relaxed font-normal">
                Connect with our experts and discover how AventraInc Tech can help you modernize, transform and scale with cloud, AI and intelligent enterprise technology.
              </p>

              {/* CTA Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E58A1F] to-[#C97210] hover:from-[#f3952a] hover:to-[#db7c12] rounded-full transition-all shadow-xl shadow-amber-950/50 hover:shadow-orange-500/30 group"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-400 bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-md"
                >
                  <span>Contact Us</span>
                </Link>
              </motion.div>

              {/* Integrated Global HQ Indicator (Clean, non-intrusive, integrated below CTAs) */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="pt-4 flex items-center space-x-3 text-xs text-slate-400 border-t border-slate-800/80 max-w-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-[#E58A1F]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-slate-200">OUR GLOBAL HEADQUARTERS:</span>{' '}
                  <span className="text-slate-300">DMR Corporate · Kavuri Hills · Hyderabad, India</span>
                </div>
                <a
                  href="https://maps.google.com/?q=DMR+Corporate+Kavuri+Hills+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#E58A1F] hover:text-amber-300 font-semibold shrink-0 transition-colors"
                >
                  <span>Directions</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </motion.div>

            </motion.div>

            {/* Right Column Spacer for Desktop to let the Building shine */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-5" />

          </div>
        </div>
      </section>

    </div>
  );
}
