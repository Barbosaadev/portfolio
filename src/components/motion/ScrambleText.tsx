"use client";

import type { CSSProperties, ElementType, Ref } from "react";
import { cn } from "@/lib/cn";
import {
  useScramble,
  type ScrambleIntensity,
  type ScrambleOptions,
} from "./useScramble";

interface ScrambleTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  intensity?: ScrambleIntensity;
  cascadeOrder?: number;
}

/**
 * Texto com transição de morphing/scramble sempre que `text` muda
 * (troca de idioma ou microinteração).
 *
 * Acessibilidade: o texto final semântico fica sempre no DOM (sr-only);
 * os glifos intermediários vivem em uma camada aria-hidden — screen
 * readers nunca leem texto embaralhado.
 */
export function ScrambleText({
  text,
  as: Tag = "span",
  className,
  style,
  intensity,
  cascadeOrder,
}: ScrambleTextProps) {
  const options: ScrambleOptions = { intensity, cascadeOrder };
  const { display, containerRef } = useScramble(text, options);

  return (
    <Tag
      ref={containerRef as Ref<never>}
      className={cn("block", className)}
      style={style}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
