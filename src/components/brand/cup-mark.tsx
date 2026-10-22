import type { SVGProps } from "react";

/**
 * The cup mark from the olive tile: a bowl with a single slot, set on a base.
 * Inherits colour from `currentColor`.
 */
export function CupMark({ title, ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        fillRule="evenodd"
        d="M8 8h48v14c0 13.3-10.7 22-24 22S8 35.3 8 22V8Zm22 7a2 2 0 0 1 4 0v17a2 2 0 0 1-4 0V15Z"
      />
      <path d="M27 44h10v5H27z" />
      <rect x="12" y="49" width="40" height="7" rx="1" />
    </svg>
  );
}
