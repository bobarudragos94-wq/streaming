import { getLocale, getTranslations } from "next-intl/server";
import { Dice5, Flame, Gamepad2, PartyPopper } from "lucide-react";
import { games, irlChallenges } from "@/content/games";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[12.5px] font-medium text-frost/85 shadow-[inset_0_0_0_1px_rgb(38_36_55)]">
      {children}
    </span>
  );
}

export async function Games() {
  const t = await getTranslations("games");
  const locale = (await getLocale()) as "ro" | "en";

  const tiles = [
    {
      key: "online",
      icon: Gamepad2,
      accent: "text-brand-soft",
      list: games.online,
      span: "lg:col-span-2",
    },
    { key: "board", icon: Dice5, accent: "text-volt-soft", list: games.board, span: "" },
    { key: "party", icon: PartyPopper, accent: "text-ember-soft", list: games.party, span: "" },
  ] as const;

  return (
    <section id="games" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <SectionHeading kicker={t("kicker")} title={t("title")} />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {tiles.map((tile, i) => (
          <Reveal key={tile.key} delay={i * 0.07} className={tile.span}>
            <div className="glass h-full rounded-2xl p-6">
              <tile.icon className={tile.accent} size={22} aria-hidden />
              <h3 className="mt-4 font-display text-xl font-bold text-frost">
                {t(tile.key)}
              </h3>
              <p className="mt-1 text-[13.5px] text-dim">{t(`${tile.key}Desc`)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tile.list.map((g) => (
                  <Chip key={g}>{g}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* IRL — the big one */}
        <Reveal delay={0.2} className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-2xl border border-ember/30 bg-gradient-to-br from-ember/[0.12] via-panel to-panel p-6">
            <Flame className="text-ember-soft" size={22} aria-hidden />
            <h3 className="mt-4 font-display text-xl font-bold text-frost">
              {t("irl")}
            </h3>
            <p className="mt-1 max-w-md text-[13.5px] text-dim">{t("irlDesc")}</p>
            <ul className="mt-5 space-y-2.5">
              {irlChallenges.examples.map((ex) => (
                <li
                  key={ex.en}
                  className="flex items-start gap-2.5 text-[13.5px] text-frost/85"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ember"
                  />
                  {ex[locale]}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
