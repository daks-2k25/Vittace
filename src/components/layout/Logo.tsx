import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  variant?: "brown" | "cream";
  className?: string;
}

/**
 * Wordmark textual enquanto o arquivo real do logo (SVG/PNG enviado
 * pela clínica) não é adicionado em public/images/logo. Trocar por
 * <Image src="/images/logo/vittace.svg" .../> quando o arquivo chegar.
 */
export function Logo({ variant = "brown", className }: LogoProps) {
  return (
    <Link
      href="#top"
      className={cn(
        "flex flex-col leading-none select-none",
        variant === "brown" ? "text-vittace-brown-dark" : "text-vittace-cream",
        className
      )}
    >
      <span className="font-display text-2xl md:text-3xl tracking-[0.2em]">
        {siteConfig.name.toUpperCase()}
      </span>
      <span
        className={cn(
          "font-sans text-[0.6rem] md:text-xs tracking-[0.15em] mt-1",
          variant === "brown" ? "text-vittace-brown/70" : "text-vittace-sand/80"
        )}
      >
        {siteConfig.tagline.toLowerCase()}
      </span>
    </Link>
  );
}
