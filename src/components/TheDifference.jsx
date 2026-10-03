import React from 'react';
import { DIFFERENCE_POINTS } from '../data/tailoringData';
import { CheckCircle2 } from 'lucide-react';

export default function TheDifference() {
  const safePoints = Array.isArray(DIFFERENCE_POINTS) ? DIFFERENCE_POINTS : [];

  return (
    <section className="py-16 md:py-20 bg-sand border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-black text-gold text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Why Choose Manna Tailors
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-charcoal tracking-tight">
            The Manna Tailors Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safePoints.map((point, idx) => {
            if (!point) return null;
            return (
              <div 
                key={idx} 
                className="bg-white border-2 border-black p-6 shadow-brutal flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-gold text-black border border-black flex items-center justify-center shrink-0 font-bold mt-1">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                    {point.title ?? 'Quality Assurance'}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {point.desc ?? ''}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
