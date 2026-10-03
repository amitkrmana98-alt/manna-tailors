import React, { useState } from 'react';
import { Scissors, Menu, X, Phone, MessageSquare, MapPin, Star, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tailoringData';

export default function Header({ activeView, setActiveView, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'custom', label: 'Custom Tailoring' },
    { id: 'rtw', label: 'Ready-to-Wear' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-ivory border-b-2 border-black">
      {/* Top Announcement / Info Banner */}
      <div className="bg-charcoal text-white text-xs py-2 px-4 border-b border-black font-mono flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-gold font-bold bg-black/40 px-2 py-0.5 border border-gold/40 rounded">
            <Star size={12} className="fill-gold text-gold" /> {BUSINESS_INFO.googleRating} Google Rated Tailor
          </span>
          <span className="hidden sm:inline text-zinc-300">
            <MapPin size={12} className="inline mr-1 text-gold" /> Bhowanipore, Kolkata, West Bengal
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-sans font-semibold">
          <button 
            onClick={() => handleNavClick('contact')}
            className="hover:text-gold transition-colors flex items-center gap-1"
          >
            <span>Visit Store</span>
            <ChevronRight size={12} />
          </button>
          <button 
            onClick={() => onOpenQuoteModal('corporate')}
            className="text-gold hover:underline font-bold font-mono uppercase tracking-wider"
          >
            B2B / Bulk Orders
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-black text-gold border-2 border-black flex items-center justify-center font-bold shadow-brutal group-hover:bg-gold group-hover:text-black transition-all">
              <Scissors size={22} className="transform -rotate-45" />
            </div>
            <div>
              <span className="text-2xl font-serif font-black tracking-tight text-charcoal block leading-none">
                MANNA TAILORS
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-600 uppercase block mt-1">
                Kolkata • Custom & Corporate
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-all border-2 ${
                    isActive
                      ? 'bg-charcoal text-white border-black shadow-brutal-sm'
                      : 'bg-transparent text-charcoal border-transparent hover:border-black hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('individual')}
              className="neubrutal-btn-gold px-4 py-2.5 text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Scissors size={14} />
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal('individual')}
              className="neubrutal-btn-gold px-3 py-1.5 text-xs font-bold md:hidden"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border-2 border-black shadow-brutal-sm text-charcoal hover:bg-zinc-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-ivory p-6 shadow-brutal-lg animate-fadeIn">
          <div className="space-y-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 text-base font-bold uppercase tracking-wider border-2 flex justify-between items-center ${
                  activeView === link.id
                    ? 'bg-charcoal text-white border-black shadow-brutal-sm'
                    : 'bg-white text-charcoal border-black'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t-2 border-black space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal('individual');
              }}
              className="w-full neubrutal-btn-gold py-3 text-sm uppercase tracking-wider text-center block font-bold"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal('corporate');
              }}
              className="w-full neubrutal-btn-primary py-3 text-sm uppercase tracking-wider text-center block font-bold"
            >
              Corporate & Bulk Order Enquiry
            </button>
          </div>

          <div className="mt-6 p-4 bg-sand border-2 border-black text-xs font-mono space-y-1">
            <p className="font-bold text-charcoal">Manna Tailors Kolkata</p>
            <p className="text-zinc-600">63, 1, Ashutosh Mukherjee Rd, Bhowanipore</p>
            <p className="text-zinc-600">Kolkata, WB 700025</p>
          </div>
        </div>
      )}
    </header>
  );
}
