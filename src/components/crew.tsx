import { existsSync } from "node:fs";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import { members } from "@/content/members";
import { MemberCard } from "./member-card";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

/** First existing file under /public for the given candidates, as a URL path. */
function publicAsset(...candidates: string[]): string | undefined {
  for (const rel of candidates) {
    if (existsSync(path.join(process.cwd(), "public", rel))) return `/${rel}`;
  }
  return undefined;
}

export async function Crew() {
  const t = await getTranslations("crew");

  return (
    <section id="crew" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <SectionHeading kicker={t("kicker")} title={t("title")} sub={t("sub")} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => (
          <Reveal key={m.slug} delay={i * 0.06}>
            <MemberCard
              member={m}
              photoSrc={publicAsset(
                `members/${m.slug}.jpg`,
                `members/${m.slug}.png`,
                `members/${m.slug}.webp`,
              )}
              personaSrc={publicAsset(
                `personas/${m.slug}.jpg`,
                `personas/${m.slug}.png`,
                `personas/${m.slug}.webp`,
              )}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
