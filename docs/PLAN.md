# Website Plan — Romanian Gaming/Streaming Creator Collective

> Research + creative direction + technical plan for v1. Prepared 2026-07-04, pre-approval.
> Visual pitch (3 directions, live mocks): https://claude.ai/code/artifact/3aa82501-d9d4-4160-8cb7-72440f2786c7

## 1. Market research summary

Sites reviewed/researched: OfflineTV, Sidemen, AMP, 100 Thieves, Sentinels, Karmine Corp, FaZe,
Awwwards gaming winners, 2026 web-design trend reports.

**What good creator/team sites do well**
- **Dark ground + one lit accent.** Dark backgrounds with a single neon/high-contrast accent dominate
  competitive gaming design. Condensed/heavy sans headlines (Barlow Condensed, Rajdhani family vibes).
- **Clear priority order.** The best sites make it obvious where to look: Roster → Schedule → Shop → News,
  ordered by revenue priority.
- **Restrained motion beats maximal motion.** FaZe = heavy end; most award-level sites lean restraint.
  Kinetic type is used sparingly (hero + section transitions only).
- **Mobile decides.** 56%+ of esports audience is mobile; 1s-load sites convert ~3x better than 5s.
- **Bento layouts + dark default** are the 2026 mainstream (Apple/Google/Spotify product pages).
- **3D/WebGL is a performance trap** when used site-wide; winners scope it to one hero moment.

**The gap (our opportunity):** OfflineTV's own site is a merch shop — members are literally just Twitter
links. Nobody in the creator-collective space presents *members* with the care of a game UI (ranks,
status, personas). An org-quality "crew" experience is an open lane, especially in Romania (Romanian
Esports League exists; no strong creator-collective brand site found).

## 2. Three creative directions

### A — "Neon Lobby" (premium/dark/neon) ← recommended base
The site *is* a party lobby; visitors "join". Members = player slots with live status; ranks as game-UI chips.
- Ground: deep space-navy `#0B0B14` (never pure black), ambient glow blobs, subtle grain
- Accents: violet `#7C3AED`, rose `#F43F5E`, cyan `#22D3EE`
- Type: Clash Display or Space Grotesk headlines · JetBrains Mono HUD labels/stats · Inter body
- Motion: kinetic hero type, 3D card tilt, pulsing LIVE dots, glowing rank borders, transition sweep
- Member card: hover flips real photo → gaming persona art

### B — "Casa Haos" (fun/chaotic creator-house)
Digital scrapbook of the gaming house: polaroids, tape, sticker badges, marker doodles, RO humor.
- Ground: warm cream `#F3E9D7`; accents orange `#FF6B35`, taxi yellow `#FFD84D`, teal `#2EC4B6`, ink `#241806`
- Type: Cabinet Grotesk Black + hand-scrawl SVG accents
- Motion: springy/bouncy, draggable stickers, confetti microbursts
- Risk: hardest to keep premium; sponsors may read it as unserious

### C — "Studio" (clean professional sponsor-friendly)
Editorial media-brand look; talent one-pagers, bento stats, screenshot-able media kit.
- Ground: off-white `#FAFAF7`, ink `#16181D`, single accent `#1D4ED8`
- Type: Satoshi/General Sans; mono only for data
- Motion: restrained — staggered reveals, counters, slow parallax
- Risk: least gaming soul

**Recommendation: A base + B's humor (persona flips, funny sticker achievements, RO microcopy)
+ C's rigor in a lights-on sponsor/media-kit section.**

## 3. Naming shortlist
Collision-checked via web search (no direct hits on top picks). Final call needs domain+handle sweep.

| Name | Notes |
|---|---|
| **BALAUR** ★ | Many-headed Romanian dragon — one head per member. Ownable, scalable, logo-ready. balaur.gg |
| **LOBBY 404** ★ | Best from your list. "The lobby that shouldn't exist." Pairs with lobby concept. lobby404.gg |
| NOSAVE CLUB | IRL-challenge fit (no save points IRL); great merch wordmark |
| THE LAST LOBBY | Cinematic "one more game"; long |
| STRIGOI | Folklore-dark wildcard; skews horror |
| ZMEU CLUB | Playful folklore wildcard |

Taglines to explore (Balaur): "Șase capete. Un singur lobby." / "Many heads. One crew."
(Lobby 404): "Lobby not found. Join anyway."

## 4. Information architecture (v1 = one page + anchors)

```
/                      Home
 ├─ #hero              Name, tagline, live-status bar, CTA (Discord / watch)
 ├─ #crew              6 member cards (photo→persona flip, role, ranks, socials)
 ├─ #games             Online / board / party / IRL — bento tabs
 ├─ #content           Curated latest clips (YT/TikTok/Twitch embeds)
 ├─ #schedule          Upcoming streams & events
 ├─ #story             The concept: RO gaming house / collective
 ├─ #sponsors          Partner strip + "work with us" (lights-on section)
 ├─ #community         Discord CTA + newsletter
 └─ #contact           Collab form
/media-kit             v1.5/v2 (sponsor one-pager)
/members/[slug]        v2
/privacy, /terms       minimal
i18n: RO default, EN toggle (next-intl from day 1 — retrofitting i18n is painful)
```

