// CDO Underground Scene & Thrift Community - Database Store & Client Layer
import {
  EventItem,
  EventGenre,
  BandCollective,
  EventSubmission,
  EventRecap,
  ThriftProduct,
  EventVerificationLog,
  EventReport
} from '../types/database';

export const INITIAL_GENRES: EventGenre[] = [
  { id: 'g-1', slug: 'punk-hardcore', name: 'Punk and Hardcore', category: 'music', description: 'Raw distortion, d-beat tempos, and garage solidarity in CDO.' },
  { id: 'g-2', slug: 'emo-pop-punk', name: 'Emo and Pop-Punk', category: 'music', description: 'Twinkly guitars, emotional catharsis, and 2000s anthems.' },
  { id: 'g-3', slug: 'metal-extreme', name: 'Metal and Extreme Music', category: 'music', description: 'Thrash, death, doom, and grindcore from Northern Mindanao.' },
  { id: 'g-4', slug: 'alternative-indie', name: 'Alternative and Indie', category: 'music', description: 'Fuzz pedals, shoegaze reverb, and garage rock.' },
  { id: 'g-5', slug: 'goth-darkwave', name: 'Goth and Darkwave', category: 'music', description: 'Subterranean synths, deathrock aesthetics, and coldwave.' },
  { id: 'g-6', slug: 'diy-workshops', name: 'DIY Workshops and Customization', category: 'diy_craft', description: 'Screenprinting, canvas patch sewing, and clothing mending.' },
  { id: 'g-7', slug: 'thrift-markets', name: 'Thrift Markets and Clothing Swaps', category: 'market', description: 'Pre-loved denim swaps, leather hunts, and flea markets.' },
  { id: 'g-8', slug: 'zine-fairs', name: 'Zine Fairs and Art Markets', category: 'market', description: 'Photocopied booklets, stickers, and linocut prints.' },
  { id: 'g-9', slug: 'open-mics', name: 'Open Mics and Community Meetups', category: 'community', description: 'Acoustic sessions, spoken word, and safe harbor meetups.' }
];

