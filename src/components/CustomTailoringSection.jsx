import React, { useState } from 'react';
import { CUSTOM_CATEGORIES, HAND_CUT_COLLARS } from '../data/tailoringData';
import { Scissors, Check, Sparkles, ChevronRight, Layers } from 'lucide-react';

export default function CustomTailoringSection({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState(CUSTOM_CATEGORIES[0]?.id || 'shirts');

  const activeCategory = CUSTOM_CATEGORIES.find(c => c.id === selectedCategory) || CUSTOM_CATEGORIES[0];

  return (
    <section id="custom-tailoring" className="py-16 md:py-24 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-black text-gold text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Bespoke Atelier
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight mb-4">
            Custom Tailoring Services
          </h2>
          <p className="text-zinc-600 font-sans text-base">
            Master hand-cut patterns, over 15 individual body measurements, and artisanal finishing for shirts, trousers, and blazers in Kolkata.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {CUSTOM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-3 font-bold uppercase tracking-wider text-xs md:text-sm border-2 transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-charcoal text-white border-black shadow-brutal'
                  : 'bg-white text-charcoal border-black hover:bg-sand'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Display Card */}
        {activeCategory && (
          <div className="bg-white border-2 border-black p-6 md:p-10 shadow-brutal-lg mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="border-2 border-black overflow-hidden bg-sand aspect-[4/3] shadow-brutal">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <span className="absolute top-4 left-4 bg-black text-gold font-mono text-xs font-bold px-3 py-1 border border-gold uppercase">
                {activeCategory.tag}
              </span>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">
                    {activeCategory.name}
                  </h3>
                  <div className="bg-sand border border-black px-3 py-1 font-mono text-xs font-bold text-charcoal">
                    Starting from <span className="text-black font-black text-sm">{activeCategory.pricingBreakdown?.startingPrice}</span>
                  </div>
                </div>

                <p className="text-zinc-600 text-sm md:text-base mb-6">
                  {activeCategory.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-ivory border-2 border-black p-4">
                    <h4 className="font-mono text-xs font-bold uppercase text-charcoal mb-2 flex items-center gap-1.5">
                      <Sparkles size={14} className="text-gold" /> Key Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {activeCategory.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check size={14} className="text-black shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-ivory border-2 border-black p-4">
                    <h4 className="font-mono text-xs font-bold uppercase text-charcoal mb-2 flex items-center gap-1.5">
                      <Layers size={14} className="text-gold" /> Custom Features
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {activeCategory.features?.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check size={14} className="text-black shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 border-t-2 border-black/10">
                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal('individual', activeCategory.name)}
                  className="neubrutal-btn-gold px-6 py-3 text-xs md:text-sm uppercase tracking-wider flex items-center gap-2"
                >
                  <Scissors size={16} />
                  Book Custom {activeCategory.name} Fitting
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Hand-cut Custom Collar Showcase Section */}
        <div id="hand-cut-collars" className="pt-8 border-t-2 border-black">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-gold text-black text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-2">
              Artisan Collar Craftsmanship
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-black text-charcoal tracking-tight mb-3">
              Hand-cut Custom Collar Gallery
            </h3>
            <p className="text-zinc-600 text-sm md:text-base font-sans">
              Our signature hand-patterned collar styles cut individually by master craftsmen for zero roll collapse, crisp structure, and superior neck ergonomics.
            </p> </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HAND_CUT_COLLARS.map((collar) => (
              <div 
                key={collar.id}
                className="bg-white border-2 border-black p-4 shadow-brutal flex flex-col justify-between group hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="relative border-2 border-black overflow-hidden bg-sand aspect-[4/3] mb-4">
                    <img 
                      src={collar.image} 
                      alt={collar.alt || collar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-black text-gold text-[10px] font-mono font-bold px-2 py-0.5 border border-gold">
                      {collar.badge}
                    </span>
                    <span className="absolute bottom-2 right-2 bg-ivory text-black text-[10px] font-mono font-bold px-2 py-0.5 border border-black shadow-brutal-sm">
                      {collar.style}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-charcoal mb-2">
                    {collar.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {collar.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenQuoteModal && onOpenQuoteModal('individual', `Shirt with ${collar.title}`)}
                  className="w-full py-2 bg-ivory text-charcoal border-2 border-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors flex items-center justify-center gap-1"
                >
                  <span>Select This Collar</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
