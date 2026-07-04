# BALAUR — Romanian gaming & streaming crew

One-page marketing site for a six-member Romanian creator collective.
Design direction: **Neon Lobby** (premium dark + game-UI) with Casa Haos humor
and a lights-on sponsor section. Full research & roadmap: [`docs/PLAN.md`](docs/PLAN.md).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · next-intl (RO default, EN at `/en`) · deploys on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit the content (all placeholder right now)

| What | Where |
|---|---|
| Crew name, tagline, socials, Discord, email | `src/content/site.ts` |
| Members, ranks, funny achievements, statuses | `src/content/members.ts` |
| Games rotation & IRL challenges | `src/content/games.ts` |
| Clips / schedule | `src/content/clips.ts`, `src/content/events.ts` |
| UI copy (RO/EN) | `messages/ro.json`, `messages/en.json` |

Member photos: drop files in `public/members/<slug>.jpg`, then swap the gradient
avatar in `src/components/member-card.tsx` for `next/image`.

## Integrations (optional, env-gated)

- **Real live status:** set `TWITCH_CLIENT_ID` + `TWITCH_CLIENT_SECRET` and fill
  `site.twitchChannels` (same order as members) — see `src/lib/live.ts`.
  Until then the lobby shows demo statuses labeled "date demo".
- **Contact form email:** set `RESEND_API_KEY`. Without it the form politely
  points visitors to the direct email address.
