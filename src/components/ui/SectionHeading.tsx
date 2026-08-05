import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-medium uppercase tracking-[0.25em] font-sans",
            light ? "text-vittace-sand" : "text-vittace-brown"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl leading-tight",
          light ? "text-vittace-cream" : "text-vittace-brown-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg font-sans font-light leading-relaxed",
            light ? "text-vittace-sand/80" : "text-vittace-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
