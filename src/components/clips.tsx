import { getLocale, getTranslations } from "next-intl/server";
import { Play } from "lucide-react";
import { clips } from "@/content/clips";
import { PlatformIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const platformStyles: Record<string, string> = {
  youtube: "bg-[#FF0000]/15 text-[#FF6B6B]",
  twitch: "bg-[#9146FF]/15 text-[#C39BFF]",
  tiktok: "bg-white/10 text-frost",
};

export async function Clips() {
  const t = await getTranslations("clips");
  const locale = (await getLocale()) as "ro" | "en";

  return (
    <section id="clips" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <SectionHeading kicker={t("kicker")} title={t("title")} sub={t("soon")} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clips.map((clip, i) => (
          <Reveal key={clip.title.en} delay={i * 0.06}>
            <a
              href={clip.href}
              className="group block overflow-hidden rounded-2xl border border-hairline bg-panel transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              {/* placeholder thumb — real thumbnails replace this gradient */}
              <div
                className="relative flex aspect-video items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsl(${clip.hues[0]} 70% 22%), hsl(${clip.hues[1]} 75% 34%))`,
                }}
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play size={18} className="ml-0.5" aria-hidden />
                </span>
                <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-1.5 py-0.5 font-mono text-[10px] text-white tabular-nums">
                  {clip.duration}
                </span>
              </div>
              <div className="p-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${platformStyles[clip.platform]}`}
                >
                  <PlatformIcon platform={clip.platform} size={10} />
                  {clip.platform}
                </span>
                <h3 className="mt-2.5 line-clamp-2 text-[14px] font-semibold leading-snug text-frost">
                  {clip.title[locale]}
                </h3>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
