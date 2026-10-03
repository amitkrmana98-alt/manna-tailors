import React from 'react';
import { DIFFERENCE_POINTS } from '../data/tailoringData';
import { Award, CheckCircle } from 'lucide-react';

export default function TheDifference() {
  return (
    <section className="py-16 bg-sand border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">
            <Award size={12} className="inline mr-1" /> THE MANNA TAILORS DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Craftsmanship You Can Feel.
          </h2>
          <p className="text-zinc-700 font-sans mt-3 text-base sm:text-lg">
            Built on individual care, structured fits, and dependable finishing across every piece we craft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENCE_POINTS.map((item, index) => (
            <div 
              key={index}
              className="neubrutal-card p-6 border-2 bg-white flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold border border-black flex items-center justify-center font-bold text-black font-mono text-sm flex-shrink-0 shadow-brutal-sm">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}