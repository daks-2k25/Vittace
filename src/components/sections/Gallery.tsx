"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { gallery, sectionHeadings, team } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Carousel } from "@/components/ui/Carousel";
import { TeamCard } from "@/components/ui/TeamCard";
import { TeamDetailPanel } from "@/components/ui/TeamDetailPanel";
import { cn } from "@/lib/utils";
import type { GalleryItem, TeamMember } from "@/types/site";

function GalleryTile({ item, alwaysShowLabel = false }: { item: GalleryItem; alwaysShowLabel?: boolean }) {
  return (
    <div className="group relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        <ImagePlaceholder
          src={item.src}
          alt={item.alt}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-vittace-charcoal/70 via-transparent to-transparent p-4 transition-opacity duration-300",
          alwaysShowLabel ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"
        )}
      >
        <div className="flex flex-col">
          <span className="font-sans text-[0.65rem] font-medium uppercase tracking-widest text-vittace-accent">
            {item.category}
          </span>
          <span className="font-display text-lg text-vittace-cream">
            {item.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const ambiente = gallery.filter((item) => item.category !== "Equipe");
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const panelId = "team-detail-panel";
  const titleId = "team-detail-title";

  return (
    <section id="resultados" className="bg-vittace-cream py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          title={sectionHeadings.gallery.title}
          description={sectionHeadings.gallery.description}
        />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  className="relative aspect-[4/5] overflow-hidden"
                >
                  <TeamCard
                    member={member}
                    isActive={activeMember?.name === member.name}
                    panelId={panelId}
                    onToggle={() =>
                      setActiveMember((current) =>
                        current?.name === member.name ? null : member
                      )
                    }
                  />
                </motion.div>
              ))}
            </div>

            <TeamDetailPanel
              member={activeMember}
              panelId={panelId}
              titleId={titleId}
              onClose={() => setActiveMember(null)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          >
            <Carousel
              items={ambiente}
              getKey={(item) => item.label}
              renderItem={(item) => <GalleryTile item={item} alwaysShowLabel />}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
