import { Reveal } from "./reveal";

export function SectionHeading({
  kicker,
  title,
  sub,
  light = false,
}: {
  kicker: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
          light ? "text-cobalt" : "text-brand-soft"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          light ? "text-ink" : "text-frost"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 max-w-xl text-[15px] leading-relaxed ${
            light ? "text-ink/65" : "text-dim"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
