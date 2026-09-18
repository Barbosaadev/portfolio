"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "./useReducedMotion";
import { useFinePointer } from "./useFinePointer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

interface MagneticProps {
  children: ReactNode;
  /** 0–1: fração da distância até o cursor. Baixo de propósito. */
  strength?: number;
  className?: string;
}

/**
 * O alvo se aproxima um pouco do cursor — Magnetic da 21st / Motion Primitives,
 * reescrito em GSAP e com deslocamento pequeno para não brigar com o brutalismo.
 */
export function Magnetic({
  children,
  strength = 0.18,
  className,
}: MagneticProps) {
  const root = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = !reducedMotion && finePointer;

  useGSAP(
    () => {
      const el = root.current;
      if (!el || !enabled) return;

      const xTo = gsap.quickTo(el, "x", {
        duration: 0.45,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(el, "y", {
        duration: 0.45,
        ease: "power3.out",
      });

      const onMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        xTo((event.clientX - (rect.left + rect.width / 2)) * strength);
        yTo((event.clientY - (rect.top + rect.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { dependencies: [enabled, strength], revertOnUpdate: true },
  );

  return (
    <div ref={root} className={cn("inline-flex will-change-transform", className)}>
      {children}
    </div>
  );
}
