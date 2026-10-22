import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "./badge";
import { Price } from "./price";

/** Menu item: name, tasting notes, price and an optional action slot. */
export function ProductCard({
  name,
  notes,
  priceCents,
  tags,
  popular = false,
  soldOut = false,
  action,
  className,
}: {
  name: string;
  notes: string;
  priceCents: number;
  tags?: string[];
  /** Shows the "Popular" badge. */
  popular?: boolean;
  soldOut?: boolean;
  /** Usually an "Adicionar" button or a QuantityStepper. */
  action?: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-card border border-line bg-surface p-5",
        soldOut && "opacity-70",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold">{name}</h3>
        <Price cents={priceCents} className="text-lg" />
      </div>
      <p className="max-w-prose text-sm text-ink-muted">{notes}</p>
      {tags?.length || soldOut || popular ? (
        <div className="flex flex-wrap gap-1.5">
          {soldOut ? <Badge tone="danger">Esgotado hoje</Badge> : null}
          {popular ? <Badge tone="highlight">Popular</Badge> : null}
          {tags?.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      ) : null}
      {action && !soldOut ? <div className="mt-auto pt-1">{action}</div> : null}
    </article>
  );
}
