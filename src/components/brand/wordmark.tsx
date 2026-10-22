import { cn } from "@/lib/cn";

/** Brand name shown by the wordmark. */
export const BRAND_NAME = "Sun Day";

type WordmarkProps = {
  name?: string;
  className?: string;
};

/**
 * Typographic stand-in for the logotype. Swap the inner text for the real SVG
 * logo once it exists; keep the sizing API (`className` with a text-* size).
 */
export function Wordmark({ name = BRAND_NAME, className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-display inline-block font-black leading-none tracking-[-0.04em]",
        className,
      )}
    >
      {name}
    </span>
  );
}
