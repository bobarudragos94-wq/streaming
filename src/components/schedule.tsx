import { getLocale, getTranslations } from "next-intl/server";
import { CalendarDays, MapPin } from "lucide-react";
import { events } from "@/content/events";
import { PlatformIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export async function Schedule() {
  const t = await getTranslations("schedule");
  const locale = (await getLocale()) as "ro" | "en";
  const fmt = new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "2-digit",
    month: "short",
  });

  return (
    <section id="schedule" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading kicker={t("kicker")} title={t("title")} />
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-dim/70">
          {t("tz")}
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {events.map((ev, i) => {
          const [day, month] = fmt.format(new Date(ev.date)).split(" ");
          return (
            <Reveal key={ev.title.en} delay={i * 0.07}>
              <div className="glass flex items-center gap-4 rounded-2xl p-4 sm:gap-6 sm:p-5">
                <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand/15 shadow-[inset_0_0_0_1px_rgb(124_58_237/0.35)]">
                  <span className="font-display text-xl font-bold text-frost tabular-nums">
                    {day}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand-soft">
                    {month?.replace(".", "")}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-dim">
                    {ev.kind[locale]} · {ev.time}
                  </p>
                  <h3 className="mt-1 truncate text-[15px] font-semibold text-frost sm:text-base">
                    {ev.title[locale]}
                  </h3>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-dim">
                  {ev.platform === "irl" ? (
                    <MapPin size={16} aria-label="IRL" />
                  ) : (
                    <PlatformIcon platform={ev.platform} size={16} />
                  )}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.25}>
        <p className="mt-6 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-dim/60">
          <CalendarDays size={13} aria-hidden />
          {t("upcoming")} — {events.length}
        </p>
      </Reveal>
    </section>
  );
}
