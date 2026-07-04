/**
 * PLACEHOLDER — curated clips. When channels exist, replace `href` with real
 * video URLs (and optionally add `embedId` for inline players in v2).
 */

export type Clip = {
  title: { ro: string; en: string };
  platform: "youtube" | "tiktok" | "twitch";
  duration: string;
  href: string;
  hues: [number, number];
};

export const clips: Clip[] = [
  {
    title: { ro: "Am pierdut casa la Catan (aproape)", en: "We (almost) lost the house at Catan" },
    platform: "youtube",
    duration: "14:22",
    href: "#",
    hues: [258, 300],
  },
  {
    title: { ro: "Clutch 1v4 și vecinii au sunat la ușă", en: "1v4 clutch and the neighbours rang the bell" },
    platform: "twitch",
    duration: "0:48",
    href: "#",
    hues: [340, 260],
  },
  {
    title: { ro: "Provocarea jalapeño — nu repetați acasă", en: "The jalapeño challenge — don't try at home" },
    platform: "tiktok",
    duration: "1:12",
    href: "#",
    hues: [0, 40],
  },
  {
    title: { ro: "Tier list: cine e cel mai toxic din crew", en: "Tier list: who's the most toxic in the crew" },
    platform: "youtube",
    duration: "22:05",
    href: "#",
    hues: [190, 230],
  },
];
