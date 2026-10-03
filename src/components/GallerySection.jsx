import React, { useState } from 'react';
import { GALLERY_PLACEHOLDERS } from '../data/tailoringData';
import { X, ZoomIn, Sparkles, Image as ImageIcon, Camera } from 'lucide-react';

export default function GallerySection() {
  const safeItems = Array.isArray(GALLERY_PLACEHOLDERS) ? GALLERY_PLACEHOLDERS : [];
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', 'Shirts', 'Trousers', 'Blazers', 'Suits', 'Ready-to-Wear', 'Corporate', 'Craftsmanship'];

  const filteredItems = safeItems.filter(item => {
    if (!item) return false;
    if (activeFilter === 'All') return true;
    return item.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  const featuredGalaryImage = safeItems.find(item => item.image?.includes('galary image.png')) || safeItems[0];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-black text-white text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Portfolio & Atelier Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight mb-4">
            Craftsmanship & Gallery
          </h2>
          <p className="text-zinc-600 font-sans text-base">
            Explore our custom tailored shirts, suits, blazers, hand-cut collars, and signature atelier showcase collection in Bhowanipore, Kolkata.
          </p>
        </div>

        {/* Featured Showcase Banner Highlight */}
        {featuredGalaryImage && (
          <div className="mb-14 bg-ivory border-4 border-black p-6 md:p-8 shadow-brutal-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => setActiveLightbox(featuredGalaryImage)}>
              <div className="border-2 border-black overflow-hidden bg-sand aspect-[16/10] md:aspect-[16/9] shadow-brutal relative">
                <img
                  src={featuredGalaryImage.image}
                  alt={featuredGalaryImage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 left-3 bg-gold text-black font-mono text-xs font-bold px-3 py-1 border border-black uppercase shadow-brutal-sm flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>Featured Atelier Showcase</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black text-white font-mono text-xs px-3 py-1.5 border border-gold flex items-center gap-1.5">
                  <ZoomIn size={14} className="text-gold" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-block bg-black text-gold text-[11px] font-mono font-bold px-2.5 py-0.5 border border-black uppercase mb-3">
                  Gallery Showcase Highlight
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-3">
                  {featuredGalaryImage.title}
                </h3>
                <p className="text-zinc-700 text-sm md:text-base leading-relaxed mb-4">
                  {featuredGalaryImage.caption}
                </p>
                <div className="p-3 bg-sand border-2 border-black text-xs font-mono text-charcoal space-y-1 mb-4">
                  <div className="flex items-center gap-2 font-bold text-black">
                    <Camera size={14} className="text-gold-dark" />
                    <span>Manna Tailors Gallery Media</span>
                  </div>
                  <p className="text-zinc-600 font-sans text-xs">
                    {featuredGalaryImage.note}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveLightbox(featuredGalaryImage)}
                  className="neubrutal-btn-gold px-5 py-2.5 text-xs uppercase font-bold tracking-wider flex items-center gap-2"
                >
                  <ZoomIn size={16} />
                  View Full Showcase
                </button>
                <button
                  onClick={() => setActiveFilter('All')}
                  className="neubrutal-btn-outline px-5 py-2.5 text-xs uppercase font-bold tracking-wider flex items-center gap-2"
                >
                  <ImageIcon size={16} />
                  Browse All ({safeItems.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 transition-all ${
                activeFilter === cat
                  ? 'bg-charcoal text-white border-black shadow-brutal-sm'
                  : 'bg-ivory text-charcoal border-black hover:bg-sand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => {
              const image = item.image ?? 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
              const isUploadedMedia = image.includes('uploads/');
              return (
                <div 
                  key={item.id ?? idx}
                  onClick={() => setActiveLightbox(item)}
                  className="bg-ivory border-2 border-black p-4 shadow-brutal cursor-pointer group transition-transform hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative border-2 border-black overflow-hidden bg-sand aspect-[4/3] mb-3">
                      <img 
                        src={image} 
                        alt={item.title ?? 'Portfolio Garment'} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-gold text-black p-2 border border-black shadow-brutal-sm">
                          <ZoomIn size={18} />
                        </span>
                      </div>
                      <span className="absolute top-2 left-2 bg-black text-gold text-[10px] font-mono font-bold px-2 py-0.5 border border-gold">
                        {item.category ?? 'Portfolio'}
                      </span>
                      {isUploadedMedia && (
                        <span className="absolute bottom-2 right-2 bg-gold text-black text-[9px] font-mono font-bold px-1.5 py-0.5 border border-black">
                          Original Media
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-serif font-bold text-charcoal mb-1">
                      {item.title ?? 'Tailored Piece'}
                    </h3>
                    <p className="text-xs text-zinc-600 line-clamp-2 mb-2 font-sans">
                      {item.caption ?? item.desc ?? ''}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500">
                      {item.note ?? ''}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-ivory border-2 border-black p-8">
            <p className="font-mono text-sm text-zinc-600">No portfolio items found for "{activeFilter}".</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-ivory border-4 border-black max-w-3xl w-full p-6 shadow-brutal-lg relative my-auto animate-fadeIn">
            <button 
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 bg-black text-white p-2 border border-black hover:bg-gold hover:text-black transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="border-2 border-black overflow-hidden aspect-[4/3] max-h-[60vh] mb-4 bg-sand relative">
              <img 
                src={activeLightbox.image ?? 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'} 
                alt={activeLightbox.title ?? 'Garment Detail'} 
                className="w-full h-full object-contain bg-zinc-900"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-gold text-black font-mono font-bold text-xs px-2.5 py-1 border border-black uppercase inline-block">
                  {activeLightbox.category ?? 'Portfolio'}
                </span>
                {activeLightbox.slot && (
                  <span className="bg-black text-gold font-mono text-xs px-2.5 py-1 border border-gold uppercase">
                    {activeLightbox.slot}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-serif font-bold text-charcoal">
                {activeLightbox.title ?? 'Tailored Garment'}
              </h3>
              
              {activeLightbox.caption && (
                <p className="text-sm font-sans text-zinc-700 leading-relaxed">
                  {activeLightbox.caption}
                </p>
              )}

              <p className="text-xs font-mono text-zinc-500 pt-2 border-t border-black/10">
                {activeLightbox.note ?? ''}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}