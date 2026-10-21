# CDO ARCHIVE — Alternative Editorial & Secondhand Culture

[![Aesthetic Direction](https://img.shields.io/badge/Aesthetic-Alternative%20Editorial-C62032?style=for-the-badge)](index.html)
[![Palette](https://img.shields.io/badge/Palette-%23101010%20%7C%20%23F6F5F2%20%7C%20%23C62032-black?style=for-the-badge)](#color-palette--design-system)
[![Supabase Database](https://img.shields.io/badge/Supabase-PostgreSQL%20RLS-3ECF8E?style=for-the-badge)](supabase/migrations/20261021000000_cdo_underground_schema.sql)
[![React TypeScript](https://img.shields.io/badge/React%2018-TypeScript-3178C6?style=for-the-badge)](src/App.tsx)

> **"STYLE WITHOUT RULES."**  
> *Secondhand fashion. Independent creators. Underground culture. Built in Cagayan de Oro, Philippines.*

---

## 🖤 Creative Direction: Alternative Editorial

The platform has been completely reimagined as a **contemporary independent fashion publication combined with a premium alternative clothing store and an underground creative community**.

Drawing direct inspiration from contemporary European art publications, Japanese deconstructivist streetwear archives, and underground music journals:

- **Oversized Expressive Typography**: Impactful modern sans-serif (`Space Grotesk` / `Manrope`) paired with bespoke editorial serif accents (`Playfair Display`).
- **High-Contrast B&W & Crimson Palette**: Clean white (`#FFFFFF`) and soft editorial white (`#F6F5F2`) for spacious readability, balanced by dramatic charcoal (`#101010`) sections for campaigns and noise shows. Signature crimson (`#C62032`) used selectively for active states, CTA triggers, and geometric framing accents.
- **Asymmetrical Image-Led Layouts**: Generous whitespace, razor-thin fine borders (`#E5E5E5`), and high-fashion model/product photography.
- **No Dated Clutter**: Discarded simulated photocopy grunge, faux tape, and random graffiti in favor of razor-sharp editorial restraint.

---

## 🗂️ Core Architectural Sections

| Route | Feature | Editorial Focus |
|---|---|---|
| `/#home` | **Magazine Cover & Hero** | Headline: *"STYLE WITHOUT RULES."* Subtitle: *"Secondhand fashion. Independent creators. Underground culture. Built in Cagayan de Oro."* Features split-screen photography and direct collection triggers. |
| `/#shop` | **Curated Store Catalog** | Filter by outerwear, denim, reworked studio, tops, bottoms, and DIY patches. Sorting, exact measurement inspection, and single-unit stock status. |
| `/#product/:slug` | **Product Detail Page** | High-resolution multi-angle gallery, condition report, noted imperfections, exact centimeter measurements, and *"Add to Bag"*. |
| `/#diy` | **DIY Lab & Repair** | Headline: *"MAKE IT YOURS."* Sustainable alteration, garment repair tutorials, screenprinting stencils, and duck canvas patch capsules. |
| `/#events` | **CDO Underground Gigs** | Headline: *"FIND YOUR SCENE."* Verified gig registry, concert photography, band lineups, Google Maps coordinates, `.ics` calendar download, and ticket booking links. |
| `/#community` | **Lookbook & Bands** | Editorial issue spreads (`ISSUE 04 // CONCRETE & CRIMSON`), registered CDO band roster with Spotify/Bandcamp streaming links, and booking contacts. |
| `/#about` | **Manifesto & Ethics** | Operating commitments: circular fashion, zero landfill, radical transparency, anti-fast-fashion ethos. |
| `/#admin` | **Moderation Queue** | Administrator portal to review community event submissions, verify promoter links, and publish live records. |

---

## 💎 Shopping Bag & Interaction Design

- **Slide-Out Bag Drawer**: Live subtotal in PHP, free delivery threshold meter (over ₱2,000 for CDO Metro), quantity controls, item removal, and single-click checkout modal.
- **Global Search**: Modal search indexing garments, noise gigs, and bands with instant keyboard shortcut access.
- **Private Archive (Wishlist)**: Heart-saving mechanism allowing users to bookmark pieces.

---

## 🚀 Running the Project

### Standalone Browser Execution (Zero Build Required)
Double-click [`index.html`](index.html) or run:
```powershell
Start-Process msedge.exe "C:\Users\Karl Andre\.gemini\antigravity\scratch\cdo-underground-thrift\index.html"
```

### Full-Stack Vite Development
```bash
npm install
npm run dev
```
