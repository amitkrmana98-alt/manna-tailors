import React, { useState } from 'react';
import { CUSTOM_CATEGORIES } from '../data/tailoringData';
import { Scissors, Check, Sparkles } from 'lucide-react';

export default function CustomTailoringSection({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState(CUSTOM_CATEGORIES[0].id);

  const selectedCategory = CUSTOM_CATEGORIES.find(c => c.id === activeTab) || CUSTOM_CATEGORIES[0];

  return (
    <section id="custom-tailoring" className="py-16 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">
            <Scissors size={12} className="inline mr-1" /> MADE-TO-MEASURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Made to Fit. Made for You.
          </h2>
          <p className="text-zinc-700 font-sans mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Work directly with Manna Tailors in Kolkata to design garments around your exact measurements, fabric preferences, and personal style.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CUSTOM_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-black transition-all ${Availability(isActive)}`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Showcase */}
        <div className="bg-white border-4 border-black p-6 sm:p-10 shadow-brutal-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] border-2 border-black overflow-hidden shadow-brutal bg-zinc-900">
              <img 
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute top-3 left-3 bg-gold border border-black font-mono text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                {selectedCategory.tag}
              </div>
            </div>
          </div>

          {/* Right Information & Customization Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-widest block mb-1">
                CUSTOM CATEGORY SPECIFICATION
              </span>
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                {selectedCategory.name}
              </h3>
              <p className="text-zinc-700 text-base leading-relaxed font-sans">
                {selectedCategory.desc}
              </p>
            </div>

            <div className="border-t-2 border-black/10 pt-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-gold-dark" /> Key Tailoring Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans font-semibold text-zinc-800">
                {selectedCategory.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-sand/50 p-2.5 border border-black/20">
                    <div className="w-4 h-4 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 text-[10px]">
                      <Check size={10} />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenQuoteModal('individual', selectedCategory.name)}
                className="neubrutal-btn-gold px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 font-bold"
              >
                <Scissors size={16} />
                Get Quote for {selectedCategory.name}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function Availability(isActive) {
  return isActive 
    ? 'bg-charcoal text-white shadow-brutal-sm scale-105 z-10'
    : 'bg-white text-charcoal hover:bg-sand';
}