import React from 'react';
import { ArrowRight, Check, Tag } from 'lucide-react';
import { READY_TO_WEAR_CATEGORIES } from '../data/tailoringData';

export default function ReadyToWearSection({ setActiveView, onOpenQuoteModal }) {
  const safeCategories = Array.isArray(READY_TO_WEAR_CATEGORIES) ? READY_TO_WEAR_CATEGORIES : [];

  return (
    <section id="rtw" className="py-16 md:py-24 bg-sand border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-black text-gold text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
              In-Store Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight">
              Ready-To-Wear Menswear
            </h2>
            <p className="text-zinc-600 font-sans text-base max-w-2xl mt-2">
              Instant elegance engineered with our signature proportions. Visit our Bhowanipore store in Kolkata to try on crisp formal shirts, trousers, and blazers.
            </p>
          </div>
          <div>
            <button
              onClick={() => setActiveView?.('contact')}
              className="neubrutal-btn-white px-5 py-2.5 text-xs uppercase tracking-wider font-bold shrink-0 flex items-center gap-2"
            >
              <span>Visit Store in Kolkata</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safeCategories.map((item, idx) => {
            if (!item) return null;
            const image = item.images?.[0] ?? item.image ?? 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
            const sizes = Array.isArray(item.sizes) ? item.sizes : [];
            const features = Array.isArray(item.features) ? item.features : [];

            return (
              <div 
                key={item.id ?? idx} 
                className="bg-white border-2 border-black p-5 shadow-brutal flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative border-2 border-black overflow-hidden bg-ivory aspect-[4/3] mb-4">
                    <img 
                      src={image} 
                      alt={item.title ?? 'Garment'} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-black text-gold text-[10px] font-mono font-bold px-2 py-0.5 border border-gold">
                      {item.tag ?? 'In Store'}
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-charcoal mb-1">
                    {item.title ?? 'Ready-to-wear Item'}
                  </h3>
                  <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
                    {item.desc ?? 'Quality off-the-rack garment.'}
                  </p>

                  {/* Pricing */}
                  {item.price && (
                    <div className="mb-3 text-xs font-mono font-bold text-black flex items-center gap-1.5">
                      <Tag size={13} className="text-gold" />
                      <span>{item.price}</span>
                    </div>
                  )}

                  {/* Available Sizes preview */}
                  {sizes.length > 0 && (
                    <div className="mb-3">
                      <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block mb-1">Available Sizes:</span>
                      <div className="flex flex-wrap gap-1">
                        {sizes.map((sz, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono px-1.5 py-0.5 bg-ivory border border-black text-charcoal font-bold">
                            {sz}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features list preview */}
                  {features.length > 0 && (
                    <ul className="text-[11px] text-zinc-600 space-y-1 mb-4 border-t border-zinc-100 pt-2">
                      {features.slice(0, 2).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1">
                          <Check size={12} className="text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-2 border-t border-black/10 space-y-2">
                  <button
                    onClick={() => onOpenQuoteModal?.('individual', item.title ?? '')}
                    className="w-full neubrutal-btn-gold py-2 text-xs uppercase font-bold tracking-wider text-center block"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
