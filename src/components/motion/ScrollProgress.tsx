"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/**
 * Barra de leitura no header — Scroll Progress da 21st / Motion Primitives,
 * em GSAP, 2px, verde-limão sobre o traço preto que o site já usa.
 */
export function ScrollProgress({ className }: { className?: string }) {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = bar.current;
      if (!el) return;

      const setScale = gsap.quickTo(el, "scaleX", {
        duration: 0.2,
        ease: "power1.out",
      });

      let frame = 0;
      const update = () => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScale(max > 0 ? window.scrollY / max : 0);
      };
      const onScroll = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(update);
      };

      gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) cancelAnimationFrame(frame);
      };
    },
    { revertOnUpdate: true },
  );

  return (
    <div
      ref={bar}
      aria-hidden="true"
      className={cn("h-full origin-left bg-(--color-accent)", className)}
    />
  );
}
