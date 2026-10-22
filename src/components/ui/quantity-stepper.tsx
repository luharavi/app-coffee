"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const stepButton =
  "focus-ring grid size-9 place-items-center rounded-full text-lg font-semibold text-ink " +
  "transition-colors duration-(--duration-quick) hover:bg-surface-sunken disabled:opacity-35 disabled:pointer-events-none";

/** Quantity picker for an order line. Controlled or uncontrolled. */
export function QuantityStepper({
  label,
  value: controlled,
  defaultValue = 1,
  min = 0,
  max = 20,
  onChange,
  className,
}: {
  /** What is being counted, read by screen readers ("Quantidade de flat white"). */
  label: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
}) {
  const [internal, setInternal] = useState(defaultValue);
  const value = controlled ?? internal;

  function set(next: number) {
    const clamped = Math.min(max, Math.max(min, next));
    if (controlled === undefined) setInternal(clamped);
    onChange?.(clamped);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("inline-flex w-fit items-center gap-1 rounded-full border border-line-strong p-1", className)}
    >
      <button type="button" className={stepButton} onClick={() => set(value - 1)} disabled={value <= min} aria-label="Diminuir">
        −
      </button>
      <output aria-live="polite" className="w-8 text-center font-semibold tabular-nums">
        {value}
      </output>
      <button type="button" className={stepButton} onClick={() => set(value + 1)} disabled={value >= max} aria-label="Aumentar">
        +
      </button>
    </div>
  );
}
