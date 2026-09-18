"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";
import { labItems } from "@/data/lab";
import { siteConfig } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { SpotCard } from "@/components/motion/SpotCard";
import { Tag } from "@/components/ui/Tag";

/**
 * LAB — experimentos e ferramentas. Estrutura extensível: copy em
 * `lab.entries` nos dicionários, href/imagem em `data/lab.ts`.
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
        {labItems.map((item, index) => {
          const entry = t.lab.entries[item.dictKey];
          return (
            <Reveal key={item.dictKey} delay={index * 0.06} className="h-full">
              <SpotCard href={item.href} srHint={t.lab.openExternal}>
                <article className="flex h-full flex-col">
                  <div className="relative aspect-16/10 overflow-hidden border-b-2 border-(--color-border)">
                    <Image
                      src={item.image}
                      alt={entry.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top motion-safe:transition-transform motion-safe:duration-(--duration-slow) motion-safe:ease-(--ease-out-quart) motion-safe:group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <Tag className="self-start bg-(--color-accent)">{entry.tag}</Tag>
                    <h3 className="display-caps text-display-sm">{entry.title}</h3>
                    <FadeSwap
                      text={entry.description}
                      className="text-sm leading-relaxed text-(--color-ink-muted)"
                    />
                    <p className="label-mono mt-auto pt-2 text-(--color-ink)">
                      <FadeSwap as="span" text={entry.hrefLabel} />
                      <span aria-hidden="true"> ↗</span>
                    </p>
                  </div>
                </article>
              </SpotCard>
            </Reveal>
          );
        })}

        <Reveal delay={labItems.length * 0.06} className="h-full">
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
