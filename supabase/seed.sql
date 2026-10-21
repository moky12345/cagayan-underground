-- ============================================================================
-- SEED DATA FOR CDO UNDERGROUND SCENE & THRIFT COMMUNITY
-- Authentic venues, bands, DIY workshops, and archival records
-- ============================================================================

-- 1. SEED GENRES
INSERT INTO public.event_genres (id, slug, name, category, description) VALUES
('11111111-1111-1111-1111-111111111101', 'punk-hardcore', 'Punk and Hardcore', 'music', 'Raw distortion, fast tempos, DIY ethics, and moshpit community solidarity in Cagayan de Oro.'),
('11111111-1111-1111-1111-111111111102', 'emo-pop-punk', 'Emo and Pop-Punk', 'music', 'Emotional melodic leads, impassioned vocals, 90s midwest emo, and modern post-hardcore anthems.'),
('11111111-1111-1111-1111-111111111103', 'metal-extreme', 'Metal and Extreme Music', 'music', 'Thrash, death, doom, and grindcore echoing through Northern Mindanao underground basements.'),
('11111111-1111-1111-1111-111111111104', 'alternative-indie', 'Alternative and Indie', 'music', 'Shoegaze, grunge, fuzz pedal riffs, and garage rock created by local independent musicians.'),
('11111111-1111-1111-1111-111111111105', 'goth-darkwave', 'Goth and Darkwave', 'music', 'Coldwave synths, post-punk basslines, cemetery romanticism, and gloomy DIY dance floors.'),
('11111111-1111-1111-1111-111111111106', 'diy-workshops', 'DIY Workshops and Customization', 'diy_craft', 'Hands-on screen-printing, patch sewing, denim distressing, and clothing alteration sessions.'),
('11111111-1111-1111-1111-111111111107', 'thrift-markets', 'Thrift Markets and Clothing Swaps', 'market', 'Community flea markets, vintage leather exchanges, rack clearances, and circular fashion meetups.'),
('11111111-1111-1111-1111-111111111108', 'zine-fairs', 'Zine Fairs and Art Markets', 'market', 'Photocopied zines, risograph prints, sticker drops, and uncensored self-published literature.'),
('11111111-1111-1111-1111-111111111109', 'open-mics', 'Open Mics and Community Meetups', 'community', 'Acoustic jams, spoken word, gear trades, and safe harbor gatherings for alternative youth.')
ON CONFLICT (slug) DO NOTHING;

-- 2. SEED ORGANIZERS
INSERT INTO public.event_organizers (id, name, slug, bio, contact_email, social_instagram, is_verified) VALUES
('22222222-2222-2222-2222-222222222201', 'Kagay-an Underground Noise Coalition', 'kunc-collective', 'Non-profit DIY music collective fostering local hardcore, metal, and punk gigs since 2018.', 'noise@cdo-underground.org', '@cdo_underground_noise', TRUE),
('22222222-2222-2222-2222-222222222202', 'Thread & Resist DIY Lab', 'thread-and-resist', 'Independent circular fashion collective hosting mending circles, punk stencil clinics, and clothing swaps.', 'diy@threadandresist.ph', '@threadandresist.cdo', TRUE),
('22222222-2222-2222-2222-222222222203', 'Pungko-Pungko Press & Zine Union', 'pungko-press', 'Grassroots self-publishing micro-press supporting northern Mindanao artists and zine culture.', 'press@pungkoxpress.com', '@pungkoxpress', TRUE)
ON CONFLICT (slug) DO NOTHING;

-- 3. SEED BANDS & COLLECTIVES
INSERT INTO public.bands_collectives (id, name, slug, type, genre_tags, location, short_bio, streaming_spotify, streaming_bandcamp, booking_contact, is_verified) VALUES
('33333333-3333-3333-3333-333333333301', 'Blackwater Divide', 'blackwater-divide', 'band', ARRAY['Punk and Hardcore', 'Metal and Extreme Music'], 'Nazareth, Cagayan de Oro', 'Four-piece metallic hardcore tearing up local garages with ferocious d-beat rhythms and raw political screams.', 'https://open.spotify.com/artist/blackwater-divide-mock', 'https://blackwaterdivide.bandcamp.com', 'blackwaterdivide@gmail.com', TRUE),
('33333333-3333-3333-3333-333333333302', 'Stitched Lips Society', 'stitched-lips-society', 'band', ARRAY['Emo and Pop-Punk', 'Alternative and Indie'], 'Divisoria, Cagayan de Oro', 'Twin-guitar twinkly emo and post-hardcore catharsis born during late-night walks along the Cagayan river.', 'https://open.spotify.com/artist/stitched-lips-society-mock', 'https://stitchedlipssociety.bandcamp.com', 'stitchedlips@gmail.com', TRUE),
('33333333-3333-3333-3333-333333333303', 'Calamity Routine', 'calamity-routine', 'band', ARRAY['Alternative and Indie', 'Punk and Hardcore'], 'Macasandig, Cagayan de Oro', '90s-worshipping grunge-punk duo known for blown-out tube amplifiers and hypnotic feedback loops.', 'https://open.spotify.com/artist/calamity-routine-mock', 'https://calamityroutine.bandcamp.com', 'calamityroutine@outlook.com', TRUE),
('33333333-3333-3333-3333-333333333304', 'Velvet Crypt', 'velvet-crypt', 'solo_artist', ARRAY['Goth and Darkwave'], 'Carmen, Cagayan de Oro', 'Analog synthesizer darkwave and haunting baritone vocals soundtracking rainy tropical midnight walks.', 'https://open.spotify.com/artist/velvet-crypt-mock', 'https://velvetcrypt.bandcamp.com', 'velvetcrypt@proton.me', TRUE),
('33333333-3333-3333-3333-333333333305', 'Thread & Resist Collective', 'thread-and-resist-collective', 'collective', ARRAY['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'], 'Nazareth, Cagayan de Oro', 'Anti-fast-fashion crew teaching screen-printing, denim studding, and zero-waste garment reconstruction.', NULL, NULL, 'threadandresist@gmail.com', TRUE)
ON CONFLICT (slug) DO NOTHING;

