import React from 'react';
import { Star, MessageSquare, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">
            GOOGLE VERIFIED PROFILE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Customer Trust & Feedback
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-gold/30 border-2 border-black px-4 py-2 shadow-brutal-sm">
            <Star size={18} className="fill-black text-black" />
            <span className="font-mono font-bold text-base text-charcoal">
              {BUSINESS_INFO.googleRating} out of 5.0 Rating on Google
            </span>
          </div>
        </div>

        {/* Testimonials Structure Box */}
        <div className="bg-white border-4 border-black p-6 sm:p-10 shadow-brutal-lg max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 border-b-2 border-black pb-4">
            <div className="w-10 h-10 bg-gold border border-black flex items-center justify-center font-bold text-black shadow-brutal-sm">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-charcoal">
                Genuine Customer Feedback Section
              </h3>
              <span className="text-xs font-mono text-zinc-500 uppercase">
                Official Google Business Profile Verification
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-sans">
            <div className="bg-sand p-5 border-2 border-black space-y-2">
              <div className="flex text-gold-dark">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-dark text-gold-dark" />
                ))}
              </div>
              <p className="text-zinc-700 italic">
                "Placeholder for customer review: Exceptional fit for formal shirts and blazers. The fitting in Bhowanipore store is prompt and accurate."
              </p>
              <span className="block text-xs font-mono font-bold text-charcoal pt-2 border-t border-black/10">
                [ Verified Patron Feedback Placeholder ]
              </span>
            </div>

            <div className="bg-sand p-5 border-2 border-black space-y-2">
              <div className="flex text-gold-dark">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-dark text-gold-dark" />
                ))}
              </div>
              <p className="text-zinc-700 italic">
                "Placeholder for B2B client review: Delivered employee uniform batch on schedule according to required specifications."
              </p>
              <span className="block text-xs font-mono font-bold text-charcoal pt-2 border-t border-black/10">
                [ Corporate Client Feedback Placeholder ]
              </span>
            </div>
          </div>

          <div className="text-center pt-2 text-xs font-mono text-zinc-500">
            Note: Authentic Google Reviews can be linked or embedded directly via Google Business integration.
          </div>
        </div>

      </div>
    </section>
  );
}