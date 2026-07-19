"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/lib/i18n/routing";
import { routing } from "@/lib/i18n/routing";
import { useActiveSection } from "@/hooks/useActiveSection";
import { showCvSection } from "@/data/media";
import type { Locale } from "@/types/content";

const allNavItems = [
  { key: "hero", href: "#hero", id: "hero" },
  { key: "reel", href: "#reel", id: "reel" },
  { key: "gallery", href: "#gallery", id: "gallery" },
  { key: "cv", href: "#cv", id: "cv" },
  { key: "contact", href: "#contact", id: "contact" },
] as const;

const navItems = allNavItems.filter(
  (item) => item.key !== "cv" || showCvSection,
);

interface HeaderProps {
  artistName: string;
}

export function Header({ artistName }: HeaderProps) {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = (id: string) =>
    `text-sm transition-colors ${
      activeId === id
        ? "text-stage-gold"
        : "text-stage-cream/70 hover:text-stage-gold"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-stage-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="font-display text-lg tracking-widest text-stage-gold uppercase"
          onClick={closeMenu}
        >
          {artistName.split(" ")[0]}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className={navLinkClass(item.id)}>
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} pathname={pathname} />

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-stage-cream md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-white/5 bg-stage-dark/95 px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className={`block py-1 text-base ${navLinkClass(item.id)}`}
                  onClick={closeMenu}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LocaleSwitcher({
  currentLocale,
  pathname,
}: {
  currentLocale: Locale;
  pathname: string;
}) {
  const otherLocale = routing.locales.find((l) => l !== currentLocale)!;

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="rounded-full border border-stage-gold/40 px-3 py-1 text-xs font-medium tracking-wider text-stage-gold uppercase transition-colors hover:bg-stage-gold/10"
    >
      {otherLocale}
    </Link>
  );
}
