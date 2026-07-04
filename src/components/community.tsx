import { getTranslations } from "next-intl/server";
import { MessagesSquare } from "lucide-react";
import { site } from "@/content/site";
import { PlatformIcon } from "./icons";
import { Reveal } from "./reveal";

export async function Community() {
  const t = await getTranslations("community");

  return (
    <section className="mx-auto max-w-6xl px-5 pb-8">
      <Reveal>
        <div className="glass grain relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgb(124 58 237 / 0.5), transparent 70%)",
            }}
          />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-brand-soft">
            {t("kicker")}
          </p>
          <h2 className="relative mt-3 font-display text-3xl font-bold tracking-tight text-frost sm:text-4xl">
            {t("title")}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-dim">
            {t("body")}
          </p>
          <div className="relative mt-8 flex flex-col items-center gap-5">
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_-8px_var(--color-brand)] transition-all hover:bg-brand/85 hover:shadow-[0_0_52px_-6px_var(--color-brand)]"
            >
              <MessagesSquare size={17} aria-hidden />
              {t("cta")}
            </a>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-dim/60">
                {t("follow")}
              </span>
              {site.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/5 text-dim transition-colors hover:bg-brand/25 hover:text-frost"
                >
                  <PlatformIcon platform={s.platform} size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
