import React, { useState, useEffect, useRef } from 'react';
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

function AnimatedStatNumber({ target, suffix = '', isDecimal = false, duration = 1800 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out expo for natural human deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = target * easeProgress;

      if (isDecimal) {
        setDisplayValue(currentNumber.toFixed(1) + suffix);
      } else {
        setDisplayValue(Math.floor(currentNumber).toLocaleString() + suffix);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (isDecimal) {
          setDisplayValue(target.toFixed(1) + suffix);
        } else {
          setDisplayValue(Math.floor(target).toLocaleString() + suffix);
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, target, suffix, isDecimal, duration]);

  return <span ref={elementRef}>{displayValue}</span>;
}

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

      {/* 2. DELIVERING MEASURABLE IMPACT STRIP (CLEAN, MINIMAL, UNBOXED HUMAN DESIGN) */}
      <section id="impact-section" className="bg-[#050E1A] text-white pt-8 sm:pt-9 pb-10 sm:pb-12 relative overflow-hidden select-none">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-6 sm:pb-8 border-b border-slate-800/70">
            
            {/* Left Header Column */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-2"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E58A1F]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#E58A1F] uppercase font-mono">
                  TRUSTED BY BUSINESSES WORLDWIDE
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-snug">
                Delivering<br />
                Measurable <span className="italic text-[#E58A1F] font-serif font-normal">Impact</span>
              </h2>
            </motion.div>

            {/* Right Sub-Header / Description Column */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex items-start space-x-3.5 pt-1"
            >
              {/* Vertical Gold Accent Line */}
              <div className="w-[2px] h-10 bg-[#E58A1F] shrink-0 mt-0.5 rounded-full shadow-[0_0_8px_rgba(229,138,31,0.4)]" />
              
              <div className="space-y-2 max-w-xl">
                <p className="text-xs sm:text-[12.5px] text-slate-300 font-normal leading-relaxed">
                  From strategy to execution, we partner with organizations to solve real challenges and create long-term value.
                </p>
                
                {/* Sub-tagline */}
                <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-slate-400 font-medium uppercase">
                  PEOPLE &nbsp;|&nbsp; TECHNOLOGY &nbsp;|&nbsp; A BRIGHTER TOMORROW
                </div>
              </div>
            </motion.div>

          </div>

          {/* Metrics / Stats Row (Clean, Unboxed, Compact) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-6 sm:pt-7">
            
            {[
              { icon: Globe, count: '250+', target: 250, suffix: '+', label: 'Global Clients' },
              { icon: Users, count: '1,500+', target: 1500, suffix: '+', label: 'Cloud Migrations' },
              { icon: Cloud, count: '300+', target: 300, suffix: '+', label: 'Certified Engineers' },
              { icon: ShieldCheck, count: '98.7%', target: 98.7, suffix: '%', isDecimal: true, label: 'Client Satisfaction' }
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                  className="flex items-center space-x-3 group cursor-default select-none"
                >
                  {/* Round Icon Badge */}
                  <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:border-[#E58A1F] group-hover:bg-slate-800 transition-all duration-300 shadow-xs">
                    <IconComp className="w-4 h-4 text-slate-300 group-hover:text-[#E58A1F] transition-colors duration-300 stroke-[1.6]" />
                  </div>

                  {/* Number & Label */}
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-none font-sans group-hover:text-amber-100 transition-colors">
                      <AnimatedStatNumber target={stat.target} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-400 group-hover:text-slate-300 mt-1 transition-colors">
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

      {/* 5. SUCCESS STORIES THAT INSPIRE */}
      <section className="py-10 sm:py-14 bg-[#F9F9FB] border-b border-slate-200/80 relative overflow-hidden">
        {/* Decorative orbital rings elevated higher up behind the header and cards */}
        <div className="absolute top-8 sm:top-12 -right-24 sm:-right-12 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border-[1.5px] border-[#E58A1F]/30 pointer-events-none" />
        <div className="absolute top-20 sm:top-24 -right-14 sm:-right-6 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border-[1.5px] border-[#E58A1F]/15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Header Row (3-Column Layout: Title + Extension Line | Description | View All CTA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center mb-8 sm:mb-9">
            
            {/* Left Title with orange eyebrow and trailing underline extension */}
            <div className="lg:col-span-5 space-y-1.5">
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-[2px] bg-[#E58A1F] inline-block shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase font-mono">
                  REAL WORLD IMPACT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#08101E] tracking-tight leading-[1.08]">
                Success Stories<br />
                <span className="inline-flex items-center flex-wrap">
                  That <span className="text-[#E58A1F] italic font-serif font-normal ml-2 mr-3">Inspire</span>
                  <span className="hidden sm:inline-block w-24 lg:w-32 h-[2px] bg-[#E58A1F] align-middle rounded-full" />
                </span>
              </h2>
            </div>

            {/* Middle Description with subtle left vertical border */}
            <div className="lg:col-span-4 lg:border-l lg:border-slate-300/80 lg:pl-6">
              <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-sm">
                From complex challenges to measurable outcomes, we help global organizations move forward with confidence.
              </p>
            </div>

            {/* Right Top Action: Circular Arrow Button + View All Text */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <Link
                to="/blogs"
                className="group flex items-center space-x-3 hover:opacity-90 transition-all duration-200"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E58A1F] flex items-center justify-center text-[#08101E] group-hover:bg-[#E58A1F] group-hover:text-white transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-4 h-4 text-[#08101E] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs sm:text-sm font-bold text-[#08101E] group-hover:text-[#E58A1F] transition-colors leading-tight">
                    View All
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-[#08101E] group-hover:text-[#E58A1F] transition-colors leading-tight">
                    Case Studies & Blogs
                  </span>
                </div>
              </Link>
            </div>

          </div>

          {/* 3 Story Cards Grid (Exact matching card design) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            
            {/* Card 01 - Energy */}
            <Link
              to="/blogs"
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] min-h-[380px] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-500 block"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                alt="Modernizing Operations for a Sustainable Future"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                onError={(e) => {
                  e.target.src = '/images/case-studies/cs-energy.jpg';
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/60 to-black/25" />

              {/* Top Header inside Card */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white select-none">
                <div>
                  <span className="text-sm font-bold tracking-wider font-mono">01</span>
                  <div className="w-5 h-[1.5px] bg-white/70 mt-0.5" />
                </div>
                <div className="text-right text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase font-mono leading-tight">
                  <div>CLEANER</div>
                  <div>SAFER</div>
                  <div>SMARTER</div>
                </div>
              </div>

              {/* Bottom Content inside Card */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end space-y-2.5">
                <div className="text-xs font-bold text-amber-400 tracking-wide font-mono">
                  Energy
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  Modernizing Operations for a Sustainable Future
                </h3>
                <div className="pt-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-xs text-white/90 font-medium group-hover:text-amber-300 transition-colors pb-0.5 border-b border-white/40 group-hover:border-amber-300">
                    <span>Read the story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 02 - Enterprise */}
            <Link
              to="/blogs"
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] min-h-[380px] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-500 block"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Driving Procurement Transformation with AI"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                onError={(e) => {
                  e.target.src = '/images/case-studies/cs-enterprise.jpg';
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/60 to-black/25" />

              {/* Top Header inside Card */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white select-none">
                <div>
                  <span className="text-sm font-bold tracking-wider font-mono">02</span>
                  <div className="w-5 h-[1.5px] bg-white/70 mt-0.5" />
                </div>
                <div className="text-right text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase font-mono leading-tight">
                  <div>FASTER</div>
                  <div>SMARTER</div>
                  <div>TOGETHER</div>
                </div>
              </div>

              {/* Bottom Content inside Card */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end space-y-2.5">
                <div className="text-xs font-bold text-amber-400 tracking-wide font-mono">
                  Enterprise
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  Driving Procurement Transformation with AI
                </h3>
                <div className="pt-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-xs text-white/90 font-medium group-hover:text-amber-300 transition-colors pb-0.5 border-b border-white/40 group-hover:border-amber-300">
                    <span>Read the story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 03 - Manufacturing */}
            <Link
              to="/blogs"
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] min-h-[380px] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-500 block"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
                alt="Strengthening Security Across Global Operations"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                onError={(e) => {
                  e.target.src = '/images/case-studies/cs-manufacturing.jpg';
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/60 to-black/25" />

              {/* Top Header inside Card */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white select-none">
                <div>
                  <span className="text-sm font-bold tracking-wider font-mono">03</span>
                  <div className="w-5 h-[1.5px] bg-white/70 mt-0.5" />
                </div>
                <div className="text-right text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase font-mono leading-tight">
                  <div>PROTECT</div>
                  <div>ENABLE</div>
                  <div>GROW</div>
                </div>
              </div>

              {/* Bottom Content inside Card */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end space-y-2.5">
                <div className="text-xs font-bold text-amber-400 tracking-wide font-mono">
                  Manufacturing
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  Strengthening Security Across Global Operations
                </h3>
                <div className="pt-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-xs text-white/90 font-medium group-hover:text-amber-300 transition-colors pb-0.5 border-b border-white/40 group-hover:border-amber-300">
                    <span>Read the story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Bottom Footer Bar: Clean Trusted strip with no extra pagination or text clutter */}
          <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="w-7 h-[2px] bg-[#E58A1F] inline-block shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-500 uppercase font-mono">
                TRUSTED BY BUSINESSES WORLDWIDE
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TRUSTED BY CLIENTS: INFINITE SCROLLING CLIENT LOGOS TICKER */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-sky-50/40 via-slate-50/30 to-white overflow-hidden relative">
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

      {/* 7. PREMIUM INTEGRATED ARCHITECTURAL CTA SECTION (EXACT REFERENCE S-CURVE DESIGN) */}
      <section className="relative w-full bg-white text-slate-900 overflow-hidden py-16 sm:py-20 lg:py-28 border-t border-slate-100">
        
        {/* Photographic Canvas (Cleanly positioned on right ~52%) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] xl:w-[54%] pointer-events-none select-none overflow-hidden">
          <img
            src="/images/location.png"
            alt="PetaBytz Modern Innovation Center & Enterprise Workspace"
            className="w-full h-full object-cover object-[80%_center]"
          />

          {/* Top and Bottom soft white blend */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Photorealistic Curved S-Wave White Backdrop & Frosted Glass Fade Mask */}
        <div className="absolute inset-0 pointer-events-none select-none z-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1440 680" 
            preserveAspectRatio="none" 
            fill="none"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="70%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Soft diffused glow along the curve edge */}
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="35" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Solid White Canvas Mask extending fully behind all text */}
            <path 
              d="M 0,0 L 820,0 C 720,200 580,420 640,680 L 0,680 Z" 
              fill="#FFFFFF" 
            />

            {/* Soft Diffused Shadow / Glow along the organic diagonal / wave */}
            <path 
              d="M 820,0 C 720,200 580,420 640,680" 
              stroke="#FFFFFF" 
              strokeWidth="90" 
              filter="url(#softGlow)" 
              opacity="0.95"
            />

            {/* Elegant Ambient Orange Trace Arc positioned right of text */}
            <path 
              d="M 860,-30 C 760,180 620,420 680,700" 
              stroke="#E58A1F" 
              strokeWidth="1.5" 
              strokeOpacity="0.45"
            />
          </svg>
        </div>

        {/* Foreground Content Container (Guaranteed 100% on pure solid white) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (Dedicated 7-column width on pure white) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-7 space-y-6 max-w-xl"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[2px] bg-[#E58A1F] inline-block shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-500 uppercase font-mono">
                  PETABYTZ TECHNOLOGIES
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-black text-[#08101E] tracking-tight leading-[1.12]">
                  Ready to Accelerate<br />
                  Your Enterprise <span className="text-[#E58A1F] italic font-serif font-normal whitespace-nowrap">Journey?</span>
                </h2>
                <div className="w-9 h-[2.5px] bg-[#E58A1F] rounded-full" />
              </div>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
                Connect with our experts and see how we can help you modernize, transform and scale &mdash; with cloud, AI and intelligent enterprise technology.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex items-center gap-6 pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#D96B0B] hover:bg-[#c25d04] rounded-full transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact-us"
                  className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#D96B0B] pb-0.5 border-b-2 border-slate-800 hover:border-[#D96B0B] transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Bottom Left Accent Text */}
              <div className="pt-8 border-l-2 border-slate-300 pl-3">
                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase font-mono leading-tight">
                  <div>IDEAS TODAY,</div>
                  <div>A BRIGHTER TOMORROW.</div>
                </div>
              </div>

            </motion.div>

            {/* Right Column Spacer for Desktop */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-5" />

          </div>
        </div>
      </section>

    </div>
  );
}
