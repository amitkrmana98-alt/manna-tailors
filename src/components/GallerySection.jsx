import React, { useState } from 'react';
import { GALLERY_PLACEHOLDERS } from '../data/tailoringData';
import { Camera, Image as ImageIcon, Folder } from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Shirts', 'Trousers', 'Blazers', 'Suits', 'Ready-to-Wear', 'Corporate', 'Tailoring Details'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_PLACEHOLDERS
    : GALLERY_PLACEHOLDERS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-ivory border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="neubrutal-badge mb-3">
            <Camera size={12} className="inline mr-1" /> WORK PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-charcoal uppercase tracking-tight">
            Our Tailoring & Garment Showcase
          </h2>
          <p className="text-zinc-600 font-sans mt-3 text-base sm:text-lg">
            A structured gallery showcase of tailoring craftsmanship, garment finishes, and bulk order capabilities.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider border border-black transition-all ${FilterClass(activeFilter === cat)}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Placeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="neubrutal-card p-4 border-2 bg-white flex flex-col justify-between">
              <div className="bg-sand border-2 border-black aspect-square flex flex-col items-center justify-center p-4 text-center mb-3 relative group">
                <ImageIcon size={32} className="text-zinc-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block">
                  {item.category}
                </span>
                <p className="text-xs font-mono text-zinc-700 font-bold mt-1">
                  {item.note}
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-charcoal">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mt-0.5">
                  Manna Tailors Kolkata Portfolio
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-zinc-500 bg-sand p-3 border border-black max-w-xl mx-auto">
          * Note for Owner: Photos above are editable visual placeholders. Genuine client or garment photographs can be uploaded directly.
        </div>

      </div>
    </section>
  );
}

function FilterClass(active) {
  return active
    ? 'bg-charcoal text-white shadow-brutal-sm scale-105'
    : 'bg-white text-charcoal hover:bg-sand';
}