import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Clients from './pages/Clients';
import Partners from './pages/Partners';
import Accreditation from './pages/Accreditation';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import CaseStudies from './pages/CaseStudies';
import Whitepapers from './pages/Whitepapers';
import DataSheets from './pages/DataSheets';
import PressRelease from './pages/PressRelease';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const serviceRoutes = [
    'cloud-transformation',
    'cloud-migration-services',
    'cloud-optimization',
    'data-center-modernization',
    'application-mainframe-modernization',
    'business-continuity-and-disaster-recovery',
    'digital-transformation',
    'microsoft-365',
    'sap-service',
    'sap-azure',
    'sap-hana-upgrades',
    'data-analytics',
    'devops',
    'kubernetes-services',
    'low-code-no-code',
    'managed-services',
    'aws-managed-services',
    'azure-managed-services',
    'application-managed-services',
    'soc-and-noc',
    'itsm-managed-services',
    'l1-support-services',
    'l2-tier-2-support-managed-services',
    'deskside-support',
    'asset-and-problem-management',
    'ai-solutions',
    'gen-ai-services',
    'machine-learning',
    'natural-language-processing',
    'deep-learning',
    'salesforce-services',
    'salesforce-advisory-services',
    'salesforce-implementation',
    'salesforce-integrations',
    'salesforce-managed-services',
    'salesforce-24-7-support',
    'salesforce-analytics-services',
    'business-consulting',
    'rwaas',
    'vapt'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <ScrollToTop />
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
    </div>
  );
}
