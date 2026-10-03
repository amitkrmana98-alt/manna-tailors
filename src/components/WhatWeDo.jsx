import React from 'react';
import { Scissors, Shirt, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhatWeDo({ setActiveView, onOpenQuoteModal }) {
  return (
    <section id="what-we-do" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">WHAT WE DO</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-charcoal uppercase tracking-tight">
            Three Pillars of Menswear Capability
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-base sm:text-lg">
            Serving individual gentlemen and corporate organizations with equal precision, transparency, and attention to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service Card 1: Custom Tailoring */}
          <div className="neubrutal-card p-6 flex flex-col justify-between border-4">
            <div>
              <div className="w-12 h-12 bg-gold border-2 border-black flex items-center justify-center font-bold text-black mb-4 shadow-brutal-sm">
                <Scissors size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-wider block mb-1">
                INDIVIDUAL FITTING
              </span>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                Custom Tailoring
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-sans">
                Made-to-measure men’s clothing crafted around your fit, style and requirements.
              </p>

              <ul className="space-y-2 mb-8 text-xs font-bold font-mono text-charcoal border-t border-b border-black/10 py-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Men's Custom Shirts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Tailored Trousers & Pants
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Structured Blazers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Complete Tailored Suits
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveView('custom')}
              className="w-full neubrutal-btn-gold py-3 px-4 text-xs uppercase tracking-wider flex items-center justify-between font-bold"
            >
              <span>Explore Custom Tailoring</span>
              <ArrowRight size={16} />
            </button> # standard button CTA
          </div>

          {/* Service Card 2: Ready-to-Wear */}
          <div className="neubrutal-card p-6 flex flex-col justify-between border-4">
            <div>
              <div className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center font-bold mb-4 shadow-brutal-sm">
                <Shirt size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                IN-STORE SELECTION
              </span>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                Ready-to-Wear
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-sans">
                Quality men’s garments selected for customers looking for dependable style and convenience.
              </p>

              <ul className="space-y-2 mb-8 text-xs font-bold font-mono text-charcoal border-t border-b border-black/10 py-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-black" /> Executive Formal Shirts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-black" /> Smart Casual Menswear
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-black" /> Ready Formal Trousers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-black" /> Occasion Blazers & Outerwear
                </li>
              </ul>
            </div>

            <button
              onClick={() => setActiveView('rtw')}
              className="w-full neubrutal-btn-primary py-3 px-4 text-xs uppercase tracking-wider flex items-center justify-between font-bold"
            >
              <span>Explore Ready-to-Wear</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Service Card 3: Corporate & Bulk Orders */}
          <div className="neubrutal-card p-6 flex flex-col justify-between border-4 bg-sand/30">
            <div>
              <div className="w-12 h-12 bg-gold border-2 border-black flex items-center justify-center font-bold text-black mb-4 shadow-brutal-sm">
                <Building2 size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-wider block mb-1">
                BUSINESS TO BUSINESS
              </span>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">
                Corporate & Bulk Orders
              </h3>
              <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-sans">
                Garment solutions for companies, institutions and organizations requiring quality garments at scale.
              </p>

              <ul className="space-y-2 mb-8 text-xs font-bold font-mono text-charcoal border-t border-b border-black/10 py-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Corporate Executive Wear
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Staff & Employee Uniforms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Institutional Garment Supplies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-gold-dark" /> Contract Garment Manufacturing
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenQuoteModal('corporate')}
              className="w-full neubrutal-btn-gold py-3 px-4 text-xs uppercase tracking-wider flex items-center justify-between font-bold"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}