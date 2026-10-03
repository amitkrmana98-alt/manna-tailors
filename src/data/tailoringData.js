export const BUSINESS_INFO = {
  name: "Manna Tailors",
  tagline: "Tailored for You. Crafted for Business.",
  subhead: "Custom men's tailoring, ready-to-wear garments and professional garment solutions from Kolkata.",
  googleRating: "4.99",
  address: {
    street: "63, 1, Ashutosh Mukherjee Rd",
    locality: "Bakul Bagan, Bhowanipore",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700025",
    country: "India",
    full: "63, 1, Ashutosh Mukherjee Rd, Bakul Bagan, Bhowanipore, Kolkata, West Bengal 700025, India",
    mapsQuery: "63,+1,+Ashutosh+Mukherjee+Rd,+Bakul+Bagan,+Bhowanipore,+Kolkata,+West+Bengal+700025"
  },
  coreCapabilities: [
    {
      title: "PREMIUM MEN'S CUSTOM TAILORING",
      desc: "Individual made-to-measure garments designed precisely around your fit, fabric choice, and style preference."
    },
    {
      title: "QUALITY MEN'S READY-TO-WEAR",
      desc: "Curated ready-made menswear for reliable, dependable daily style without sacrificing precision."
    },
    {
      title: "CORPORATE / BULK GARMENT SOLUTIONS",
      desc: "Tailored corporate uniforms, institutional wear, and B2B contract garment manufacturing at scale."
    }
  ]
};

