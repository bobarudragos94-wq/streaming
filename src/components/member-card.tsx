"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { BookOpen, Sword, Swords, Target, Waves, Zap } from "lucide-react";
import type { Member, Persona } from "@/content/members";
import { site } from "@/content/site";
import { PlatformIcon } from "./icons";
import { StatusPill } from "./status-pill";
import { cn } from "@/lib/utils";

const sigils: Record<Persona["sigil"], typeof Swords> = {
  swords: Swords,
  target: Target,
  book: BookOpen,
  waves: Waves,
  sword: Sword,
  zap: Zap,
};

/**
 * Player-slot card. Front = the human; hover/tap flips to the back = the
 * fantasy persona ("head of the balaur") as a game-style character sheet.
 * `photoSrc` / `personaSrc` are wired automatically by <Crew> when files
 * exist in /public/members and /public/personas.
 */
export function MemberCard({
  member,
  photoSrc,
  personaSrc,
}: {
  member: Member;
  photoSrc?: string;
  personaSrc?: string;
}) {
  const locale = useLocale() as "ro" | "en";
  const t = useTranslations("crew");
  const ts = useTranslations("status");
  const reduced = useReducedMotion();

  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showBack = flipped || hovered;
  const accent = `hsl(${member.hues[0]} 85% 66%)`;
  const Sigil = sigils[member.persona.sigil];

  const statRows = [
    [t("statAttack"), member.persona.stats.attack],
    [t("statDefense"), member.persona.stats.defense],
    [t("statMind"), member.persona.stats.mind],
    [t("statCharisma"), member.persona.stats.charisma],
  ] as const;

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
        className="relative block h-[460px] w-full cursor-pointer text-left [transform-style:preserve-3d]"
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
            {photoSrc ? (
              <span className="relative size-[72px] overflow-hidden rounded-full shadow-[0_0_28px_-6px_var(--color-brand)] ring-2 ring-brand/60">
                <Image
                  src={photoSrc}
                  alt={member.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </span>
            ) : (
              <span
                aria-hidden
                className="flex size-[72px] items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-[0_0_28px_-6px_var(--color-brand)]"
                style={{
                  background: `conic-gradient(from 210deg, hsl(${member.hues[0]} 80% 52%), hsl(${member.hues[1]} 85% 58%), hsl(${member.hues[0]} 80% 52%))`,
                }}
              >
                {member.initials}
              </span>
            )}
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

        {/* ── BACK: the head of the balaur ─────────────── */}
        <div
          className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden rounded-2xl border bg-abyss p-5 [backface-visibility:hidden]"
          style={{ borderColor: `hsl(${member.hues[0]} 85% 66% / 0.45)` }}
          aria-hidden={!showBack}
        >
          {personaSrc ? (
            <>
              <Image
                src={personaSrc}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-abyss) 22%, rgb(7 7 14 / 0.72) 55%, rgb(7 7 14 / 0.15) 100%)",
                }}
              />
            </>
          ) : (
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-35 blur-2xl"
              style={{
                background: `radial-gradient(closest-side, hsl(${member.hues[0]} 85% 55% / 0.85), transparent)`,
              }}
            />
          )}

          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-dim">
                PLAYER {member.initials}
              </p>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{
                  color: accent,
                  boxShadow: `inset 0 0 0 1px hsl(${member.hues[0]} 85% 66% / 0.45)`,
                  background: `hsl(${member.hues[0]} 85% 55% / 0.12)`,
                }}
              >
                {member.persona.element[locale]}
              </span>
            </div>

            <div className="mt-auto flex items-center gap-3">
              <span
                className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  color: accent,
                  background: `hsl(${member.hues[0]} 85% 55% / 0.14)`,
                  boxShadow: `inset 0 0 0 1px hsl(${member.hues[0]} 85% 66% / 0.4)`,
                }}
              >
                <Sigil size={22} aria-hidden />
              </span>
              <div className="min-w-0">
                <p
                  className="font-display text-[21px] font-bold leading-tight"
                  style={{ color: accent }}
                >
                  {member.persona.class[locale]}
                </p>
                <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-frost/70">
                  {member.persona.head[locale]}
                </p>
              </div>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {statRows.map(([label, value], i) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="w-[72px] shrink-0 font-mono text-[8.5px] uppercase tracking-[0.16em] text-dim">
                    {label}
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <span
                      className="block h-full rounded-full"
                      style={{
                        width: showBack ? `${value}%` : "10%",
                        background: `linear-gradient(90deg, hsl(${member.hues[0]} 85% 55%), hsl(${member.hues[1]} 85% 62%))`,
                        transition: reduced
                          ? "none"
                          : `width 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.08}s`,
                      }}
                    />
                  </span>
                  <span className="w-7 text-right font-mono text-[10px] text-frost/80 tabular-nums">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                {site.domain.toUpperCase()}
              </span>
              <StatusPill status={member.status} label={ts(member.status)} />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
