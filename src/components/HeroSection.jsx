import React from 'react';
import { Scissors, ArrowRight, Star, ShieldCheck, CheckCircle2, Building2, User } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function HeroSection({ setActiveView, onOpenQuoteModal }) {
  return (
    <section className="relative bg-ivory py-12 md:py-20 border-b-2 border-black overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-gold/20 border-2 border-black px-3 py-1.5 shadow-brutal-sm">
              <span className="w-2 h-2 rounded-full bg-gold border border-black animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
                BHOWANIPORE, KOLKATA • ESTABLISHED MEN'S TAILORS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-charcoal tracking-tight leading-none">
              Tailored for You.<br />
              <span className="text-gold bg-black px-2 py-1 inline-block mt-1 shadow-brutal">
                Crafted for Business.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 font-sans max-w-2xl leading-relaxed">
              {BUSINESS_INFO.subhead}
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal('individual')}
                className="neubrutal-btn-gold px-6 py-4 text-sm sm:text-base uppercase tracking-wider flex items-center gap-3 font-bold"
              >
                <Scissors size={18} />
                Request a Quote
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('what-we-do');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="neubrutal-btn-outline px-6 py-4 text-sm sm:text-base uppercase tracking-wider flex items-center gap-2 font-bold"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Google Rating & Trust Badges */}
            <div className="pt-6 border-t-2 border-black/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-white p-3 border-2 border-black shadow-brutal-sm flex items-center gap-2.5">
                <div className="p-1.5 bg-gold border border-black">
                  <Star size={16} className="fill-black text-black" />
                </div>
                <div>
                  <span className="font-bold block text-sm text-charcoal">{BUSINESS_INFO.googleRating} ★ Rating</span>
                  <span className="text-zinc-500 text-[10px]">Google Profile Verified</span>
                </div>
              </div>

              <div className="bg-white p-3 border-2 border-black shadow-brutal-sm flex items-center gap-2.5">
                <div className="p-1.5 bg-black text-white border border-black">
                  <User size={16} />
                </div>
                <div>
                  <span className="font-bold block text-sm text-charcoal">Bespoke Fit</span>
                  <span className="text-zinc-500 text-[10px]">Made-to-Measure Shirts & Suits</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-white p-3 border-2 border-black shadow-brutal-sm flex items-center gap-2.5">
                <div className="p-1.5 bg-gold border border-black">
                  <Building2 size={16} />
                </div>
                <div>
                  <span className="font-bold block text-sm text-charcoal">B2B & Bulk</span>
                  <span className="text-zinc-500 text-[10px]">Corporate & Uniforms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Impact Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border-4 border-black p-4 sm:p-6 shadow-brutal-lg space-y-4">
              <div className="absolute -top-4 -right-4 bg-gold text-black border-2 border-black font-mono text-xs font-bold px-3 py-1.5 shadow-brutal-sm rotate-2">
                KOLKATA STORE & CRAFT
              </div>

              <div className="relative aspect-[4/5] overflow-hidden border-2 border-black bg-zinc-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80"
                  alt="Manna Tailors Crafted Menswear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="font-mono text-xs text-gold font-bold tracking-widest uppercase mb-1">
                    Handcrafted & Precision Stitched
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Tailored Menswear Excellence
                  </h2>
                  <p className="text-xs text-zinc-300 mt-1 font-sans">
                    Individual fit customization & high-volume contract fulfillment in Bhowanipore.
                  </p>
                </div>
              </div>

              {/* Highlight Capability Tags */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold font-mono">
                <div className="bg-sand p-2 border border-black">
                  SHIRTS & SUITS
                </div>
                <div className="bg-sand p-2 border border-black">
                  READY-TO-WEAR
                </div>
                <div className="bg-gold/40 p-2 border border-black">
                  BULK B2B
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}