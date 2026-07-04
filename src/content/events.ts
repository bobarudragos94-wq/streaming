/** PLACEHOLDER — upcoming streams & events. Dates are demo values. */

export type CrewEvent = {
  date: string; // ISO date
  time: string;
  title: { ro: string; en: string };
  platform: "twitch" | "youtube" | "tiktok" | "irl";
  kind: { ro: string; en: string };
};

export const events: CrewEvent[] = [
  {
    date: "2026-07-10",
    time: "20:00",
    title: { ro: "Valorant ranked — drum spre Ascendant", en: "Valorant ranked — road to Ascendant" },
    platform: "twitch",
    kind: { ro: "Stream", en: "Stream" },
  },
  {
    date: "2026-07-12",
    time: "19:00",
    title: { ro: "Turneu de Catan în casă — toate capetele", en: "House Catan tournament — all heads in" },
    platform: "youtube",
    kind: { ro: "Eveniment", en: "Event" },
  },
  {
    date: "2026-07-18",
    time: "18:00",
    title: { ro: "IRL: provocarea fără telefon, ziua 1", en: "IRL: the no-phone challenge, day 1" },
    platform: "irl",
    kind: { ro: "Provocare", en: "Challenge" },
  },
];
