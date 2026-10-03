import React from 'react';
import { Scissors, MapPin, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function Footer({ setActiveView, onOpenQuoteModal }) {
  return (
    <footer className="bg-charcoal text-white border-t-4 border-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold text-black border-2 border-white flex items-center justify-center font-bold shadow-brutal-white">
                <Scissors size={20} className="transform -rotate-45" />
              </div>
              <div>
                <span className="text-2xl font-serif font-black tracking-tight text-white block leading-none">
                  MANNA TAILORS
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-gold uppercase block mt-1">
                  Custom • Ready-to-Wear • Corporate Garments
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              Established men's custom tailoring and garment solution business based in Bhowanipore, Kolkata. Delivering individual precision fits and high-volume corporate contracts.
            </p>

            <div className="p-3 bg-zinc-900 border border-zinc-700 text-xs font-mono space-y-1">
              <div className="flex items-center gap-1.5 text-gold font-bold">
                <MapPin size={12} />
                <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}</span>
              </div>
              <p className="text-zinc-400 pl-4">
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-gold font-bold uppercase tracking-widest block border-b border-zinc-800 pb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2">
              {['home', 'custom', 'rtw', 'corporate', 'gallery', 'about', 'contact'].map((viewId) => (
                <li key={viewId}>
                  <button
                    onClick={() => {
                      setActiveView(viewId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-gold transition-colors capitalize flex items-center gap-1 text-zinc-300 font-semibold"
                  >
                    <ChevronRight size={12} className="text-gold" />
                    {viewId === 'rtw' ? 'Ready-to-Wear' : viewId === 'custom' ? 'Custom Tailoring' : viewId}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & B2B Column */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-gold font-bold uppercase tracking-widest block border-b border-zinc-800 pb-2">
              TAILORING CAPABILITIES
            </span>
            <ul className="space-y-1.5 text-zinc-300">
              <li>• Made-to-Measure Custom Shirts</li>
              <li>• Tailored Formal Trousers</li>
              <li>• Structured Blazers & Occasion Suits</li>
              <li>• Men's Ready-to-Wear Selection</li>
              <li>• Corporate Uniform Manufacturing</li>
              <li>• Institutional Garment Supplies</li>
            </ul>

            <div className="pt-3">
              <button
                onClick={() => onOpenQuoteModal('corporate')}
                className="neubrutal-btn-gold px-4 py-2.5 text-[11px] uppercase tracking-wider font-bold w-full text-center block"
              >
                Request Corporate Quote
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-zinc-800 text-center md:flex md:justify-between md:items-center text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Manna Tailors. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-[11px] text-zinc-500">
            Bhowanipore • Kolkata • West Bengal 700025 • India
          </p>
        </div>

      </div>
    </footer>
  );
}