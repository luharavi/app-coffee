import { cn } from "@/lib/cn";

/** Colour dot from the swatch tile. `color` accepts any CSS colour or var(). */
export function Swatch({
  color,
  label,
  size = "md",
  className,
}: {
  color: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-block shrink-0 rounded-full",
        size === "sm" && "size-5",
        size === "md" && "size-10",
        size === "lg" && "size-16",
        className,
      )}
      style={{ background: color }}
    />
  );
}
