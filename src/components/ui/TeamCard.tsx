import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/site";

interface TeamCardProps {
  member: TeamMember;
  isActive: boolean;
  panelId: string;
  onToggle: () => void;
}

export function TeamCard({ member, isActive, panelId, onToggle }: TeamCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isActive}
      aria-controls={panelId}
      aria-label={`${isActive ? "Ocultar" : "Ver"} perfil de ${member.name}`}
      className="group relative block h-full w-full overflow-hidden text-left shadow-md transition-shadow duration-500 ease-out hover:shadow-2xl focus-visible:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-accent focus-visible:ring-offset-2 focus-visible:ring-offset-vittace-cream"
    >
      <div
        className={cn(
          "absolute inset-0 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out md:group-hover:scale-105 md:group-focus-visible:scale-105",
          isActive && "md:scale-105"
        )}
      >
        <ImagePlaceholder
          src={member.photo}
          alt={member.alt}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vittace-charcoal/85 via-vittace-charcoal/10 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-5">
        <div className="flex flex-col">
          <span className="font-sans text-[0.65rem] font-medium uppercase tracking-widest text-vittace-accent">
            {member.role}
          </span>
          <span className="font-display text-2xl text-vittace-cream">
            {member.name}
          </span>
        </div>
      </div>

      <span
        className={cn(
          "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border text-vittace-cream backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300",
          isActive
            ? "border-vittace-accent/70 bg-vittace-charcoal/40 opacity-100"
            : "border-vittace-cream/40 bg-vittace-charcoal/20 opacity-70 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
        )}
      >
        <ArrowRight
          className={cn(
            "h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300",
            isActive && "rotate-90"
          )}
        />
      </span>
    </button>
  );
}
