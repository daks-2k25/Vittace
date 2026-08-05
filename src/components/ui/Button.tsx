import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-vittace-brown text-vittace-cream hover:bg-vittace-brown-dark shadow-sm",
  outline:
    "border border-vittace-brown text-vittace-brown hover:bg-vittace-brown hover:text-vittace-cream",
  ghost: "text-vittace-brown hover:bg-vittace-brown/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-all duration-300 font-sans hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-brown-dark focus-visible:ring-offset-2 focus-visible:ring-offset-vittace-cream";

interface ButtonAsLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonAsLinkProps) {
  return (
    <Link
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    />
  );
}
