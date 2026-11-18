"use client";

import { useEffect, useState } from "react";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import { siteConfig, getResumeUrl } from "@/data/site";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { ButtonLink } from "@/components/ui/Button";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const ROTATOR_INTERVAL_MS = 3200;

function DownloadIcon({ className = "size-4" }: { className?: string }) {
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

/**
 * Microinteração do hero: pares técnicos de engenharia em rotação.
 */
function ProcessRotator() {
  const t = useT();
  const reducedMotion = useReducedMotion();
  const pairs = t.hero.rotatorPairs;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(
      () => setIndex((value) => (value + 1) % pairs.length),
      ROTATOR_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [pairs.length, reducedMotion]);

  return (
    <p className="label-mono flex min-w-0 max-w-[80vw] sm:max-w-none items-center gap-2 text-(--color-ink-muted)">
      <span className="inline-block size-1.5 shrink-0 bg-(--color-accent)" aria-hidden="true" />
      <ScrambleText
        text={pairs[index % pairs.length]}
        as="span"
        intensity="standard"
        className="normal-case tracking-normal text-(--color-ink) truncate"
      />
    </p>
  );
}

export function Hero() {
  const t = useT();
  const { locale } = useLocale();
  const resumeUrl = getResumeUrl(locale);

  return (
    <section
      id="top"
      className="bg-(--color-bg) text-(--color-ink)"
      aria-labelledby="hero-heading"
    >
      <div className="container-site flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-10 py-10 md:py-14">
        {/* Eyebrow de Posicionamento Técnico com quebra natural sem overflow */}
        <p className="label-mono break-words font-semibold tracking-wider text-(--color-ink-muted)">
          {t.hero.eyebrow}
        </p>

        {/* Título Principal & Subheadline */}
        <div className="space-y-8 md:space-y-10">
          <DisplayHeading
            lines={t.hero.headlineLines}
            as="h1"
            size="2xl"
            cascadeBase={0}
            className="-ml-[0.04em]"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <FadeSwap
              text={t.hero.subheadline}
              className="max-w-xl text-base leading-relaxed text-(--color-ink-muted) md:max-w-2xl md:text-lg"
            />

            {/* CTAs de Conversão Técnica: 100% de largura no mobile, inline em sm+ */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0">
              <ButtonLink
                href={siteConfig.anchors.work}
                label={t.hero.ctaPrimary}
                variant="primary"
                cascadeOrder={5}
                className="w-full sm:w-auto"
              />

              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono inline-flex w-full min-h-12 items-center justify-center gap-2 border-2 border-(--color-border) bg-(--color-surface) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-[2px_2px_0_0_var(--color-border)] transition-all duration-(--duration-fast) hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-(--color-accent) hover:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-ink) sm:w-auto"
              >
                <DownloadIcon className="size-4 shrink-0" />
                <ScrambleText
                  text={t.hero.ctaSecondary}
                  as="span"
                  intensity="subtle"
                  cascadeOrder={6}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé do Hero: Ticker de Decisões Técnicas + Indicador de Scroll */}
        <div className="flex items-end justify-between gap-4 border-t border-(--color-border-soft) pt-5">
          <ProcessRotator />
          <a
            href={siteConfig.anchors.track}
            aria-label={locale === "pt-BR" ? "Rolar para a seção de trajetória" : "Scroll to track record section"}
            className="label-mono shrink-0 inline-flex items-center gap-1 text-(--color-ink-muted) transition-colors hover:text-(--color-ink)"
          >
            <span className="hidden sm:inline text-xs">{t.nav.track}</span>
            <span aria-hidden="true" className="text-base font-bold">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
