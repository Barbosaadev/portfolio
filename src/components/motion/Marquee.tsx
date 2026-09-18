import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** segundos para um ciclo completo */
  duration?: number;
}

/**
 * Marquee infinito em CSS puro (composited, sem JS por frame).
 * Pausa automaticamente com prefers-reduced-motion (ver globals.css).
 */
export function Marquee({ children, className, duration = 28 }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max"
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
