import React, { useState } from 'react';
import { Phone, Mail, Globe, ChevronDown, Check } from 'lucide-react';
import { locationsData } from '../data/locations';

export default function Topbar({ activeCountry, setActiveCountry }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentLoc = locationsData[activeCountry] || locationsData.india;

  const countries = [
    { key: 'india', name: 'India', flag: '/images/logo/india-flag.jpg', code: '+91' },
    { key: 'usa', name: 'USA', flag: '/images/logo/usa.jpg', code: '+1' },
    { key: 'canada', name: 'Canada', flag: '/images/logo/canada.jpg', code: '+1' },
  ];

  return (
    <div className="bg-[#011a28] text-slate-300 text-xs py-2 border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
        {/* Left: Social Media */}
        <div className="hidden sm:flex items-center space-x-3 text-slate-400">
          <span className="text-slate-400 font-medium">Follow PetaBytz:</span>
          <a
            href="https://www.linkedin.com/company/petabytz-technologies/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://twitter.com/peta_bytz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            Twitter/X
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://www.facebook.com/petabytz/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            Facebook
          </a>
          <span className="text-slate-600">|</span>
          <a
            href="https://www.youtube.com/channel/UCLNGYKEDBVRMo5OvayaryrA"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            YouTube
          </a>
        </div>

        {/* Right: Contact details & Country Switcher */}
        <div className="flex items-center space-x-5 ml-auto text-xs font-medium">
          <a
            href={`tel:${currentLoc.phone}`}
            className="flex items-center space-x-1.5 text-slate-300 hover:text-brand-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange" />
            <span>{currentLoc.phone}</span>
          </a>

          <a
            href={`mailto:${currentLoc.email}`}
            className="hidden md:flex items-center space-x-1.5 text-slate-300 hover:text-brand-orange transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-orange" />
            <span>{currentLoc.email}</span>
          </a>

          {/* Country Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-white px-2.5 py-1 rounded-md border border-slate-700 transition"
              aria-label="Select Region"
            >
              <img
                src={currentLoc.flag}
                alt={currentLoc.country}
                className="w-4 h-3 object-cover rounded-sm"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-brand-orange font-semibold">{currentLoc.country}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {dropdownOpen && (
              <div
                className="absolute right-0 mt-1.5 w-36 bg-[#022f46] border border-slate-700 rounded-lg shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {countries.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => {
                      setActiveCountry(c.key);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between text-xs hover:bg-slate-700/50 transition ${
                      activeCountry === c.key ? 'text-brand-orange font-bold' : 'text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        src={c.flag}
                        alt={c.name}
                        className="w-4 h-3 object-cover rounded-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span>{c.name}</span>
                    </div>
                    {activeCountry === c.key && <Check className="w-3.5 h-3.5 text-brand-orange" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
