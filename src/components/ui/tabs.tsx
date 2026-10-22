"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TabItem = { id: string; label: string; content: ReactNode };

/**
 * Accessible tabs (WAI-ARIA tabs pattern): arrow keys move between tabs,
 * Home/End jump to the ends. Used for menu categories.
 */
export function Tabs({
  items,
  defaultTab,
  label,
  className,
}: {
  items: TabItem[];
  defaultTab?: string;
  /** Name of the tab list for screen readers ("Categorias do cardápio"). */
  label: string;
  className?: string;
}) {
  const baseId = useId();
  const [active, setActive] = useState(defaultTab ?? items[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(event: KeyboardEvent, index: number) {
    const last = items.length - 1;
    const next =
      event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(items[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} className="flex gap-1 overflow-x-auto rounded-full bg-surface-sunken p-1 [scrollbar-width:none]">
        {items.map((item, index) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={cn(
                "focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-(--duration-quick)",
                selected ? "bg-surface-inverse text-ink-inverse" : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== active}
          tabIndex={0}
          className="focus-ring mt-6 rounded-card"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
