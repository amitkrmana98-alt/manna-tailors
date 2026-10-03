const baseUrl = import.meta.env.BASE_URL || '/';

export const HAND_CUT_COLLARS = [
  {
    id: 'collar-1',
    title: 'Classic Cutaway Spread Collar',
    desc: 'Hand-cut spread collar with precision fused interlining for structural balance with tie knots or open collar styles.',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`,
    alt: 'Hand-cut Custom Collar - Classic Cutaway Spread Collar in white dress shirt',
    badge: 'Hand-Cut Precision',
    style: 'Modern Spread'
  },
  {
    id: 'collar-2',
    title: 'Bespoke Stiff Dress Collar',
    desc: 'High-density canvas fused collar cut meticulously to maintain crisp sharpness throughout full-day executive wear.',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -1-.jpeg`,
    alt: 'Hand-cut Custom Collar - Bespoke Stiff Dress Collar detail showing edge stitching',
    badge: 'Interlined Structure',
    style: 'Formal Executive'
  },
  {
    id: 'collar-3',
    title: 'Button-Down & Semi-Spread Collar',
    desc: 'Artisanal collar roll and roll-stay crafting for casual elegance and tailored versatility across bespoke shirts.',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -2-.jpeg`,
    alt: 'Hand-cut Custom Collar - Button-Down and Semi-Spread collar roll detail',
    badge: 'Tailored Roll Fit',
    style: 'Smart Casual / Bespoke'
  },
  {
    id: 'collar-4',
    title: 'Band & Mandarin Hand-shaped Collar',
    desc: 'Precision hand-patterned collar band tailored close to neck geometry for contemporary tailored shirts.',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -3-.jpeg`,
    alt: 'Hand-cut Custom Collar - Band and Mandarin hand-shaped collar pattern work',
    badge: 'Artisanal Patterning',
    style: 'Contemporary Minimal'
  }
];

export const DIFFERENCE_POINTS = [
  {
    title: 'Master Hand-Cutting & Patterning',
    desc: 'Every shirt, trouser, and blazer is individually patterned to your unique body posture and proportions.'
  },
  {
    title: 'Hand-Cut Custom Collar Craft',
    desc: 'Precision interlined collars cut meticulously to maintain sharp structure, crisp roll, and comfortable neck alignment.'
  },
  {
    title: 'Premium Interlining Fusing',
    desc: 'We use high-grade fusing and canvas interlinings for long-lasting structural integrity after repeated washing.'
  },
  {
    title: 'Over 15 Body Measurements',
    desc: 'Detailed measurement mapping ensures perfect drape across shoulders, sleeves, waist, and stance.'
  },
  {
    title: 'Bespoke & Bulk Capabilities',
    desc: 'Seamlessly serving individual gents looking for bespoke tailored shirts as well as corporate institutional bulk orders.'
  },
  {
    title: 'Kolkata Heritage Workshop',
    desc: 'Crafted locally in Bhowanipore, Kolkata by experienced master tailors with decades of artisan expertise.'
  }
];

export const BUSINESS_INFO = {
  name: 'Manna Tailors',
  subhead: 'Master men\'s bespoke custom tailoring, ready-to-wear apparel, and high-volume corporate uniform solutions in Kolkata.',
  phone: '+91 98300 00000',
  whatsapp: '+919830000000',
  googleRating: '4.99',
  address: {
    street: '63, 1, Ashutosh Mukherjee Rd',
    locality: 'Bakul Bagan, Bhowanipore',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700025',
    full: '63, 1, Ashutosh Mukherjee Rd, Bakul Bagan, Bhowanipore, Kolkata, West Bengal 700025',
    mapsQuery: 'Manna+Tailors+Ashutosh+Mukherjee+Rd+Bhowanipore+Kolkata'
  }
};

