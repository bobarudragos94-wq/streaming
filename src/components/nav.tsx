"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import { BalaurMark } from "./icons";
import { cn } from "@/lib/utils";

const anchors = ["crew", "games", "clips", "schedule", "sponsors", "contact"] as const;

export function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-wide"
        >
          <BalaurMark />
          {site.name}
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {anchors.map((a) => (
            <a
              key={a}
              href={`#${a}`}
              className="text-[13px] font-medium text-dim transition-colors hover:text-frost"
            >
              {t(a)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* locale switch */}
          <div className="flex overflow-hidden rounded-full border border-hairline font-mono text-[11px]">
            {(["ro", "en"] as const).map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                className={cn(
                  "px-2.5 py-1.5 uppercase tracking-wider transition-colors",
                  locale === l
                    ? "bg-brand/25 text-brand-soft"
                    : "text-dim hover:text-frost",
                )}
              >
                {l}
              </Link>
            ))}
          </div>

          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-[0_0_24px_-6px_var(--color-brand)] transition-all hover:bg-brand/85 hover:shadow-[0_0_32px_-4px_var(--color-brand)] sm:block"
          >
            {t("discord")}
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-frost lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open ? (
        <div className="border-t border-hairline bg-void/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {anchors.map((a) => (
              <a
                key={a}
                href={`#${a}`}
                onClick={() => setOpen(false)}
                className="border-b border-hairline/60 py-3.5 text-[15px] font-medium text-frost/90"
              >
                {t(a)}
              </a>
            ))}
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {t("discord")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
