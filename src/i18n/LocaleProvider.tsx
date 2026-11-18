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

/**
 * Normaliza variações comuns de locale:
 * "en", "en-us", "en-US", "en-GB" -> "en"
 * "pt", "pt-br", "pt-BR", "pt_BR", "pt-pt" -> "pt-BR"
 */
export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const clean = value.toLowerCase().trim();
  if (clean === "pt-br" || clean === "pt" || clean === "pt_br" || clean.startsWith("pt-")) {
    return "pt-BR";
  }
  if (clean === "en" || clean === "en-us" || clean === "en_us" || clean.startsWith("en-")) {
    return "en";
  }
  return null;
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Locale global client-side: trocar idioma é só estado React — sem reload,
 * sem perda de scroll/estado.
 * 
 * Ordem de prioridade estrita:
 * 1. Parâmetro de URL (?lang=en ou ?lang=pt-BR) — permite deep linking direto
 * 2. Preferência salva no localStorage
 * 3. Default do sistema ("pt-BR")
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Inicialização no cliente: lê query param ou localStorage
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = normalizeLocale(urlParams.get("lang"));

      if (queryLang) {
        setLocaleState(queryLang);
        window.localStorage.setItem(STORAGE_KEY, queryLang);
        document.documentElement.lang = queryLang;
        return;
      }

      const stored = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
      if (stored && stored !== DEFAULT_LOCALE) {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // fallback silencioso caso storage esteja restrito
    }
  }, []);

  // Sincroniza localStorage e atributo lang do HTML na troca de locale
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // fallback
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;

      // Se a URL já possui o parâmetro ?lang=, atualiza sem recarregar a página
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (url.searchParams.has("lang")) {
          url.searchParams.set("lang", next === "pt-BR" ? "pt-BR" : "en");
          window.history.replaceState({}, "", url.toString());
        }
      }
    } catch {
      // fallback
    }
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
