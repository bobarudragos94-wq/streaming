"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import type { Member } from "@/content/members";
import { StatusPill } from "./status-pill";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero({
  members,
  locale,
  demo,
}: {
  members: Member[];
  locale: "ro" | "en";
  demo: boolean;
}) {
  const t = useTranslations("hero");
  const ts = useTranslations("status");
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28"
    >
      {/* ambient stage lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgb(124 58 237 / 0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-40 h-[480px] w-[620px] rounded-full opacity-50 blur-3xl animate-drift-slow"
        style={{
          background:
            "radial-gradient(closest-side, rgb(244 63 94 / 0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/3 h-[420px] w-[560px] rounded-full opacity-40 blur-3xl animate-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgb(34 211 238 / 0.18), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-soft sm:text-xs"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient mt-6 font-display text-[19vw] font-bold leading-none tracking-tight sm:text-8xl lg:text-9xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 font-display text-xl font-medium text-frost sm:text-2xl"
        >
          {t("tagline")}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-[15px] leading-relaxed text-dim"
        >
          {t("sub")}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_-8px_var(--color-brand)] transition-all hover:bg-brand/85 hover:shadow-[0_0_48px_-6px_var(--color-brand)]"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#crew"
            className="rounded-full border border-hairline px-7 py-3.5 text-sm font-semibold text-frost/90 transition-colors hover:border-brand-soft/50 hover:text-frost"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>

        {/* lobby status panel — the concept, live on screen */}
        <motion.div
          variants={item}
          className="glass mt-14 w-full max-w-3xl rounded-2xl p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between px-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-dim">
              {t("lobbyTitle")} — {members.length}/6
            </p>
            {demo ? (
              <span className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-dim/70">
                {t("demoNote")}
              </span>
            ) : null}
          </div>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {members.map((m) => (
              <li
                key={m.slug}
                className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2.5"
              >
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-bold text-white"
                  style={{
                    background: `conic-gradient(from 210deg, hsl(${m.hues[0]} 80% 55%), hsl(${m.hues[1]} 85% 60%), hsl(${m.hues[0]} 80% 55%))`,
                  }}
                >
                  {m.initials}
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block truncate text-[13px] font-semibold text-frost">
                    {m.nick}
                  </span>
                  <StatusPill
                    status={m.status}
                    label={ts(m.status)}
                    className="mt-0.5 px-2 py-0.5 text-[8px]"
                  />
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <a
        href="#crew"
        aria-label={locale === "ro" ? "Derulează în jos" : "Scroll down"}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-dim/60 transition-colors hover:text-frost"
      >
        <ChevronDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
