import { cn } from "@/lib/cn";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatPrice(cents: number) {
  return brl.format(cents / 100);
}

/** Price in BRL. Amounts are integers in centavos to avoid float rounding. */
export function Price({ cents, className }: { cents: number; className?: string }) {
  return <span className={cn("font-semibold tabular-nums", className)}>{formatPrice(cents)}</span>;
}
