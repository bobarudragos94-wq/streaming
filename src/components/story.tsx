import { getTranslations } from "next-intl/server";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export async function Story() {
  const t = await getTranslations("story");

  const stats = [
    { v: "6", label: t("statMembers"), tone: "text-brand-soft" },
    { v: "20+", label: t("statGames"), tone: "text-volt-soft" },
    { v: "∞", label: t("statRage"), tone: "text-ember-soft" },
    { v: "100%", label: t("statFriendship"), tone: "text-sticker" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading kicker={t("kicker")} title={t("title")} />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-dim">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:mt-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center">
                <p className={`font-display text-4xl font-bold tabular-nums ${s.tone}`}>
                  {s.v}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-dim">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
