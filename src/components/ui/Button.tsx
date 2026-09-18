"use client";

import { cn } from "@/lib/cn";
import { ScrambleText } from "@/components/motion/ScrambleText";

type ButtonVariant = "primary" | "outline" | "inverse";

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-(--color-ink) border-(--color-ink) hover:bg-(--color-accent-strong)",
  outline:
    "bg-transparent text-current border-current hover:bg-(--color-ink) hover:text-(--color-bg)",
  inverse:
    "bg-(--color-accent) text-(--color-ink) border-(--color-accent) hover:bg-(--color-inverse-ink) hover:border-(--color-inverse-ink)",
};

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
  /** posição na cascata do scramble na troca de idioma */
  cascadeOrder?: number;
  showArrow?: boolean;
}

/**
 * CTA brutalista: borda dura, sem gradiente, label com scramble.
 * Área de toque confortável em mobile (min-height 48px).
 */
export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
  cascadeOrder = 3,
  showArrow = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border-2 px-6 py-3",
        "label-mono font-semibold tracking-[0.14em]",
        "transition-colors duration-(--duration-fast) ease-(--ease-out-quart)",
        VARIANT_CLASS[variant],
        className,
      )}
    >
      <ScrambleText
        text={label}
        as="span"
        intensity="subtle"
        cascadeOrder={cascadeOrder}
      />
      {showArrow && <span aria-hidden="true">→</span>}
    </a>
  );
}
