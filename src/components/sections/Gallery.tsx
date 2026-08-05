"use client";

import { motion } from "framer-motion";
import { gallery } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Gallery() {
  return (
    <section id="resultados" className="bg-vittace-cream py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Resultados"
          title="Nossa equipe, nosso espaço"
          description="Conheça as profissionais responsáveis pelo seu atendimento e o ambiente real da Vittace."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                <ImagePlaceholder
                  src={item.src}
                  alt={item.alt}
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-vittace-charcoal/70 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <div className="flex flex-col">
                  <span className="font-sans text-[0.65rem] font-medium uppercase tracking-widest text-vittace-accent">
                    {item.category}
                  </span>
                  <span className="font-display text-lg text-vittace-cream">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
