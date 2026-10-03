import React, { useState } from 'react';
import { GALLERY_PLACEHOLDERS } from '../data/tailoringData';
import { X, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const safeItems = Array.isArray(GALLERY_PLACEHOLDERS) ? GALLERY_PLACEHOLDERS : [];
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const categories = ['All', 'Shirts', 'Trousers', 'Blazers', 'Suits', 'Ready-to-Wear', 'Corporate'];

  const filteredItems = safeItems.filter(item => {
    if (!item) return false;
    if (activeFilter === 'All') return true;
    return item.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-black text-white text-xs font-mono font-bold px-3 py-1 border border-black uppercase tracking-wider mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-charcoal tracking-tight mb-4">
            Craftsmanship & Portfolio
          </h2>
          <p className="text-zinc-600 font-sans text-base">
            Detailed view of our tailor-made shirts, trousers, suits, and institutional bulk manufacturing projects in Kolkata.
          </p>
        </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => {
              const image = item.image ?? 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
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
                    </div>

                    <h3 className="text-base font-serif font-bold text-charcoal mb-1">
                      {item.title ?? 'Tailored Piece'}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500">
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
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-ivory border-2 border-black max-w-2xl w-full p-6 shadow-brutal-lg relative animate-fadeIn">
            <button 
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 bg-black text-white p-2 border border-black hover:bg-gold hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            <div className="border-2 border-black overflow-hidden aspect-[4/3] mb-4 bg-sand">
              <img 
                src={activeLightbox.image ?? 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'} 
                alt={activeLightbox.title ?? 'Garment Detail'} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <span className="bg-gold text-black font-mono font-bold text-xs px-2.5 py-1 border border-black uppercase inline-block mb-2">
              {activeLightbox.category ?? 'Portfolio'}
            </span>
            <h3 className="text-2xl font-serif font-bold text-charcoal">
              {activeLightbox.title ?? 'Tailored Garment'}
            </h3>
            <p className="text-xs font-mono text-zinc-600 mt-1">
              {activeLightbox.note ?? ''}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
