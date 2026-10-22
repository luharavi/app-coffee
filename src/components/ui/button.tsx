import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "onTile";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap " +
  "transition-colors duration-(--duration-quick) ease-(--ease-pour) " +
  "disabled:pointer-events-none disabled:opacity-45";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent-hover",
  secondary: "bg-espresso-900 text-cream-200 hover:bg-espresso-700",
  /** For coloured Tiles (olive, oxblood, espresso, rose, sun), where the accent would vanish. */
  onTile: "bg-cream-100 text-espresso-900 hover:bg-cream-300",
  outline: "border border-line-strong text-ink hover:bg-surface-sunken",
  ghost: "text-ink hover:bg-surface-sunken",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-7 text-lg",
};

/** Class string for anything that should look like a button (e.g. a next/link `Link`). */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />;
}
