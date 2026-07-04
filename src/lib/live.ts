import { members, type Member } from "@/content/members";
import { site } from "@/content/site";

/**
 * Lobby statuses. Until Twitch credentials + channel logins are configured,
 * this returns the demo statuses from content (flagged `demo: true` so the
 * UI can label them honestly).
 *
 * To go live: set TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET on Vercel and fill
 * `site.twitchChannels` with the crew's logins in the same order as `members`.
 */
export async function getLobby(): Promise<{ members: Member[]; demo: boolean }> {
  const { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } = process.env;
  const channels = site.twitchChannels;

  if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET || channels.length === 0) {
    return { members, demo: true };
  }

  try {
    const tokenRes = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: TWITCH_CLIENT_ID,
        client_secret: TWITCH_CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
      next: { revalidate: 3600 },
    });
    if (!tokenRes.ok) throw new Error("twitch token failed");
    const { access_token } = (await tokenRes.json()) as { access_token: string };

    const params = channels.map((c) => `user_login=${c}`).join("&");
    const streamsRes = await fetch(`https://api.twitch.tv/helix/streams?${params}`, {
      headers: {
        "Client-Id": TWITCH_CLIENT_ID,
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 60 },
    });
    if (!streamsRes.ok) throw new Error("twitch streams failed");
    const { data } = (await streamsRes.json()) as {
      data: { user_login: string }[];
    };

    const liveLogins = new Set(data.map((s) => s.user_login.toLowerCase()));
    const merged = members.map((m, i) => {
      const login = channels[i]?.toLowerCase();
      if (!login) return m;
      return { ...m, status: liveLogins.has(login) ? ("live" as const) : ("offline" as const) };
    });
    return { members: merged, demo: false };
  } catch {
    return { members, demo: true };
  }
}
