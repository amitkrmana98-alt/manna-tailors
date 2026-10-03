import React, { useState } from 'react';
import { CORPORATE_SERVICES } from '../data/tailoringData';
import { Building2, Briefcase, Users, Package, Award, FileCheck, Send, CheckCircle2 } from 'lucide-react';

export default function CorporateSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirementType: 'Corporate Uniforms',
    quantity: '',
    garmentType: '',
    timeline: '',
    additionalRequirements: ''
  });

  const iconMap = {
    Briefcase,
    Users,
    Building: Building2,
    Package,
    Award,
    FileCheck
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="corporate" className="py-16 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="neubrutal-badge mb-3 bg-black text-gold">
            <Building2 size={12} className="inline mr-1" /> B2B & BULK GARMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Garment Solutions for Business.
          </h2>
          <p className="text-zinc-700 font-sans mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            From corporate formalwear to bulk garment requirements, Manna Tailors works with businesses and organizations across Kolkata to deliver garments according to exact specifications and timelines.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CORPORATE_SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Building2;
            return (
              <div key={srv.id} className="neubrutal-card p-6 border-2 bg-white flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-gold border border-black flex items-center justify-center font-bold text-black mb-4 shadow-brutal-sm">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-charcoal mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Corporate Quote Form Box */}
        <div className="bg-white border-4 border-black p-6 sm:p-10 shadow-brutal-lg max-w-4xl mx-auto">
          <div className="border-b-2 border-black pb-4 mb-6">
            <span className="text-xs font-mono font-bold text-gold-dark uppercase tracking-widest block">
              DIRECT B2B ENQUIRY FORM
            </span>
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              Request a Corporate Quote
            </h3>
            <p className="text-xs text-zinc-600 font-sans mt-1">
              Fill out your organization's specs and timeline. Our B2B coordinator will review and respond promptly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-sand border-2 border-black p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 bg-gold border-2 border-black mx-auto flex items-center justify-center text-black font-bold shadow-brutal-sm">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-charcoal">
                Corporate Enquiry Received!
              </h4>
              <p className="text-sm text-zinc-700 font-sans max-w-md mx-auto">
                Thank you for considering Manna Tailors for your business requirement. We will review your specification and get in touch with you at <strong className="underline">{formData.email || 'your email'}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="neubrutal-btn-primary px-6 py-2.5 text-xs uppercase font-bold tracking-wider mt-2"
              >
                Submit Another Corporate Request
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
                    placeholder="e.g. Rahul Das"
                    className="neubrutal-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Company / Institution Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Apex Logistics Ltd"
                    className="neubrutal-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="corporate@company.com"
                    className="neubrutal-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="e.g. +91 98300 00000"
                    className="neubrutal-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Requirement Type
                  </label>
                  <select 
                    className="neubrutal-input bg-white"
                    value={formData.requirementType}
                    onChange={(e) => setFormData({...formData, requirementType: e.target.value})}
                  >
                    <option value="Corporate Wear">Corporate Wear</option>
                    <option value="Employee Uniforms">Employee Uniforms</option>
                    <option value="Institutional Garments">Institutional Garments</option>
                    <option value="Bulk Garment Orders">Bulk Garment Orders</option>
                    <option value="Custom Business Apparel">Custom Business Apparel</option>
                    <option value="Contract Garments">Contract Garments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Approx. Quantity *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. 50 shirts / 100 sets"
                    className="neubrutal-input"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Required Timeline
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g. Within 3 weeks"
                    className="neubrutal-input"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Additional Specification / Fabrics / Details
                </label>
                <textarea 
                  rows="3"
                  placeholder="Mention fabric preferences, branding requirement, logo embroidery, sizing distribution, or special instructions..."
                  className="neubrutal-input"
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({...formData, additionalRequirements: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full neubrutal-btn-gold py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
              >
                <Send size={16} />
                Submit Corporate Quote Request
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}