export const CUSTOM_CATEGORIES = [
  {
    id: 'shirts',
    name: 'Custom Shirts',
    tag: 'Bespoke Tailoring',
    desc: 'Bespoke custom shirts tailored to your exact measurements, collar preferences, cuff styles, and high-grade cotton fabrics.',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`,
    pricingBreakdown: {
      startingPrice: '₹1,200',
      fabricIncluded: true,
      stitchingOnlyPrice: '₹650'
    },
    highlights: [
      'Hand-cut Custom Collar Options',
      'Monogram & Sleeve Length Customization',
      'German Interlining Fusing',
      '100% Breathable Egyptian & Giza Cottons'
    ],
    features: [
      'Choice of Spread, Cutaway, Band & Mandarin Collars',
      'Single/Double Button French or Barrel Cuffs',
      'Reinforced Side Gussets',
      'Tailored, Regular or Slim Cut Silhouettes'
    ],
    options: {
      fabrics: ['100% Giza Cotton', 'Italian Linen Blend', 'Royal Oxford', 'Fil-a-Fil Pure Cotton'],
      fits: ['Slim Fit', 'Tailored Fit', 'Classic Comfort Fit']
    }
  },
  {
    id: 'trousers',
    name: 'Tailored Trousers',
    tag: 'Precision Cut',
    desc: 'Formal and smart casual trousers cut with custom waistbands, pleated or flat fronts, and crisp leg creases.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    pricingBreakdown: {
      startingPrice: '₹1,450',
      fabricIncluded: true,
      stitchingOnlyPrice: '₹750'
    },
    highlights: [
      'Extended Tab Waistband Option',
      'Adjustable Side Fasteners',
      'Deep Pocketing & Coin Pockets',
      'Custom Cuff or Plain Hem'
    ],
    features: [
      'Flat Front or Single/Double Pleat options',
      'Non-slip Rubberized Waistband Gripper',
      'Heavy-duty YKK Zippers',
      'Custom Leg Tapering'
    ],
    options: {
      fabrics: ['Poly-Viscose Suiting', 'Pure Wool Blend', 'Cotton Chino Twill'],
      fits: ['Ultra Slim', 'Modern Tapered', 'Traditional Fit']
    }
  },
  {
    id: 'blazers',
    name: 'Suits & Blazers',
    tag: 'Master Canvas',
    desc: 'Single & double-breasted blazers, tuxedos, and 2-piece/3-piece suits crafted with half-canvas structure.',
    image: `${baseUrl}uploads/galary image.png`,
    pricingBreakdown: {
      startingPrice: '₹4,500',
      fabricIncluded: true,
      stitchingOnlyPrice: '₹2,800'
    },
    highlights: [
      'Notch, Peak, or Shawl Lapels',
      'Hand-stitched Buttonholes',
      'Breathable Bemberg Lining',
      'Natural Shoulder Padded Architecture'
    ],
    features: [
      'Half-canvas or Fused Inner Chest Piece',
      'Functional Sleeve Buttons',
      'Internal Ticket & Passport Pockets',
      'Double Vents or Single Back Vent'
    ],
    options: {
      fabrics: ['Super 120s Wool', 'Tweed & Houndstooth', 'Velvet & Tuxedo Satin'],
      fits: ['Italian Slim Cut', 'British Structured', 'Relaxed Modern']
    }
  }
];

export const B2C_STEPS = [
  { step: '01', title: 'Consultation & Style Selection', desc: 'Visit our Bhowanipore store or select collar styles, fabrics, and fit preferences online.' },
  { step: '02', title: 'Precision Measurement', desc: 'Over 15 personal body dimensions captured to ensure perfect posture alignment and sleeve drape.' },
  { step: '03', title: 'Hand-Cutting & Stitching', desc: 'Collars, cuffs, and body panels hand-cut and crafted by senior master tailors in our Kolkata workshop.' },
  { step: '04', title: 'Fitting & Delivery', desc: 'Try-on verification in-store with complimentary final tweaks for flawless comfort.' }
];

export const B2B_STEPS = [
  { step: '01', title: 'Requirement & Spec Sheet', desc: 'Share quantity, fabric durability requirements, and branding details for corporate/institutional garments.' },
  { step: '02', title: 'Sample Prototype Approval', desc: 'Receive a physical sample shirt or garment with custom collar and embroidery for client sign-off.' },
  { step: '03', title: 'Batch Sizing & Manufacturing', desc: 'Sizing matrix collection across team members and bulk production under strict QC standards.' },
  { step: '04', title: 'Timely Bulk Delivery', desc: 'Ironed, poly-wrapped, and tagged garments delivered directly to corporate premises in Kolkata & beyond.' }
];

export const RTW_CATEGORIES = [
  { id: 'shirts', title: 'Shirts', tag: 'Essential Cotton', price: 'From ₹999', desc: 'Ready-to-wear crisp Egyptian and Giza cotton shirts pre-fused for instant polish.' },
  { id: 'trousers', title: 'Trousers', tag: 'Tailored Leg', price: 'From ₹1,299', desc: 'Poly-viscose and cotton chinos engineered with flexible waistbands.' },
  { id: 'blazers', title: 'Blazers', tag: 'Smart Layer', price: 'From ₹3,499', desc: 'Unstructured and lightweight tailored sport coats for modern executives.' },
  { id: 'suits', title: 'Suits', tag: 'Two-Piece Classic', price: 'From ₹5,999', desc: 'Pre-tailored formal suits in classic charcoal, navy, and jet black.' }
];

export const READY_TO_WEAR_CATEGORIES = RTW_CATEGORIES;

export const CORPORATE_SERVICES = [
  { title: 'Corporate Uniforms', desc: 'Custom tailored corporate attire for staff, hospitality, and corporate executives.' },
  { title: 'Institutional Garments', desc: 'High durability uniforms for educational institutions, security, and healthcare.' },
  { title: 'Bulk Shirt & Trouser Orders', desc: 'Volume manufacturing with custom embroidery and standardized sizing.' }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-galary-main',
    title: 'Manna Tailors Master Gallery Showcase',
    category: 'Suits',
    slot: 'Main Showcase',
    image: `${baseUrl}uploads/galary image.png`,
    caption: 'Comprehensive showcase of bespoke tailoring, custom suiting, and master artisan finishing at Manna Tailors.',
    note: 'Primary Atelier Gallery Image • Kolkata'
  },
  {
    id: 'g-collar-1',
    title: 'Classic Cutaway Spread Collar',
    category: 'Shirts',
    slot: 'Collar/cuff details',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`,
    caption: 'Hand-cut spread collar with fused canvas interlining for crisp knot alignment.',
    note: 'Manna Tailors Original Artisan Work'
  },
  {
    id: 'g-collar-2',
    title: 'Bespoke Stiff Dress Collar',
    category: 'Shirts',
    slot: 'Formal shirt',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -1-.jpeg`,
    caption: 'High density collar construction with edge-stitching precision.',
    note: 'Manna Tailors Original Artisan Work'
  },
  {
    id: 'g-collar-3',
    title: 'Button-Down & Semi-Spread Collar Roll',
    category: 'Shirts',
    slot: 'Casual shirt',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -2-.jpeg`,
    caption: 'Artisanal collar roll stay for smart casual dress shirts.',
    note: 'Manna Tailors Original Artisan Work'
  },
  {
    id: 'g-collar-4',
    title: 'Mandarin Hand-shaped Band Collar',
    category: 'Shirts',
    slot: 'Collar/cuff details',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -3-.jpeg`,
    caption: 'Precision hand-patterned collar band cut to neck contours.',
    note: 'Manna Tailors Original Artisan Work'
  },
  {
    id: 'g-galary-blazer',
    title: 'Atelier Tailored Blazer Showcase',
    category: 'Blazers',
    slot: 'Blazer Showcase',
    image: `${baseUrl}uploads/galary image.png`,
    caption: 'Precision structured tailored blazers and suiting cuts, individually crafted by Kolkata master tailors.',
    note: 'Manna Tailors Signature Portfolio'
  },
  {
    id: 'g-suit-1',
    title: 'Bespoke Charcoal Double-Breasted Suit',
    category: 'Suits',
    slot: 'Full suit',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    caption: 'Super 120s wool blend two-piece tailored suit with horn buttons.',
    note: 'Bespoke Tailoring Portfolio'
  },
  {
    id: 'g-suit-2',
    title: 'Midnight Navy Tuxedo Lapel Detail',
    category: 'Suits',
    slot: 'Detail',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    caption: 'Satin silk shawl collar with hand-stitched silk thread lining.',
    note: 'Bespoke Eveningwear'
  },
  {
    id: 'g-blazer-1',
    title: 'Textured Houndstooth Tweed Blazer',
    category: 'Blazers',
    slot: 'Styled look',
    image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80',
    caption: 'Half-canvas soft shoulder construction with dark tortoiseshell buttons.',
    note: 'Smart Executive Collection'
  },
  {
    id: 'g-trouser-1',
    title: 'Side-Adjuster Pleated Dress Trousers',
    category: 'Trousers',
    slot: 'Full garment',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    caption: 'High-waisted tailored trousers with brass buckle side fasteners.',
    note: 'Precision Cut Trousers'
  },
  {
    id: 'g-rtw-1',
    title: 'Ready-To-Wear Oxford Executive Shirt',
    category: 'Ready-to-Wear',
    slot: 'Formal shirt',
    image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`,
    caption: 'Pure Egyptian cotton structured retail shirt from our RTW line.',
    note: 'Manna Retail Collection'
  },
  {
    id: 'g-craft-1',
    title: 'Master Pattern Drafting & Cutting',
    category: 'Craftsmanship',
    slot: 'Cutting',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    caption: 'Individual chalk pattern drafting based on 15 body dimensions.',
    note: 'Bhowanipore Workshop Craft'
  },
  {
    id: 'g-corp-1',
    title: 'Corporate Executive Uniform Production',
    category: 'Corporate',
    slot: 'Corporate garments',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    caption: 'Institutional batch manufacturing with corporate crest embroidery.',
    note: 'B2B Order Logistics'
  }
];

