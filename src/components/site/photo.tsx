import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/cn";

export type PhotoTone = "olive" | "rose" | "sun" | "sand";

const placeholderTones: Record<PhotoTone, string> = {
  olive: "bg-olive-300 text-olive-900",
  rose: "bg-rose-300 text-espresso-900",
  sun: "bg-sun-300 text-espresso-900",
  sand: "bg-sand-300 text-espresso-900",
};

const ratios = {
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "2/3": "aspect-[2/3]",
} as const;

/**
 * Photo frame. Loads `public/fotos/<file>` when it exists; otherwise shows a
 * coloured placeholder that says which photo goes there. The check runs on the
 * server at render time, so dropping a file in public/fotos is all it takes.
 */
export function Photo({
  file,
  alt,
  ratio = "4/5",
  shape = "rect",
  tone = "olive",
  caption,
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
  className,
}: {
  file: string;
  /** Describe the scene for screen readers; also shown in the placeholder. */
  alt: string;
  ratio?: keyof typeof ratios;
  shape?: "rect" | "arch";
  tone?: PhotoTone;
  /** Visible caption under the photo. */
  caption?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const exists = existsSync(path.join(process.cwd(), "public", "fotos", file));

  return (
    <figure className={cn("@container flex flex-col gap-2", className)}>
      <div
        className={cn(
          "relative overflow-hidden",
          ratios[ratio],
          shape === "arch" ? "rounded-arch" : "rounded-card",
          !exists && placeholderTones[tone],
        )}
      >
        {exists ? (
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/fotos/${file}`} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        ) : (
          <div role="img" aria-label={alt} className="absolute inset-0 flex items-end p-4">
            <p className="text-sm">
              <span className="font-semibold">Foto:</span> {alt}
              <span className="block">public/fotos/{file}</span>
            </p>
          </div>
        )}
      </div>
      {caption ? <figcaption className="text-sm text-ink-muted">{caption}</figcaption> : null}
    </figure>
  );
}
