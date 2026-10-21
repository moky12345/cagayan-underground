// CDO UNDERGROUND EDITORIAL & THRIFT STORE - DATA STORE & PERSISTENCE
import {
  ThriftProduct,
  CartItem,
  LookbookItem,
  DIYGuide,
  EventItem,
  BandCollective,
  EventSubmission
} from '../types/database';

export const INITIAL_PRODUCTS: ThriftProduct[] = [
  {
    id: 'prod-01',
    slug: 'reworked-heavy-denim-vest',
    title: 'Studio Reworked Raw Canvas Denim Vest',
    subtitle: 'Deconstructed collar with matte cone rivets and contrast stitch',
    price_php: 1450,
    original_estimate_php: 2800,
    category: 'reworked',
    subcategory: 'Vests & Sleeveless',
    condition: 'Studio Rework',
    condition_notes: 'Reconstructed in Nazareth workshop from vintage 14oz Japanese raw denim with hand-hammered hardware.',
    imperfections: ['Intentional frayed armhole hem', 'Natural denim patina around chest pockets'],
    size: 'Unisex Relaxed L',
    measurements: {
      chest_pit_to_pit_cm: 58,
      length_cm: 66,
      shoulder_cm: 48
    },
    material: '100% Cotton Raw Selvage Denim (Reclaimed)',
    era: '1990s base, reworked 2026',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 1,
    is_new_arrival: true,
    is_reworked: true,
    is_featured: true,
    editorial_tag: 'EDITORIAL HIGHLIGHT',
    description: 'An architectural piece built for subterranean noise gigs and structured layering. Featuring reinforced double stitching, custom raw canvas internal patch pockets, and hand-oxidized zinc buttons.',
    styling_notes: 'Layer over an oversized white dress shirt or sheer mock-neck knit with heavy pleated trousers.'
  },
  {
    id: 'prod-02',
    slug: 'tailored-wool-overcoat-black',
    title: 'Archival Sharp-Shoulder Wool Greatcoat',
    subtitle: 'Substantial structured silhouette with deep notched lapels',
    price_php: 2450,
    original_estimate_php: 5800,
    category: 'outerwear',
    subcategory: 'Coats',
    condition: 'Pristine Vintage',
    condition_notes: 'Dry-cleaned and conditioned. Crisp structural integrity throughout shoulder line.',
    imperfections: ['Faint vintage patina on horn buttons'],
    size: 'M / Slim L',
    measurements: {
      chest_pit_to_pit_cm: 54,
      length_cm: 115,
      shoulder_cm: 46
    },
    material: 'Heavy Melange Wool Blend, Cupro Lining',
    era: 'Late 1980s European import',
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 1,
    is_new_arrival: true,
    is_reworked: false,
    is_featured: true,
    editorial_tag: 'RUNWAY ARCHIVE',
    description: 'A sculptural cold-season coat providing a stark, minimalist silhouette reminiscent of minimalist post-punk fashion. Heavy drape that falls below the knee.',
    styling_notes: 'Wear open over minimalist monochrome separates or buttoned to the neck with combat boots.'
  },
  {
    id: 'prod-03',
    slug: 'oversized-blood-tartan-flannel',
    title: 'Shadow Plaid Oversized Flannel (Crimson/Obsidian)',
    subtitle: 'Brushed heavyweight cotton with dropped shoulders',
    price_php: 780,
    original_estimate_php: 1600,
    category: 'tops',
    subcategory: 'Shirts',
    condition: 'Thrift Grade A',
    condition_notes: 'Excellent soft hand-feel. No missing buttons or torn cuffs.',
    imperfections: ['Soft washed vintage fuzz on outer nap'],
    size: 'Oversized XL (Fits M-XL)',
    measurements: {
      chest_pit_to_pit_cm: 64,
      length_cm: 78,
      shoulder_cm: 54
    },
    material: '100% Brushed Cotton Twill',
    era: '1990s Workwear',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 2,
    is_new_arrival: false,
    is_reworked: false,
    is_featured: true,
    editorial_tag: 'DAILY EDITORIAL',
    description: 'A definitive staple of alternative and emo tailoring. Deep saturated crimson intersecting with charcoal and obsidian black lines.',
    styling_notes: 'Tuck loosely into high-waist straight leg jeans or wear unbuttoned over a vintage graphic tee.'
  },
  {
    id: 'prod-04',
    slug: 'heavy-lug-sole-military-derbies',
    title: 'Commando Lug-Sole Leather Derbies',
    subtitle: 'Polished calfskin with aggressive tread welt',
    price_php: 2200,
    original_estimate_php: 4500,
    category: 'footwear',
    subcategory: 'Boots & Shoes',
    condition: 'Distressed Authentic',
    condition_notes: 'Conditioned with natural dubbin wax. Soles show minimal wear with decades of life remaining.',
    imperfections: ['Gentle toe-box vamp creasing', 'Minor surface scuff on left heel exterior'],
    size: 'EU 42 / US 9',
    measurements: {
      shoe_size_eu: 42
    },
    material: 'Full Grain Leather, Heavy Rubber Lug Sole',
    era: 'Mid 2000s Surplus Service',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 1,
    is_new_arrival: true,
    is_reworked: false,
    is_featured: false,
    editorial_tag: 'SURPLUS FOOTWEAR',
    description: 'Engineered for brutal concrete venues and wet CDO monsoons. Stitched Goodyear-style storm welt and high traction lugs.',
    styling_notes: 'Pairs effortlessly with cropped dark trousers or frayed hems.'
  },
  {
    id: 'prod-05',
    slug: 'hand-screenprinted-patch-capsule',
    title: 'DIY Screenprinted Duck Canvas Patch Set (5-Piece)',
    subtitle: 'Textile ink on raw unbleached natural duck canvas',
    price_php: 350,
    original_estimate_php: 550,
    category: 'diy_patches',
    subcategory: 'Accessories & Customization',
    condition: 'Handmade DIY',
    condition_notes: 'Hand-pulled in Carmen print studio using archival water-based textile ink. Heat-cured for machine wash durability.',
    size: 'Assorted 8cm to 18cm',
    material: '100% Heavyweight Cotton Duck Canvas',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 14,
    is_new_arrival: false,
    is_reworked: true,
    is_featured: true,
    editorial_tag: 'DIY LAB EXCLUSIVE',
    description: 'Original independent artwork prints celebrating Northern Mindanao ecology, noise resistance, and anti-fast-fashion manifestos. Includes upholstery needle and heavy nylon thread.',
    styling_notes: 'Whip-stitch onto jackets, tote bags, or back pockets with contrasting white thread.'
  },
  {
    id: 'prod-06',
    slug: 'wide-leg-pleated-charcoal-trousers',
    title: 'Deconstructed Pleated Trousers (Charcoal)',
    subtitle: 'Fluid Japanese wool drape with raw-edge waistband',
    price_php: 1150,
    original_estimate_php: 2400,
    category: 'bottoms',
    subcategory: 'Trousers',
    condition: 'Thrift Grade A',
    condition_notes: 'Tailored hem adjusted to contemporary break. Fabric retains matte texture.',
    size: 'Waist 31-32"',
    measurements: {
      waist_inches: 32,
      inseam_inches: 30
    },
    material: 'Worsted Wool & Silk Blend',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1200&q=85'
    ],
    in_stock: true,
    stock_count: 1,
    is_new_arrival: true,
    is_reworked: false,
    is_featured: true,
    editorial_tag: 'TAILORING',
    description: 'Wide-legged fluid trousers combining mid-century tailoring with modern street silhouettes. Features deep double front pleats and horn side adjusters.',
    styling_notes: 'Wear with heavy leather lug derbies and a cropped knit.'
  }
];

