"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import { siteConfig, getResumeUrl, contactHref } from "@/data/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { LangSwitch } from "./LangSwitch";

interface NavItem {
  href: string;
  label: string;
}

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function DownloadIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function Header() {
  const t = useT();
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number>(66);

  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuNavRef = useRef<HTMLDivElement>(null);

  // Mensuração dinâmica da altura real do header em qualquer viewport ou idioma
  useEffect(() => {
    const measureHeader = () => {
      if (headerRef.current) {
        // Medir a barra superior (excluindo o menu suspenso)
        const headerTopBar = headerRef.current.querySelector(".container-site");
        const progressBar = headerRef.current.querySelector('[aria-hidden="true"]');
        const topHeight = headerTopBar ? headerTopBar.getBoundingClientRect().height : 64;
        const progressHeight = progressBar ? progressBar.getBoundingClientRect().height : 2;
        setHeaderHeight(Math.round(topHeight + progressHeight));
      }
    };

    measureHeader();
    window.addEventListener("resize", measureHeader);
    return () => window.removeEventListener("resize", measureHeader);
  }, []);

  // Bloqueio de scroll do body preservando estado anterior e posição de rolagem
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      const prevPaddingRight = document.body.style.paddingRight;
      const scrollY = window.scrollY;

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.paddingRight = prevPaddingRight;
        if (window.scrollY !== scrollY) {
          window.scrollTo(0, scrollY);
        }
      };
    }
  }, [open]);

  // Gerenciamento de foco do menu (Foco inicial, Focus Trap, Escape e Retorno ao botão)
  useEffect(() => {
    if (!open) return;

    // Foco inicial no primeiro item interativo do menu
    const timer = setTimeout(() => {
      const focusables = menuNavRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables && focusables.length > 0) {
        focusables[0].focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        const focusableElements = menuNavRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const allFocusables = [
          menuButtonRef.current,
          ...Array.from(focusableElements),
        ].filter(Boolean) as HTMLElement[];

        const first = allFocusables[0];
        const last = allFocusables[allFocusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const resumeUrl = getResumeUrl(locale);

  const items: NavItem[] = [
    { href: siteConfig.anchors.work, label: t.nav.work },
    { href: siteConfig.anchors.track, label: t.nav.track },
    { href: siteConfig.anchors.how, label: t.nav.how },
    { href: siteConfig.anchors.contact, label: t.nav.contact },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-(--color-bg) text-(--color-ink)">
      {/* Skip to Content acessível */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:border-2 focus:border-(--color-border) focus:bg-(--color-accent) focus:px-4 focus:py-2 focus:font-bold focus:text-(--color-ink)"
      >
        {locale === "pt-BR" ? "Pular para o conteúdo principal" : "Skip to main content"}
      </a>

      <div className="container-site flex min-h-16 items-center justify-between gap-1.5 sm:gap-4">
        {/* Brand */}
        <a
          href="#top"
          className="display-caps min-w-0 shrink truncate text-sm sm:text-lg tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
          onClick={() => setOpen(false)}
        >
          <span className="inline min-[360px]:hidden">G. BARBOSA</span>
          <span className="hidden min-[360px]:inline">{t.nav.brand}</span>
        </a>

        {/* Navegação desktop (apenas a partir de xl / 1280px para dar espaço total aos itens) */}
        <nav className="hidden items-center gap-7 xl:flex" aria-label="principal">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono transition-colors duration-(--duration-fast) hover:text-(--color-ink-muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
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

        {/* Grupo de Ações: Limpo e adaptável (Mobile e Tablet mantêm marca, LangSwitch e Menu) */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Links Sociais (GitHub + LinkedIn) — apenas em xl+ */}
          <div className="hidden items-center gap-1 xl:flex">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Guilherme Barbosa (abre em nova aba)"
              className="inline-flex size-9 items-center justify-center border border-(--color-border) bg-(--color-surface) text-(--color-ink) transition-colors hover:bg-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Guilherme Barbosa (abre em nova aba)"
              className="inline-flex size-9 items-center justify-center border border-(--color-border) bg-(--color-surface) text-(--color-ink) transition-colors hover:bg-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>

          {/* Botão de Download de Currículo no Header — apenas em xl+ */}
          <a
            href={resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.nav.resume} PDF (download)`}
            className="label-mono hidden items-center gap-1.5 border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-xs font-semibold text-(--color-ink) transition-colors duration-(--duration-fast) hover:bg-(--color-accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink) xl:inline-flex"
          >
            <DownloadIcon className="size-3" />
            <ScrambleText
              text={t.nav.resume}
              as="span"
              intensity="subtle"
              cascadeOrder={7}
            />
          </a>

          {/* Seletor de Idioma (Sempre visível em mobile, tablet e desktop) */}
          <LangSwitch />

          {/* CTA Contato Desktop — visível apenas em telas grandes (xl+) */}
          <div className="hidden xl:block">
            <Magnetic>
              <a
                href={contactHref()}
                className="label-mono inline-flex items-center border-2 border-(--color-border) bg-(--color-accent) px-4 py-2 font-semibold text-(--color-ink) shadow-[2px_2px_0_0_var(--color-border)] transition-all duration-(--duration-fast) hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-(--color-accent-strong) hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
              >
                <ScrambleText
                  text={t.nav.cta}
                  as="span"
                  intensity="subtle"
                  cascadeOrder={8}
                />
              </a>
            </Magnetic>
          </div>

          {/* Botão do menu mobile / tablet (< xl) */}
          <button
            ref={menuButtonRef}
            type="button"
            className="label-mono inline-flex min-h-8 sm:min-h-9 cursor-pointer items-center border border-current px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink)"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.nav.menuClose : t.nav.menuOpen}
          </button>
        </div>
      </div>

      <div className="h-0.5 bg-(--color-border)" aria-hidden="true">
        <ScrollProgress />
      </div>

      {/* Menu mobile e tablet (< xl) */}
      <div
        ref={menuNavRef}
        id="mobile-menu"
        role="dialog"
        aria-modal={open ? "true" : undefined}
        aria-label={t.nav.menuOpen}
        style={{ top: `${headerHeight}px` }}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-(--color-bg) xl:hidden",
          open ? "flex" : "hidden",
        )}
      >
        <nav aria-label={t.nav.menuOpen} className="flex flex-col">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="border-b border-(--color-border-soft)">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display-caps block px-(--container-px) py-4 text-xl sm:text-2xl transition-colors hover:bg-(--color-surface)"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Rodapé do Menu: Ações e CTA */}
        <div className="mt-auto border-t border-(--color-border)">
          {/* Ações adicionais: Currículo + GitHub + LinkedIn */}
          <div className="border-b border-(--color-border-soft) bg-(--color-surface) px-(--container-px) py-3.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="label-mono inline-flex items-center gap-2 border border-(--color-border) bg-(--color-bg) px-3 py-1.5 text-xs font-semibold"
              >
                <DownloadIcon className="size-3.5" />
                <span>{t.nav.resume} (PDF)</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Guilherme Barbosa (abre em nova aba)"
                  className="inline-flex size-9 items-center justify-center border border-(--color-border) bg-(--color-bg) transition-colors hover:bg-(--color-accent)"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Guilherme Barbosa (abre em nova aba)"
                  className="inline-flex size-9 items-center justify-center border border-(--color-border) bg-(--color-bg) transition-colors hover:bg-(--color-accent)"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <a
            href={contactHref()}
            onClick={() => setOpen(false)}
            className="label-mono block bg-(--color-accent) px-(--container-px) py-4 text-center font-semibold text-(--color-ink) transition-colors hover:bg-(--color-accent-strong)"
          >
            {t.nav.cta} →
          </a>
        </div>
      </div>
    </header>
  );
}
