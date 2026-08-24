"use client";

import { motion } from "framer-motion";
import { differentials, differentialsImage, sectionHeadings } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DynamicIcon } from "@/components/ui/icon-map";

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-vittace-charcoal py-24 md:py-32">
      <Container className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={sectionHeadings.differentials.eyebrow}
            title={sectionHeadings.differentials.title}
            align="left"
            light
          />

          <div className="flex flex-col gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="flex gap-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-vittace-accent/40 text-vittace-accent">
                  <DynamicIcon name={item.icon} className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl text-vittace-cream">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-light leading-relaxed text-vittace-sand/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative min-h-[320px] w-full md:min-h-full"
        >
          <ImagePlaceholder
            src={differentialsImage}
            alt="Sala de atendimento odontológico da Vittace, com equipamentos modernos"
            label="Foto: tecnologia / ambiente de atendimento"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </motion.div>
      </Container>
    </section>
  );
}