export const INITIAL_BANDS: BandCollective[] = [
  {
    id: 'b-1',
    name: 'Blackwater Divide',
    slug: 'blackwater-divide',
    type: 'band',
    genre_tags: ['Punk and Hardcore', 'Metal and Extreme Music'],
    location: 'Nazareth, Cagayan de Oro City',
    short_bio: 'Ferocious metallic hardcore tearing up local garages with d-beat rhythms and raw political screams.',
    full_bio: 'Formed in 2021 behind an auto repair shop in Nazareth, Blackwater Divide blends raw 90s Swedish death metal tone with aggressive American hardcore punk. Known for intense mosh etiquette and uncompromising DIY ethos.',
    profile_image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    social_instagram: '@blackwaterdivide.cdo',
    social_facebook: 'facebook.com/blackwaterdivide',
    streaming_spotify: 'https://open.spotify.com',
    streaming_bandcamp: 'https://bandcamp.com',
    streaming_youtube: 'https://youtube.com',
    booking_contact: 'blackwaterdivide@gmail.com',
    is_active: true,
    is_verified: true,
    members: [
      { id: 'm-1', band_id: 'b-1', name: 'Dante V.', role_or_instrument: 'Lead Vocals', is_active: true },
      { id: 'm-2', band_id: 'b-1', name: 'Renz C.', role_or_instrument: 'Guitar / Screams', is_active: true },
      { id: 'm-3', band_id: 'b-1', name: 'Paolo S.', role_or_instrument: 'Bass', is_active: true },
      { id: 'm-4', band_id: 'b-1', name: 'Mico T.', role_or_instrument: 'Drums', is_active: true }
    ]
  },
  {
    id: 'b-2',
    name: 'Stitched Lips Society',
    slug: 'stitched-lips-society',
    type: 'band',
    genre_tags: ['Emo and Pop-Punk', 'Alternative and Indie'],
    location: 'Divisoria, Cagayan de Oro City',
    short_bio: 'Twin-guitar twinkly midwest emo and heartfelt post-hardcore catharsis from the heart of Divisoria.',
    full_bio: 'Stitched Lips Society channels the melancholic spirit of American Football, Mineral, and Title Fight into songs about humid CDO typhoons, heartbreak, and thrift shop nostalgia.',
    profile_image_url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    social_instagram: '@stitchedlips.cdo',
    streaming_spotify: 'https://open.spotify.com',
    streaming_bandcamp: 'https://bandcamp.com',
    booking_contact: 'stitchedlips@gmail.com',
    is_active: true,
    is_verified: true
  },
  {
    id: 'b-3',
    name: 'Calamity Routine',
    slug: 'calamity-routine',
    type: 'band',
    genre_tags: ['Alternative and Indie', 'Punk and Hardcore'],
    location: 'Macasandig, Cagayan de Oro City',
    short_bio: 'Heavy 90s grunge and noise rock duo driven by blown-out tube amplifiers and feedback loops.',
    full_bio: 'A guitar-and-drum two-piece operating out of an abandoned Macasandig woodshop. Unrelenting fuzz, sludgy riffs, and dynamic quiet-loud structures.',
    profile_image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    social_instagram: '@calamityroutine',
    streaming_bandcamp: 'https://bandcamp.com',
    booking_contact: 'calamityroutine@outlook.com',
    is_active: true,
    is_verified: true
  },
  {
    id: 'b-4',
    name: 'Velvet Crypt',
    slug: 'velvet-crypt',
    type: 'solo_artist',
    genre_tags: ['Goth and Darkwave'],
    location: 'Carmen, Cagayan de Oro City',
    short_bio: 'Subterranean analog synthesizer darkwave and haunting baritone vocals for stormy Mindanao nights.',
    full_bio: 'The solo darkwave project of sound artist Alyssa Soriano. Vintage Korg synths, drum machines, and echoes of The Cure and Clan of Xymox.',
    profile_image_url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    social_instagram: '@velvetcrypt',
    streaming_spotify: 'https://open.spotify.com',
    booking_contact: 'velvetcrypt@proton.me',
    is_active: true,
    is_verified: true
  },
  {
    id: 'b-5',
    name: 'Thread & Resist Collective',
    slug: 'thread-and-resist-collective',
    type: 'collective',
    genre_tags: ['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'],
    location: 'Nazareth, Cagayan de Oro City',
    short_bio: 'Anti-fast-fashion crew teaching screenprinting, denim studding, and zero-waste garment reconstruction.',
    full_bio: 'A passionate group of artisans, thrift hunters, and punk crafters running free weekend repair clinics and clothing swaps to keep garments out of landfills.',
    profile_image_url: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=800&q=80',
    social_instagram: '@threadandresist.cdo',
    booking_contact: 'threadandresist@gmail.com',
    is_active: true,
    is_verified: true
  },
  {
    id: 'b-6',
    name: 'Pungko-Pungko Zine Press',
    slug: 'pungko-pungko-press',
    type: 'zine_creator',
    genre_tags: ['Zine Fairs and Art Markets'],
    location: 'Poblacion, Cagayan de Oro City',
    short_bio: 'Grassroots self-publishing union printing underground music reviews, poetry, and linocuts on recycled newsprint.',
    profile_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    social_instagram: '@pungkoxpress',
    booking_contact: 'press@pungkoxpress.com',
    is_active: true,
    is_verified: true
  }
];

