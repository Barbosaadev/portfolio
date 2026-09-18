"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "./useReducedMotion";

interface FadeSwapProps {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Troca discreta para textos longos (body copy): cross-fade rápido em vez
 * de scramble — o efeito forte fica reservado a headlines, CTAs e labels.
 */
export function FadeSwap({ text, as: Tag = "p", className }: FadeSwapProps) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (text === display) return;
    if (reducedMotion) {
      setDisplay(text);
      return;
    }
    setVisible(false);
    timeoutRef.current = setTimeout(() => {
      setDisplay(text);
      setVisible(true);
    }, 180);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, display, reducedMotion]);

  return (
    <Tag
      className={cn(
        "transition-opacity duration-(--duration-base) ease-(--ease-out-quart)",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {display}
    </Tag>
  );
}
