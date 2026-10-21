// CDO Underground Scene & Thrift Community Type Definitions
// Generated from Supabase PostgreSQL Schema

export type EventStatus = 'upcoming' | 'sold_out' | 'postponed' | 'cancelled' | 'completed';
export type SubmissionStatus = 'pending' | 'approved' | 'rejected' | 'archived';
export type CollectiveType = 'band' | 'solo_artist' | 'collective' | 'promoter' | 'diy_venue' | 'zine_creator' | 'visual_artist';

export interface EventGenre {
  id: string;
  slug: string;
  name: string;
  category: 'music' | 'diy_craft' | 'market' | 'community';
  description?: string;
  created_at?: string;
}

export interface EventOrganizer {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  contact_email?: string;
  social_instagram?: string;
  social_facebook?: string;
  website_url?: string;
  is_verified: boolean;
  created_at?: string;
}

export interface BandMember {
  id: string;
  band_id: string;
  name: string;
  role_or_instrument: string;
  is_active: boolean;
  joined_year?: number;
}

export interface BandCollective {
  id: string;
  name: string;
  slug: string;
  type: CollectiveType;
  genre_tags: string[];
  location: string;
  short_bio?: string;
  full_bio?: string;
  profile_image_url?: string;
  banner_image_url?: string;
  social_instagram?: string;
  social_facebook?: string;
  streaming_spotify?: string;
  streaming_bandcamp?: string;
  streaming_youtube?: string;
  booking_contact?: string;
  is_active: boolean;
  is_verified: boolean;
  members?: BandMember[];
  created_at?: string;
}

export interface EventLineup {
  id: string;
  event_id: string;
  band_id?: string;
  performer_name: string;
  performance_order: number;
  set_time?: string;
  is_headliner: boolean;
  special_notes?: string;
  band?: BandCollective;
}

export interface EventImage {
  id: string;
  event_id: string;
  image_url: string;
  caption?: string;
  photographer_credit?: string;
  display_order: number;
}

export interface EventRecap {
  id: string;
  event_id: string;
  author_name: string;
  author_role: string;
  recap_text: string;
  photo_urls: string[];
  is_approved: boolean;
  approved_by?: string;
  created_at?: string;
}

export interface EventVerificationLog {
  id: string;
  event_id: string;
  verified_by: string;
  action: string;
  verification_source: string;
  notes?: string;
  created_at?: string;
}

export interface EventReport {
  id: string;
  event_id: string;
  reporter_email?: string;
  reason: string;
  details: string;
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  created_at?: string;
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
  reviewed_at?: string;
  reviewed_by?: string;
  published_event_id?: string;
  created_at?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  event_type: 'gig' | 'diy_workshop' | 'thrift_market' | 'zine_fair' | 'meetup';
  primary_genre_id?: string;
  genre_tags: string[];
  status: EventStatus;
  start_time: string;
  end_time?: string;
  doors_open_time?: string;
  venue_name: string;
  venue_address: string;
  city: string;
  barangay?: string;
  google_maps_url?: string;
  accessibility_info?: string;
  age_restriction: string;
  ticket_price_php: number;
  is_free_entry: boolean;
  ticket_link?: string;
  poster_image_url: string;
  poster_alt_text?: string;
  poster_credit?: string;
  organizer_id?: string;
  organizer_name_override?: string;
  organizer?: EventOrganizer;
  official_announcement_url?: string;
  is_verified: boolean;
  verified_by?: string;
  last_verified_at?: string;
  curated_thrift_tag?: string;
  featured_gig_fit_ids?: string[];
  lineups?: EventLineup[];
  images?: EventImage[];
  recaps?: EventRecap[];
  created_at?: string;
  updated_at?: string;
}

export interface ThriftProduct {
  id: string;
  title: string;
  price_php: number;
  category: 'battle_vest' | 'denim' | 'band_tee' | 'boots' | 'diy_patch_set' | 'choker' | 'flannel';
  condition: 'Distressed Vintage' | 'Thrift Grade A' | 'Upcycled Rework' | 'DIY Canvas';
  size: string;
  image_url: string;
  underground_tag: string;
  description: string;
}
