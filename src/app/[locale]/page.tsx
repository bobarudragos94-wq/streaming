import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLobby } from "@/lib/live";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Crew } from "@/components/crew";
import { Games } from "@/components/games";
import { Clips } from "@/components/clips";
import { Schedule } from "@/components/schedule";
import { Story } from "@/components/story";
import { Sponsors } from "@/components/sponsors";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const lobby = await getLobby();

  return (
    <>
      <Nav />
      <main>
        <Hero members={lobby.members} locale={locale} demo={lobby.demo} />
        <Crew />
        <Games />
        <Clips />
        <Schedule />
        <Story />
        <Sponsors />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
