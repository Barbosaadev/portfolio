"use client";

import { useT } from "@/i18n/LocaleProvider";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";

/** Lista editorial: quatro capacidades, sem buzzword vazia. */
export function WhatIBuild() {
  const t = useT();

  return (
    <Section id={siteConfig.anchors.capabilities.slice(1)}>
      <Reveal className="space-y-6">
        <Eyebrow>{t.whatIBuild.eyebrow}</Eyebrow>
        <DisplayHeading lines={t.whatIBuild.headlineLines} size="lg" />
      </Reveal>

      <ul className="mt-12 border-t-2 border-(--color-border) md:mt-16">
        {t.whatIBuild.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <li className="group grid gap-3 border-b-2 border-(--color-border) py-6 md:grid-cols-[6rem_1fr_2fr] md:items-baseline md:gap-8 md:py-8">
              <span className="label-mono text-(--color-ink-faint)">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="display-caps text-display-md transition-colors duration-(--duration-fast) group-hover:text-(--color-ink-muted)">
                {item.title}
              </h3>
              <FadeSwap
                text={item.description}
                className="max-w-lg text-sm leading-relaxed text-(--color-ink-muted) md:text-base"
              />
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
