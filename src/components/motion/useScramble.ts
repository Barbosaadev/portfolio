"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

export type ScrambleIntensity = "subtle" | "standard" | "cinematic";

/** Fallbacks caso os tokens CSS não estejam disponíveis (SSR/testes). */
const FALLBACK_DURATION: Record<ScrambleIntensity, number> = {
  subtle: 380,
  standard: 620,
  cinematic: 1100,
};
const FALLBACK_CASCADE_STEP = 90;

const GLYPHS_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#§/*";
const GLYPHS_LOWER = "abcdefghijklmnopqrstuvwxyz0123456789#§/*";

/** intervalo mínimo entre re-sorteios de glifos (evita flicker ilegível) */
const GLYPH_SHUFFLE_MS = 48;

function readNumberToken(name: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  const value = Number(raw.trim());
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function randomGlyphFor(target: string): string {
  const set = target === target.toLowerCase() ? GLYPHS_LOWER : GLYPHS_UPPER;
  return set[Math.floor(Math.random() * set.length)];
}

function isWordChar(char: string): boolean {
  return /[\p{L}\p{N}]/u.test(char);
}

function easeOutCubic(p: number): number {
  return 1 - Math.pow(1 - p, 3);
}

export interface ScrambleOptions {
  intensity?: ScrambleIntensity;
  /**
   * Posição na cascata da troca de idioma: 0 = primeiro (hero headline),
   * valores maiores começam depois (delay = ordem × --scramble-cascade-step).
   */
  cascadeOrder?: number;
}

interface ScrambleResult {
  /** string atualmente exibida (glifos intermediários durante a animação) */
  display: string;
  /** true enquanto a animação roda — usado para travar o layout */
  isAnimating: boolean;
  /** ref para o elemento animado (lock de min-height durante a transição) */
  containerRef: RefObject<HTMLElement | null>;
}

/**
 * Morphing de texto por scramble controlado.
 *
 * - Interpola o COMPRIMENTO origem → destino (nada de 1:1 ingênuo);
 * - espaços aparecem imediatamente e pontuação resolve cedo (mantém a
 *   silhueta das palavras legível durante a transição);
 * - caracteres resolvem da esquerda para a direita com jitter leve;
 * - glifos intermediários re-sorteiam a cada ~48ms (sem blur de 60fps);
 * - com prefers-reduced-motion o texto troca instantaneamente.
 */
export function useScramble(
  text: string,
  { intensity = "standard", cascadeOrder = 0 }: ScrambleOptions = {},
): ScrambleResult {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const displayRef = useRef(text);
  const targetRef = useRef(text);
  const rafRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  displayRef.current = display;

  useEffect(() => {
    if (text === targetRef.current) return;
    targetRef.current = text;

    // cancela qualquer transição em andamento (troca rápida de idioma)
    cancelAnimationFrame(rafRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (reducedMotion) {
      setDisplay(text);
      return;
    }

    const from = displayRef.current;
    const to = text;
    const duration = readNumberToken(
      `--scramble-${intensity}-duration`,
      FALLBACK_DURATION[intensity],
    );
    const cascadeStep = readNumberToken(
      "--scramble-cascade-step",
      FALLBACK_CASCADE_STEP,
    );

    // trava a altura atual para PT/EN de larguras diferentes não saltarem
    const container = containerRef.current;
    const lockedMinHeight = container
      ? `${container.getBoundingClientRect().height}px`
      : null;
    if (container && lockedMinHeight) {
      container.style.minHeight = lockedMinHeight;
    }

    // limiar de resolução por caractere: esquerda → direita + jitter
    const lastIndex = Math.max(to.length - 1, 1);
    const thresholds = Array.from(
      { length: to.length },
      (_, i) => 0.12 + (i / lastIndex) * 0.62 + Math.random() * 0.22,
    );

    let glyphCache: string[] = [];
    let lastShuffle = -Infinity;

    const finish = () => {
      setDisplay(to);
      setIsAnimating(false);
      if (container) container.style.minHeight = "";
    };

    const start = () => {
      setIsAnimating(true);
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = easeOutCubic(progress);
        const length = Math.round(
          from.length + (to.length - from.length) * eased,
        );

        if (now - lastShuffle >= GLYPH_SHUFFLE_MS) {
          glyphCache = Array.from({ length: Math.max(length, to.length) }, () =>
            randomGlyphFor("A"),
          );
          lastShuffle = now;
        }

        let out = "";
        for (let i = 0; i < length; i += 1) {
          const target = i < to.length ? to[i] : from[i] ?? " ";
          // já resolvido → caractere final
          if (i < to.length && eased >= thresholds[i]) {
            out += target;
            continue;
          }
          // espaços imediatos e pontuação cedo: preserva a silhueta das palavras
          if (target === " ") {
            out += " ";
            continue;
          }
          if (!isWordChar(target) && eased > 0.25) {
            out += target;
            continue;
          }
          out += randomGlyphCase(target, glyphCache[i]);
        }

        setDisplay(out);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          finish();
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const delay = cascadeOrder * cascadeStep;
    if (delay > 0) {
      timeoutRef.current = setTimeout(start, delay);
    } else {
      start();
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (container) container.style.minHeight = "";
    };
  }, [text, intensity, cascadeOrder, reducedMotion]);

  return { display, isAnimating, containerRef };
}

/** aplica ao glifo do cache o "case" do caractere alvo */
function randomGlyphCase(target: string, cached: string | undefined): string {
  const glyph = cached ?? randomGlyphFor(target);
  return target === target.toLowerCase() ? glyph.toLowerCase() : glyph;
}
