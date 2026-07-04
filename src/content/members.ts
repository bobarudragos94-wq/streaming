/**
 * ══════════════════════════════════════════════════════════════════
 *  PLACEHOLDER MEMBER DATA — edit every field.
 *  `photoNote` says which of the 6 uploaded photos each slot maps to.
 *  Real photos go in /public/members/<slug>.jpg and get wired in
 *  MemberCard once added to the repo.
 *  `status` is DEMO data until the Twitch integration is configured.
 * ══════════════════════════════════════════════════════════════════
 */

export type RankTone = "violet" | "ember" | "volt";
export type MemberStatus = "live" | "queue" | "recording" | "offline";

export type Member = {
  slug: string;
  name: string;
  nick: string;
  photoNote: string;
  role: { ro: string; en: string };
  ranks: { game: string; label: string; tone: RankTone }[];
  sticker: { ro: string; en: string };
  status: MemberStatus;
  stats: { wins: string; hours: string; main: string };
  socials: { platform: "twitch" | "youtube" | "tiktok" | "instagram"; url: string }[];
  /** hue pair for the generated avatar gradient until real photos land */
  hues: [number, number];
  initials: string;
};

export const members: Member[] = [
  {
    slug: "dragos",
    name: "Dragoș",
    nick: "Cap",
    photoNote: "photo 6 — light blue suit, lawn selfie",
    role: { ro: "Fondator · Shot-caller", en: "Founder · Shot-caller" },
    ranks: [
      { game: "VAL", label: "Diamond II", tone: "ember" },
      { game: "LoL", label: "Emerald IV", tone: "violet" },
      { game: "Colonist", label: "Top 3%", tone: "volt" },
    ],
    sticker: { ro: "Tiranul Catanului", en: "Catan Tyrant" },
    status: "live",
    stats: { wins: "412", hours: "1.2K", main: "Jett" },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [258, 340],
    initials: "DR",
  },
  {
    slug: "alexandra",
    name: "Alexandra",
    nick: "Lexa",
    photoNote: "photo 1 — blonde, sage dress, garden",
    role: { ro: "Cozy streams · Variety", en: "Cozy streams · Variety" },
    ranks: [
      { game: "Stardew", label: "Perfection", tone: "volt" },
      { game: "Sims 4", label: "10K ore", tone: "violet" },
      { game: "Colonist", label: "Gold III", tone: "ember" },
    ],
    sticker: { ro: "A adormit pe stream", en: "Fell asleep on stream" },
    status: "offline",
    stats: { wins: "∞", hours: "980", main: "Cozy" },
    socials: [
      { platform: "youtube", url: "https://youtube.com/@REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [160, 200],
    initials: "AL",
  },
  {
    slug: "cristina",
    name: "Cristina",
    nick: "Pixel",
    photoNote: "photo 2 — glasses, dark hair, overalls, park bench",
    role: { ro: "Strategy brain · Art", en: "Strategy brain · Art" },
    ranks: [
      { game: "LoL", label: "Platinum I", tone: "violet" },
      { game: "Chess", label: "1650 ELO", tone: "volt" },
      { game: "Catan", label: "Negociator șef", tone: "ember" },
    ],
    sticker: { ro: "Desenează în pauze de queue", en: "Draws between queues" },
    status: "recording",
    stats: { wins: "233", hours: "870", main: "Support" },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
    ],
    hues: [280, 220],
    initials: "CR",
  },
  {
    slug: "andrei",
    name: "Andrei",
    nick: "Zen",
    photoNote: "photo 3 — cream shirt, tropical background",
    role: { ro: "Aim & calm · FPS", en: "Aim & calm · FPS" },
    ranks: [
      { game: "CS2", label: "15K Premier", tone: "ember" },
      { game: "VAL", label: "Ascendant I", tone: "violet" },
      { game: "EA FC", label: "Div 3", tone: "volt" },
    ],
    sticker: { ro: "N-a dat rage quit niciodată*", en: "Never rage quit*" },
    status: "offline",
    stats: { wins: "389", hours: "1.4K", main: "AWP" },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "youtube", url: "https://youtube.com/@REPLACE_ME" },
    ],
    hues: [190, 150],
    initials: "AN",
  },
  {
    slug: "vlad",
    name: "Vlad",
    nick: "Drip",
    photoNote: "photo 4 — glasses, black shirt, seaside sunset",
    role: { ro: "IRL menace · Fashion", en: "IRL menace · Fashion" },
    ranks: [
      { game: "Fortnite", label: "Unreal", tone: "violet" },
      { game: "EA FC", label: "Div 1", tone: "ember" },
      { game: "Uno", label: "Campion +4", tone: "volt" },
    ],
    sticker: { ro: "Cel mai bine îmbrăcat din lobby", en: "Best dressed in the lobby" },
    status: "offline",
    stats: { wins: "301", hours: "760", main: "Builds" },
    socials: [
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [30, 340],
    initials: "VL",
  },
  {
    slug: "radu",
    name: "Radu",
    nick: "Hype",
    photoNote: "photo 5 — festival, sunglasses, mesh tee",
    role: { ro: "Chaos engine · Party games", en: "Chaos engine · Party games" },
    ranks: [
      { game: "Among Us", label: "Impostor 63%", tone: "ember" },
      { game: "Mario Kart", label: "150cc ★", tone: "volt" },
      { game: "VAL", label: "Gold II", tone: "violet" },
    ],
    sticker: { ro: "Interzis la microfon după 23:00", en: "Mic banned after 11PM" },
    status: "queue",
    stats: { wins: "178", hours: "1.1K", main: "Chaos" },
    socials: [
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
    ],
    hues: [0, 45],
    initials: "RA",
  },
];
