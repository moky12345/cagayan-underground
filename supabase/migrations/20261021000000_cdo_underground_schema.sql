-- ============================================================================
-- CDO UNDERGROUND SCENE & THRIFT COMMUNITY - SUPABASE / POSTGRESQL SCHEMA
-- cagayan de oro city independent music, diy art, and thrift events
-- ============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ----------------------------------------------------------------------------
-- 1. ENUMS & DOMAINS
-- ----------------------------------------------------------------------------
DO $$ BEGIN
    CREATE TYPE event_status_enum AS ENUM ('upcoming', 'sold_out', 'postponed', 'cancelled', 'completed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE submission_status_enum AS ENUM ('pending', 'approved', 'rejected', 'archived');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE collective_type_enum AS ENUM ('band', 'solo_artist', 'collective', 'promoter', 'diy_venue', 'zine_creator', 'visual_artist');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- ----------------------------------------------------------------------------
-- 2. TABLE: event_genres
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_genres (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(64) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'music', -- 'music', 'diy_craft', 'market', 'community'
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 3. TABLE: event_organizers
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_organizers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(160) UNIQUE NOT NULL,
    bio TEXT,
    contact_email VARCHAR(255),
    social_instagram VARCHAR(100),
    social_facebook VARCHAR(255),
    website_url TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 4. TABLE: bands_collectives
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bands_collectives (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(160) UNIQUE NOT NULL,
    type collective_type_enum NOT NULL DEFAULT 'band',
    genre_tags TEXT[] NOT NULL DEFAULT '{}',
    location VARCHAR(120) NOT NULL DEFAULT 'Cagayan de Oro City',
    short_bio TEXT,
    full_bio TEXT,
    profile_image_url TEXT,
    banner_image_url TEXT,
    social_instagram VARCHAR(100),
    social_facebook VARCHAR(255),
    streaming_spotify TEXT,
    streaming_bandcamp TEXT,
    streaming_youtube TEXT,
    booking_contact VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 5. TABLE: band_members
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.band_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    band_id UUID NOT NULL REFERENCES public.bands_collectives(id) ON DELETE CASCADE,
    name VARCHAR(120) NOT NULL,
    role_or_instrument VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    joined_year INT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 6. TABLE: events
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(200) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    tagline VARCHAR(255),
    description TEXT NOT NULL,
    event_type VARCHAR(50) NOT NULL DEFAULT 'gig', -- 'gig', 'diy_workshop', 'thrift_market', 'zine_fair', 'meetup'
    primary_genre_id UUID REFERENCES public.event_genres(id),
    genre_tags TEXT[] NOT NULL DEFAULT '{}',
    status event_status_enum NOT NULL DEFAULT 'upcoming',
    
    -- Date & Time
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ,
    doors_open_time VARCHAR(20),
    
    -- Location
    venue_name VARCHAR(150) NOT NULL,
    venue_address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL DEFAULT 'Cagayan de Oro City',
    barangay VARCHAR(100),
    google_maps_url TEXT,
    accessibility_info TEXT,
    age_restriction VARCHAR(50) DEFAULT 'All Ages', -- 'All Ages', '18+', 'Strictly 18+'
    
    -- Ticketing & Admissions
    ticket_price_php NUMERIC(10, 2) DEFAULT 0.00,
    is_free_entry BOOLEAN DEFAULT FALSE,
    ticket_link TEXT,
    
    -- Imagery & Posters
    poster_image_url TEXT NOT NULL,
    poster_alt_text TEXT,
    poster_credit TEXT,
    
    -- Relations & Links
    organizer_id UUID REFERENCES public.event_organizers(id) ON DELETE SET NULL,
    organizer_name_override VARCHAR(150),
    official_announcement_url TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    verified_by VARCHAR(100),
    last_verified_at TIMESTAMPTZ,
    
    -- Thrift store connection
    curated_thrift_tag VARCHAR(100),
    featured_gig_fit_ids TEXT[] DEFAULT '{}',
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 7. TABLE: event_lineups (Performers, Bands, Speakers, or Instructors)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_lineups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    band_id UUID REFERENCES public.bands_collectives(id) ON DELETE SET NULL,
    performer_name VARCHAR(150) NOT NULL,
    performance_order INT DEFAULT 0,
    set_time VARCHAR(50),
    is_headliner BOOLEAN DEFAULT FALSE,
    special_notes VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 8. TABLE: event_images (Additional flyers, photo albums, zine scan clippings)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    photographer_credit VARCHAR(120),
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 9. TABLE: event_submissions (Community Pending Submissions)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_name VARCHAR(200) NOT NULL,
    genre_tags TEXT[] NOT NULL DEFAULT '{}',
    event_type VARCHAR(50) NOT NULL DEFAULT 'gig',
    description TEXT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    venue_name VARCHAR(150) NOT NULL,
    city VARCHAR(100) NOT NULL DEFAULT 'Cagayan de Oro City',
    venue_address TEXT NOT NULL,
    poster_url TEXT NOT NULL,
    band_lineup_text TEXT,
    ticket_price_php NUMERIC(10, 2) DEFAULT 0.00,
    is_free_entry BOOLEAN DEFAULT FALSE,
    official_event_link TEXT,
    organizer_name VARCHAR(150) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_social VARCHAR(150),
    age_restriction VARCHAR(50) DEFAULT 'All Ages',
    accessibility_notes TEXT,
    
    -- Moderation status
    status submission_status_enum NOT NULL DEFAULT 'pending',
    admin_notes TEXT,
    reviewed_at TIMESTAMPTZ,
    reviewed_by VARCHAR(100),
    published_event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    
    -- Anti-Spam protection
    submitter_ip_hash VARCHAR(64),
    client_user_agent TEXT,
    honeypot_field VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 10. TABLE: event_verification_history (Audit Trail)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_verification_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    verified_by VARCHAR(100) NOT NULL,
    action VARCHAR(50) NOT NULL, -- 'created', 'verified', 'status_changed', 'details_updated', 'archived'
    verification_source TEXT NOT NULL, -- e.g. "Official Instagram flyer post by MindanawNoise"
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 11. TABLE: saved_events (User Bookmark Booklets)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.saved_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL,
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, event_id)
);

-- ----------------------------------------------------------------------------
-- 12. TABLE: event_recaps (Photographer & Attendee Archives)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_recaps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    author_name VARCHAR(120) NOT NULL,
    author_role VARCHAR(80) DEFAULT 'Attendee', -- 'Photographer', 'Organizer', 'Band Member', 'Attendee'
    recap_text TEXT NOT NULL,
    photo_urls TEXT[] DEFAULT '{}',
    is_approved BOOLEAN DEFAULT FALSE,
    approved_by VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 13. TABLE: event_reports (Community safety & moderation)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
    reporter_email VARCHAR(255),
    reason VARCHAR(100) NOT NULL, -- 'cancelled_or_fake', 'wrong_info', 'inappropriate', 'copyright'
    details TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'open', -- 'open', 'investigating', 'resolved', 'dismissed'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- INDEXES FOR FAST POSTER ARCHIVE SEARCH & FILTERING
-- ----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_events_start_time ON public.events(start_time DESC);
CREATE INDEX IF NOT EXISTS idx_events_status ON public.events(status);
CREATE INDEX IF NOT EXISTS idx_events_city ON public.events(city);
CREATE INDEX IF NOT EXISTS idx_events_slug ON public.events(slug);
CREATE INDEX IF NOT EXISTS idx_events_genre_tags ON public.events USING GIN(genre_tags);
CREATE INDEX IF NOT EXISTS idx_bands_slug ON public.bands_collectives(slug);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON public.event_submissions(status);

-- ----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ----------------------------------------------------------------------------
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_genres ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_organizers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bands_collectives ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.band_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_lineups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_verification_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_recaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_reports ENABLE ROW LEVEL SECURITY;

-- Public READ for verified / published events and catalog
CREATE POLICY "Public can view published events"
    ON public.events FOR SELECT
    USING (is_verified = TRUE OR status = 'completed');

CREATE POLICY "Public can view genres"
    ON public.event_genres FOR SELECT
    USING (TRUE);

CREATE POLICY "Public can view organizers"
    ON public.event_organizers FOR SELECT
    USING (TRUE);

CREATE POLICY "Public can view bands and collectives"
    ON public.bands_collectives FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY "Public can view band members"
    ON public.band_members FOR SELECT
    USING (is_active = TRUE);

CREATE POLICY "Public can view lineups"
    ON public.event_lineups FOR SELECT
    USING (TRUE);

CREATE POLICY "Public can view event gallery images"
    ON public.event_images FOR SELECT
    USING (TRUE);

CREATE POLICY "Public can view approved event recaps"
    ON public.event_recaps FOR SELECT
    USING (is_approved = TRUE);

-- Public can submit new events (strictly INSERT only, status enforced to 'pending')
CREATE POLICY "Public can submit events for review"
    ON public.event_submissions FOR INSERT
    WITH CHECK (status = 'pending');

-- Public can report inaccurate events
CREATE POLICY "Public can submit event reports"
    ON public.event_reports FOR INSERT
    WITH CHECK (status = 'open');

-- User bookmark policy
CREATE POLICY "Users can manage their saved events"
    ON public.saved_events FOR ALL
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Admins full access (Role: service_role or admin user metadata)
CREATE POLICY "Admins have full access to events"
    ON public.events FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin' OR auth.role() = 'service_role');

CREATE POLICY "Admins have full access to submissions"
    ON public.event_submissions FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin' OR auth.role() = 'service_role');

CREATE POLICY "Admins have full access to verification history"
    ON public.event_verification_history FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin' OR auth.role() = 'service_role');

CREATE POLICY "Admins have full access to bands"
    ON public.bands_collectives FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin' OR auth.role() = 'service_role');

CREATE POLICY "Admins have full access to recaps"
    ON public.event_recaps FOR ALL
    USING (auth.jwt() ->> 'role' = 'admin' OR auth.role() = 'service_role');