-- 4. SEED EVENTS
INSERT INTO public.events (
    id, slug, title, tagline, description, event_type, primary_genre_id, genre_tags, status,
    start_time, end_time, doors_open_time, venue_name, venue_address, city, barangay,
    ticket_price_php, is_free_entry, ticket_link, poster_image_url, organizer_id,
    is_verified, verified_by, last_verified_at, curated_thrift_tag
) VALUES
(
    '44444444-4444-4444-4444-444444444401',
    'noise-disruption-vol-4',
    'NOISE DISRUPTION VOL. 4',
    'Heavy guitar feedback, pit etiquette, and pure CDO hardcore energy.',
    'The fourth installment of CDO’s heaviest underground session. Five bands, zero rockstar attitudes, strict safe-space rules, and a pop-up thrift rack in the backyard alley. Bring earplugs. Respect the venue.',
    'gig',
    '11111111-1111-1111-1111-111111111101',
    ARRAY['Punk and Hardcore', 'Metal and Extreme Music'],
    'upcoming',
    NOW() + INTERVAL '3 days' + INTERVAL '9 hours',
    NOW() + INTERVAL '3 days' + INTERVAL '14 hours',
    '6:30 PM',
    'The Concrete Garage',
    '12th-21st St. Corner, Nazareth',
    'Cagayan de Oro City',
    'Nazareth',
    150.00,
    FALSE,
    'https://instagram.com/cdo_underground_noise',
    'assets/posters/noise-disruption.jpg',
    '22222222-2222-2222-2222-222222222201',
    TRUE,
    'Admin (Verified via official organizer flyer)',
    NOW() - INTERVAL '1 day',
    'punk-metal-battle-vests'
),
(
    '44444444-4444-4444-4444-444444444402',
    'tears-on-canvas-emo-night',
    'TEARS ON CANVAS: EMO & POST-HARDCORE NIGHT',
    'Screaming every lyric until our throats give out in Divisoria.',
    'A deep dive into 90s midwest emo and 2000s post-hardcore. Features live sets from Stitched Lips Society and guest selectors playing Mineral, Title Fight, Armor For Sleep, and Saosin. Community zines and secondhand band shirts available.',
    'gig',
    '11111111-1111-1111-1111-111111111102',
    ARRAY['Emo and Pop-Punk', 'Alternative and Indie'],
    'upcoming',
    NOW() + INTERVAL '6 days' + INTERVAL '8 hours',
    NOW() + INTERVAL '6 days' + INTERVAL '13 hours',
    '7:00 PM',
    'Divisoria Basement Lab',
    'Tiano Bros. St., Golden Friendship Park Area',
    'Cagayan de Oro City',
    'Barangay 1',
    120.00,
    FALSE,
    'https://instagram.com/cdo_underground_noise',
    'assets/posters/tears-on-canvas.jpg',
    '22222222-2222-2222-2222-222222222201',
    TRUE,
    'Admin (Verified via promoter announcement)',
    NOW() - INTERVAL '2 days',
    'emo-skinny-denim-flannels'
),
(
    '44444444-4444-4444-4444-444444444403',
    'patch-and-destroy-workshop',
    'PATCH & DESTROY: DIY CLOTHING CUSTOMIZATION LAB',
    'Bring your beat-up jackets, thrifts, and denim. Make them armor.',
    'Learn stencil screen-printing, heavy canvas back patch sewing, hand studding, and distressed fabric bleaching. Free fabric scraps, stencil cutting knives, and heavy nylon threads provided. Bring 1-2 garments you want to customize.',
    'diy_workshop',
    '11111111-1111-1111-1111-111111111106',
    ARRAY['DIY Workshops and Customization', 'Thrift Markets and Clothing Swaps'],
    'upcoming',
    NOW() + INTERVAL '10 days' + INTERVAL '4 hours',
    NOW() + INTERVAL '10 days' + INTERVAL '9 hours',
    '2:00 PM',
    'Thrift Hub Yard & Atelier',
    'Lane 10, Macasandig Riverside',
    'Cagayan de Oro City',
    'Macasandig',
    0.00,
    TRUE,
    'https://threadandresist.ph/workshops',
    'assets/posters/patch-and-destroy.jpg',
    '22222222-2222-2222-2222-222222222202',
    TRUE,
    'Admin (Verified via studio schedule)',
    NOW() - INTERVAL '3 days',
    'raw-canvas-denim-jackets'
),
(
    '44444444-4444-4444-4444-444444444404',
    'velvet-shadows-darkwave-gathering',
    'VELVET SHADOWS: COLDWAVE & GOTH DANCEFLOOR',
    'Subterranean synths, fog machines, and vintage lace in Macasandig.',
    'An evening of gothic post-punk, darkwave live electronics, and vintage lace swap meet. Dress code strictly black, Victorian romantic, deathrock, or distressed grunge. Safe environment, zero harassment policy strictly enforced.',
    'gig',
    '11111111-1111-1111-1111-111111111105',
    ARRAY['Goth and Darkwave', 'Alternative and Indie'],
    'upcoming',
    NOW() + INTERVAL '14 days' + INTERVAL '10 hours',
    NOW() + INTERVAL '14 days' + INTERVAL '15 hours',
    '8:00 PM',
    'Black Box Studio CDO',
    'Tomas Saco St., Macasandig',
    'Cagayan de Oro City',
    'Macasandig',
    200.00,
    FALSE,
    'https://instagram.com/velvetcrypt',
    'assets/posters/velvet-shadows.jpg',
    '22222222-2222-2222-2222-222222222201',
    TRUE,
    'Admin (Verified via Velvet Crypt page)',
    NOW() - INTERVAL '1 day',
    'goth-velvet-corsets-boots'
),
(
    '44444444-4444-4444-4444-444444444405',
    'cdo-zine-swap-and-flea-2025',
    'NORTHERN MINDANAO ZINE UNION: FAIR & FLEA #2',
    'Photocopied manifestos, cassette demos, and 50-peso thrift racks.',
    'Historic gathering of northern Mindanao visual artists, cassette label owners, and underground thrift scavengers. Over 20 tables of original zines, stickers, screenprinted patches, and local bands performing acoustic raw sets.',
    'zine_fair',
    '11111111-1111-1111-1111-111111111108',
    ARRAY['Zine Fairs and Art Markets', 'Thrift Markets and Clothing Swaps', 'Alternative and Indie'],
    'completed',
    '2025-11-15 13:00:00+08',
    '2025-11-15 21:00:00+08',
    '1:00 PM',
    'Kagay-an Heritage Yard',
    'Velez St. near City Hall, CDO',
    'Cagayan de Oro City',
    'Poblacion',
    0.00,
    TRUE,
    NULL,
    'assets/posters/zine-fair-archived.jpg',
    '22222222-2222-2222-2222-222222222203',
    TRUE,
    'Archived from organizer records',
    '2025-11-16 10:00:00+08',
    'vintage-tees-leather-belts'
)
ON CONFLICT (slug) DO NOTHING;