export const INITIAL_LOOKBOOK: LookbookItem[] = [
  {
    id: 'lb-01',
    title: 'CONCRETE & CRIMSON // VOL. 04',
    subtitle: 'Industrial tailoring against Cagayan de Oro port architecture',
    stylist: 'Karl Andre Gutierrez',
    photographer: 'Simona Dell’Unto',
    location: 'Macabalan Port & Nazareth Alleys, CDO',
    image_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
    model_name: 'Mira & Alex',
    description: 'An exploration of harsh shadows, oversized tailored vintage silhouettes, and surgical crimson accents in the tropical port humidity.',
    featured_product_ids: ['prod-01', 'prod-02', 'prod-04'],
    year: 2026,
    issue_number: 'ISSUE 04'
  },
  {
    id: 'lb-02',
    title: 'REWORKED MONUMENTS',
    subtitle: 'Deconstructed 1990s denim paired with sharp structural tailoring',
    stylist: 'Thread & Resist Atelier',
    photographer: 'Kiko Almonte',
    location: 'Divisoria Heritage Basin, CDO',
    image_url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
    model_name: 'Dante V.',
    description: 'Highlighting pieces created exclusively from reclaimed denim and deadstock canvas gathered from local Northern Mindanao clearinghouses.',
    featured_product_ids: ['prod-01', 'prod-05', 'prod-06'],
    year: 2026,
    issue_number: 'ISSUE 03'
  }
];

