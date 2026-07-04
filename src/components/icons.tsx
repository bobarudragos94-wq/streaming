import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size?: number) => ({
  width: size ?? 18,
  height: size ?? 18,
  fill: "currentColor",
  "aria-hidden": true as const,
});

export function TwitchIcon({ size, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size)} {...props}>
      <path d="M4.3 2 2.5 6.6v15h5.1V24h2.9l2.4-2.4h3.7l5-5V2H4.3Zm15.4 13.6-2.9 2.9h-4.6l-2.4 2.4v-2.4H5.9V4h13.8v11.6ZM16.8 7.3v5.5h-2V7.3h2Zm-5.3 0v5.5h-2V7.3h2Z" />
    </svg>
  );
}

export function YoutubeIcon({ size, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size)} {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12c0 1.9.2 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.3-1.9.5-3.9.5-5.8 0-1.9-.2-3.9-.5-5.8ZM9.5 15.6V8.4L15.8 12l-6.3 3.6Z" />
    </svg>
  );
}

export function TiktokIcon({ size, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size)} {...props}>
      <path d="M19.6 5.8a5 5 0 0 1-3.4-1.3 5 5 0 0 1-1.6-3.2h-3.4v13.6a2.9 2.9 0 0 1-2.9 2.8 2.9 2.9 0 0 1-2.8-2.8 2.9 2.9 0 0 1 2.8-2.9c.3 0 .6 0 .9.1V8.7a6.3 6.3 0 0 0-.9 0 6.3 6.3 0 0 0-6.2 6.2A6.3 6.3 0 0 0 8.3 21a6.3 6.3 0 0 0 6.3-6.2V8.9a8.4 8.4 0 0 0 5 1.6V7.1c0-.4 0-.9-.1-1.3Z" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base(size)} {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1 0-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.4 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c0 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .4 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.4-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c0-1.1-.2-1.7-.4-2.1a2 2 0 0 0-.8-1.2 2 2 0 0 0-1.2-.8c-.4-.2-1-.4-2.1-.4-1.3-.1-1.7-.1-4.8-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

export function PlatformIcon({
  platform,
  size,
  ...props
}: IconProps & { platform: string }) {
  switch (platform) {
    case "twitch":
      return <TwitchIcon size={size} {...props} />;
    case "youtube":
      return <YoutubeIcon size={size} {...props} />;
    case "tiktok":
      return <TiktokIcon size={size} {...props} />;
    case "instagram":
      return <InstagramIcon size={size} {...props} />;
    default:
      return null;
  }
}

/** Six dots around a seventh — the six-headed balaur mark. */
export function BalaurMark({ size = 26, ...props }: IconProps) {
  const dots = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return { cx: 12 + 7.5 * Math.cos(a), cy: 12 + 7.5 * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden {...props}>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={2.1}
          fill={i === 0 ? "var(--color-ember)" : "var(--color-brand-soft)"}
        />
      ))}
      <circle cx={12} cy={12} r={2.6} fill="var(--color-brand)" />
    </svg>
  );
}
