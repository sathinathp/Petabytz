import React from 'react';
import { Building2, Cloud, Award, Star, ShieldCheck } from 'lucide-react';
import { clientsData } from '../data/clients';

export default function StatCounters() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-brand-orange" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-400" />;
      case 'Star': return <Star className="w-6 h-6 text-amber-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-brand-orange" />;
    }
  };

  return (
    <section className="relative py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {clientsData.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-orange/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex p-3 rounded-xl bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold text-[#022f46] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
