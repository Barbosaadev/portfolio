import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTone = "base" | "inverse" | "accent";

const TONE_CLASS: Record<SectionTone, string> = {
  base: "bg-(--color-bg) text-(--color-ink)",
  inverse: "bg-(--color-inverse-bg) text-(--color-inverse-ink)",
  accent: "bg-(--color-accent) text-(--color-ink)",
};

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  className?: string;
  /** remove o container interno (para composições full-bleed) */
  bleed?: boolean;
}

export function Section({
  children,
  id,
  tone = "base",
  className,
  bleed = false,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-py", TONE_CLASS[tone], className)}>
      {bleed ? children : <div className="container-site">{children}</div>}
    </section>
  );
}
