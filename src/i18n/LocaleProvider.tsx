"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ptBR } from "./translations/pt-BR";
import { en } from "./translations/en";

export type Locale = "pt-BR" | "en";
export type Dictionary = typeof ptBR;

const DICTIONARIES: Record<Locale, Dictionary> = { "pt-BR": ptBR, en };
const STORAGE_KEY = "portfolio.locale";
const DEFAULT_LOCALE: Locale = "pt-BR";

function isLocale(value: string | null): value is Locale {
  return value === "pt-BR" || value === "en";
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Locale global client-side: trocar idioma é só estado React — sem reload,
 * sem perda de scroll/estado. Preparado para rotas /pt e /en futuras:
 * basta inicializar `locale` a partir da rota em vez do localStorage.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // restaura preferência salva (a transição de scramble roda na troca)
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored) && stored !== DEFAULT_LOCALE) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, dict: DICTIONARIES[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale deve ser usado dentro de <LocaleProvider>");
  }
  return context;
}

/** Acesso tipado ao dicionário ativo: `const t = useT(); t.hero.subheadline` */
export function useT(): Dictionary {
  return useLocale().dict;
}
