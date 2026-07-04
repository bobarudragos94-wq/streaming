"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import type { Member } from "@/content/members";
import { site } from "@/content/site";
import { PlatformIcon } from "./icons";
import { StatusPill } from "./status-pill";
import { cn } from "@/lib/utils";

/**
 * Player-slot card: 3D tilt on pointer, flips to the "gaming persona" side
 * on hover/tap. When real photos land in /public/members/<slug>.jpg, swap
 * the gradient avatar for an <Image>.
 */
export function MemberCard({ member }: { member: Member }) {
  const locale = useLocale() as "ro" | "en";
  const t = useTranslations("crew");
  const ts = useTranslations("status");
  const reduced = useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showBack = flipped || hovered;

  function onPointerMove(e: React.PointerEvent) {
    if (reduced || e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 10 });
  }

  return (
    <div
      ref={ref}
      style={{ perspective: 1100 }}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`${member.name} «${member.nick}» — ${t("flipHint")}`}
        onClick={() => setFlipped((v) => !v)}
        className="relative block h-[420px] w-full cursor-pointer text-left [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${showBack ? 180 + tilt.y : tilt.y}deg)`,
          transition: reduced
            ? "none"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* ── FRONT: the human ─────────────────────────── */}
        <div className="glass absolute inset-0 flex flex-col rounded-2xl p-5 [backface-visibility:hidden]">
          <div className="flex items-start justify-between">
            <span
              aria-hidden
              className="flex size-[72px] items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-[0_0_28px_-6px_var(--color-brand)]"
              style={{
                background: `conic-gradient(from 210deg, hsl(${member.hues[0]} 80% 52%), hsl(${member.hues[1]} 85% 58%), hsl(${member.hues[0]} 80% 52%))`,
              }}
            >
              {member.initials}
            </span>
            <StatusPill status={member.status} label={ts(member.status)} />
          </div>

          <h3 className="mt-4 font-display text-[22px] font-bold text-white">
            {member.name}{" "}
            <span className="text-brand-soft">«{member.nick}»</span>
          </h3>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-dim">
            {member.role[locale]}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.ranks.map((r) => (
              <span key={r.game} className={cn("rank-chip", `rank-chip--${r.tone}`)}>
                {r.game} · {r.label}
              </span>
            ))}
          </div>

          <span className="sticker mt-5 self-start">
            {member.sticker[locale]}
          </span>

          <div className="mt-auto flex items-center justify-between border-t border-dashed border-brand/25 pt-4">
            <div className="flex gap-1.5">
              {member.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.nick} — ${s.platform}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex size-9 items-center justify-center rounded-full bg-white/5 text-dim transition-colors hover:bg-brand/25 hover:text-frost"
                >
                  <PlatformIcon platform={s.platform} size={15} />
                </a>
              ))}
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-dim/50">
              {t("flipHint")}
            </span>
          </div>
        </div>

        {/* ── BACK: the persona ────────────────────────── */}
        <div
          className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden rounded-2xl border border-brand/40 bg-abyss p-5 [backface-visibility:hidden]"
          aria-hidden={!showBack}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-40 blur-2xl"
            style={{
              background: `radial-gradient(closest-side, hsl(${member.hues[0]} 85% 55% / 0.8), transparent)`,
            }}
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
            PLAYER {member.initials}
          </p>
          <p
            className="mt-6 font-display text-5xl font-bold leading-none tracking-tight"
            style={{ color: `hsl(${member.hues[0]} 85% 72%)` }}
          >
            {member.nick.toUpperCase()}
          </p>
          <p className="mt-2 font-mono text-[11px] text-dim">
            {member.role[locale]}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {(
              [
                [member.stats.wins, t("statWins")],
                [member.stats.hours, t("statHours")],
                [member.stats.main, t("statMain")],
              ] as const
            ).map(([v, l]) => (
              <div
                key={l}
                className="rounded-xl bg-white/[0.04] px-2 py-3 text-center"
              >
                <p className="font-display text-lg font-bold text-frost tabular-nums">
                  {v}
                </p>
                <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.14em] text-dim">
                  {l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
              {site.domain.toUpperCase()}
            </span>
            <StatusPill status={member.status} label={ts(member.status)} />
          </div>
        </div>
      </button>
    </div>
  );
}
