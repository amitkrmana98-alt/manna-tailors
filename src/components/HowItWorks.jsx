import React, { useState } from 'react';
import { B2C_STEPS, B2B_STEPS } from '../data/tailoringData';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('b2c');
  const safeB2C = Array.isArray(B2C_STEPS) ? B2C_STEPS : [];
  const safeB2B = Array.isArray(B2B_STEPS) ? B2B_STEPS : [];

  const currentSteps = activeTab === 'b2c' ? safeB2C : safeB2B;

  return (
    <section className="py-16 md:py-24 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-black text-gold text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Streamlined Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-zinc-600 font-sans text-base">
            Whether ordering an individual bespoke suit or placing a high-volume institutional order, our process guarantees precision.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-2 border-black p-1 bg-white shadow-brutal-sm">
            <button
              onClick={() => setActiveTab('b2c')}
              className={`px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'b2c' ? 'bg-charcoal text-gold font-black' : 'text-zinc-600 hover:text-black'
              }`}
            >
              Individual Custom Orders
            </button>
            <button
              onClick={() => setActiveTab('b2b')}
              className={`px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'b2b' ? 'bg-charcoal text-gold font-black' : 'text-zinc-600 hover:text-black'
              }`}
            >
              Corporate & Bulk Orders
            </button>
          </div>
        </div>

        {/* Steps display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((stepItem, idx) => {
            if (!stepItem) return null;
            return (
              <div 
                key={stepItem.step ?? idx} 
                className="bg-white border-2 border-black p-6 shadow-brutal relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-mono font-black text-gold mb-3">
                    {stepItem.step ?? `0${idx + 1}`}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                    {stepItem.title ?? 'Process Step'}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {stepItem.desc ?? ''}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
