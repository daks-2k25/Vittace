"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DynamicIcon } from "@/components/ui/icon-map";

export function About() {
  return (
    <section id="sobre" className="bg-vittace-cream py-24 md:py-32">
      <Container className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full order-2 md:order-1"
        >
          <ImagePlaceholder
            src={about.image}
            alt="Ambiente da recepção e consultórios da Vittace"
            label="Foto: ambiente da clínica"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-1 flex flex-col gap-6 md:order-2"
        >
          <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-vittace-brown">
            {about.eyebrow}
          </span>
          <h2 className="font-display text-4xl leading-tight text-vittace-brown-dark md:text-5xl">
            {about.title}
          </h2>

          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="font-sans text-base font-light leading-relaxed text-vittace-ink/75 md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-4 flex flex-col gap-4 border-t border-vittace-brown/15 pt-6 sm:flex-row sm:flex-wrap sm:gap-8">
            {about.highlights.map((highlight) => (
              <div key={highlight.label} className="flex items-center gap-2.5">
                <DynamicIcon
                  name={highlight.icon}
                  className="h-[18px] w-[18px] text-vittace-brown"
                />
                <span className="font-sans text-sm text-vittace-ink/80">
                  {highlight.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