## 5. Technical stack (all Vercel-native)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router, RSC) + TypeScript | Dominant 2026 stack, Vercel-native, scales to admin/CMS later |
| Styling | **Tailwind CSS v4** + shadcn/ui (selective) | Speed + owned components |
| Motion | **Motion** (framer-motion v12) + CSS micro-interactions | De-facto standard for premium landings |
| 3D (scoped) | React Three Fiber + drei, lazy-loaded, hero/easter-egg only | Perf-safe |
| Content v1 | Typed TS content files in repo (no DB) | Zero infra; Turso+Drizzle later without rework |
| Live status | Route handler → Twitch Helix + YouTube API, 60s revalidate | Real "LIVE" badges |
| Forms | Server Action + Resend (email) + optional Discord webhook | No backend service |
| i18n | next-intl (RO/EN) | Day-1 requirement |
| Fonts/Images | next/font + next/image (AVIF/WebP) | CWV green |
| Analytics | Vercel Analytics + Speed Insights | Free tier |
| SEO | Metadata API + @vercel/og dynamic OG cards per member | Shareability |

## 6. Animation & avatar strategy

Layered budget: CSS for micro (glow/pulse/tilt) → Motion for scroll/stagger/layout → WebGL only in one
scoped moment. `prefers-reduced-motion` respected. Targets: LCP < 2.5s mobile, Lighthouse ≥ 90.

**Avatars from the 6 real photos — realistic options**
1. **AI-stylized persona art** from photos (Midjourney/GPT-image/etc., one shared style prompt) —
   fast/cheap, needs one consistent style pass. → **v1 pick** (hover flip: photo → persona)
2. Commissioned artist (~€40–150/head) — most consistent, 1–3 weeks. → v1.5 upgrade path
3. Pure CSS treatment of photos (duotone/halftone/glitch) — ships day 1 with zero new assets. → v1 fallback
4. Photo→3D avatar: **Ready Player Me shut down Jan 31 2026** (Netflix acquisition). Live alternatives:
   Avaturn, MetaPerson (Avatar SDK), 3D AI Studio → GLB → R3F "virtual lobby". → v2/v3 easter egg
5. Rive/Lottie rigged 2D — smooth, higher design effort. → optional for rank badges

**Note:** member photos currently live only in the chat thread; they must be added to the repo
(`/public/members/`) or re-sent during the build session.

## 7. MVP scope (v1)

- One-page home with all sections above; RO/EN
- 6 member cards: photo, persona flip (or CSS treatment), role, 2–3 ranks, funny achievement, socials
- Live-status bar (Twitch/YT polling) with graceful "offline" state
- Curated clips grid (manual list), schedule (manual list), contact form, Discord CTA
- Full mobile pass, a11y pass, SEO/OG, deployed on Vercel + domain
- **Not in v1:** DB, admin, CMS, member detail pages, merch, auto-pulled clips, newsletter backend

## 8. v2 / v3

- **v2:** Turso + Drizzle content, protected admin dashboard, /members/[slug] pages, auto schedule
  from Twitch, auto clips, /media-kit with real stats, newsletter (Resend Audiences), news/blog
- **v3:** merch (Fourthwall/Shopify Storefront), events + RSVP, 3D lobby easter egg, community
  features (polls/predictions), sponsor portal, PWA

## 9. Turso data model (Drizzle, v2)

```
members(id, slug, name, nickname, role, bio_ro, bio_en, photo_url, persona_url, status, sort_order)
member_socials(id, member_id, platform, handle, url)
member_ranks(id, member_id, game_id, rank_label, rank_value, season, icon, verified_at)
achievements(id, member_id NULL=team, kind[tournament|milestone|funny], title, description, date, icon)
games(id, slug, name, category[online|board|party|irl], cover_url, active)
member_games(member_id, game_id, is_main)
events(id, title, type[stream|tournament|irl], starts_at, ends_at, platform, url, status)
clips(id, title, platform, embed_id, url, thumbnail, published_at, featured)
sponsors(id, name, tier, logo_url, url, active, starts_at, ends_at)
inquiries(id, name, email, company, type, message, created_at, handled)
```

## 10. Implementation plan

- **Phase 0 (you):** pick direction + name; send photos as files; member names/roles/games/ranks/socials;
  Twitch/YT channel names; domain preference
- **Phase 1:** scaffold — Next 16, Tailwind 4, tokens from chosen direction, fonts, next-intl, shadcn, Motion
- **Phase 2:** sections in order: hero → crew → games → content → schedule → story → sponsors → community → contact
- **Phase 3:** motion pass, mobile pass, a11y (reduced-motion, contrast), perf (Lighthouse ≥ 90 mobile)
- **Phase 4:** SEO/OG, analytics, Vercel deploy, domain
- **Phase 5 (post-launch):** persona art integration, live APIs, media kit

Estimated: 2–4 build sessions for v1.
