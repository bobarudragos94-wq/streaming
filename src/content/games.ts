/** PLACEHOLDER — adjust the rotation to what the crew actually plays. */

export type GameCategory = "online" | "board" | "party" | "irl";

export const games: Record<Exclude<GameCategory, "irl">, string[]> = {
  online: ["Valorant", "League of Legends", "CS2", "Fortnite", "EA FC 26", "Minecraft"],
  board: ["Catan / Colonist", "Uno", "Monopoly", "Șah", "Rummy"],
  party: ["Among Us", "Jackbox", "Gartic Phone", "Mario Kart", "Fall Guys"],
};

export const irlChallenges = {
  examples: [
    { ro: "Pierzătorul mănâncă cel mai iute jalapeño din oraș", en: "Loser eats the hottest jalapeño in town" },
    { ro: "24h fără telefon — filmat integral", en: "24h without a phone — fully filmed" },
    { ro: "Cine pierde la Catan plătește city break-ul", en: "Catan loser pays for the city break" },
  ],
};
