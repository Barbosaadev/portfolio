import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Rótulo técnico de seção: mono, uppercase, com marcador de índice. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("label-mono flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="inline-block size-2 bg-(--color-accent)"
      />
      {children}
    </p>
  );
}
