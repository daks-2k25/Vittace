"use client";

import { motion } from "framer-motion";
import { finalCta } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-vittace-charcoal py-28 md:py-36"
    >
      <div className="absolute inset-0 opacity-30">
        <ImagePlaceholder
          src={finalCta.image}
          alt="Consultório da Clínica Vittace"
          label="Foto: ambiente / detalhe de tratamento"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-vittace-charcoal via-vittace-charcoal/85 to-vittace-charcoal" />

      <Container className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-vittace-accent"
        >
          {finalCta.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl leading-tight text-vittace-cream md:text-5xl lg:text-6xl"
        >
          {finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl font-sans font-light text-vittace-sand/80"
        >
          {finalCta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4"
        >
          <WhatsAppButton
            label={finalCta.ctaLabel}
            message="Vim pelo site e gostaria de agendar uma avaliação."
            className="px-10 py-4 text-base"
          />
        </motion.div>
      </Container>
    </section>
  );
}
