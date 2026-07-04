/**
 * Central brand config — rename the crew here and it changes everywhere.
 * PLACEHOLDER: replace socials/Discord/email with the real ones before launch.
 */
export const site = {
  name: "BALAUR",
  domain: "balaur.gg",
  tagline: { ro: "Șase capete. Un singur lobby.", en: "Many heads. One lobby." },
  description: {
    ro: "Crew românesc de gaming & streaming. Jocuri online, board games, provocări IRL și haos controlat.",
    en: "Romanian gaming & streaming crew. Online games, board games, IRL challenges and controlled chaos.",
  },
  email: "colab@balaur.gg",
  discordUrl: "https://discord.gg/REPLACE_ME",
  socials: [
    { platform: "twitch", label: "Twitch", url: "https://twitch.tv/REPLACE_ME" },
    { platform: "youtube", label: "YouTube", url: "https://youtube.com/@REPLACE_ME" },
    { platform: "tiktok", label: "TikTok", url: "https://tiktok.com/@REPLACE_ME" },
    { platform: "instagram", label: "Instagram", url: "https://instagram.com/REPLACE_ME" },
  ],
  /**
   * Twitch integration (v1.5): set TWITCH_CLIENT_ID + TWITCH_CLIENT_SECRET on Vercel
   * and fill in the crew's channel logins to replace demo statuses with real ones.
   */
  twitchChannels: [] as string[],
} as const;

export type SocialPlatform = "twitch" | "youtube" | "tiktok" | "instagram";