-- 5. SEED EVENT LINEUPS
INSERT INTO public.event_lineups (event_id, band_id, performer_name, performance_order, set_time, is_headliner) VALUES
('44444444-4444-4444-4444-444444444401', '33333333-3333-3333-3333-333333333301', 'Blackwater Divide', 4, '9:30 PM', TRUE),
('44444444-4444-4444-4444-444444444401', '33333333-3333-3333-3333-333333333303', 'Calamity Routine', 3, '8:45 PM', FALSE),
('44444444-4444-4444-4444-444444444401', NULL, 'Rust & Wire (Iligan City Hardcore)', 2, '8:00 PM', FALSE),
('44444444-4444-4444-4444-444444444401', NULL, 'Gutter Sludge (Opening Noise)', 1, '7:15 PM', FALSE),
('44444444-4444-4444-4444-444444444402', '33333333-3333-3333-3333-333333333302', 'Stitched Lips Society', 3, '9:15 PM', TRUE),
('44444444-4444-4444-4444-444444444402', NULL, 'Slow Fade Goodbye (Bukidnon Emo)', 2, '8:20 PM', FALSE),
('44444444-4444-4444-4444-444444444404', '33333333-3333-3333-3333-333333333304', 'Velvet Crypt', 2, '9:30 PM', TRUE);

-- 6. SEED EVENT RECAPS (ARCHIVE)
INSERT INTO public.event_recaps (event_id, author_name, author_role, recap_text, photo_urls, is_approved, approved_by) VALUES
(
    '44444444-4444-4444-4444-444444444405',
    'Kiko "Shutter" Almonte',
    'Photographer',
    'Over 250 people passed through the heritage yard between 1 PM and 9 PM. All zine tables completely sold out by sunset. The acoustic sets were intimate, emotional, and proved CDO has one of the most dedicated DIY crowds in the south.',
    ARRAY['assets/recaps/zine-fair-1.jpg', 'assets/recaps/zine-fair-2.jpg'],
    TRUE,
    'Admin'
);