export const GALLERY_PLACEHOLDERS = GALLERY_ITEMS;

export const RTW_PRODUCTS = [
  {
    id: 'rtw-p01',
    sku: 'MT-SH-001',
    name: 'Royal Oxford Executive White Shirt',
    category: 'Shirts',
    description: 'A sharp, structured formal dress shirt crafted from 100% Giza Egyptian long-staple cotton with a fused cutaway spread collar and convertible barrel cuffs.',
    price: 1299,
    salePrice: 1099,
    images: [
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`,
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -1-.jpeg`
    ],
    sizes: ['38', '40', '42', '44', '46'],
    colors: ['White'],
    fabric: '100% Giza Cotton (2-Ply Oxford)',
    fit: 'Slim Fit',
    stock: 24,
    status: 'In Stock',
    featured: true,
    newArrival: true,
    bestSeller: true,
    careInstructions: 'Machine wash cold inside-out. Warm iron while slightly damp. Do not bleach.'
  },
  {
    id: 'rtw-p02',
    sku: 'MT-SH-002',
    name: 'Artisan Spread Collar Navy Dress Shirt',
    category: 'Shirts',
    description: 'Crisp deep-navy cotton shirt featuring our signature hand-cut stiff collar roll, double-stitched armholes, and mother-of-pearl finish buttons.',
    price: 1399,
    salePrice: null,
    images: [
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -1-.jpeg`,
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -2-.jpeg`
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Navy'],
    fabric: '100% Fine Twill Cotton',
    fit: 'Tailored Fit',
    stock: 18,
    status: 'In Stock',
    featured: true,
    newArrival: true,
    bestSeller: false,
    careInstructions: 'Dry clean recommended or gentle hand wash. Line dry in shade.'
  },
  {
    id: 'rtw-p03',
    sku: 'MT-SH-003',
    name: 'Contemporary Mandarin Band Shirt',
    category: 'Shirts',
    description: 'Minimalist band-collar shirt designed for modern formal and casual pairing, featuring seamless front placket and soft brushed feel.',
    price: 1199,
    salePrice: 999,
    images: [
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -3-.jpeg`,
      `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -2-.jpeg`
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['White', 'Light Blue'],
    fabric: 'Linen-Cotton Blend',
    fit: 'Tailored Fit',
    stock: 15,
    status: 'In Stock',
    featured: false,
    newArrival: true,
    bestSeller: false,
    careInstructions: 'Hand wash cold. Warm iron on reverse side.'
  },
  {
    id: 'rtw-p04',
    sku: 'MT-TR-001',
    name: 'Precision Flat-Front Charcoal Trousers',
    category: 'Trousers',
    description: 'Versatile formal trousers woven from premium wrinkle-resistant poly-viscose blend, featuring non-slip internal waistband and sharp crease retainment.',
    price: 1499,
    salePrice: 1299,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Charcoal', 'Black'],
    fabric: 'Poly-Viscose Stretch Suiting',
    fit: 'Modern Tapered',
    stock: 30,
    status: 'In Stock',
    featured: true,
    newArrival: false,
    bestSeller: true,
    careInstructions: 'Machine wash gentle cycle or dry clean. Do not tumble dry.'
  },
  {
    id: 'rtw-p05',
    sku: 'MT-TR-002',
    name: 'Classic Navy Chino Trousers',
    category: 'Trousers',
    description: 'Smart casual stretch-cotton chinos styled with clean slanted pockets, coin welt pocket, and comfortable mid-rise rise.',
    price: 1350,
    salePrice: null,
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: ['Navy', 'Beige'],
    fabric: '98% Cotton 2% Elastane Chino Twill',
    fit: 'Tailored Fit',
    stock: 20,
    status: 'In Stock',
    featured: false,
    newArrival: true,
    bestSeller: false,
    careInstructions: 'Wash with similar dark colors. Warm iron.'
  },
  {
    id: 'rtw-p06',
    sku: 'MT-BZ-001',
    name: 'Bhowanipore Italian Cut Navy Blazer',
    category: 'Blazers',
    description: 'Tailored single-breasted blazer with notch lapel, dual rear vents, and light half-canvas interior for breathable structured drape.',
    price: 3899,
    salePrice: 3499,
    images: [
      `${baseUrl}uploads/galary image.png`,
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Navy'],
    fabric: 'Wool-Viscose Blend',
    fit: 'Italian Slim Cut',
    stock: 12,
    status: 'In Stock',
    featured: true,
    newArrival: false,
    bestSeller: true,
    careInstructions: 'Dry clean only. Store on padded suit hanger.'
  },
  {
    id: 'rtw-p07',
    sku: 'MT-BZ-002',
    name: 'Textured Houndstooth Sport Coat',
    category: 'Blazers',
    description: 'Modern textured blazer with soft natural shoulders, patch pockets, and rich tortoiseshell buttons suitable for smart casual styling.',
    price: 4200,
    salePrice: null,
    images: [
      'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['40', '42', '44'],
    colors: ['Charcoal', 'Grey'],
    fabric: 'Textured Tweed Blend',
    fit: 'Regular Fit',
    stock: 8,
    status: 'In Stock',
    featured: false,
    newArrival: true,
    bestSeller: false,
    careInstructions: 'Professional dry clean only.'
  },
  {
    id: 'rtw-p08',
    sku: 'MT-ST-001',
    name: 'Heritage Two-Piece Formal Suit',
    category: 'Suits',
    description: 'Complete 2-piece formal suit including lined notch-lapel jacket and matching flat-front trousers crafted for executive meetings and occasions.',
    price: 6499,
    salePrice: 5999,
    images: [
      `${baseUrl}uploads/galary image.png`,
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['38', '40', '42', '44'],
    colors: ['Charcoal', 'Navy'],
    fabric: 'Super 100s Fine Wool Blend',
    fit: 'Tailored Fit',
    stock: 10,
    status: 'In Stock',
    featured: true,
    newArrival: true,
    bestSeller: true,
    careInstructions: 'Dry clean only. Steam refresh recommended between wears.'
  }
];