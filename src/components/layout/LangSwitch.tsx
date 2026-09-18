"use client";

import { cn } from "@/lib/cn";
import { useLocale, type Locale } from "@/i18n/LocaleProvider";

const OPTIONS: Array<{ locale: Locale; key: "pt" | "en" }> = [
  { locale: "pt-BR", key: "pt" },
  { locale: "en", key: "en" },
];

/** Seletor PT / EN minimalista — o ativo fica sólido, sem bandeiras. */
export function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale, dict } = useLocale();

  return (
    <div
      role="group"
      aria-label={dict.langSwitch.ariaLabel}
      className={cn("label-mono flex items-center gap-0 border border-current/40", className)}
    >
      {OPTIONS.map((option) => {
        const active = locale === option.locale;
        return (
          <button
            key={option.locale}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(option.locale)}
            className={cn(
              "min-h-9 cursor-pointer px-3 py-1.5 transition-colors duration-(--duration-fast)",
              active
                ? "bg-(--color-ink) text-(--color-bg)"
                : "text-current/60 hover:text-current",
            )}
          >
            {dict.langSwitch[option.key]}
          </button>
        );
      })}
    </div>
  );
}
