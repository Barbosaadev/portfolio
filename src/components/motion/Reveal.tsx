"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "./useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** atraso extra em segundos (para sequências dentro da mesma seção) */
  delay?: number;
  /** deslocamento vertical inicial em px (menor em mobile automaticamente) */
  y?: number;
}

/**
 * Reveal on scroll: fade + rise sutil, uma única vez, respeitando
 * prefers-reduced-motion e com deslocamento menor em telas pequenas.
 */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: isMobile ? Math.min(y, 16) : y,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    { dependencies: [reducedMotion], revertOnUpdate: true, scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
