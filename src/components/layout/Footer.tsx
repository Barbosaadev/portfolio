"use client";

import { useT } from "@/i18n/LocaleProvider";
import { siteConfig } from "@/data/site";
import { FadeSwap } from "@/components/motion/FadeSwap";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  const { whatsapp, email } = siteConfig.contact;

  return (
    <footer className="border-t-2 border-(--color-inverse-border) bg-(--color-inverse-bg) text-(--color-inverse-ink)">
      <div className="container-site flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="display-caps text-lg">{t.nav.brand}</p>
          <FadeSwap
            text={t.footer.madeBy}
            className="max-w-sm text-sm text-(--color-inverse-ink-muted)"
          />
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="label-mono flex gap-5">
            {whatsapp && (
              <a href={whatsapp} className="hover:text-(--color-accent)">
                WhatsApp
              </a>
            )}
            {email && (
              <a href={email} className="hover:text-(--color-accent)">
                E-mail
              </a>
            )}
            <a href="#top" className="hover:text-(--color-accent)">
              <FadeSwap as="span" text={`${t.footer.backToTop} ↑`} />
            </a>
          </div>
          <p className="label-mono text-(--color-inverse-ink-muted)">
            © {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
