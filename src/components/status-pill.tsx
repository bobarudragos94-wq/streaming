import type { MemberStatus } from "@/content/members";
import { cn } from "@/lib/utils";

const styles: Record<MemberStatus, { pill: string; dot: string; pulse: boolean }> = {
  live: {
    pill: "bg-ember/12 text-ember-soft shadow-[inset_0_0_0_1px_rgb(244_63_94/0.45)]",
    dot: "bg-ember",
    pulse: true,
  },
  queue: {
    pill: "bg-volt/10 text-volt-soft shadow-[inset_0_0_0_1px_rgb(34_211_238/0.4)]",
    dot: "bg-volt",
    pulse: false,
  },
  recording: {
    pill: "bg-sticker/12 text-sticker shadow-[inset_0_0_0_1px_rgb(255_216_77/0.4)]",
    dot: "bg-sticker",
    pulse: false,
  },
  offline: {
    pill: "bg-white/4 text-dim shadow-[inset_0_0_0_1px_rgb(143_139_176/0.25)]",
    dot: "bg-dim",
    pulse: false,
  },
};

export function StatusPill({
  status,
  label,
  className,
}: {
  status: MemberStatus;
  label: string;
  className?: string;
}) {
  const s = styles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.14em]",
        s.pill,
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          s.dot,
          s.pulse && "animate-pulse-dot",
        )}
      />
      {label}
    </span>
  );
}
