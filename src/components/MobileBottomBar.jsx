import React from 'react';
import { Scissors, MapPin, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function MobileBottomBar({ onOpenQuoteModal, onOpenContact }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal border-t-2 border-black p-2 shadow-brutal-lg flex items-center justify-around gap-2 font-mono text-[11px]">
      <button
        onClick={() => onOpenContact('store')}
        className="flex-1 bg-white text-black border border-black py-2 px-1 font-bold flex flex-col items-center justify-center gap-0.5 shadow-brutal-sm active:translate-y-0.5"
      >
        <MapPin size={14} className="text-black" />
        <span>Visit Store</span>
      </button>

      <button
        onClick={() => onOpenQuoteModal('individual')}
        className="flex-1 bg-gold text-black border border-black py-2 px-1 font-bold flex flex-col items-center justify-center gap-0.5 shadow-brutal-sm active:translate-y-0.5"
      >
        <Scissors size={14} />
        <span>Quote</span>
      </button>

      <button
        onClick={() => onOpenQuoteModal('corporate')}
        className="flex-1 bg-black text-white border border-gold/60 py-2 px-1 font-bold flex flex-col items-center justify-center gap-0.5 shadow-brutal-sm active:translate-y-0.5"
      >
        <MessageSquare size={14} className="text-gold" />
        <span>B2B / Bulk</span>
      </button>
    </div>
  );
}