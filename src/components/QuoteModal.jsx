import React, { useState, useEffect } from 'react';
import { X, Scissors, Building2, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialTab = 'individual', prefilledGarment = '' }) {
  const [tab, setTab] = useState(initialTab);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [indForm, setIndForm] = useState({
    name: '',
    phone: '',
    email: '',
    garment: prefilledGarment || 'Custom Shirt',
    quantity: '1',
    style: '',
    message: ''
  });

  const [busForm, setBusForm] = useState({
    contactName: '',
    companyName: '',
    designation: '',
    phone: '',
    email: '',
    requirement: 'Corporate Uniforms',
    quantity: '',
    timeline: '',
    location: 'Kolkata',
    additionalRequirements: ''
  });

  useEffect(() => {
    setTab(initialTab);
    if (prefilledGarment) {
      setIndForm(prev => ({ ...prev, garment: prefilledGarment }));
    }
    setSubmitted(false);
  }, [initialTab, prefilledGarment, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white border-4 border-black shadow-brutal-lg w-full max-w-2xl relative max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="bg-charcoal text-white p-4 sm:p-6 border-b-2 border-black flex justify-between items-center">
          <div>
            <span className="text-gold text-[10px] font-mono font-bold uppercase tracking-widest block">
              MANNA TAILORS KOLKATA
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Request a Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gold text-black border-2 border-black font-bold hover:bg-white shadow-brutal-sm transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Customer Type Tabs */}
        <div className="flex border-b-2 border-black bg-ivory font-mono text-xs font-bold">
          <button
            onClick={() => { setTab('individual'); setSubmitted(false); }}
            className={`flex-1 py-3 px-4 text-center border-r-2 border-black uppercase tracking-wider flex items-center justify-center gap-2 ${TabStyle(tab === 'individual')}`}
          >
            <Scissors size={14} /> Individual Quote
          </button>
          <button
            onClick={() => { setTab('corporate'); setSubmitted(false); }}
            className={`flex-1 py-3 px-4 text-center uppercase tracking-wider flex items-center justify-center gap-2 ${TabStyle(tab === 'corporate')}`}
          >
            <Building2 size={14} /> Business / Corporate Quote
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 font-sans text-charcoal">
          {submitted ? (
            <div className="bg-sand border-2 border-black p-8 text-center space-y-4">
              <CheckCircle2 size={36} className="text-black mx-auto" />
              <h4 className="text-2xl font-serif font-bold text-charcoal">
                Quote Request Received!
              </h4>
              <p className="text-xs text-zinc-700 font-sans max-w-md mx-auto">
                Thank you for contacting Manna Tailors. We have received your details for <strong>{tab === 'individual' ? indForm.garment : busForm.requirement}</strong> and will follow up shortly.
              </p>
              <button
                onClick={onClose}
                className="neubrutal-btn-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider mt-2"
              >
                Close Window
              </button>
            </div>
          ) : tab === 'individual' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Amitava Roy"
                    className="neubrutal-input"
                    value={indForm.name}
                    onChange={(e) => setIndForm({...indForm, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    className="neubrutal-input"
                    value={indForm.phone}
                    onChange={(e) => setIndForm({...indForm, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Garment Type
                  </label>
                  <select 
                    className="neubrutal-input bg-white"
                    value={indForm.garment}
                    onChange={(e) => setIndForm({...indForm, garment: e.target.value})}
                  >
                    <option value="Custom Shirt">Custom Men's Shirt</option>
                    <option value="Tailored Trouser">Tailored Trouser / Pants</option>
                    <option value="Structured Blazer">Structured Blazer</option>
                    <option value="Complete Suit">2-Piece / 3-Piece Suit</option>
                    <option value="Ready-to-Wear">Ready-to-Wear Selection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Quantity
                  </label>
                  <input 
                    type="number"
                    min="1"
                    className="neubrutal-input"
                    value={indForm.quantity}
                    onChange={(e) => setIndForm({...indForm, quantity: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Email Address
                </label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="neubrutal-input"
                  value={indForm.email}
                  onChange={(e) => setIndForm({...indForm, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Preferred Style / Message Details
                </label>
                <textarea 
                  rows="3"
                  placeholder="Specify fabric choices, fit preferences or questions..."
                  className="neubrutal-input"
                  value={indForm.message}
                  onChange={(e) => setIndForm({...indForm, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full neubrutal-btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
              >
                <Send size={14} /> Submit Individual Request
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Contact Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. S. Sen"
                    className="neubrutal-input"
                    value={busForm.contactName}
                    onChange={(e) => setBusForm({...busForm, contactName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Company Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="Company / Institution"
                    className="neubrutal-input"
                    value={busForm.companyName}
                    onChange={(e) => setBusForm({...busForm, companyName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    className="neubrutal-input"
                    value={busForm.phone}
                    onChange={(e) => setBusForm({...busForm, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Corporate Email *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="official@company.com"
                    className="neubrutal-input"
                    value={busForm.email}
                    onChange={(e) => setBusForm({...busForm, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Garment Requirement
                  </label>
                  <select 
                    className="neubrutal-input bg-white"
                    value={busForm.requirement}
                    onChange={(e) => setBusForm({...busForm, requirement: e.target.value})}
                  >
                    <option value="Corporate Uniforms">Corporate Uniforms</option>
                    <option value="Executive Blazers & Shirts">Executive Blazers & Shirts</option>
                    <option value="Institutional Garments">Institutional Garments</option>
                    <option value="Bulk Contract Orders">Bulk Contract Orders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                    Estimated Quantity *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. 100 units"
                    className="neubrutal-input"
                    value={busForm.quantity}
                    onChange={(e) => setBusForm({...busForm, quantity: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-charcoal mb-1">
                  Additional B2B Details / Timeline
                </label>
                <textarea 
                  rows="3"
                  placeholder="Required timeline, specifications or delivery location..."
                  className="neubrutal-input"
                  value={busForm.additionalRequirements}
                  onChange={(e) => setBusForm({...busForm, additionalRequirements: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full neubrutal-btn-gold py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-4"
              >
                <Send size={14} /> Submit B2B Corporate Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

function TabStyle(active) {
  return active
    ? 'bg-charcoal text-white font-bold'
    : 'bg-white text-charcoal hover:bg-sand';
}