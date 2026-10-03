import React from 'react';
import { Scissors, Building2, ArrowRight } from 'lucide-react';

export default function DualPathSection({ onOpenQuoteModal }) {
  return (
    <section className="py-16 bg-charcoal text-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-gold text-black border-2 border-black font-mono text-xs font-bold shadow-brutal-sm uppercase tracking-wider mb-3">
            CHOOSE YOUR ENQUIRY PATH
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white uppercase tracking-tight">
            Tailored Solutions for Individuals & Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Personal Tailoring Card */}
          <div className="bg-white text-charcoal border-4 border-black p-8 shadow-brutal flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 bg-gold border-2 border-black flex items-center justify-center text-black font-bold mb-4 shadow-brutal-sm">
                <Scissors size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-widest block mb-1">
                INDIVIDUAL CUSTOM TAILORING
              </span>
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                Personal Menswear
              </h3>
              <p className="text-zinc-700 text-sm font-sans leading-relaxed mb-4">
                Looking for a custom shirt, trouser, blazer or suit designed according to your exact fit and fabric preferences?
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('individual')}
              className="w-full neubrutal-btn-gold py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Business / Corporate Card */}
          <div className="bg-ivory text-charcoal border-4 border-black p-8 shadow-brutal flex flex-col justify-between space-y-6">
            <div>
              <div className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center font-bold mb-4 shadow-brutal-sm">
                <Building2 size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest block mb-1">
                CORPORATE & B2B CONTRACTS
              </span>
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-3">
                Business & Bulk
              </h3>
              <p className="text-zinc-700 text-sm font-sans leading-relaxed mb-4">
                Need garments for your company, staff team, school, or institution with custom bulk specs and structured timelines?
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal('corporate')}
              className="w-full neubrutal-btn-primary py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
            >
              <span>Request a Corporate Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}