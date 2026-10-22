import { useId, type InputHTMLAttributes, type ReactElement, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cloneElement } from "react";
import { cn } from "@/lib/cn";

const control =
  "focus-ring w-full rounded-control border border-line-strong bg-surface px-3.5 text-base text-ink " +
  "placeholder:text-ink-muted/80 transition-colors duration-(--duration-quick) " +
  "hover:border-ink-muted disabled:opacity-50 aria-invalid:border-danger";

type ControlProps = { id?: string; "aria-describedby"?: string; "aria-invalid"?: boolean };

/**
 * Label, hint and error for one form control. Wires up `id`,
 * `aria-describedby` and `aria-invalid` on the child automatically.
 */
export function Field({
  label,
  hint,
  error,
  children,
  className,
}: {
  label: string;
  hint?: ReactNode;
  error?: string;
  children: ReactElement<ControlProps>;
  className?: string;
}) {
  const autoId = useId();
  const id = children.props.id ?? autoId;
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {cloneElement(children, {
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })}
      {hint ? (
        <p id={hintId} className="text-sm text-ink-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(control, "h-11", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(control, "min-h-28 py-2.5 leading-relaxed", className)} {...props} />;
}

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={cn(control, "h-11 appearance-none pr-10", className)} {...props}>
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m4 6 4 4 4-4" />
      </svg>
    </div>
  );
}

/** Checkbox or radio with its label. Use `type="radio"` and a shared `name` for a group. */
export function Choice({
  label,
  description,
  type = "checkbox",
  className,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  description?: ReactNode;
  type?: "checkbox" | "radio";
}) {
  return (
    <label className={cn("flex cursor-pointer items-start gap-3 text-base text-ink", className)}>
      <input
        type={type}
        className="focus-ring mt-0.5 size-5 shrink-0 cursor-pointer accent-(--accent)"
        {...props}
      />
      <span className="flex flex-col">
        <span className="font-medium">{label}</span>
        {description ? <span className="text-sm text-ink-muted">{description}</span> : null}
      </span>
    </label>
  );
}
