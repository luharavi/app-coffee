import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Brand-board tones. Each pairs a fill with the ink that reads on it, so
 * a tile stays legible in light and dark themes. Coloured tones also pin
 * --focus so the focus ring keeps 3:1 against the fill in both themes.
 */
export type TileTone = "surface" | "cream" | "espresso" | "oxblood" | "olive" | "rose" | "sand" | "sun";

const tones: Record<TileTone, string> = {
  sun: "bg-sun-300 text-espresso-950 [--focus:var(--color-espresso-900)]",
  surface: "bg-surface text-ink border border-line",
  cream: "bg-cream-200 text-espresso-900 [--focus:var(--color-espresso-900)]",
  espresso: "bg-espresso-900 text-cream-200 [--focus:var(--color-cream-100)]",
  oxblood: "bg-oxblood-900 text-cream-200 [--focus:var(--color-cream-100)]",
  olive: "bg-olive-500 text-cream-200 [--focus:var(--color-cream-100)]",
  rose: "bg-rose-500 text-espresso-950 [--focus:var(--color-espresso-900)]",
  sand: "bg-sand-500 text-espresso-900 [--focus:var(--color-espresso-900)]",
};

type TileProps = HTMLAttributes<HTMLDivElement> & {
  tone?: TileTone;
  /** "tile" for page-level blocks, "card" for blocks nested inside them. */
  level?: "tile" | "card";
};

/** Flat colour block — the base unit of the brand-board layout. No shadows. */
export function Tile({ tone = "surface", level = "tile", className, ...props }: TileProps) {
  return (
    <div
      className={cn(
        level === "tile" ? "rounded-tile p-6 sm:p-8" : "rounded-card p-5",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
