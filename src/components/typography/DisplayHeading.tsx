"use client";

import type { ElementType } from "react";
import { cn } from "@/lib/cn";
import { ScrambleText } from "@/components/motion/ScrambleText";

type DisplaySize = "2xl" | "xl" | "lg" | "md";

const SIZE_CLASS: Record<DisplaySize, string> = {
  "2xl": "text-display-2xl",
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
};

interface DisplayHeadingProps {
  /** linhas com quebras intencionais — cada uma anima em cascata */
  lines: string[];
  as?: ElementType;
  size?: DisplaySize;
  /** posição do bloco na cascata da troca de idioma */
  cascadeBase?: number;
  /**
   * "lines": cada linha é um bloco com quebra intencional (heros/manifesto);
   * "flow": as linhas viram um texto único que quebra naturalmente
   * (headlines de projeto, que vivem em colunas estreitas).
   */
  mode?: "lines" | "flow";
  className?: string;
}

/** Headline editorial gigante, caps, com scramble linha a linha. */
export function DisplayHeading({
  lines,
  as: Tag = "h2",
  size = "xl",
  cascadeBase = 2,
  mode = "lines",
  className,
}: DisplayHeadingProps) {
  if (mode === "flow") {
    return (
      <Tag className={cn("display-caps max-w-full text-balance", SIZE_CLASS[size], className)}>
        <ScrambleText
          text={lines.join(" ")}
          as="span"
          cascadeOrder={cascadeBase}
        />
      </Tag>
    );
  }

  return (
    <Tag className={cn("display-caps", SIZE_CLASS[size], className)}>
      {lines.map((line, index) => (
        <ScrambleText
          key={index}
          text={line}
          as="span"
          className="block"
          cascadeOrder={cascadeBase + index}
        />
      ))}
    </Tag>
  );
}
