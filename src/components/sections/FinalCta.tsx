"use client";

import { useT } from "@/i18n/LocaleProvider";
import { siteConfig, contactHref } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { Reveal } from "@/components/motion/Reveal";

/** Fechamento: enorme, simples, visualmente dominante. */
export function FinalCta() {
  const t = useT();

  return (
    <Section
      id={siteConfig.anchors.contact.slice(1)}
      tone="inverse"
      className="text-center"
    >
      <Reveal>
        <h2 className="display-caps text-display-2xl">
          <ScrambleText text={t.finalCta.lineOne} as="span" className="block" />
          <ScrambleText
            text={t.finalCta.lineTwo}
            as="span"
            className="block text-(--color-accent)"
            cascadeOrder={1}
          />
          <ScrambleText
            text={t.finalCta.lineThree}
            as="span"
            className="block"
            cascadeOrder={2}
          />
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href={contactHref()}
          className="label-mono mt-12 inline-flex min-h-14 items-center gap-3 border-2 border-(--color-accent) bg-(--color-accent) px-10 py-4 text-base font-bold text-(--color-ink) transition-transform duration-(--duration-fast) ease-(--ease-out-quart) hover:scale-[1.03]"
        >
          <ScrambleText
            text={t.finalCta.cta}
            as="span"
            intensity="subtle"
            cascadeOrder={3}
          />
          <span aria-hidden="true">→</span>
        </a>
      </Reveal>
    </Section>
  );
}
