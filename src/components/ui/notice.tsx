import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type NoticeTone = "info" | "success" | "warning" | "danger";

const tones: Record<NoticeTone, string> = {
  info: "bg-surface-sunken border-line-strong",
  success: "bg-success-soft border-success",
  warning: "bg-warning-soft border-warning",
  danger: "bg-danger-soft border-danger",
};

/**
 * Inline message. Say what happened and what to do next — never apologise
 * and never stay vague.
 */
export function Notice({
  tone = "info",
  title,
  children,
  className,
}: {
  tone?: NoticeTone;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      className={cn("rounded-card border-l-4 px-5 py-4 text-ink", tones[tone], className)}
    >
      <p className="font-semibold">{title}</p>
      {children ? <div className="mt-1 text-sm text-ink-muted">{children}</div> : null}
    </div>
  );
}
