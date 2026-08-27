"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { TeamMember } from "@/types/site";

interface TeamDetailPanelProps {
  member: TeamMember | null;
  panelId: string;
  titleId: string;
  onClose: () => void;
}

export function TeamDetailPanel({
  member,
  panelId,
  titleId,
  onClose,
}: TeamDetailPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [member, onClose]);

  return (
    <AnimatePresence initial={false}>
      {member && (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div
            id={panelId}
            role="region"
            aria-labelledby={titleId}
            className="relative mt-6 flex flex-col overflow-hidden border border-vittace-brown/10 bg-white shadow-md sm:flex-row"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar apresentação"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-vittace-cream/90 text-vittace-brown-dark shadow-md transition-colors hover:bg-vittace-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-accent"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-64">
              <ImagePlaceholder
                src={member.photo}
                alt={member.alt}
                sizes="(min-width: 640px) 256px, 100vw"
              />
            </div>

            <div className="flex flex-col gap-4 p-8 sm:p-10">
              <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-vittace-brown">
                {member.role}
              </span>
              <h3
                id={titleId}
                className="font-display text-3xl text-vittace-brown-dark"
              >
                {member.name}
              </h3>
              {member.specialty && (
                <p className="font-sans text-sm font-medium text-vittace-ink/80">
                  {member.specialty}
                </p>
              )}
              {member.bio && (
                <p className="font-sans text-base font-light leading-relaxed text-vittace-ink/75">
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
