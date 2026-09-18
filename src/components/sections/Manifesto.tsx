"use client";

import { Fragment } from "react";
import { useT } from "@/i18n/LocaleProvider";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";

/**
 * Manifesto: pouco texto, tipografia grande, ritmo.
 * A cadeia do trabalho manual roda em marquee — repetitiva de propósito.
 */
export function Manifesto() {
  const t = useT();

  return (
    <Section tone="inverse" bleed className="overflow-hidden">
      <div className="container-site">
        <Reveal>
          <DisplayHeading
            lines={t.manifesto.headlineLines}
            size="xl"
            cascadeBase={7}
          />
        </Reveal>
      </div>

      {/* a rotina que se repete — literalmente em loop */}
      <Reveal className="my-12 border-y border-(--color-inverse-border) py-5 md:my-16">
        <Marquee duration={22}>
          {t.manifesto.chainWords.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              <span className="display-caps px-3 text-display-sm text-(--color-inverse-ink-muted)">
                {word}
              </span>
              <span
                aria-hidden="true"
                className="px-3 font-mono text-(--color-accent)"
              >
                →
              </span>
            </Fragment>
          ))}
        </Marquee>
      </Reveal>

      <div className="container-site">
        <Reveal>
          <FadeSwap
            text={t.manifesto.closing}
            className="max-w-2xl text-display-sm font-semibold leading-snug md:text-display-md md:font-normal"
          />
        </Reveal>
      </div>
    </Section>
  );
}
