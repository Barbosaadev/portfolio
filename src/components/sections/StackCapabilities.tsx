"use client";

import { useT } from "@/i18n/LocaleProvider";
import { stack } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";

/** Só aqui aparecem tecnologias — ferramentas, não troféus. */
export function StackCapabilities() {
  const t = useT();

  return (
    <Section id="stack" bleed className="border-t-2 border-(--color-border)">
      <div className="container-site">
        <Reveal className="space-y-6">
          <Eyebrow>{t.stack.eyebrow}</Eyebrow>
          <DisplayHeading lines={t.stack.headlineLines} size="lg" />
          <FadeSwap
            text={t.stack.note}
            className="label-mono max-w-xl normal-case tracking-normal text-(--color-ink-muted)"
          />
        </Reveal>
      </div>

      <Reveal className="mt-12 border-y-2 border-(--color-border) py-5">
        <Marquee duration={34}>
          {stack.map((tech) => (
            <span key={tech} className="flex items-center">
              <span className="display-caps px-4 text-display-sm">{tech}</span>
              <span aria-hidden="true" className="size-1.5 bg-(--color-accent)" />
            </span>
          ))}
        </Marquee>
      </Reveal>
    </Section>
  );
}
