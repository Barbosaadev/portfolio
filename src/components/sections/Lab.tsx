"use client";

import { useT } from "@/i18n/LocaleProvider";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { Tag } from "@/components/ui/Tag";

/**
 * LAB — experimentos e ferramentas. Estrutura extensível: para adicionar
 * um item, basta acrescentar uma entrada em `lab.entries` nos dicionários.
 */
export function Lab() {
  const t = useT();

  return (
    <Section id={siteConfig.anchors.lab.slice(1)} className="border-t-2 border-(--color-border)">
      <Reveal className="space-y-6">
        <Eyebrow>{t.lab.eyebrow}</Eyebrow>
        <DisplayHeading lines={t.lab.headlineLines} size="lg" />
        <FadeSwap
          text={t.lab.description}
          className="max-w-xl text-base leading-relaxed text-(--color-ink-muted)"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.lab.entries.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 0.06}>
            <article className="flex h-full flex-col gap-4 border-2 border-(--color-border) bg-(--color-surface) p-6 transition-transform duration-(--duration-fast) ease-(--ease-out-quart) hover:-translate-y-1">
              <Tag className="self-start bg-(--color-accent)">{entry.tag}</Tag>
              <h3 className="display-caps text-display-sm">{entry.title}</h3>
              <FadeSwap
                text={entry.description}
                className="text-sm leading-relaxed text-(--color-ink-muted)"
              />
            </article>
          </Reveal>
        ))}

        {/* slot aberto: sinaliza que a prateleira continua crescendo */}
        <Reveal delay={t.lab.entries.length * 0.06}>
          <div className="grid h-full min-h-40 place-items-center border-2 border-dashed border-(--color-border-soft) p-6">
            <FadeSwap
              text={t.lab.comingSoon}
              className="label-mono text-center normal-case tracking-normal text-(--color-ink-faint)"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
