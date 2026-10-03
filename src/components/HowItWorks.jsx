import React, { useState } from 'react';
import { B2C_STEPS, B2B_STEPS } from '../data/tailoringData';
import { CheckSquare, ArrowRight, UserCheck, Building } from 'lucide-react';

export default function HowItWorks() {
  const [mode, setMode] = useState('individual'); // 'individual' or 'corporate'

  const currentSteps = mode === 'individual' ? B2C_STEPS : B2B_STEPS;

  return (
    <section className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="neubrutal-badge mb-3">
            SIMPLE & TRANSPARENT PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            How It Works
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-base sm:text-lg">
            A streamlined 4-step workflow tailored for both individual patrons and bulk corporate buyers.
          </p>
        </div>

        {/* Toggle Mode Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-ivory border-2 border-black p-1 shadow-brutal flex gap-1">
            <button
              onClick={() => setMode('individual')}
              className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border ${ModeClass(mode === 'individual')}`}
            >
              <UserCheck size={14} /> Individual Custom Tailoring
            </button>
            <button
              onClick={() => setMode('corporate')}
              className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border ${ModeClass(mode === 'corporate')}`}
            >
              <Building size={14} /> B2B & Corporate Bulk Orders
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((s, idx) => (
            <div key={idx} className="neubrutal-card p-6 border-2 bg-ivory flex flex-col justify-between relative">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-mono font-black text-black bg-gold px-3 py-1 border border-black shadow-brutal-sm">
                    {s.step}
                  </span>
                  {idx < 3 && (
                    <ArrowRight size={18} className="hidden lg:block text-zinc-400" />
                  )}
                </div>
                <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ModeClass(active) {
  return active
    ? 'bg-charcoal text-white border-black shadow-brutal-sm'
    : 'bg-white text-charcoal border-transparent hover:bg-sand';
}