export const INITIAL_DIY_GUIDES: DIYGuide[] = [
  {
    id: 'diy-01',
    slug: 'stencil-screenprint-garments',
    title: 'Garment Screenprinting with Handmade Paper Stencils',
    difficulty: 'Beginner',
    duration: '45 mins',
    materials_needed: ['Embroidery Hoop or Screen Frame', 'Water-based Fabric Ink', 'Cutting Knife (X-Acto)', 'Tracing Paper', 'Squeegee or Rigid Plastic Card'],
    summary: 'A zero-chemical method for printing bold, high-contrast graphic emblems onto thrifted tees and canvas patches without darkroom emulsion.',
    cover_image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
    author: 'Pungko Press Atelier',
    steps: [
      {
        step_number: 1,
        heading: 'Design & Silhouette Preparation',
        instructions: 'Draw your high-contrast monochrome design onto tracing paper or wax paper. Avoid fragile floating islands without anchor bridges.'
      },
      {
        step_number: 2,
        heading: 'Precision Stencil Cutting',
        instructions: 'Carefully excise the negative space using a fresh blade over a self-healing mat. Keep edges crisp for clean ink bleed.'
      },
      {
        step_number: 3,
        heading: 'Screen Flooding & Ink Pull',
        instructions: 'Affix stencil to the underside of the mesh. Pull water-based ink firmly at a 45-degree angle in one fluid, authoritative stroke.'
      },
      {
        step_number: 4,
        heading: 'Thermal Curing',
        instructions: 'Allow ink to dry to the touch for 2 hours. Heat-press or iron under baking paper for 3 minutes to fuse the pigment into the fabric.'
      }
    ]
  },
  {
    id: 'diy-02',
    slug: 'whip-stitch-canvas-patches',
    title: 'Architectural Hand-Sewing: The Heavy Floss Whip Stitch',
    difficulty: 'Beginner',
    duration: '30 mins',
    materials_needed: ['Waxed Dental Floss or Heavy Nylon Thread', 'Heavy Upholstery Needle', 'Tailor Chalk', 'Safety Pins'],
    summary: 'How to permanently anchor canvas back patches onto leather, denim, and canvas without tearing or edge curling in the pit.',
    cover_image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=85',
    author: 'Thread & Resist Collective',
    steps: [
      {
        step_number: 1,
        heading: 'Edge Folding & Pinning',
        instructions: 'Press raw canvas edges inward by 6mm with a hot iron. Pin flat against the jacket using heavy safety pins.'
      },
      {
        step_number: 2,
        heading: 'Anchor Knot & Edge Whipping',
        instructions: 'Thread double-strand waxed floss. Pierce through inner lining and loop over the fold every 8mm with consistent tension.'
      }
    ]
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'ev-01',
    slug: 'noise-disruption-vol-4',
    title: 'NOISE DISRUPTION VOL. 4',
    tagline: 'Heavy guitar feedback, pit etiquette, and pure CDO hardcore energy.',
    description: 'The fourth installment of CDO’s heaviest underground session. Five bands, zero rockstar attitudes, strict safe-space rules, and a pop-up thrift rack in the backyard alley. Bring earplugs. Respect the venue.',
    event_type: 'gig',
    genre_tags: ['Punk and Hardcore', 'Metal and Extreme Music'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 4 * 24 * 3600 * 1000 + 4 * 3600 * 1000).toISOString(),
    doors_open_time: '6:30 PM',
    venue_name: 'The Concrete Garage',
    venue_address: '12th-21st St. Corner, Nazareth',
    city: 'Cagayan de Oro City',
    google_maps_url: 'https://maps.google.com/?q=Nazareth+Cagayan+de+Oro',
    accessibility_info: 'Ground floor venue with roll-in ramp. Note: High volume sound, ear protection strongly advised.',
    age_restriction: 'All Ages',
    ticket_price_php: 150,
    is_free_entry: false,
    ticket_link: 'https://instagram.com/cdo_underground_noise',
    poster_image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    poster_credit: 'Original riso flyer screenprinted by Pungko Press',
    organizer_name_override: 'Kagay-an Underground Noise Coalition',
    is_verified: true,
    verified_by: 'Admin (Verified via official promoter dispatch)',
    last_verified_at: '2026-10-19T14:30:00Z',
    featured_product_ids: ['prod-01', 'prod-04', 'prod-05'],
    lineups: [
      { id: 'l1', event_id: 'ev-01', performer_name: 'Blackwater Divide', performance_order: 4, set_time: '9:30 PM', is_headliner: true },
      { id: 'l2', event_id: 'ev-01', performer_name: 'Calamity Routine', performance_order: 3, set_time: '8:45 PM', is_headliner: false },
      { id: 'l3', event_id: 'ev-01', performer_name: 'Rust & Wire (Iligan Hardcore)', performance_order: 2, set_time: '8:00 PM', is_headliner: false },
      { id: 'l4', event_id: 'ev-01', performer_name: 'Gutter Sludge (Opening Noise)', performance_order: 1, set_time: '7:15 PM', is_headliner: false }
    ]
  },
  {
    id: 'ev-02',
    slug: 'tears-on-canvas-emo-night',
    title: 'TEARS ON CANVAS: EMO & POST-HARDCORE NIGHT',
    tagline: 'Screaming every lyric until our throats give out in Divisoria.',
    description: 'A deep dive into 90s midwest emo and 2000s post-hardcore. Features live sets from Stitched Lips Society and guest selectors playing Mineral, Title Fight, Armor For Sleep, and Saosin. Community zines and secondhand band shirts available.',
    event_type: 'gig',
    genre_tags: ['Emo and Pop-Punk', 'Alternative and Indie'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 7 * 24 * 3600 * 1000 + 3 * 3600 * 1000).toISOString(),
    doors_open_time: '7:00 PM',
    venue_name: 'Divisoria Basement Lab',
    venue_address: 'Tiano Bros. St., near Golden Friendship Park',
    city: 'Cagayan de Oro City',
    google_maps_url: 'https://maps.google.com/?q=Divisoria+Cagayan+de+Oro',
    accessibility_info: 'Basement location accessed via stairs. Staff available to assist with mobility needs.',
    age_restriction: 'All Ages',
    ticket_price_php: 120,
    is_free_entry: false,
    ticket_link: 'https://instagram.com/cdo_underground_noise',
    poster_image_url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85',
    poster_credit: 'Original riso flyer by Stitched Lips Society',
    organizer_name_override: 'Divisoria Emo Fellowship',
    is_verified: true,
    verified_by: 'Admin (Verified via promoter ticket desk)',
    last_verified_at: '2026-10-18T10:15:00Z',
    featured_product_ids: ['prod-03', 'prod-06'],
    lineups: [
      { id: 'l5', event_id: 'ev-02', performer_name: 'Stitched Lips Society', performance_order: 3, set_time: '9:15 PM', is_headliner: true },
      { id: 'l6', event_id: 'ev-02', performer_name: 'Slow Fade Goodbye (Bukidnon Emo)', performance_order: 2, set_time: '8:20 PM', is_headliner: false }
    ]
  },
  {
    id: 'ev-03',
    slug: 'patch-and-destroy-workshop',
    title: 'PATCH & DESTROY: DIY CLOTHING CUSTOMIZATION LAB',
    tagline: 'Bring your beat-up jackets, thrifts, and denim. Make them armor.',
    description: 'Learn stencil screen-printing, heavy canvas back patch sewing, hand studding, and distressed fabric bleaching. Free fabric scraps, stencil cutting knives, and heavy nylon threads provided.',
    event_type: 'diy_workshop',
    genre_tags: ['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 11 * 24 * 3600 * 1000).toISOString(),
    doors_open_time: '2:00 PM',
    venue_name: 'Thrift Hub Yard & Atelier',
    venue_address: 'Lane 10, Macasandig Riverside',
    city: 'Cagayan de Oro City',
    google_maps_url: 'https://maps.google.com/?q=Macasandig+Cagayan+de+Oro',
    accessibility_info: 'Ground floor open-air pavilion. Family friendly and wheelchair accessible.',
    age_restriction: 'All Ages',
    ticket_price_php: 0,
    is_free_entry: true,
    poster_image_url: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=85',
    organizer_name_override: 'Thread & Resist DIY Lab',
    is_verified: true,
    verified_by: 'Admin (Verified via studio schedule)',
    last_verified_at: '2026-10-20T08:00:00Z',
    featured_product_ids: ['prod-01', 'prod-05']
  },
  {
    id: 'ev-04',
    slug: 'northern-mindanao-zine-union-fair-2',
    title: 'NORTHERN MINDANAO ZINE UNION: FAIR & FLEA #2',
    tagline: 'Photocopied manifestos, cassette demos, and 50-peso thrift racks.',
    description: 'Historic gathering of northern Mindanao visual artists, cassette label owners, and underground thrift scavengers.',
    event_type: 'zine_fair',
    genre_tags: ['Zine Fairs and Art Markets', 'Thrift Markets and Clothing Swaps'],
    status: 'completed',
    start_time: '2025-11-15T13:00:00Z',
    venue_name: 'Kagay-an Heritage Yard',
    venue_address: 'Velez St. near City Hall, CDO',
    city: 'Cagayan de Oro City',
    ticket_price_php: 0,
    is_free_entry: true,
    poster_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
    organizer_name_override: 'Pungko-Pungko Press & Zine Union',
    is_verified: true,
    verified_by: 'Admin (Preserved in CDO Scene Archive)'
  }
];

export const INITIAL_BANDS: BandCollective[] = [
  {
    id: 'b-01',
    name: 'Blackwater Divide',
    slug: 'blackwater-divide',
    type: 'band',
    genre_tags: ['Punk and Hardcore', 'Metal and Extreme Music'],
    location: 'Nazareth, Cagayan de Oro City',
    short_bio: 'Metallic hardcore tearing up local garages with d-beat rhythms and raw political screams.',
    full_bio: 'Formed in 2021 behind an auto repair shop in Nazareth, Blackwater Divide blends raw 90s Swedish death metal tone with aggressive American hardcore punk.',
    profile_image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    streaming_spotify: 'https://open.spotify.com',
    streaming_bandcamp: 'https://bandcamp.com',
    booking_contact: 'blackwaterdivide@gmail.com',
    is_active: true,
    is_verified: true,
    members: ['Dante V. (Vocals)', 'Renz C. (Guitar)', 'Paolo S. (Bass)', 'Mico T. (Drums)']
  },
  {
    id: 'b-02',
    name: 'Stitched Lips Society',
    slug: 'stitched-lips-society',
    type: 'band',
    genre_tags: ['Emo and Pop-Punk', 'Alternative and Indie'],
    location: 'Divisoria, Cagayan de Oro City',
    short_bio: 'Twin-guitar twinkly midwest emo and heartfelt post-hardcore catharsis.',
    full_bio: 'Channels the melancholic spirit of American Football, Mineral, and Title Fight into songs about humid CDO typhoons, heartbreak, and thrift shop nostalgia.',
    profile_image_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85',
    streaming_spotify: 'https://open.spotify.com',
    streaming_bandcamp: 'https://bandcamp.com',
    booking_contact: 'stitchedlips@gmail.com',
    is_active: true,
    is_verified: true
  },
  {
    id: 'b-03',
    name: 'Thread & Resist Collective',
    slug: 'thread-and-resist-collective',
    type: 'collective',
    genre_tags: ['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'],
    location: 'Nazareth, Cagayan de Oro City',
    short_bio: 'Circular fashion collective hosting mending circles, punk stencil clinics, and clothing swaps.',
    full_bio: 'A passionate group of artisans and thrift scavengers dedicated to sustainable textile alteration, zero waste, and garment empowerment.',
    profile_image_url: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=85',
    booking_contact: 'threadandresist@gmail.com',
    is_active: true,
    is_verified: true
  }
];

// ----------------------------------------------------------------------------
// DATA STORE ENGINE (LOCAL STORAGE / SUPABASE SYNC)
// ----------------------------------------------------------------------------
const STORAGE_PREFIX = 'cdo_alt_editorial_';

class EditorialDatabaseStore {
  private products: ThriftProduct[] = [];
  private cart: CartItem[] = [];
  private lookbooks: LookbookItem[] = [];
  private diyGuides: DIYGuide[] = [];
  private events: EventItem[] = [];
  private bands: BandCollective[] = [];
  private submissions: EventSubmission[] = [];
  private savedProductIds: Set<string> = new Set();
  private savedEventIds: Set<string> = new Set();
  private listeners: (() => void)[] = [];

  constructor() {
    this.init();
  }

  private init() {
    try {
      const p = localStorage.getItem(`${STORAGE_PREFIX}products`);
      this.products = p ? JSON.parse(p) : INITIAL_PRODUCTS;

      const c = localStorage.getItem(`${STORAGE_PREFIX}cart`);
      this.cart = c ? JSON.parse(c) : [];

      const ev = localStorage.getItem(`${STORAGE_PREFIX}events`);
      this.events = ev ? JSON.parse(ev) : INITIAL_EVENTS;

      const b = localStorage.getItem(`${STORAGE_PREFIX}bands`);
      this.bands = b ? JSON.parse(b) : INITIAL_BANDS;

      const s = localStorage.getItem(`${STORAGE_PREFIX}submissions`);
      this.submissions = s ? JSON.parse(s) : [];

      this.lookbooks = INITIAL_LOOKBOOK;
      this.diyGuides = INITIAL_DIY_GUIDES;

      const sp = localStorage.getItem(`${STORAGE_PREFIX}saved_prods`);
      this.savedProductIds = sp ? new Set(JSON.parse(sp)) : new Set();

      const se = localStorage.getItem(`${STORAGE_PREFIX}saved_events`);
      this.savedEventIds = se ? new Set(JSON.parse(se)) : new Set();
    } catch {
      this.products = INITIAL_PRODUCTS;
      this.cart = [];
      this.events = INITIAL_EVENTS;
      this.bands = INITIAL_BANDS;
      this.submissions = [];
      this.lookbooks = INITIAL_LOOKBOOK;
      this.diyGuides = INITIAL_DIY_GUIDES;
    }
  }

  private persist() {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}products`, JSON.stringify(this.products));
      localStorage.setItem(`${STORAGE_PREFIX}cart`, JSON.stringify(this.cart));
      localStorage.setItem(`${STORAGE_PREFIX}events`, JSON.stringify(this.events));
      localStorage.setItem(`${STORAGE_PREFIX}bands`, JSON.stringify(this.bands));
      localStorage.setItem(`${STORAGE_PREFIX}submissions`, JSON.stringify(this.submissions));
      localStorage.setItem(`${STORAGE_PREFIX}saved_prods`, JSON.stringify(Array.from(this.savedProductIds)));
      localStorage.setItem(`${STORAGE_PREFIX}saved_events`, JSON.stringify(Array.from(this.savedEventIds)));
    } catch (err) {
      console.warn('Storage quota reached or storage disabled', err);
    }
    this.notify();
  }

  public subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn());
  }

  // --- PRODUCTS ---
  public getProducts(): ThriftProduct[] {
    return [...this.products];
  }

  public getProductBySlug(slug: string): ThriftProduct | undefined {
    return this.products.find(p => p.slug === slug || p.id === slug);
  }

  // --- CART MANAGEMENT ---
  public getCart(): CartItem[] {
    return [...this.cart];
  }

  public getCartCount(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  public getCartTotalPHP(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price_php * item.quantity, 0);
  }

  public addToCart(product: ThriftProduct, quantity = 1) {
    const existing = this.cart.find(c => c.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.persist();
  }

  public updateCartQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.cart = this.cart.filter(c => c.product.id !== productId);
    } else {
      const item = this.cart.find(c => c.product.id === productId);
      if (item) item.quantity = quantity;
    }
    this.persist();
  }

  public removeFromCart(productId: string) {
    this.cart = this.cart.filter(c => c.product.id !== productId);
    this.persist();
  }

  public clearCart() {
    this.cart = [];
    this.persist();
  }

  // --- LOOKBOOKS & DIY GUIDES ---
  public getLookbooks(): LookbookItem[] {
    return [...this.lookbooks];
  }

  public getDIYGuides(): DIYGuide[] {
    return [...this.diyGuides];
  }

  // --- EVENTS ---
  public getEvents(): EventItem[] {
    return [...this.events];
  }

  public getEventBySlug(slug: string): EventItem | undefined {
    return this.events.find(e => e.slug === slug || e.id === slug);
  }

  // --- BANDS ---
  public getBands(): BandCollective[] {
    return [...this.bands];
  }

  // --- SUBMISSIONS ---
  public getSubmissions(): EventSubmission[] {
    return [...this.submissions];
  }

  public submitEvent(data: Omit<EventSubmission, 'id' | 'status' | 'created_at'>): { success: boolean; message: string } {
    const isDuplicate = this.events.some(
      e => e.title.toLowerCase() === data.event_name.trim().toLowerCase() &&
           e.venue_name.toLowerCase() === data.venue_name.trim().toLowerCase()
    );
    if (isDuplicate) {
      return { success: false, message: 'Notice: An event with this title and venue already exists on record.' };
    }

    const sub: EventSubmission = {
      ...data,
      id: `sub-${Date.now()}`,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    this.submissions.unshift(sub);
    this.persist();
    return { success: true, message: 'Event submitted for editorial verification.' };
  }

  public approveSubmission(submissionId: string): boolean {
    const sub = this.submissions.find(s => s.id === submissionId);
    if (!sub) return false;

    const slug = sub.event_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.floor(Math.random() * 900 + 100);
    const newEvent: EventItem = {
      id: `ev-${Date.now()}`,
      slug,
      title: sub.event_name,
      tagline: sub.description.slice(0, 85) + '...',
      description: sub.description,
      event_type: (sub.event_type as any) || 'gig',
      genre_tags: sub.genre_tags.length ? sub.genre_tags : ['Alternative and Indie'],
      status: 'upcoming',
      start_time: sub.start_time,
      doors_open_time: '7:00 PM',
      venue_name: sub.venue_name,
      venue_address: sub.venue_address,
      city: sub.city,
      ticket_price_php: sub.ticket_price_php,
      is_free_entry: sub.is_free_entry,
      ticket_link: sub.official_event_link,
      poster_image_url: sub.poster_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
      organizer_name_override: sub.organizer_name,
      is_verified: true,
      verified_by: 'Editorial Board (Verified Community Submission)',
      last_verified_at: new Date().toISOString(),
      age_restriction: sub.age_restriction || 'All Ages',
      accessibility_info: sub.accessibility_notes,
      lineups: sub.band_lineup_text ? sub.band_lineup_text.split(',').map((name, i) => ({
        id: `l-${Date.now()}-${i}`,
        event_id: `ev-${Date.now()}`,
        performer_name: name.trim(),
        performance_order: i + 1,
        is_headliner: i === 0
      })) : []
    };

    sub.status = 'approved';
    this.events.unshift(newEvent);
    this.persist();
    return true;
  }

  public rejectSubmission(submissionId: string): boolean {
    const sub = this.submissions.find(s => s.id === submissionId);
    if (!sub) return false;
    sub.status = 'rejected';
    this.persist();
    return true;
  }

  public updateEventStatus(eventId: string, newStatus: EventItem['status']): boolean {
    const ev = this.events.find(e => e.id === eventId);
    if (!ev) return false;
    ev.status = newStatus;
    ev.last_verified_at = new Date().toISOString();
    this.persist();
    return true;
  }

  // --- WISHLIST / SAVED ITEMS ---
  public toggleSaveProduct(productId: string): boolean {
    if (this.savedProductIds.has(productId)) {
      this.savedProductIds.delete(productId);
    } else {
      this.savedProductIds.add(productId);
    }
    this.persist();
    return this.savedProductIds.has(productId);
  }

  public isProductSaved(productId: string): boolean {
    return this.savedProductIds.has(productId);
  }

  public toggleSaveEvent(eventId: string): boolean {
    if (this.savedEventIds.has(eventId)) {
      this.savedEventIds.delete(eventId);
    } else {
      this.savedEventIds.add(eventId);
    }
    this.persist();
    return this.savedEventIds.has(eventId);
  }

  public isEventSaved(eventId: string): boolean {
    return this.savedEventIds.has(eventId);
  }
}

export const dbStore = new EditorialDatabaseStore();
