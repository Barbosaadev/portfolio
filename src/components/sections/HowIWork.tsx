"use client";

import { useT } from "@/i18n/LocaleProvider";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";

/** Quatro etapas com números grandes — sem processo de agência artificial. */
export function HowIWork() {
  const t = useT();

  return (
    <Section id={siteConfig.anchors.how.slice(1)}>
      <Reveal className="space-y-6">
        <Eyebrow>{t.howIWork.eyebrow}</Eyebrow>
        <DisplayHeading lines={t.howIWork.headlineLines} size="lg" />
      </Reveal>

      <ol className="mt-12 grid gap-px border-2 border-(--color-border) bg-(--color-border) sm:grid-cols-2 lg:grid-cols-4">
        {t.howIWork.steps.map((step, index) => (
          <li key={step.title} className="bg-(--color-bg)">
            <Reveal delay={index * 0.08} className="flex h-full flex-col gap-6 p-6 md:p-8">
              <span className="display-caps text-display-lg text-(--color-ink-faint)">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-auto space-y-2">
                <h3 className="display-caps text-display-sm">{step.title}</h3>
                <FadeSwap
                  text={step.description}
                  className="text-sm leading-relaxed text-(--color-ink-muted)"
                />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
