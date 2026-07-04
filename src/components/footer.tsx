import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { BalaurMark, PlatformIcon } from "./icons";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5 font-display text-base font-bold tracking-wide">
          <BalaurMark size={22} />
          {site.name}
        </div>

        <p className="order-last text-center font-mono text-[10px] uppercase tracking-[0.16em] text-dim/60 sm:order-none">
          {t("madeIn")}
        </p>

        <div className="flex gap-1.5">
          {site.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex size-9 items-center justify-center rounded-full bg-white/5 text-dim transition-colors hover:bg-brand/25 hover:text-frost"
            >
              <PlatformIcon platform={s.platform} size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-hairline/60 py-5 text-center font-mono text-[9.5px] uppercase tracking-[0.14em] text-dim/40">
        © {year} {site.name} — {t("rights")} · {t("placeholderNote")}
      </div>
    </footer>
  );
}
