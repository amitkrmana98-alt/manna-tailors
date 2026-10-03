import React from 'react';
import { Briefcase, Users, Building, Package, Award, FileCheck } from 'lucide-react';
import { CORPORATE_SERVICES } from '../data/tailoringData';

const iconMap = {
  Briefcase,
  Users,
  Building,
  Package,
  Award,
  FileCheck,
};

export default function CorporateSection() {
  const safeServices = Array.isArray(CORPORATE_SERVICES) ? CORPORATE_SERVICES : [];

  return (
    <section id="corporate" className="py-16 md:py-24 bg-charcoal text-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block bg-gold text-black text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            B2B & Bulk Manufacturing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white mb-4">
            Corporate Garment Solutions
          </h2>
          <p className="text-zinc-300 font-sans text-base md:text-lg">
            Standardized company uniforms, institutional garments, executive attire, and large-scale contract supply tailored directly from Kolkata.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeServices.map((service, idx) => {
            if (!service) return null;
            const IconComponent = iconMap[service.icon] || Briefcase;
            const features = Array.isArray(service.features) ? service.features : [];
            const options = Array.isArray(service.options) ? service.options : [];

            return (
              <div 
                key={service.id ?? idx} 
                className="bg-zinc-900 border-2 border-gold/40 p-6 shadow-brutal-gold flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-gold text-black border-2 border-black flex items-center justify-center font-bold mb-4 shadow-brutal-sm">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {service.title ?? 'Corporate Solution'}
                  </h3>

                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-4">
                    {service.desc ?? 'Tailored bulk solution for businesses.'}
                  </p>

                  {service.minimumOrder && (
                    <div className="mb-3 text-xs font-mono text-gold font-bold">
                      Minimum Order: {service.minimumOrder}
                    </div>
                  )}

                  {features.length > 0 && (
                    <ul className="text-xs text-zinc-300 space-y-1.5 mb-4 border-t border-zinc-800 pt-3">
                      {features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {options.length > 0 && (
                  <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 font-mono">
                    <span className="text-gold uppercase font-bold block mb-1">Categories:</span>
                    <span>{options.join(' • ')}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
