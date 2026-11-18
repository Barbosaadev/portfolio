"use client";

import { useT } from "@/i18n/LocaleProvider";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";

export function TrackRecord() {
  const t = useT();
  const { trackRecord } = t;

  return (
    <Section
      id="track"
      tone="inverse"
      bleed
      className="overflow-hidden border-t-2 border-(--color-border)"
    >
      <div className="container-site space-y-12 md:space-y-16">
        {/* Cabeçalho da Seção */}
        <div className="space-y-6">
          <Reveal>
            <Eyebrow className="text-(--color-accent)">
              {trackRecord.eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <DisplayHeading
              lines={trackRecord.headlineLines}
              size="xl"
              cascadeBase={7}
            />
          </Reveal>
        </div>

        {/* Grade dos 3 Pilares de Engenharia: 1 col mobile, 2 cols tablet (md/lg), 3 cols desktop amplo (xl) */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trackRecord.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.tag}
              delay={0.15 + index * 0.1}
              className={`flex flex-col justify-between border border-(--color-inverse-border) bg-(--color-inverse-surface) p-6 md:p-8 ${
                index === 2 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="space-y-5">
                {/* Tag & Período */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--color-inverse-border) pb-4">
                  <span className="label-mono font-bold tracking-wider text-(--color-accent)">
                    {pillar.tag}
                  </span>
                  <span className="label-mono text-xs text-(--color-inverse-ink-muted)">
                    {pillar.period}
                  </span>
                </div>

                {/* Papel Técnico */}
                <h3 className="display-caps text-xl tracking-tight text-(--color-inverse-ink) md:text-2xl">
                  {pillar.role}
                </h3>

                {/* Descrição Institucional Anonimizada */}
                <FadeSwap
                  text={pillar.description}
                  className="text-sm leading-relaxed text-(--color-inverse-ink-muted)"
                />
              </div>

              {/* Conquistas Técnicas Concretas */}
              <div className="mt-8 border-t border-(--color-inverse-border) pt-6">
                <p className="label-mono mb-3 text-xs font-semibold uppercase tracking-wider text-(--color-inverse-ink)">
                  {trackRecord.highlightsLabel}
                </p>
                <ul className="space-y-2 text-xs text-(--color-inverse-ink-muted)">
                  {pillar.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span
                        className="mt-1 size-1 shrink-0 bg-(--color-accent)"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Citação de Fechamento Editorial */}
        <Reveal delay={0.4}>
          <div className="border-l-2 border-(--color-accent) pl-6 py-2 md:pl-8">
            <FadeSwap
              text={trackRecord.summaryQuote}
              className="max-w-3xl text-base font-medium leading-relaxed text-(--color-inverse-ink) md:text-lg"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
