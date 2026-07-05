/**
 * ══════════════════════════════════════════════════════════════════
 *  MEMBER DATA — names are real, everything else is editable.
 *  `photoNote` says which of the 6 uploaded photos each slot maps to.
 *
 *  Image slots (picked up automatically once the files exist):
 *    /public/members/<slug>.jpg   → real photo on the card front
 *    /public/personas/<slug>.jpg  → fantasy character art on the back
 *  Generation prompts per member: docs/PERSONA_PROMPTS.md
 *
 *  `status` is DEMO data until the Twitch integration is configured.
 * ══════════════════════════════════════════════════════════════════
 */

export type RankTone = "violet" | "ember" | "volt";
export type MemberStatus = "live" | "queue" | "recording" | "offline";

export type Persona = {
  /** RPG class shown on the card back */
  class: { ro: string; en: string };
  /** which head of the balaur this member is */
  head: { ro: string; en: string };
  element: { ro: string; en: string };
  sigil: "swords" | "target" | "book" | "waves" | "sword" | "zap" | "wind";
  lore: { ro: string; en: string };
  /** 0–100, rendered as animated stat bars */
  stats: { attack: number; defense: number; mind: number; charisma: number };
};

export type Member = {
  slug: string;
  name: string;
  nick: string;
  photoNote: string;
  role: { ro: string; en: string };
  ranks: { game: string; label: string; tone: RankTone }[];
  sticker: { ro: string; en: string };
  status: MemberStatus;
  persona: Persona;
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
    persona: {
      class: { ro: "Voievod", en: "Voivode Warlord" },
      head: { ro: "Capul de Foc", en: "Head of Fire" },
      element: { ro: "Foc", en: "Fire" },
      sigil: "swords",
      lore: {
        ro: "Conduce fiecare raid din prima linie. Sabia i-a fost călită într-o mie de ranked-uri pierdute la un round.",
        en: "Leads every raid from the front line. His blade was tempered in a thousand ranked games lost by one round.",
      },
      stats: { attack: 88, defense: 74, mind: 70, charisma: 85 },
    },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [258, 340],
    initials: "DR",
  },
  {
    slug: "naty",
    name: "Naty",
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
    persona: {
      class: { ro: "Amazoană a Pădurii", en: "Forest Amazon" },
      head: { ro: "Capul Pădurii", en: "Head of the Forest" },
      element: { ro: "Natură", en: "Nature" },
      sigil: "target",
      lore: {
        ro: "O singură săgeată și lobby-ul se liniștește. Pădurea o ascultă; chat-ul, mai rar.",
        en: "One arrow and the lobby goes quiet. The forest listens to her; the chat, less so.",
      },
      stats: { attack: 72, defense: 58, mind: 80, charisma: 90 },
    },
    socials: [
      { platform: "youtube", url: "https://youtube.com/@REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [160, 200],
    initials: "NA",
  },
  {
    slug: "andreea",
    name: "Andreea",
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
    persona: {
      class: { ro: "Arcanistă", en: "Arcanist" },
      head: { ro: "Capul Arcanei", en: "Head of Arcana" },
      element: { ro: "Arcan", en: "Arcane" },
      sigil: "book",
      lore: {
        ro: "Vede cu douăsprezece mutări înainte. În grimoire: strategii, rune și schițe din pauzele de queue.",
        en: "Sees twelve moves ahead. Her grimoire holds strategies, runes and sketches from queue breaks.",
      },
      stats: { attack: 64, defense: 70, mind: 95, charisma: 76 },
    },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
    ],
    hues: [280, 220],
    initials: "AN",
  },
  {
    slug: "bogdan",
    name: "Bogdan",
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
    persona: {
      class: { ro: "Călugăr al Liniștii", en: "Monk of Stillness" },
      head: { ro: "Capul Fulgerului", en: "Head of Lightning" },
      element: { ro: "Fulger", en: "Lightning" },
      sigil: "wind",
      lore: {
        ro: "O respirație, un fulger. Furia e pentru cei fără aim.",
        en: "One breath, one bolt. Rage is for those without aim.",
      },
      stats: { attack: 92, defense: 80, mind: 78, charisma: 60 },
    },
    socials: [
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
      { platform: "youtube", url: "https://youtube.com/@REPLACE_ME" },
    ],
    hues: [205, 262],
    initials: "BO",
  },
  {
    slug: "robert",
    name: "Robert",
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
    persona: {
      class: { ro: "Duelist al Amurgului", en: "Dusk Duelist" },
      head: { ro: "Capul Amurgului", en: "Head of Dusk" },
      element: { ro: "Amurg", en: "Dusk" },
      sigil: "sword",
      lore: {
        ro: "Parează lovituri și priviri cu aceeași eleganță. Ținuta face parte din build.",
        en: "Parries blows and stares with equal elegance. The outfit is part of the build.",
      },
      stats: { attack: 78, defense: 55, mind: 68, charisma: 94 },
    },
    socials: [
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
      { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
    ],
    hues: [30, 340],
    initials: "RO",
  },
  {
    slug: "itza",
    name: "Itza",
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
    persona: {
      class: { ro: "Berserker al Furtunii", en: "Storm Berserker" },
      head: { ro: "Capul Furtunii", en: "Head of Storm" },
      element: { ro: "Furtună", en: "Storm" },
      sigil: "zap",
      lore: {
        ro: "Nici el nu știe ce urmează. Furtuna are un singur plan: haos, la volum maxim.",
        en: "Not even he knows what's next. The storm has one plan: chaos, at full volume.",
      },
      stats: { attack: 85, defense: 40, mind: 50, charisma: 99 },
    },
    socials: [
      { platform: "tiktok", url: "https://tiktok.com/@REPLACE_ME" },
      { platform: "twitch", url: "https://twitch.tv/REPLACE_ME" },
    ],
    hues: [0, 45],
    initials: "IT",
  },
];
