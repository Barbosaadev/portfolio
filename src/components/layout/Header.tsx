"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/i18n/LocaleProvider";
import { siteConfig, contactHref } from "@/data/site";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { LangSwitch } from "./LangSwitch";

interface NavItem {
  href: string;
  label: string;
}

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = [
    { href: siteConfig.anchors.work, label: t.nav.work },
    { href: siteConfig.anchors.lab, label: t.nav.lab },
    { href: siteConfig.anchors.how, label: t.nav.how },
    { href: siteConfig.anchors.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-(--color-border) bg-(--color-bg) text-(--color-ink)">
      <div className="container-site flex min-h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="display-caps text-lg tracking-tight"
          onClick={() => setOpen(false)}
        >
          {t.nav.brand}
        </a>

        {/* nav desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="principal">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono transition-colors duration-(--duration-fast) hover:text-(--color-ink-muted)"
            >
              <ScrambleText
                text={item.label}
                as="span"
                intensity="subtle"
                cascadeOrder={4 + index}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href={contactHref()}
            className="label-mono hidden items-center border-2 border-(--color-border) bg-(--color-accent) px-4 py-2 font-semibold transition-colors duration-(--duration-fast) hover:bg-(--color-accent-strong) md:inline-flex"
          >
            <ScrambleText
              text={t.nav.cta}
              as="span"
              intensity="subtle"
              cascadeOrder={8}
            />
          </a>

          {/* botão do menu mobile */}
          <button
            type="button"
            className="label-mono inline-flex min-h-9 cursor-pointer items-center border border-current/40 px-3 py-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.nav.menuClose : t.nav.menuOpen}
          </button>
        </div>
      </div>

      {/* menu mobile: lista simples, sem mega menu */}
      <nav
        id="mobile-menu"
        aria-label="principal mobile"
        className={cn(
          "border-t-2 border-(--color-border) bg-(--color-bg) md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <ul>
          {items.map((item) => (
            <li key={item.href} className="border-b border-(--color-border-soft)">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="display-caps block px-(--container-px) py-4 text-2xl"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={contactHref()}
              onClick={() => setOpen(false)}
              className="label-mono block bg-(--color-accent) px-(--container-px) py-5 font-semibold"
            >
              {t.nav.cta} →
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