export const CUSTOM_CATEGORIES = [
  {
    id: 'shirts',
    name: 'Custom Shirts',
    tag: 'Precision Fit',
    desc: "Custom men's shirts with meticulous attention to shoulder fit, collar styles, cuff details, fabric feel, and hand-finished buttonholes.",
    highlights: ['Collar & Cuff customization', 'Breathable cotton & linen options', 'Precision sleeve length & chest drop', 'Formal, business & casual styling'],
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trousers',
    name: 'Tailored Trousers',
    tag: 'Perfect Rise & Break',
    desc: 'Tailored trousers designed around your measurements, waist preferences, rise heights, and trousers break preferences.',
    highlights: ['Pleated or flat front designs', 'Custom waistbands & side adjusters', 'Premium formal & trousers fabrics', 'Precision inseam & tapered hem'],
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blazers',
    name: 'Structured Blazers',
    tag: 'Elegance & Structure',
    desc: 'Structured blazers crafted for professional meetings, social gatherings, and formal occasions with flattering shoulders.',
    highlights: ['Single & double-breasted cuts', 'Custom canvas construction', 'Selected lining options', 'Tailored armhole & sleeve balance'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suits',
    name: 'Tailored Suits',
    tag: 'Full Ensemble',
    desc: 'Complete 2-piece and 3-piece tailored suits designed for a polished, commanding, and individual fit.',
    highlights: ['2-Piece & 3-Piece options', 'Bespoke canvas structure', 'Custom lapels & pocket finishes', 'Perfect trousers & jacket coordination'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
  }
];

export const DIFFERENCE_POINTS = [
  { title: 'Personal Attention', desc: 'Direct, focused consultation to understand your exact styling and fit preferences.' },
  { title: 'Made-to-Measure Fit', desc: 'Garments crafted directly from individual measurements for comfort and silhouette.' },
  { title: 'Quality Finishing', desc: 'Neat seams, reinforced stress points, and precision buttonhole stitching.' },
  { title: 'Individual Style', desc: 'Complete freedom over collars, cuffs, lapels, pockets, and silhouette options.' },
  { title: 'Professional Service', desc: 'Transparent timelines, dependable order tracking, and clear communication.' },
  { title: 'Flexible Requirements', desc: 'Equipped for single custom pieces as well as high-volume institutional orders.' }
];

export const CORPORATE_SERVICES = [
  {
    id: 'corp-wear',
    title: 'Corporate Executive Wear',
    desc: 'Sharply tailored business suits and formal shirts for company leadership and sales teams.',
    icon: 'Briefcase'
  },
  {
    id: 'uniforms',
    title: 'Employee Uniforms',
    desc: 'Durable, consistent, and comfortable daily work wear designed for staff and frontline teams.',
    icon: 'Users'
  },
  {
    id: 'institutional',
    title: 'Institutional Garments',
    desc: 'Custom garment requirements for educational institutions, security teams, and hospitality venues.',
    icon: 'Building'
  },
  {
    id: 'bulk-orders',
    title: 'Bulk Garment Orders',
    desc: 'High-capacity garment production executed to your specifications, brand colors, and sizing charts.',
    icon: 'Package'
  },
  {
    id: 'custom-apparel',
    title: 'Custom Business Apparel',
    desc: 'Specialized corporate apparel tailored for events, conferences, and milestone business programs.',
    icon: 'Award'
  },
  {
    id: 'contracts',
    title: 'Contract Garment Supply',
    desc: 'Long-term B2B supply agreements with scheduled batch deliveries and quality assurance.',
    icon: 'FileCheck'
  }
];

export const READY_TO_WEAR_CATEGORIES = [
  { title: "Formal Executive Shirts", desc: "Crisp, wrinkle-resistant classic white and pastel business shirts.", tag: "In Store" },
  { title: "Smart Casual Shirts", desc: "Versatile patterned, linen-blend and textured shirts for everyday wear.", tag: "In Store" },
  { title: "Formal Trousers", desc: "Tailored-fit formal trousers in charcoal, navy, beige and black.", tag: "In Store" },
  { title: "Occasion Blazers", desc: "Structured lightweight blazers designed for meetings and evening events.", tag: "In Store" }
];

export const B2C_STEPS = [
  { step: '01', title: 'Discuss', desc: 'Visit our Kolkata store or submit an enquiry detailing what you wish to create.' },
  { step: '02', title: 'Measure & Select', desc: 'Choose your desired garment type, fabric feel, and let our tailor record your measurements.' },
  { step: '03', title: 'Craft', desc: 'Your garments are prepared with attention to structure, stitching, and finishing details.' },
  { step: '04', title: 'Deliver / Collect', desc: 'Try on your finished garment for final fit validation and collect from our store or receive delivery.' }
];

export const B2B_STEPS = [
  { step: '01', title: 'Requirement', desc: 'Submit your bulk or corporate request specifying quantity, timeline, and preferred garment type.' },
  { step: '02', title: 'Specification', desc: 'We confirm sample approval, fabric swatches, sizing ranges, and contractual terms.' },
  { step: '03', title: 'Production', desc: 'Batch manufacturing executed under strict quality standards to match specifications.' },
  { step: '04', title: 'Delivery', desc: 'Coordinated batch dispatch and fulfillment directly to your corporate address or site.' }
];

export const GALLERY_PLACEHOLDERS = [
  { category: 'Shirts', title: 'Hand-cut Custom Collar', note: '[ Store Portfolio Photo Placeholder ]', aspect: 'portrait' },
  { category: 'Shirts', title: 'French Cuff Detail', note: '[ Custom Cuff Stitching Showcase ]', aspect: 'square' },
  { category: 'Trousers', title: 'Custom Waistband Fit', note: '[ Tailored Trousers Showcase ]', aspect: 'portrait' },
  { category: 'Blazers', title: 'Structured Lapel Finish', note: '[ Blazer Construction Detail ]', aspect: 'square' },
  { category: 'Suits', title: 'Two-Piece Formal Suit', note: '[ Tailored Suit Fitting Showcase ]', aspect: 'portrait' },
  { category: 'Ready-to-Wear', title: 'Store Display Garments', note: '[ In-Store Ready-to-Wear Rack ]', aspect: 'square' },
  { category: 'Corporate', title: 'Corporate Batch Assembly', note: '[ Bulk Garment Fulfillment Sample ]', aspect: 'landscape' },
  { category: 'Tailoring Details', title: 'Precision Measuring & Drafting', note: '[ Tailor Craftsmanship Tooling ]', aspect: 'square' }
];