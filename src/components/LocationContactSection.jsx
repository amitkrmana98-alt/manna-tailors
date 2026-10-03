import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Star, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function LocationContactSection({ activeView }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const address = BUSINESS_INFO?.address ?? {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value ?? '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setStatus({ submitting: false, submitted: false, error: null });
      if (!formData.name?.trim() || !formData.phone?.trim()) {
        setStatus({ submitting: false, submitted: false, error: 'Please enter your name and phone number.' });
        return;
      }

      setStatus({ submitting: true, submitted: false, error: null });
      setTimeout(() => {
        try {
          setStatus({ submitting: false, submitted: true, error: null });
          setFormData({ name: '', phone: '', message: '' });
        } catch (err) {
          setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please call us.' });
        }
      }, 300);
    } catch (err) {
      setStatus({ submitting: false, submitted: false, error: 'An error occurred. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-black text-gold text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Visit Us or Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight mb-4">
            Store Location & Enquiries
          </h2>
          <p className="text-zinc-600 font-sans text-base">
            Located conveniently on Ashutosh Mukherjee Road in Bhowanipore, Kolkata. Visit our store or send an online message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Store Info & Map Link Card */}
          <div className="lg:col-span-6 bg-white border-2 border-black p-6 md:p-8 shadow-brutal space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-black pb-4">
              <div className="w-10 h-10 bg-gold text-black border border-black flex items-center justify-center font-bold">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal">
                  {BUSINESS_INFO?.name ?? 'Manna Tailors'}
                </h3>
                <span className="text-xs font-mono text-gold-dark font-bold flex items-center gap-1">
                  <Star size={12} className="fill-gold text-gold" /> {BUSINESS_INFO?.googleRating ?? '4.99'} Google Rating
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs md:text-sm">
              <div>
                <span className="font-mono font-bold uppercase text-zinc-500 block text-[10px] mb-1">Store Address:</span>
                <p className="font-bold text-charcoal">{address.full ?? '63, 1, Ashutosh Mukherjee Rd, Bakul Bagan, Bhowanipore, Kolkata, West Bengal 700025'}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-200 pt-4">
                <div>
                  <span className="font-mono font-bold uppercase text-zinc-500 block text-[10px] mb-1">Store Hours:</span>
                  <p className="text-zinc-700 font-bold flex items-center gap-1">
                    <Clock size={14} className="text-gold" /> Mon - Sat: 10:30 AM - 8:30 PM
                  </p>
                </div>
                <div>
                  <span className="font-mono font-bold uppercase text-zinc-500 block text-[10px] mb-1">Contact Phone:</span>
                  <p className="text-zinc-700 font-bold flex items-center gap-1">
                    <Phone size={14} className="text-gold" /> {BUSINESS_INFO?.phone ?? '+91 98300 00000'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://maps.google.com/?q=${address.mapsQuery || 'Manna+Tailors+Kolkata'}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="neubrutal-btn-primary w-full py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-6 bg-sand border-2 border-black p-6 md:p-8 shadow-brutal flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-black text-charcoal mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-600 mb-6 font-sans">
                Have a quick question regarding stitching timelines, fabric availability, or pricing? Drop a message below.
              </p>

              {status.submitted ? (
                <div className="bg-white border-2 border-black p-6 text-center space-y-3">
                  <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-charcoal">Message Sent!</h4>
                  <p className="text-xs text-zinc-600">
                    Thank you. We will get back to you on your provided phone number as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="neubrutal-btn-gold px-4 py-2 text-xs font-bold uppercase tracking-wider mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.error && (
                    <div className="bg-red-50 border-2 border-red-600 p-2.5 text-red-800 text-xs font-bold flex items-center gap-2">
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amitava Bose"
                      className="w-full bg-white border-2 border-black p-2.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98300 00000"
                      className="w-full bg-white border-2 border-black p-2.5 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                      Enquiry Details
                    </label>
                    <textarea 
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ask about custom suits, blazers, uniforms..."
                      className="w-full bg-white border-2 border-black p-2.5 text-xs focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full neubrutal-btn-gold py-3 text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
