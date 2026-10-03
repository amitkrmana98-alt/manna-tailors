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
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
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
  { id: 'rtw-shirts', title: 'Formal Shirts', price: 'From ₹999', desc: 'Ready-to-wear crisp cotton shirts with fused collars.' },
  { id: 'rtw-trousers', title: 'Formal Trousers', price: 'From ₹1,199', desc: 'Poly-viscose and cotton trousers pre-hemmed for instant wear.' },
  { id: 'rtw-blazers', title: 'Smart Blazers', price: 'From ₹3,200', desc: 'Unstructured and lightweight tailored jackets.' }
];

export const READY_TO_WEAR_CATEGORIES = RTW_CATEGORIES;

export const CORPORATE_SERVICES = [
  { title: 'Corporate Uniforms', desc: 'Custom tailored corporate attire for staff, hospitality, and corporate executives.' },
  { title: 'Institutional Garments', desc: 'High durability uniforms for educational institutions, security, and healthcare.' },
  { title: 'Bulk Shirt & Trouser Orders', desc: 'Volume manufacturing with custom embroidery and standardized sizing.' }
];

export const GALLERY_ITEMS = [
  { id: 'g1', title: 'Classic Cutaway Spread Collar', category: 'Shirts', image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49.jpeg`, note: 'Hand-cut precision spread collar' },
  { id: 'g2', title: 'Bespoke Stiff Dress Collar', category: 'Shirts', image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -1-.jpeg`, note: 'High density interlining edge stitching' },
  { id: 'g3', title: 'Button-Down & Semi-Spread Collar', category: 'Shirts', image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -2-.jpeg`, note: 'Artisanal collar roll detail' },
  { id: 'g4', title: 'Band & Mandarin Hand-shaped Collar', category: 'Shirts', image: `${baseUrl}uploads/WhatsApp Image 2026-10-03 at 22.03.49 -3-.jpeg`, note: 'Minimalist band collar pattern work' }
];

export const GALLERY_PLACEHOLDERS = GALLERY_ITEMS;
