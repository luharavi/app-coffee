import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "neutral" | "accent" | "highlight" | "success" | "warning" | "danger";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-surface-sunken text-ink",
  accent: "bg-accent-soft text-accent",
  highlight: "bg-highlight text-highlight-ink",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
  danger: "bg-danger-soft text-danger",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone };

/** Short status or attribute, e.g. "Sem lactose" or "Esgotado". */
export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
