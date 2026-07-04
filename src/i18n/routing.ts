import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ro", "en"],
  defaultLocale: "ro",
  localePrefix: "as-needed",
  // "/" is always Romanian — the brand's home turf. English lives at /en.
  localeDetection: false,
});
