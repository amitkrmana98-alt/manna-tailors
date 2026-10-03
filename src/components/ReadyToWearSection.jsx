import React from 'react';
import { READY_TO_WEAR_CATEGORIES } from '../data/tailoringData';
import { ShoppingBag, Store, ArrowRight, MapPin } from 'lucide-react';

export default function ReadyToWearSection({ setActiveView, onOpenQuoteModal }) {
  return (
    <section id="ready-to-wear" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">
            <ShoppingBag size={12} className="inline mr-1" /> MENSWEAR SELECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Ready When You Are.
          </h2>
          <p className="text-zinc-700 font-sans mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            In addition to custom tailoring, Manna Tailors offers curated men’s ready-to-wear garments for customers looking for quality clothing and immediate convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {READY_TO_WEAR_CATEGORIES.map((item, idx) => (
            <div key={idx} className="neubrutal-card p-5 border-2 flex flex-col justify-between bg-ivory">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-black text-gold text-[10px] font-mono font-bold px-2 py-0.5 border border-black uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <Store size={16} className="text-zinc-400" />
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 font-sans mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal('individual', item.title)}
                  className="text-xs font-mono font-bold uppercase text-charcoal hover:text-gold-dark flex items-center gap-1"
                >
                  Enquire Now <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Store Visit CTA Banner */}
        <div className="bg-charcoal text-white border-4 border-black p-6 sm:p-8 shadow-brutal flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-gold font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              VISIT OUR BHOWANIPORE STORE
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Explore Ready-Made Sizes & Textures In Person
            </h3>
            <p className="text-xs text-zinc-300 font-sans mt-1">
              Location: 63, 1, Ashutosh Mukherjee Rd, Bakul Bagan, Bhowanipore, Kolkata
            </p>
          </div>
          <button
            onClick={() => setActiveView('contact')}
            className="neubrutal-btn-gold px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center gap-2 whitespace-nowrap"
          >
            <MapPin size={16} />
            Get Directions & Visit Us
          </button>
        </div>

      </div>
    </section>
  );
}