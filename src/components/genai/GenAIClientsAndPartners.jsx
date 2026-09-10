import React from 'react';

export default function GenAIClientsAndPartners() {
  const clientLogos = [
    { name: 'Khaitan & Co', logo: '/images/clients/khaitan.png' },
    { name: 'Satin Creditcare', logo: '/images/clients/satin.png' },
    { name: 'Bitwise Global', logo: '/images/bitwise.png' },
    { name: 'Apmosys Technologies', logo: '/images/clients/apmosys.jpeg' },
    { name: 'SoftwareONE', logo: '/images/softwareone-logo-blk.svg' },
    { name: 'Nordem Systems', logo: '/images/clients/nordem.png' },
  ];

  const partnerLogos = [
    { name: 'Microsoft Solutions Partner', logo: '/images/logo/logo.png', label: 'Microsoft Partner' },
    { name: 'SoftwareONE', logo: '/images/softwareone-logo-blk.svg' },
    { name: 'Readington', logo: '/images/logo/readington.svg' },
    { name: 'One', logo: '/images/logo/one.svg' },
    { name: 'Bitwise', logo: '/images/bitwise.png' },
  ];

  return (
    <section className="w-full bg-[#FAF7F2]/40 py-10 sm:py-14 border-b border-[#ECE6DC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Client Logos Section */}
        <div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx}
                className="h-10 sm:h-12 flex items-center justify-center px-3 py-1 opacity-75 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-8 sm:max-h-10 max-w-[130px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="pt-6 border-t border-[#E8E2D8]">
          <div className="text-center mb-6">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#17233A]">
              OUR PARTNERS
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {partnerLogos.map((partner, idx) => (
              <div 
                key={idx}
                className="h-10 sm:h-12 flex items-center justify-center px-3 py-1 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 sm:max-h-9 max-w-[120px] object-contain"
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
  );
}
