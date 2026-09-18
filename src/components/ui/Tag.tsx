import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Etiqueta técnica: mono, borda fina, sem cor decorativa. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "label-mono inline-flex items-center border border-current/40 px-2.5 py-1",
        className,
      )}
    >
      {children}
    </span>
  );
}
