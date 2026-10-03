import React from 'react';
import { BUSINESS_INFO } from '../data/tailoringData';
import { Award, ShieldCheck, Heart, User, MapPin } from 'lucide-react';

export default function AboutSection({ setActiveView, onOpenQuoteModal }) {
  return (
    <section id="about" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="neubrutal-badge">ABOUT MANNA TAILORS</span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
              Built Around Craftsmanship.<br />
              <span className="text-gold bg-black px-2 py-0.5 inline-block mt-1">
                Grown Through Trust.
              </span>
            </h2>

            <div className="space-y-4 font-sans text-base text-zinc-700 leading-relaxed">
              <p>
                Manna Tailors operates as a respected family-owned tailoring and menswear business based in Bhowanipore, Kolkata. Founded on precision cutting, neat finishing, and honest customer service, we serve both individual gentlemen seeking bespoke fits and organizations requiring reliable bulk garment contracts.
              </p>
              <p>
                Our workshop combines traditional craftsmanship with modernized menswear standards—ensuring every shirt collar, suit lapel, trouser rise, and corporate uniform order meets exact expectations.
              </p>
            </div>

            {/* Placeholder section for family story */}
            <div className="bg-sand border-2 border-black p-5 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 font-bold text-charcoal">
                <Heart size={16} className="text-gold-dark" />
                <span>FAMILY HERITAGE & FOUNDER STORY PLACEHOLDER</span>
              </div>
              <p className="text-zinc-600 font-sans text-xs">
                [ Owner note: Specific founding year, generation details, or family history can be customized here without modifying website structure. ]
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenQuoteModal('individual')}
                className="neubrutal-btn-gold px-6 py-3 text-xs uppercase font-bold tracking-wider"
              >
                Consult Our Tailor
              </button>
              <button
                onClick={() => setActiveView('contact')}
                className="neubrutal-btn-outline px-6 py-3 text-xs uppercase font-bold tracking-wider"
              >
                Visit Bhowanipore Store
              </button>
            </div>
          </div>

          {/* Right Column Visual Box */}
          <div className="lg:col-span-5">
            <div className="bg-ivory border-4 border-black p-6 shadow-brutal-lg space-y-4">
              <div className="aspect-[4/3] border-2 border-black bg-zinc-900 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Manna Tailors Craftsmanship"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute bottom-2 left-2 bg-black text-gold text-[10px] font-mono font-bold px-2 py-1 border border-black">
                  KOLKATA TAILORING WORKSHOP
                </div>
              </div>

              <div className="bg-white p-4 border-2 border-black text-xs font-mono space-y-2">
                <div className="font-bold text-charcoal flex items-center gap-1.5">
                  <MapPin size={14} className="text-gold-dark" /> Location:
                </div>
                <p className="text-zinc-700 font-sans">
                  {BUSINESS_INFO.address.full}
                </p>
                <div className="pt-2 border-t border-black/10 flex justify-between font-bold text-charcoal">
                  <span>Google Rating:</span>
                  <span className="text-gold-dark">{BUSINESS_INFO.googleRating} / 5.0 ★</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}