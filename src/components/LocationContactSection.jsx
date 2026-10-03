import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/tailoringData';
import { MapPin, Phone, MessageSquare, Mail, Navigation, Send, CheckCircle2 } from 'lucide-react';

export default function LocationContactSection({ activeView }) {
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'Custom Tailoring',
    productService: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3">
            <MapPin size={12} className="inline mr-1" /> VISIT US IN BHOWANIPORE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Contact & Store Location
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-base sm:text-lg">
            Visit our Kolkata tailor store, call our team, or send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Location & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="neubrutal-card p-6 border-4 bg-ivory space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-black pb-3">
                <div className="w-10 h-10 bg-gold border-2 border-black flex items-center justify-center font-bold text-black shadow-brutal-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-charcoal">
                    Visit Manna Tailors
                  </h3>
                  <span className="text-xs font-mono text-zinc-600 uppercase">
                    Primary Store Address
                  </span>
                </div>
              </div>

              <p className="text-sm font-sans font-bold text-charcoal leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>

              <a 
                href={`https://maps.google.com/?q=${BUSINESS_INFO.address.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="neubrutal-btn-gold px-4 py-3 text-xs uppercase font-bold tracking-wider w-full text-center flex items-center justify-center gap-2 block"
              >
                <Navigation size={14} />
                Get Directions on Google Maps
              </a>
            </div>

            {/* Contact Action Placeholders */}
            <div className="neubrutal-card p-6 border-4 bg-white space-y-4">
              <h4 className="font-serif font-bold text-lg text-charcoal border-b border-black/10 pb-2">
                Direct Store Communications
              </h4>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-sand border border-black flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-gold-dark" />
                    <span className="font-bold">Call Us:</span>
                  </div>
                  <span className="text-zinc-600">[ Store Phone Placeholder ]</span>
                </div>

                <div className="p-3 bg-sand border border-black flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-emerald-700" />
                    <span className="font-bold">WhatsApp:</span>
                  </div>
                  <span className="text-zinc-600">[ WhatsApp Number Placeholder ]</span>
                </div>

                <div className="p-3 bg-sand border border-black flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-black" />
                    <span className="font-bold">Email:</span>
                  </div>
                  <span className="text-zinc-600">[ Business Email Placeholder ]</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: General Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-brutal-lg">
              <div className="border-b-2 border-black pb-3 mb-6">
                <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-widest block">
                  GENERAL ENQUIRY
                </span>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  Send an Enquiry
                </h3>
              </div>

              {submitted ? (
                <div className="bg-sand border-2 border-black p-8 text-center space-y-3 animate-fadeIn">
                  <CheckCircle2 size={32} className="text-emerald-700 mx-auto" />
                  <h4 className="text-2xl font-serif font-bold text-charcoal">
                    Enquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-zinc-700 font-sans max-w-sm mx-auto">
                    Thank you {contactForm.fullName}. Manna Tailors will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="neubrutal-btn-primary px-5 py-2 text-xs uppercase font-bold tracking-wider mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. S. Banerjee"
                        className="neubrutal-input"
                        value={contactForm.fullName}
                        onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+91 90000 00000"
                        className="neubrutal-input"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        placeholder="your@email.com"
                        className="neubrutal-input"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                        Enquiry Type
                      </label>
                      <select 
                        className="neubrutal-input bg-white"
                        value={contactForm.enquiryType}
                        onChange={(e) => setContactForm({...contactForm, enquiryType: e.target.value})}
                      >
                        <option value="Custom Tailoring">Custom Tailoring</option>
                        <option value="Ready-to-Wear">Ready-to-Wear</option>
                        <option value="Corporate Order">Corporate Order</option>
                        <option value="Bulk Garment Order">Bulk Garment Order</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                      Product / Garment Service
                    </label>
                    <input 
                      type="text"
                      placeholder="e.g. 2 Custom Shirts & 1 Suit fitting"
                      className="neubrutal-input"
                      value={contactForm.productService}
                      onChange={(e) => setContactForm({...contactForm, productService: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                      Message / Details
                    </label>
                    <textarea 
                      rows="3"
                      placeholder="Write your message or inquiry details..."
                      className="neubrutal-input"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full neubrutal-btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Send Direct Message
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