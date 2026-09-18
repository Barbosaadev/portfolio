"use client";

import { useT } from "@/i18n/LocaleProvider";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { DisplayHeading } from "@/components/typography/DisplayHeading";
import { FadeSwap } from "@/components/motion/FadeSwap";
import { Reveal } from "@/components/motion/Reveal";
import { ScrambleText } from "@/components/motion/ScrambleText";

interface FlowPanelProps {
  label: string;
  caption: string;
  steps: string[];
  tone: "before" | "after";
}

function FlowPanel({ label, caption, steps, tone }: FlowPanelProps) {
  const isAfter = tone === "after";

  return (
    <div
      className={
        isAfter
          ? "border-2 border-(--color-border) bg-(--color-accent) p-6 text-(--color-ink) md:p-10"
          : "border-2 border-(--color-border) bg-(--color-surface) p-6 md:p-10"
      }
    >
      <p className="display-caps text-display-md">
        <ScrambleText text={label} as="span" />
      </p>
      <p className="label-mono mt-1 text-current/60">
        <ScrambleText text={caption} as="span" intensity="subtle" cascadeOrder={1} />
      </p>

      <ol className="mt-8 space-y-0">
        {steps.map((step, index) => (
          <Reveal key={`${step}-${index}`} delay={index * 0.07} y={14}>
            <li className="flex items-baseline gap-4 border-b border-current/20 py-3 last:border-b-0">
              <span className="label-mono text-current/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  isAfter
                    ? "font-mono text-base font-medium md:text-lg"
                    : "font-mono text-base text-(--color-ink-muted) md:text-lg"
                }
              >
                {step}
              </span>
              {!isAfter && index === steps.length - 1 && (
                <span aria-hidden="true" className="ml-auto text-current/40">
                  ↺
                </span>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

/** Complexidade operacional versus simplificação — sem métricas inventadas. */
export function BeforeAfter() {
  const t = useT();

  return (
    <Section tone="inverse">
      <Reveal className="space-y-6">
        <Eyebrow className="text-(--color-inverse-ink-muted)">
          {t.beforeAfter.eyebrow}
        </Eyebrow>
        <DisplayHeading
          lines={[
            t.beforeAfter.headlineTop,
            `${t.beforeAfter.headlineAmp} ${t.beforeAfter.headlineBottom}`,
          ]}
          size="xl"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 text-(--color-ink) md:mt-16 md:grid-cols-2 md:gap-8">
        <FlowPanel
          label={t.beforeAfter.beforeLabel}
          caption={t.beforeAfter.beforeCaption}
          steps={t.beforeAfter.beforeSteps}
          tone="before"
        />
        <FlowPanel
          label={t.beforeAfter.afterLabel}
          caption={t.beforeAfter.afterCaption}
          steps={t.beforeAfter.afterSteps}
          tone="after"
        />
      </div>

      <Reveal>
        <FadeSwap
          text={t.beforeAfter.closing}
          className="mt-10 max-w-2xl text-base leading-relaxed text-(--color-inverse-ink-muted) md:mt-12 md:text-lg"
        />
      </Reveal>
    </Section>
  );
}
