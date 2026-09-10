import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Topbar from './components/Topbar';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Clients from './pages/Clients';
import Partners from './pages/Partners';
import Accreditation from './pages/Accreditation';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import CaseStudies from './pages/CaseStudies';
import Whitepapers from './pages/Whitepapers';
import DataSheets from './pages/DataSheets';
import PressRelease from './pages/PressRelease';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServiceDetail from './pages/ServiceDetail';
import GenAIServices from './pages/GenAIServices';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import { servicesData } from './data/services';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3 pointer-events-auto">
      {/* WhatsApp Floating Action Button */}
      <a
        href="https://api.whatsapp.com/send?phone=918977905819&text=Hello%20PetaBytz"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-[#08101E] hover:bg-[#FF8A00] text-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  // All verified 38 services supported dynamically from servicesData
  const serviceRoutes = Object.keys(servicesData).filter(slug => slug !== 'gen-ai-services');

  const [activeCountry, setActiveCountry] = useState('india');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 relative">
      <ScrollToTop />
      <Topbar activeCountry={activeCountry} setActiveCountry={setActiveCountry} />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/our-partners" element={<Partners />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/whitepaper" element={<Whitepapers />} />
          <Route path="/datasheets" element={<DataSheets />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Dedicated GenAI Services Route */}
          <Route path="/gen-ai-services" element={<GenAIServices />} />

          {/* Legacy route aliases explicitly mapped to valid service */}
          <Route path="/sap-azure" element={<ServiceDetail explicitSlug="sap-service" />} />
          <Route path="/sap-hana-upgrades" element={<ServiceDetail explicitSlug="sap-service" />} />

          {/* Service detail routes */}
          {serviceRoutes.map((slug) => (
            <Route 
              key={slug} 
              path={`/${slug}`} 
              element={<ServiceDetail explicitSlug={slug} />} 
            />
          ))}

          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
