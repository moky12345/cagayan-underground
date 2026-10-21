// CDO UNDERGROUND EDITORIAL & THRIFT STORE - TYPE DEFINITIONS
// Comprehensive schema for Alternative Fashion E-Commerce & Community Platform

export type EventStatus = 'upcoming' | 'sold_out' | 'postponed' | 'cancelled' | 'completed';
export type SubmissionStatus = 'pending' | 'approved' | 'rejected' | 'archived';
export type CollectiveType = 'band' | 'solo_artist' | 'collective' | 'promoter' | 'diy_venue' | 'zine_creator' | 'visual_artist';

export type GarmentCondition = 
  | 'Pristine Vintage'
  | 'Thrift Grade A'
  | 'Distressed Authentic'
  | 'Studio Rework'
  | 'Deadstock Archive'
  | 'Handmade DIY';

export interface ThriftProduct {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  price_php: number;
  original_estimate_php?: number;
  category: 'outerwear' | 'denim' | 'tops' | 'bottoms' | 'footwear' | 'accessories' | 'reworked' | 'diy_patches';
  subcategory?: string;
  condition: GarmentCondition;
  condition_notes?: string;
  imperfections?: string[];
  size: string;
  measurements?: {
    chest_pit_to_pit_cm?: number;
    length_cm?: number;
    shoulder_cm?: number;
    waist_inches?: number;
    inseam_inches?: number;
    shoe_size_eu?: number;
  };
  material?: string;
  era?: string;
  images: string[];
  in_stock: boolean;
  stock_count: number;
  is_new_arrival: boolean;
  is_reworked: boolean;
  is_featured: boolean;
  editorial_tag?: string;
  description: string;
  styling_notes?: string;
  created_at?: string;
}

export interface CartItem {
  product: ThriftProduct;
  quantity: number;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  stylist: string;
  photographer: string;
  location: string;
  image_url: string;
  model_name?: string;
  description: string;
  featured_product_ids: string[];
  year: number;
  issue_number: string;
}

export interface DIYGuide {
  id: string;
  slug: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  materials_needed: string[];
  summary: string;
  cover_image: string;
  steps: {
    step_number: number;
    heading: string;
    instructions: string;
    image_url?: string;
  }[];
  author: string;
}

export interface EventGenre {
  id: string;
  slug: string;
  name: string;
  category: 'music' | 'diy_craft' | 'market' | 'community';
  description?: string;
}

export interface EventLineup {
  id: string;
  event_id: string;
  band_id?: string;
  performer_name: string;
  performance_order: number;
  set_time?: string;
  is_headliner: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  event_type: 'gig' | 'diy_workshop' | 'thrift_market' | 'zine_fair' | 'meetup';
  genre_tags: string[];
  status: EventStatus;
  start_time: string;
  end_time?: string;
  doors_open_time?: string;
  venue_name: string;
  venue_address: string;
  city: string;
  google_maps_url?: string;
  accessibility_info?: string;
  age_restriction: string;
  ticket_price_php: number;
  is_free_entry: boolean;
  ticket_link?: string;
  poster_image_url: string;
  poster_credit?: string;
  organizer_name_override?: string;
  is_verified: boolean;
  verified_by?: string;
  last_verified_at?: string;
  featured_product_ids?: string[];
  lineups?: EventLineup[];
}

export interface BandCollective {
  id: string;
  name: string;
  slug: string;
  type: CollectiveType;
  genre_tags: string[];
  location: string;
  short_bio: string;
  full_bio: string;
  profile_image_url: string;
  banner_image_url?: string;
  social_instagram?: string;
  streaming_spotify?: string;
  streaming_bandcamp?: string;
  booking_contact?: string;
  is_active: boolean;
  is_verified: boolean;
  members?: string[];
}

export interface EventSubmission {
  id: string;
  event_name: string;
  genre_tags: string[];
  event_type: string;
  description: string;
  start_time: string;
  venue_name: string;
  city: string;
  venue_address: string;
  poster_url: string;
  band_lineup_text?: string;
  ticket_price_php: number;
  is_free_entry: boolean;
  official_event_link?: string;
  organizer_name: string;
  contact_email: string;
  contact_social?: string;
  age_restriction: string;
  accessibility_notes?: string;
  status: SubmissionStatus;
  admin_notes?: string;
  created_at: string;
}
