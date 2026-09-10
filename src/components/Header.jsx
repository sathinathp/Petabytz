import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  Bot, 
  Layers,
  Brain,
  Zap,
  Briefcase
} from 'lucide-react';
import { navigationData } from '../data/navigation';
import { locationsData } from '../data/locations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [knowledgeDropdown, setKnowledgeDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [activeCountry, setActiveCountry] = useState('india');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const countries = [
    { key: 'india', name: 'India', flag: '/images/logo/india-flag.jpg' },
    { key: 'usa', name: 'USA', flag: '/images/logo/usa.jpg' },
    { key: 'canada', name: 'Canada', flag: '/images/logo/canada.jpg' },
  ];

  const currentLoc = locationsData[activeCountry] || locationsData.india;

  const getCategoryIcon = (catName) => {
    switch(catName) {
      case 'AI Solutions': return <Brain className="w-4 h-4 text-[#E58A1F]" />;
      case 'Cloud Transformation': return <Cloud className="w-4 h-4 text-[#E58A1F]" />;
      case 'Digital Transformation': return <Layers className="w-4 h-4 text-[#E58A1F]" />;
      case 'ITSM Managed Services': return <Headphones className="w-4 h-4 text-[#E58A1F]" />;
      case 'Managed Services': return <Cpu className="w-4 h-4 text-[#E58A1F]" />;
      case 'Salesforce Services': return <Zap className="w-4 h-4 text-[#E58A1F]" />;
      default: return <Briefcase className="w-4 h-4 text-[#E58A1F]" />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setKnowledgeDropdown(false);
    setCompanyDropdown(false);
    setLocationDropdown(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 bg-white/98 backdrop-blur-md transition-all duration-200 border-b ${
      scrolled ? 'border-slate-200/90 shadow-xs py-2' : 'border-slate-100 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Only (Big & Clear) */}
          <Link to="/" className="flex items-center py-1">
            <img 
              src="/images/logo/logo.png" 
              alt="PetaBytz Technologies" 
              className="h-10 sm:h-12 w-auto object-contain hover:opacity-95 transition-opacity"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class="text-2xl font-black text-[#08101E]">Peta<span class="text-[#E58A1F]">Bytz</span></span>';
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 text-[13.5px] xl:text-[14.5px] font-semibold text-[#2D3748]">
            
            {/* 1. Home */}
            <Link 
              to="/" 
              className={`relative py-2 transition hover:text-[#E58A1F] ${
                location.pathname === '/' ? 'text-[#E58A1F]' : ''
              }`}
            >
              <span>Home</span>
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
              )}
            </Link>

            {/* 2. Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => { setServicesDropdown(true); setKnowledgeDropdown(false); setCompanyDropdown(false); }}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`relative flex items-center space-x-1 py-2 transition hover:text-[#E58A1F] ${
                  servicesDropdown || location.pathname.includes('-services') || location.pathname.includes('cloud-') || location.pathname.includes('salesforce') || location.pathname.includes('ai-') ? 'text-[#E58A1F]' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#E58A1F]' : 'text-slate-500'}`} />
                {(location.pathname.includes('-services') || location.pathname.includes('cloud-')) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
                )}
              </button>

              {/* Mega Menu Dropdown */}
              {servicesDropdown && (
                <div className="fixed left-1/2 -translate-x-1/2 top-[62px] w-[95vw] max-w-[1280px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 animate-in fade-in slide-in-from-top-2 duration-150 z-50 max-h-[85vh] overflow-y-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                    {navigationData.services.map((cat, idx) => (
                      <div key={idx} className="space-y-4">
                        <Link 
                          to={cat.href}
                          className="flex items-center space-x-2 pb-2.5 border-b-2 border-amber-100 hover:border-[#E58A1F] transition group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                            {getCategoryIcon(cat.category)}
                          </div>
                          <span className="text-xs font-black uppercase tracking-wider text-[#08101E] group-hover:text-[#E58A1F] transition">
                            {cat.category}
                          </span>
                        </Link>

                        <ul className="space-y-2.5">
                          {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link 
                                to={item.href}
                                className="group block text-left"
                              >
                                <div className="text-[12.5px] font-bold text-slate-800 group-hover:text-[#E58A1F] transition leading-snug">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-400 group-hover:text-slate-600 transition line-clamp-1 mt-0.5">
                                  {item.desc}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#E58A1F]" />
                      <span>Explore customized IT modernization & AI architecture tailored to your business.</span>
                    </div>
                    <Link 
                      to="/contact-us"
                      className="font-bold text-[#E58A1F] hover:text-[#C97210] flex items-center"
                    >
                      <span>Speak to an Enterprise Specialist</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Knowledge Hub Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => { setKnowledgeDropdown(true); setServicesDropdown(false); setCompanyDropdown(false); }}
              onMouseLeave={() => setKnowledgeDropdown(false)}
            >
              <button 
                className={`relative flex items-center space-x-1 py-2 transition hover:text-[#E58A1F] ${
                  knowledgeDropdown || ['/casestudies', '/whitepapers', '/datasheets'].includes(location.pathname) ? 'text-[#E58A1F]' : ''
                }`}
              >
                <span>Knowledge Hub</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${knowledgeDropdown ? 'rotate-180 text-[#E58A1F]' : 'text-slate-500'}`} />
                {['/casestudies', '/whitepapers', '/datasheets'].includes(location.pathname) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
                )}
              </button>

              {knowledgeDropdown && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <a href="https://petabytz.com/blogs" target="_blank" rel="noreferrer" className="block px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">
                    Blogs
                  </a>
                  <Link to="/whitepapers" className="block px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">
                    Whitepapers
                  </Link>
                  <Link to="/casestudies" className="block px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">
                    Case Studies
                  </Link>
                  <Link to="/datasheets" className="block px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">
                    Data Sheets
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => { setCompanyDropdown(true); setServicesDropdown(false); setKnowledgeDropdown(false); }}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <button 
                className={`relative flex items-center space-x-1 py-2 transition hover:text-[#E58A1F] ${
                  companyDropdown || ['/clients', '/our-partners', '/accreditation', '/press-release', '/careers'].includes(location.pathname) ? 'text-[#E58A1F]' : ''
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdown ? 'rotate-180 text-[#E58A1F]' : 'text-slate-500'}`} />
                {['/clients', '/our-partners', '/accreditation', '/press-release', '/careers'].includes(location.pathname) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
                )}
              </button>

              {companyDropdown && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link to="/clients" className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">Clients</Link>
                  <Link to="/our-partners" className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">Our Partners</Link>
                  <Link to="/accreditation" className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">Accreditation</Link>
                  <Link to="/press-release" className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">Press Release</Link>
                  <Link to="/careers" className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#E58A1F] hover:bg-amber-50/50 rounded-xl transition">Careers</Link>
                </div>
              )}
            </div>

            {/* 5. Contact Us */}
            <Link 
              to="/contact-us" 
              className={`relative py-2 transition hover:text-[#E58A1F] ${
                location.pathname === '/contact-us' ? 'text-[#E58A1F]' : ''
              }`}
            >
              <span>Contact Us</span>
              {location.pathname === '/contact-us' && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
              )}
            </Link>

            {/* 6. About Us */}
            <Link 
              to="/about-us" 
              className={`relative py-2 transition hover:text-[#E58A1F] ${
                location.pathname === '/about-us' ? 'text-[#E58A1F]' : ''
              }`}
            >
              <span>About Us</span>
              {location.pathname === '/about-us' && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E58A1F] rounded-full" />
              )}
            </Link>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-4">
            
            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#E58A1F] bg-slate-50 text-xs font-semibold text-slate-700 transition"
                aria-label="Select Country"
              >
                <img
                  src={currentLoc.flag}
                  alt={currentLoc.country}
                  className="w-4 h-3 object-cover rounded-xs"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="text-[#08101E]">{currentLoc.country}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {locationDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseLeave={() => setLocationDropdown(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Select Region
                  </div>
                  {countries.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => {
                        setActiveCountry(c.key);
                        setLocationDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs hover:bg-amber-50/60 transition ${
                        activeCountry === c.key ? 'text-[#E58A1F] font-bold bg-amber-50/40' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={c.flag}
                          alt={c.name}
                          className="w-4 h-3 object-cover rounded-xs"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span>{c.name}</span>
                      </div>
                      {activeCountry === c.key && <Check className="w-3.5 h-3.5 text-[#E58A1F]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Trigger */}
            <Link 
              to="/whitepapers"
              className="p-2 text-slate-500 hover:text-[#E58A1F] transition rounded-full hover:bg-slate-100"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Get In Touch Pill Button */}
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#08101E] hover:bg-[#E58A1F] rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#E58A1F] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500">Region:</span>
            <div className="flex items-center space-x-2">
              {countries.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCountry(c.key)}
                  className={`px-2 py-1 text-xs rounded-md border flex items-center space-x-1 ${
                    activeCountry === c.key ? 'border-[#E58A1F] bg-amber-50 text-[#E58A1F] font-bold' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <img src={c.flag} alt={c.name} className="w-3.5 h-2.5 object-cover" />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          <Link to="/" className="block py-2 text-sm font-semibold text-slate-800">Home</Link>
          
          <div className="border-t border-slate-100 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E58A1F] py-1">Services</div>
            {navigationData.services.map((cat, idx) => (
              <div key={idx} className="py-1">
                <Link to={cat.href} className="text-xs font-bold text-slate-800 hover:text-[#E58A1F] block py-1">
                  {cat.category}
                </Link>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E58A1F] py-1">Knowledge Hub</div>
            <Link to="/whitepapers" className="block py-1 text-xs text-slate-700">Whitepapers</Link>
            <Link to="/casestudies" className="block py-1 text-xs text-slate-700">Case Studies</Link>
            <Link to="/datasheets" className="block py-1 text-xs text-slate-700">Data Sheets</Link>
          </div>

          <div className="border-t border-slate-100 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E58A1F] py-1">Company</div>
            <Link to="/clients" className="block py-1 text-xs text-slate-700">Clients</Link>
            <Link to="/our-partners" className="block py-1 text-xs text-slate-700">Our Partners</Link>
            <Link to="/accreditation" className="block py-1 text-xs text-slate-700">Accreditation</Link>
            <Link to="/careers" className="block py-1 text-xs text-slate-700">Careers</Link>
          </div>

          <Link to="/contact-us" className="block py-2 text-sm font-semibold text-slate-800">Contact Us</Link>
          <Link to="/about-us" className="block py-2 text-sm font-semibold text-slate-800">About Us</Link>
          
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="w-full block text-center py-3 bg-[#E58A1F] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