export const INITIAL_THRIFT_PRODUCTS: ThriftProduct[] = [
  {
    id: 'tp-1',
    title: 'Custom Studded Vintage Battle Vest',
    price_php: 850,
    category: 'battle_vest',
    condition: 'Upcycled Rework',
    size: 'Unisex L',
    image_url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'punk-hardcore',
    description: 'Thrifted heavyweight 90s acid-wash denim hand-studded with cone rivets and raw canvas back patch.'
  },
  {
    id: 'tp-2',
    title: 'Faded Black Distressed Denim Jacket',
    price_php: 720,
    category: 'denim',
    condition: 'Distressed Vintage',
    size: 'M',
    image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'metal-extreme',
    description: 'Naturally frayed cuffs and collar, sturdy metal buttons, ideal base for pinning tour patches.'
  },
  {
    id: 'tp-3',
    title: 'Heavyweight Flannel Overshirt (Blood Tartan)',
    price_php: 450,
    category: 'flannel',
    condition: 'Thrift Grade A',
    size: 'Oversized XL',
    image_url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'emo-pop-punk',
    description: 'Ultra-soft washed cotton flannel. Classic 90s grunge and midwest emo silhouette.'
  },
  {
    id: 'tp-4',
    title: 'DIY Screenprinted Canvas Patch 5-Pack',
    price_php: 180,
    category: 'diy_patch_set',
    condition: 'DIY Canvas',
    size: 'Assorted 3" to 6"',
    image_url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'diy-workshops',
    description: 'Hand-pulled textile ink on raw duck canvas. Heat-cured and ready to sew with included dental floss & needle kit.'
  },
  {
    id: 'tp-5',
    title: 'Vintage Black Velvet Choker & O-Ring Chain',
    price_php: 220,
    category: 'choker',
    condition: 'Upcycled Rework',
    size: 'Adjustable',
    image_url: 'https://images.unsplash.com/photo-1611591475152-47354c033c89?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'goth-darkwave',
    description: 'Crafted from salvaged plush velvet ribbon and stainless steel hardware.'
  },
  {
    id: 'tp-6',
    title: 'Lug-Sole Vintage Military Combat Boots',
    price_php: 1250,
    category: 'boots',
    condition: 'Distressed Vintage',
    size: 'EU 42 / US 9',
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    underground_tag: 'punk-hardcore',
    description: 'Genuine leather, steel reinforced toe, deep tread made to survive the roughest garage pit floors.'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'e-1',
    slug: 'noise-disruption-vol-4',
    title: 'NOISE DISRUPTION VOL. 4',
    tagline: 'Heavy guitar feedback, pit etiquette, and pure CDO hardcore energy.',
    description: 'The fourth installment of CDO’s heaviest underground session. Five bands, zero rockstar attitudes, strict safe-space rules, and a pop-up thrift rack in the backyard alley. Bring earplugs. Respect the venue and help your fellow moshers up when they fall.',
    event_type: 'gig',
    genre_tags: ['Punk and Hardcore', 'Metal and Extreme Music'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000).toISOString(),
    doors_open_time: '6:30 PM',
    venue_name: 'The Concrete Garage',
    venue_address: 'Corner 12th-21st St., Nazareth',
    city: 'Cagayan de Oro City',
    barangay: 'Nazareth',
    google_maps_url: 'https://maps.google.com/?q=Nazareth+Cagayan+de+Oro',
    accessibility_info: 'Ground floor venue with roll-in ramp. Note: High volume sound, ear protection strongly advised. Quiet recovery zone in side patio.',
    age_restriction: 'All Ages',
    ticket_price_php: 150,
    is_free_entry: false,
    ticket_link: 'https://instagram.com/cdo_underground_noise',
    poster_image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Poster artwork by @pungkoxpress screenprint shop',
    organizer_id: 'org-1',
    organizer_name_override: 'Kagay-an Underground Noise Coalition',
    official_announcement_url: 'https://instagram.com/cdo_underground_noise',
    is_verified: true,
    verified_by: 'Admin (Verified via official organizer flyer & venue confirmation)',
    last_verified_at: '2026-10-19T14:30:00Z',
    curated_thrift_tag: 'punk-hardcore',
    featured_gig_fit_ids: ['tp-1', 'tp-6', 'tp-4'],
    lineups: [
      { id: 'l-1', event_id: 'e-1', band_id: 'b-1', performer_name: 'Blackwater Divide', performance_order: 4, set_time: '9:30 PM', is_headliner: true },
      { id: 'l-2', event_id: 'e-1', band_id: 'b-3', performer_name: 'Calamity Routine', performance_order: 3, set_time: '8:45 PM', is_headliner: false },
      { id: 'l-3', event_id: 'e-1', performer_name: 'Rust & Wire (Iligan City Hardcore)', performance_order: 2, set_time: '8:00 PM', is_headliner: false },
      { id: 'l-4', event_id: 'e-1', performer_name: 'Gutter Sludge (Opening Noise)', performance_order: 1, set_time: '7:15 PM', is_headliner: false }
    ]
  },
  {
    id: 'e-2',
    slug: 'tears-on-canvas-emo-night',
    title: 'TEARS ON CANVAS: EMO & POST-HARDCORE NIGHT',
    tagline: 'Screaming every lyric until our throats give out in Divisoria.',
    description: 'A deep dive into 90s midwest emo and 2000s post-hardcore. Features live sets from Stitched Lips Society and guest selectors playing Mineral, Title Fight, Armor For Sleep, and Saosin. Community zines and secondhand band shirts available.',
    event_type: 'gig',
    genre_tags: ['Emo and Pop-Punk', 'Alternative and Indie'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
    doors_open_time: '7:00 PM',
    venue_name: 'Divisoria Basement Lab',
    venue_address: 'Tiano Bros. St., near Golden Friendship Park',
    city: 'Cagayan de Oro City',
    barangay: 'Barangay 1',
    google_maps_url: 'https://maps.google.com/?q=Divisoria+Cagayan+de+Oro',
    accessibility_info: 'Basement location accessed via stairs. Staff available to assist with mobility needs.',
    age_restriction: 'All Ages',
    ticket_price_php: 120,
    is_free_entry: false,
    ticket_link: 'https://instagram.com/cdo_underground_noise',
    poster_image_url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Original riso flyer by Stitched Lips Society',
    organizer_name_override: 'Divisoria Emo Fellowship',
    is_verified: true,
    verified_by: 'Admin (Verified via promoter ticket desk)',
    last_verified_at: '2026-10-18T10:15:00Z',
    curated_thrift_tag: 'emo-pop-punk',
    featured_gig_fit_ids: ['tp-3', 'tp-2'],
    lineups: [
      { id: 'l-5', event_id: 'e-2', band_id: 'b-2', performer_name: 'Stitched Lips Society', performance_order: 3, set_time: '9:15 PM', is_headliner: true },
      { id: 'l-6', event_id: 'e-2', performer_name: 'Slow Fade Goodbye (Bukidnon Emo)', performance_order: 2, set_time: '8:20 PM', is_headliner: false },
      { id: 'l-7', event_id: 'e-2', performer_name: 'Letters Unsent (Acoustic Emo Set)', performance_order: 1, set_time: '7:30 PM', is_headliner: false }
    ]
  },
  {
    id: 'e-3',
    slug: 'patch-and-destroy-workshop',
    title: 'PATCH & DESTROY: DIY CLOTHING CUSTOMIZATION LAB',
    tagline: 'Bring your beat-up jackets, thrifts, and denim. Make them armor.',
    description: 'Learn stencil screen-printing, heavy canvas back patch sewing, hand studding, and distressed fabric bleaching. Free fabric scraps, stencil cutting knives, and heavy nylon threads provided. Bring 1-2 garments you want to customize.',
    event_type: 'diy_workshop',
    genre_tags: ['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000 - 2 * 60 * 60 * 1000).toISOString(),
    doors_open_time: '2:00 PM',
    venue_name: 'Thrift Hub Yard & Atelier',
    venue_address: 'Lane 10, Macasandig Riverside',
    city: 'Cagayan de Oro City',
    barangay: 'Macasandig',
    google_maps_url: 'https://maps.google.com/?q=Macasandig+Cagayan+de+Oro',
    accessibility_info: 'Ground floor open-air pavilion. Family friendly and wheelchair accessible.',
    age_restriction: 'All Ages (Kids under 12 must be accompanied for knife handling)',
    ticket_price_php: 0,
    is_free_entry: true,
    poster_image_url: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Photo courtesy of Thread & Resist DIY Collective',
    organizer_id: 'org-2',
    organizer_name_override: 'Thread & Resist DIY Lab',
    is_verified: true,
    verified_by: 'Admin (Verified via studio calendar)',
    last_verified_at: '2026-10-20T08:00:00Z',
    curated_thrift_tag: 'diy-workshops',
    featured_gig_fit_ids: ['tp-1', 'tp-4'],
    lineups: [
      { id: 'l-8', event_id: 'e-3', performer_name: 'Ate Bea (Screen-print mentor)', performance_order: 1, set_time: '2:30 PM', is_headliner: false },
      { id: 'l-9', event_id: 'e-3', performer_name: 'Kuya Joms (Denim repair & stud clinic)', performance_order: 2, set_time: '3:30 PM', is_headliner: false }
    ]
  },
  {
    id: 'e-4',
    slug: 'velvet-shadows-darkwave-gathering',
    title: 'VELVET SHADOWS: COLDWAVE & GOTH DANCEFLOOR',
    tagline: 'Subterranean synths, fog machines, and vintage lace in Macasandig.',
    description: 'An evening of gothic post-punk, darkwave live electronics, and vintage lace swap meet. Dress code strictly black, Victorian romantic, deathrock, or distressed grunge. Safe environment, zero harassment policy strictly enforced.',
    event_type: 'gig',
    genre_tags: ['Goth and Darkwave', 'Alternative and Indie'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000).toISOString(),
    doors_open_time: '8:00 PM',
    venue_name: 'Black Box Studio CDO',
    venue_address: 'Tomas Saco St., Macasandig',
    city: 'Cagayan de Oro City',
    barangay: 'Macasandig',
    google_maps_url: 'https://maps.google.com/?q=Tomas+Saco+Cagayan+de+Oro',
    accessibility_info: 'Low lighting and flashing strobe effects during DJ sets. Earplugs free at the door.',
    age_restriction: '18+',
    ticket_price_php: 200,
    is_free_entry: false,
    ticket_link: 'https://instagram.com/velvetcrypt',
    poster_image_url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Design by Velvet Crypt',
    organizer_name_override: 'Northern Crypt Collective',
    is_verified: true,
    verified_by: 'Admin (Verified via artist broadcast)',
    last_verified_at: '2026-10-17T11:20:00Z',
    curated_thrift_tag: 'goth-darkwave',
    featured_gig_fit_ids: ['tp-5', 'tp-2'],
    lineups: [
      { id: 'l-10', event_id: 'e-4', band_id: 'b-4', performer_name: 'Velvet Crypt', performance_order: 2, set_time: '9:45 PM', is_headliner: true },
      { id: 'l-11', event_id: 'e-4', performer_name: 'DJ Hexenwerk (Dark 80s Synth Set)', performance_order: 1, set_time: '8:15 PM', is_headliner: false }
    ]
  },
  {
    id: 'e-5',
    slug: 'secondhand-frequency-cassette-flea',
    title: 'SECONDHAND FREQUENCY: INDIE THRIFT & CASSETTE SWAP',
    tagline: 'Physical media preservation and 50-peso vintage clothing racks.',
    description: 'Swap tape cassettes, VHS bootlegs, zines, and curated secondhand thrift jackets. Live acoustic busking and local coffee pop-up.',
    event_type: 'thrift_market',
    genre_tags: ['Thrift Markets and Clothing Swaps', 'Alternative and Indie', 'Zine Fairs and Art Markets'],
    status: 'upcoming',
    start_time: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000 - 3 * 60 * 60 * 1000).toISOString(),
    doors_open_time: '1:00 PM',
    venue_name: 'Artisan Alley Carmen',
    venue_address: 'Vamenta Blvd., Carmen',
    city: 'Cagayan de Oro City',
    barangay: 'Carmen',
    ticket_price_php: 0,
    is_free_entry: true,
    poster_image_url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Photo courtesy of Secondhand Frequency',
    organizer_name_override: 'Carmen Vinyl & Thrift Guild',
    is_verified: true,
    verified_by: 'Admin (Verified via venue announcement)',
    last_verified_at: '2026-10-16T16:00:00Z',
    curated_thrift_tag: 'alternative-indie',
    featured_gig_fit_ids: ['tp-3', 'tp-4'],
    lineups: [
      { id: 'l-12', event_id: 'e-5', performer_name: 'Various CDO Buskers', performance_order: 1, set_time: '2:00 PM', is_headliner: false }
    ]
  },
  {
    id: 'e-6',
    slug: 'northern-mindanao-zine-union-fair-2',
    title: 'NORTHERN MINDANAO ZINE UNION: FAIR & FLEA #2',
    tagline: 'Photocopied manifestos, cassette demos, and 50-peso thrift racks.',
    description: 'Historic gathering of northern Mindanao visual artists, cassette label owners, and underground thrift scavengers. Over 20 tables of original zines, stickers, screenprinted patches, and local bands performing acoustic raw sets.',
    event_type: 'zine_fair',
    genre_tags: ['Zine Fairs and Art Markets', 'Thrift Markets and Clothing Swaps', 'Alternative and Indie'],
    status: 'completed',
    start_time: '2025-11-15T13:00:00Z',
    end_time: '2025-11-15T21:00:00Z',
    doors_open_time: '1:00 PM',
    venue_name: 'Kagay-an Heritage Yard',
    venue_address: 'Velez St. near City Hall, CDO',
    city: 'Cagayan de Oro City',
    barangay: 'Poblacion',
    ticket_price_php: 0,
    is_free_entry: true,
    poster_image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
    poster_credit: 'Archival scan from Pungko-Pungko Press',
    organizer_name_override: 'Pungko-Pungko Press & Zine Union',
    is_verified: true,
    verified_by: 'Admin (Preserved in CDO Scene Archive)',
    last_verified_at: '2025-11-16T10:00:00Z',
    curated_thrift_tag: 'zine-fairs',
    lineups: [
      { id: 'l-13', event_id: 'e-6', band_id: 'b-2', performer_name: 'Stitched Lips Society (Unplugged)', performance_order: 2, set_time: '5:00 PM', is_headliner: true },
      { id: 'l-14', event_id: 'e-6', performer_name: 'Poetry & Acoustic Sets', performance_order: 1, set_time: '2:00 PM', is_headliner: false }
    ],
    recaps: [
      {
        id: 'r-1',
        event_id: 'e-6',
        author_name: 'Kiko "Shutter" Almonte',
        author_role: 'Photographer',
        recap_text: 'Over 250 people passed through the heritage yard between 1 PM and 9 PM. All zine tables completely sold out by sunset. The acoustic sets were intimate, emotional, and proved CDO has one of the most dedicated DIY crowds in the south.',
        photo_urls: [
          'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80'
        ],
        is_approved: true,
        approved_by: 'Admin',
        created_at: '2025-11-16T12:00:00Z'
      }
    ]
  }
];

export const INITIAL_SUBMISSIONS: EventSubmission[] = [
  {
    id: 'sub-1',
    event_name: 'CAGAYAN HARDCORE CHRONICLES VOL. 1',
    genre_tags: ['Punk and Hardcore'],
    event_type: 'gig',
    description: 'Benefit gig for street animal rescue in Carmen. Four local hardcore bands, vegan snacks, and clothing donation bin at the door.',
    start_time: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    venue_name: 'Backyard Alley Stage',
    city: 'Cagayan de Oro City',
    venue_address: 'Carmen Market Area, CDO',
    poster_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
    band_lineup_text: 'Blackwater Divide, Brickwall, Outspoken Youth',
    ticket_price_php: 100,
    is_free_entry: false,
    official_event_link: 'https://instagram.com/carmencorerescue',
    organizer_name: 'Carmen Animal Welfare & Noise Crew',
    contact_email: 'rescunoisecdo@gmail.com',
    contact_social: '@carmenhc',
    age_restriction: 'All Ages',
    accessibility_notes: 'Ramped entry, quiet rest corner available.',
    status: 'pending',
    created_at: '2026-10-21T02:00:00Z'
  }
];

// ----------------------------------------------------------------------------
// DB STORE SINGLETON CLASS
// ----------------------------------------------------------------------------
const STORAGE_PREFIX = 'cdo_underground_';

class CDODatabaseStore {
  private events: EventItem[] = [];
  private genres: EventGenre[] = [];
  private bands: BandCollective[] = [];
  private submissions: EventSubmission[] = [];
  private products: ThriftProduct[] = [];
  private savedEventIds: Set<string> = new Set();
  private auditLogs: EventVerificationLog[] = [];
  private listeners: (() => void)[] = [];

  constructor() {
    this.init();
  }

  private init() {
    try {
      const storedEvents = localStorage.getItem(`${STORAGE_PREFIX}events`);
      this.events = storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;

      const storedGenres = localStorage.getItem(`${STORAGE_PREFIX}genres`);
      this.genres = storedGenres ? JSON.parse(storedGenres) : INITIAL_GENRES;

      const storedBands = localStorage.getItem(`${STORAGE_PREFIX}bands`);
      this.bands = storedBands ? JSON.parse(storedBands) : INITIAL_BANDS;

      const storedSubs = localStorage.getItem(`${STORAGE_PREFIX}submissions`);
      this.submissions = storedSubs ? JSON.parse(storedSubs) : INITIAL_SUBMISSIONS;

      const storedProducts = localStorage.getItem(`${STORAGE_PREFIX}products`);
      this.products = storedProducts ? JSON.parse(storedProducts) : INITIAL_THRIFT_PRODUCTS;

      const storedSaved = localStorage.getItem(`${STORAGE_PREFIX}saved_events`);
      this.savedEventIds = storedSaved ? new Set(JSON.parse(storedSaved)) : new Set();
    } catch {
      this.events = INITIAL_EVENTS;
      this.genres = INITIAL_GENRES;
      this.bands = INITIAL_BANDS;
      this.submissions = INITIAL_SUBMISSIONS;
      this.products = INITIAL_THRIFT_PRODUCTS;
      this.savedEventIds = new Set();
    }
  }

  private persist() {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}events`, JSON.stringify(this.events));
      localStorage.setItem(`${STORAGE_PREFIX}bands`, JSON.stringify(this.bands));
      localStorage.setItem(`${STORAGE_PREFIX}submissions`, JSON.stringify(this.submissions));
      localStorage.setItem(`${STORAGE_PREFIX}saved_events`, JSON.stringify(Array.from(this.savedEventIds)));
    } catch (e) {
      console.warn('Storage quota or storage blocked', e);
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

  // --- EVENTS ---
  public getEvents(): EventItem[] {
    return [...this.events];
  }

  public getEventBySlug(slug: string): EventItem | undefined {
    return this.events.find(e => e.slug === slug);
  }

  public getGenres(): EventGenre[] {
    return [...this.genres];
  }

  public getBands(): BandCollective[] {
    return [...this.bands];
  }

  public getBandBySlug(slug: string): BandCollective | undefined {
    return this.bands.find(b => b.slug === slug);
  }

  public getProducts(): ThriftProduct[] {
    return [...this.products];
  }

  public getSubmissions(): EventSubmission[] {
    return [...this.submissions];
  }

  // --- SUBMISSIONS & ANTI-SPAM ---
  public checkDuplicateEvent(title: string, venue: string, dateStr: string): boolean {
    const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const targetTitle = norm(title);
    const targetVenue = norm(venue);
    const targetDay = new Date(dateStr).toDateString();

    const inEvents = this.events.some(
      e => norm(e.title) === targetTitle && norm(e.venue_name) === targetVenue && new Date(e.start_time).toDateString() === targetDay
    );
    const inSubs = this.submissions.some(
      s => s.status === 'pending' && norm(s.event_name) === targetTitle && norm(s.venue_name) === targetVenue
    );
    return inEvents || inSubs;
  }

  public submitEvent(data: Omit<EventSubmission, 'id' | 'status' | 'created_at'>): { success: boolean; message: string; submissionId?: string } {
    // Honeypot anti-bot check
    // @ts-ignore
    if (data.honeypot) {
      return { success: false, message: 'Spam detected. Submission discarded.' };
    }

    // Rate-limit check: maximum 3 submissions per hour in current browser
    const recentSubmissions = this.submissions.filter(
      s => s.created_at && (Date.now() - new Date(s.created_at).getTime()) < 60 * 60 * 1000
    );
    if (recentSubmissions.length >= 3) {
      return { success: false, message: 'Rate limit reached. Please wait before submitting another event.' };
    }

    // Duplicate check
    if (this.checkDuplicateEvent(data.event_name, data.venue_name, data.start_time)) {
      return { success: false, message: 'An event with this name at this venue on this date has already been registered or submitted for review.' };
    }

    const newSub: EventSubmission = {
      ...data,
      id: `sub-${Date.now()}`,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    this.submissions.unshift(newSub);
    this.persist();
    return { success: true, message: 'Event submitted successfully! Awaiting administrator verification.', submissionId: newSub.id };
  }

  // --- ADMIN ACTIONS ---
  public approveSubmission(submissionId: string, adminName: string = 'Admin'): { success: boolean; eventId?: string } {
    const sub = this.submissions.find(s => s.id === submissionId);
    if (!sub) return { success: false };

    const slug = sub.event_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.floor(Math.random() * 900 + 100);

    const newEvent: EventItem = {
      id: `e-${Date.now()}`,
      slug,
      title: sub.event_name,
      tagline: sub.description.slice(0, 90) + '...',
      description: sub.description,
      event_type: (sub.event_type as any) || 'gig',
      genre_tags: sub.genre_tags.length > 0 ? sub.genre_tags : ['Alternative and Indie'],
      status: 'upcoming',
      start_time: sub.start_time,
      venue_name: sub.venue_name,
      venue_address: sub.venue_address,
      city: sub.city,
      accessibility_info: sub.accessibility_notes,
      age_restriction: sub.age_restriction || 'All Ages',
      ticket_price_php: sub.ticket_price_php,
      is_free_entry: sub.is_free_entry,
      ticket_link: sub.official_event_link,
      poster_image_url: sub.poster_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
      organizer_name_override: sub.organizer_name,
      is_verified: true,
      verified_by: `${adminName} (Verified via community review)`,
      last_verified_at: new Date().toISOString(),
      lineups: sub.band_lineup_text ? sub.band_lineup_text.split(',').map((name, i) => ({
        id: `l-${Date.now()}-${i}`,
        event_id: `e-${Date.now()}`,
        performer_name: name.trim(),
        performance_order: i + 1,
        is_headliner: i === 0
      })) : []
    };

    sub.status = 'approved';
    sub.reviewed_at = new Date().toISOString();
    sub.reviewed_by = adminName;
    sub.published_event_id = newEvent.id;

    this.events.unshift(newEvent);
    this.persist();
    return { success: true, eventId: newEvent.id };
  }

  public rejectSubmission(submissionId: string, notes: string = 'Incomplete details or unverified venue', adminName: string = 'Admin') {
    const sub = this.submissions.find(s => s.id === submissionId);
    if (!sub) return false;
    sub.status = 'rejected';
    sub.admin_notes = notes;
    sub.reviewed_at = new Date().toISOString();
    sub.reviewed_by = adminName;
    this.persist();
    return true;
  }

  public updateEventStatus(eventId: string, newStatus: EventItem['status'], adminNotes?: string) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return false;
    event.status = newStatus;
    event.last_verified_at = new Date().toISOString();
    this.persist();
    return true;
  }

  public addEventRecap(eventId: string, recap: Omit<EventRecap, 'id' | 'is_approved' | 'created_at'>) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return false;
    if (!event.recaps) event.recaps = [];
    const newRecap: EventRecap = {
      ...recap,
      id: `r-${Date.now()}`,
      is_approved: true, // auto-approved or admin verified
      created_at: new Date().toISOString()
    };
    event.recaps.push(newRecap);
    this.persist();
    return true;
  }

  public registerBandProfile(band: Omit<BandCollective, 'id' | 'is_verified' | 'created_at'>): { success: boolean; message: string } {
    const slug = band.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (this.bands.some(b => b.slug === slug)) {
      return { success: false, message: 'A band with this name is already registered.' };
    }
    const newBand: BandCollective = {
      ...band,
      id: `b-${Date.now()}`,
      slug,
      is_verified: true,
      created_at: new Date().toISOString()
    };
    this.bands.push(newBand);
    this.persist();
    return { success: true, message: 'Band profile added to CDO Underground directory!' };
  }

  // --- USER BOOKMARK BOOKLET ---
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

  public getSavedEvents(): EventItem[] {
    return this.events.filter(e => this.savedEventIds.has(e.id));
  }

  // --- RESET TO FACTORY DEMO ---
  public resetToFactory() {
    this.events = INITIAL_EVENTS;
    this.genres = INITIAL_GENRES;
    this.bands = INITIAL_BANDS;
    this.submissions = INITIAL_SUBMISSIONS;
    this.products = INITIAL_THRIFT_PRODUCTS;
    this.savedEventIds.clear();
    this.persist();
  }
}

export const dbStore = new CDODatabaseStore();
