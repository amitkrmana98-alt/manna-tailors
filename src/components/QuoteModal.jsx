import React, { useState, useEffect } from 'react';
import { X, Scissors, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialTab = 'individual', prefilledGarment = '' }) {
  const [tab, setTab] = useState(initialTab);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    garmentType: prefilledGarment || '',
    quantity: '1',
    companyName: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setTab(initialTab || 'individual');
  }, [initialTab]);

  useEffect(() => {
    if (prefilledGarment) {
      setFormData(prev => ({ ...prev, garmentType: prefilledGarment }));
    }
  }, [prefilledGarment]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value ?? '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setErrorMessage(null);
      if (!formData.name?.trim() || !formData.phone?.trim()) {
        setErrorMessage('Please provide your name and phone number so we can reach you.');
        return;
      }
      setIsSubmitting(true);

      setTimeout(() => {
        try {
          setIsSubmitting(false);
          setIsSubmitted(true);
        } catch (err) {
          setIsSubmitting(false);
          setErrorMessage('Unable to process request right now. Please try calling us directly.');
        }
      }, 300);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage('Form submission error. Please try again.');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      garmentType: '',
      quantity: '1',
      companyName: '',
      details: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-ivory border-2 border-black max-w-xl w-full p-6 md:p-8 shadow-brutal-lg relative my-8 animate-fadeIn">
        
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 bg-black text-white p-2 border border-black hover:bg-gold hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-black text-gold border border-black flex items-center justify-center font-bold shadow-brutal-sm">
            <Scissors size={18} />
          </div>
          <h2 className="text-2xl font-serif font-black text-charcoal uppercase tracking-tight">
            Request a Quote
          </h2>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-2 border-black bg-white mb-6 p-1 shadow-brutal-sm">
          <button
            type="button"
            onClick={() => setTab('individual')}
            className={`flex-1 py-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              tab === 'individual' ? 'bg-charcoal text-gold' : 'text-zinc-600 hover:text-black'
            }`}
          >
            Individual Custom
          </button>
          <button
            type="button"
            onClick={() => setTab('corporate')}
            className={`flex-1 py-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
              tab === 'corporate' ? 'bg-charcoal text-gold' : 'text-zinc-600 hover:text-black'
            }`}
          >
            Corporate / Bulk
          </button>
        </div>

        {isSubmitted ? (
          <div className="bg-white border-2 border-black p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 border-2 border-black mx-auto flex items-center justify-center">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-charcoal">
              Quote Request Submitted
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-sans">
              Thank you {formData.name || 'Valued Customer'}. Our master tailor team at Manna Tailors Kolkata will review your enquiry and get back to you promptly.
            </p>
            <button
              onClick={handleReset}
              className="neubrutal-btn-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-block mt-2"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMessage && (
              <div className="bg-red-50 border-2 border-red-600 p-3 text-red-800 text-xs font-bold flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sen"
                  className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                  Phone / WhatsApp *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98300 00000"
                  className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                />
              </div>

              {tab === 'corporate' ? (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                    Company / Org Name
                  </label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Ltd"
                    className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                    Garment Type
                  </label>
                  <input 
                    type="text" 
                    name="garmentType"
                    value={formData.garmentType}
                    onChange={handleInputChange}
                    placeholder="Custom Suit / Shirt / Trousers"
                    className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                  />
                </div>
              )}
            </div>

            {tab === 'corporate' && (
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                  Estimated Quantity
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
                >
                  <option value="10-25">10 - 25 units</option>
                  <option value="25-50">25 - 50 units</option>
                  <option value="50-100">50 - 100 units</option>
                  <option value="100+">100+ units (Bulk Contract)</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-charcoal mb-1">
                Fabric or Fitting Details
              </label>
              <textarea 
                name="details"
                rows="3"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Mention specific fabric requirements, timeline, or fitting preferences..."
                className="w-full bg-white border-2 border-black p-2.5 text-xs font-sans focus:outline-none focus:bg-sand"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full neubrutal-btn-gold py-3 text-xs md:text-sm uppercase font-bold tracking-wider flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Submit Quote Request</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
