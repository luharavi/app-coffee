import { cn } from "@/lib/cn";

/**
 * Divider. "double" is the paired hairline from the cup-mark tile — use it to
 * open or close a section; "single" separates items within one.
 */
export function Rule({
  variant = "single",
  className,
}: {
  variant?: "single" | "double";
  className?: string;
}) {
  if (variant === "double") {
    return (
      <div role="separator" className={cn("flex flex-col gap-[3px] opacity-60", className)}>
        <span className="h-px bg-current" />
        <span className="h-px bg-current" />
      </div>
    );
  }
  return <hr className={cn("border-0 h-px bg-line", className)} />;
}
