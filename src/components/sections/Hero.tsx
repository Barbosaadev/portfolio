"use client";

import { useEffect, useState } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { siteConfig, contactHref } from "@/data/site";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { ButtonLink } from "@/components/ui/Button";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const ROTATOR_INTERVAL_MS = 3200;

/**
 * Microinteração do hero: a mesma gramática visual do scramble aplicada
 * fora da troca de idioma — pares "processo manual → software" em ciclo.
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
    <p className="label-mono text-(--color-ink-muted)">
      <ScrambleText
        text={pairs[index % pairs.length]}
        as="span"
        intensity="standard"
        className="normal-case tracking-normal"
      />
    </p>
  );
}

export function Hero() {
  const t = useT();

  return (
    <section
      id="top"
      className="bg-(--color-bg) text-(--color-ink)"
      aria-labelledby="hero-heading"
    >
      <div className="container-site flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-10 py-10 md:py-14">
        <p className="label-mono text-(--color-ink-muted)">{t.hero.eyebrow}</p>

        <div className="space-y-8 md:space-y-10">
          <DisplayHeading
            lines={t.hero.headlineLines}
            as="h1"
            size="2xl"
            cascadeBase={0}
            className="-ml-[0.04em]"
          />

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <FadeSwap
              text={t.hero.subheadline}
              className="max-w-md text-base leading-relaxed text-(--color-ink-muted) md:text-lg"
            />

            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <ButtonLink
                href={siteConfig.anchors.work}
                label={t.hero.ctaPrimary}
                variant="primary"
                cascadeOrder={5}
              />
              <ButtonLink
                href={contactHref()}
                label={t.hero.ctaSecondary}
                variant="outline"
                cascadeOrder={6}
                showArrow
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-(--color-border-soft) pt-5">
          <ProcessRotator />
          <p aria-hidden="true" className="label-mono text-(--color-ink-faint)">
            ↓
          </p>
        </div>
      </div>
    </section>
  );
}
