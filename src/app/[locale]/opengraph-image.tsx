import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — gaming & streaming crew`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "ro";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(700px 420px at 50% 10%, rgba(124,58,237,0.4), #0B0B14 70%)",
          color: "#E9E7FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#B79CFF",
          }}
        >
          {loc === "ro"
            ? "Crew românesc de gaming & streaming"
            : "Romanian gaming & streaming crew"}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 160,
            fontWeight: 800,
            letterSpacing: -4,
            background: "linear-gradient(100deg, #E9E7FA 15%, #B79CFF 45%, #FDA4AF 80%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 18, fontSize: 34, color: "#8F8BB0" }}>
          {site.tagline[loc]}
        </div>
      </div>
    ),
    size,
  );
}
