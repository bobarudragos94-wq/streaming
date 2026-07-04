import { getTranslations } from "next-intl/server";
import { members } from "@/content/members";
import { MemberCard } from "./member-card";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export async function Crew() {
  const t = await getTranslations("crew");

  return (
    <section id="crew" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <SectionHeading kicker={t("kicker")} title={t("title")} sub={t("sub")} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => (
          <Reveal key={m.slug} delay={i * 0.06}>
            <MemberCard member={m} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
