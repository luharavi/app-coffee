"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/brand/wordmark";
import { buttonStyles } from "@/components/ui";
import { cn } from "@/lib/cn";

const links = [
  { href: "/cardapio", label: "Cardápio" },
  { href: "/art-cafe", label: "Art Café" },
  { href: "/gatos", label: "Os gatos" },
  { href: "/#visite", label: "Visite" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    cn(
      "focus-ring rounded-control px-3 py-2 font-medium transition-colors duration-(--duration-quick) hover:text-accent",
      pathname === href ? "text-accent" : "text-ink",
    );

  return (
    <header className="mx-auto w-full max-w-(--container-page) px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-control" aria-label="Sun Day, página inicial">
          <Wordmark className="text-2xl" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/art-cafe#reservar" className={buttonStyles({ size: "sm", className: "ml-2" })}>
            Reservar Art Café
          </Link>
        </nav>

        <button
          type="button"
          className={buttonStyles({ variant: "outline", size: "sm", className: "md:hidden" })}
          aria-expanded={open}
          aria-controls="menu-celular"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="menu-celular" aria-label="Principal" className="mt-3 flex flex-col gap-1 rounded-card bg-surface p-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/art-cafe#reservar"
            className={buttonStyles({ className: "mt-1" })}
            onClick={() => setOpen(false)}
          >
            Reservar Art Café
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
