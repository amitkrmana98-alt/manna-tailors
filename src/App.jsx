import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import CustomTailoringSection from './components/CustomTailoringSection';
import ReadyToWearSection from './components/ReadyToWearSection';
import CorporateSection from './components/CorporateSection';
import HowItWorks from './components/HowItWorks';
import TheDifference from './components/TheDifference';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import DualPathSection from './components/DualPathSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationContactSection from './components/LocationContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home', 'custom', 'rtw', 'corporate', 'gallery', 'about', 'contact'
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteTab, setQuoteTab] = useState('individual');
  const [prefilledGarment, setPrefilledGarment] = useState('');

  const handleOpenQuoteModal = (tab = 'individual', garment = '') => {
    const validTab = (typeof tab === 'string' && (tab === 'individual' || tab === 'corporate')) ? tab : 'individual';
    const validGarment = typeof garment === 'string' ? garment : '';
    setQuoteTab(validTab);
    setPrefilledGarment(validGarment);
    setQuoteModalOpen(true);
  };

  const handleOpenContact = (type = 'general') => {
    setActiveView('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans selection:bg-gold selection:text-black">
      
      {/* Main Header Navigation */}
      <Header 
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page View Content Switcher */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <HeroSection 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <WhatWeDo 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <CustomTailoringSection 
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <TheDifference />
            <ReadyToWearSection 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <CorporateSection />
            <HowItWorks />
            <GallerySection />
            <AboutSection 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <DualPathSection 
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <TestimonialsSection />
            <LocationContactSection activeView={activeView} />
          </>
        )}

        {activeView === 'custom' && (
          <>
            <CustomTailoringSection onOpenQuoteModal={handleOpenQuoteModal} />
            <TheDifference />
            <HowItWorks />
            <DualPathSection onOpenQuoteModal={handleOpenQuoteModal} />
          </>
        )}

        {activeView === 'rtw' && (
          <>
            <ReadyToWearSection 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <LocationContactSection activeView={activeView} />
          </>
        )}

        {activeView === 'corporate' && (
          <>
            <CorporateSection />
            <HowItWorks />
            <DualPathSection onOpenQuoteModal={handleOpenQuoteModal} />
          </>
        )}

        {activeView === 'gallery' && (
          <>
            <GallerySection />
          </>
        )}

        {activeView === 'about' && (
          <>
            <AboutSection 
              setActiveView={setActiveView}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
            <TheDifference />
            <TestimonialsSection />
          </>
        )}

        {activeView === 'contact' && (
          <>
            <LocationContactSection activeView={activeView} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setActiveView={setActiveView}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Persistent Mobile Bottom Action Bar */}
      <MobileBottomBar 
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Quote Request Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialTab={quoteTab}
        prefilledGarment={prefilledGarment}
      />

    </div>
  );
}
