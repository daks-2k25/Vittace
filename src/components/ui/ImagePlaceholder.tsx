import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  labelPosition?: "center" | "top";
}

/**
 * Slot de imagem preparado para receber fotos reais.
 * Sem `src`, renderiza um placeholder de marca com o rótulo do que deve
 * entrar ali — basta passar `src` (via site-config) quando a foto chegar.
 * Requer um contêiner pai com `position: relative` e altura definida.
 * `labelPosition="top"` evita que o rótulo do placeholder colida com
 * texto sobreposto que fica ancorado embaixo (ex.: headline do Hero).
 */
export function ImagePlaceholder({
  src,
  alt,
  label,
  className,
  sizes = "100vw",
  priority = false,
  labelPosition = "center",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center gap-3 bg-gradient-to-br from-vittace-sand via-vittace-brown-light/40 to-vittace-brown/60 text-vittace-brown-dark",
        labelPosition === "top" ? "justify-start pt-16 md:pt-24" : "justify-center",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <ImageIcon className="h-8 w-8 opacity-60" strokeWidth={1.5} />
      {label && (
        <span className="max-w-[80%] text-center text-xs font-sans uppercase tracking-wider opacity-70">
          {label}
        </span>
      )}
    </div>
  );
}
