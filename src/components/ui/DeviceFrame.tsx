import Image from "next/image";
import { cn } from "@/lib/cn";

interface DeviceFrameProps {
  kind: "browser" | "phone";
  /** caminho em public/ ou null para placeholder estruturado */
  src: string | null;
  alt: string;
  placeholderLabel: string;
  className?: string;
}

/**
 * Mockup profissional de browser/celular para screenshots reais.
 * Sem imagem, mostra um frame placeholder deliberado (sem stock photo),
 * pronto para substituição.
 */
export function DeviceFrame({
  kind,
  src,
  alt,
  placeholderLabel,
  className,
}: DeviceFrameProps) {
  const isPhone = kind === "phone";

  return (
    <figure
      className={cn(
        "overflow-hidden border-2 border-(--color-border) bg-(--color-surface)",
        isPhone ? "mx-auto w-full max-w-70 rounded-(--radius-md)" : "w-full",
        className,
      )}
    >
      {/* barra do dispositivo */}
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b-2 border-(--color-border) bg-(--color-bg) px-3 py-2"
      >
        {isPhone ? (
          <span className="mx-auto h-1 w-10 rounded-(--radius-pill) bg-(--color-border)" />
        ) : (
          <>
            <span className="size-2 rounded-full border border-(--color-border)" />
            <span className="size-2 rounded-full border border-(--color-border)" />
            <span className="size-2 rounded-full bg-(--color-accent)" />
          </>
        )}
      </div>

      <div
        className={cn(
          "relative",
          isPhone ? "aspect-1/2" : "aspect-16/10",
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,var(--color-border-soft)_10px,var(--color-border-soft)_11px)]"
          >
            <span className="label-mono border border-(--color-border) bg-(--color-bg) px-3 py-1.5 text-(--color-ink-muted)">
              {placeholderLabel}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
