# CDO UNDERGROUND — Gigs, Events & DIY Community Platform

[![Cagayan de Oro DIY](https://img.shields.io/badge/CDO-Underground%20Scene-881313?style=for-the-badge)](index.html)
[![Supabase Postgres](https://img.shields.io/badge/Supabase-PostgreSQL%20RLS-3ECF8E?style=for-the-badge)](supabase/migrations/20261021000000_cdo_underground_schema.sql)
[![React TypeScript](https://img.shields.io/badge/React%2018-TypeScript-3178C6?style=for-the-badge)](src/App.tsx)
[![Ethos](https://img.shields.io/badge/Ethos-Buy%20Secondhand.%20Make%20Your%20Own-D97706?style=for-the-badge)](#the-scene-identity)

> **"BUY SECONDHAND. MAKE YOUR OWN. SUPPORT THE SCENE."**  
> *A shared online home for local music fans, independent artists, thrift shoppers, zine makers, underground bands, and event organizers in Cagayan de Oro City and Northern Mindanao.*

---

## ⚡ Executive Summary

The **CDO Underground** section integrates Cagayan de Oro City's independent subcultural music and DIY arts community with an ethical circular secondhand thrift shop. Designed as an **underground gig poster archive mixed with a modern community events platform**, it provides a permanent digital home for CDO's emo, punk, hardcore, metal, alternative, grunge, and goth scenes.

---

## 🗂️ Core Routes & Architecture

| Route | View Name | Description |
|---|---|---|
| `/community/events` | **Underground Events Page** | "THE SCENE IS ALIVE." Gig poster flyer grid, search, and genre/date filters. |
| `/community/events/:slug` | **Event Detail Page** | Full flyer inspection, performer lineup, venue maps, ticket links, `.ics` calendar download, share, and "Build Your Gig Fit" thrift cross-sell. |
| `/community/bands` | **Band & Collective Directory** | Searchable roster of CDO bands, zine presses, and promoters with streaming links and booking contacts. |
| `/community/calendar` | **DIY Community Calendar** | Chronological and month-matrix calendar uniting live gigs with patch-making workshops, thrift swaps, and mending clinics. |
| `/community/archive` | **The Gig Archive** | Permanent historical record of completed CDO underground shows, photo galleries, and attendee recaps. |
| `/community/submit` | **Submit a Gig** | Community submission form with anti-spam honeypot, image validation, rate limits, and duplicate-event checks. |
| `/shop` | **Gig Fits & Merch** | Curated secondhand battle vests, raw canvas patches, vintage denim, and goth accessories. |
| `/admin` | **Moderation Queue** | Admin dashboard to review community submissions, verify organizer announcements, and publish live listings. |

---

## 🛢️ Database Schema & Supabase Architecture

The database layer is located in [`supabase/migrations/20261021000000_cdo_underground_schema.sql`](supabase/migrations/20261021000000_cdo_underground_schema.sql) and implements **all 12 required tables**:

1. `events`: Primary table for published gig flyers, ticket prices, doors-open times, and verification credentials.
2. `event_genres`: Taxonomy for Punk/Hardcore, Emo/Pop-Punk, Metal, Indie, Goth, DIY Workshops, Thrift Swaps, Zines, and Open Mics.
3. `event_submissions`: Moderation queue for community-submitted events.
4. `event_organizers`: Profiles for verified promoters, collectives, and DIY spaces.
5. `bands_collectives`: Directory of local and visiting musical acts and zine makers.
6. `band_members`: Lineup roster for registered bands.
7. `event_lineups`: Ordered set times and headliner flags for each gig.
8. `event_images`: High-resolution flyer scans and photo archive galleries.
9. `event_verification_history`: Comprehensive audit log recording who verified an event and the verified source link.
10. `saved_events`: User bookmark booklet enabling saving flyers locally and to profile.
11. `event_reports`: Community reporting system for inaccurate or cancelled gigs.
12. `event_recaps`: Post-show reports and photo albums submitted by photographers and attendees.

### Security, RLS & Moderation

- **Row Level Security (RLS)**: Enforced across all tables. Public visitors have read-only access to published and completed gigs.
- **Strict Submission Isolation**: Ordinary users can only insert into `event_submissions` with status locked to `pending`.
- **Anti-Spam & Honeypots**: Forms include hidden honeypot traps and client-side hourly submission rate-limits.
- **Duplicate Check**: Prevents duplicate listings by matching event name, venue name, and event date.

---

## 🎨 Visual Design Philosophy

- **Distressed Gig Poster Aesthetics**: Handcrafted tape corners, photocopied paper textures, subtle paper grain, and staple details.
- **Red Rubber Ink Stamps**: Distinctive stamps for `"VERIFIED GIG"`, `"SOLD OUT"`, `"COMMUNITY REVIEW"`, and `"OFFICIAL SCENE REGISTRY"`.
- **Color Palette**: Oxblood (`#881313`, `#ad1717`), Aged Paper (`#f3ede2`, `#e2d7c5`), High-contrast Deep Ink (`#0a0a0a`), and Aged Brass.
- **Typography**: Oversized condensed poster headlines (`Bebas Neue`), typewriter annotations (`Special Elite`), and clean grotesque metadata (`Space Grotesk`).
- **Empty States**: Dedicated design displaying `"NOTHING ON THE BILL YET?"` with direct action buttons when zero results match.

---

## 🚀 Running the Application

### 1. Instant Browser Execution (Zero Dependencies)
You can directly open `index.html` in Microsoft Edge or Google Chrome:
```powershell
Start-Process msedge.exe "$PWD\index.html"
# or
Start-Process chrome.exe "$PWD\index.html"
```

### 2. Node.js & Vite Development
```bash
npm install
npm run dev
```

---

## 🤝 Thrift Shop & Underground Community Integration

- **"Build Your Gig Fit"**: Shows curated secondhand clothing pieces (battle vests, tartan flannels, combat boots, canvas patch sets) alongside relevant punk, metal, and goth events.
- **Respectful Autonomy**: Clearly separates store offerings from artist endorsements, supporting local circular fashion without commercial exploitation.
