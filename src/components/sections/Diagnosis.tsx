"use client";

import { useT } from "@/i18n/LocaleProvider";
import { contactHref } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/** Capacidade de diagnóstico, não venda: "me mostre o processo". */
export function Diagnosis() {
  const t = useT();

  return (
    <Section tone="accent">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-end">
        <Reveal>
          <DisplayHeading lines={t.diagnosis.headlineLines} size="lg" />
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <FadeSwap
            text={t.diagnosis.body}
            className="max-w-md text-base font-medium leading-relaxed md:text-lg"
          />
          <ButtonLink
            href={contactHref()}
            label={t.diagnosis.cta}
            variant="outline"
            className="border-(--color-ink) hover:bg-(--color-ink) hover:text-(--color-accent)"
            showArrow
          />
        </Reveal>
      </div>
    </Section>
  );
}
