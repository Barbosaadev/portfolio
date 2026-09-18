"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useFinePointer } from "./useFinePointer";
import { useReducedMotion } from "./useReducedMotion";

interface SpotCardProps {
  children: ReactNode;
  href: string;
  className?: string;
  /** rótulo extra para leitores de tela (ex.: "abre em nova aba") */
  srHint?: string;
}

/**
 * Card com holofote no cursor — Magic Card / Spotlight da 21st, sem blur,
 * sem canto redondo: o limão viaja na borda dura de 2px e lava o miolo.
 */
export function SpotCard({ children, href, className, srHint }: SpotCardProps) {
  const root = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const enabled = !reducedMotion && finePointer;

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!enabled || !root.current) return;
    const rect = root.current.getBoundingClientRect();
    root.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    root.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <a
      ref={root}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      className={cn(
        "group relative block h-full overflow-hidden bg-(--color-border)",
        "transition-transform duration-(--duration-fast) ease-(--ease-out-quart)",
        "hover:-translate-y-1",
        className,
      )}
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "0%",
        } as CSSProperties
      }
    >
      {srHint && <span className="sr-only"> ({srHint})</span>}

      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-(--duration-base) ease-(--ease-out-quart)",
          enabled && "group-hover:opacity-100",
        )}
        style={{
          background:
            "radial-gradient(180px circle at var(--spot-x) var(--spot-y), var(--color-accent), transparent 58%)",
        }}
      />

      <span className="relative z-10 flex h-full flex-col bg-(--color-surface) m-[2px]">
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-(--duration-base) ease-(--ease-out-quart)",
            enabled && "group-hover:opacity-100",
          )}
          style={{
            background:
              "radial-gradient(280px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 68%)",
          }}
        />
        <span className="relative z-10 flex h-full flex-col">{children}</span>
      </span>
    </a>
  );
}
