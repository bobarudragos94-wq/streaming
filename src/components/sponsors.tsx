import { getTranslations } from "next-intl/server";
import { Handshake, Mail } from "lucide-react";
import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/**
 * "Lights on" — a deliberate Studio-direction moment inside the dark site.
 * Paper ground + ink text so sponsor conversations feel like business.
 */
export async function Sponsors() {
  const t = await getTranslations("sponsors");
  const tiers = [t("tierMain"), t("tierGear"), t("tierEvent")];

  return (
    <section id="sponsors" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <Reveal>
        <div className="rounded-3xl bg-paper p-8 text-ink sm:p-12 lg:p-16">
          <SectionHeading
            light
            kicker={t("kicker")}
            title={t("title")}
            sub={t("body")}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier}
                className="rounded-2xl border-2 border-dashed border-ink/15 p-6 text-center transition-colors hover:border-cobalt/40"
              >
                <Handshake className="mx-auto text-ink/25" size={26} aria-hidden />
                <p className="mt-4 font-display text-[15px] font-bold text-ink">
                  {tier}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cobalt">
                  {t("slot")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-cobalt"
            >
              <Mail size={15} aria-hidden />
              {t("cta")}
            </a>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink/40">
              {t("mediaKit")}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
