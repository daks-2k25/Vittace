"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={hero.image}
          alt="Fachada iluminada da Clínica Vittace ao entardecer"
          label="Foto: retrato, foco em rosto/sorriso"
          priority
          sizes="100vw"
          labelPosition="top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vittace-charcoal/85 via-vittace-charcoal/35 to-vittace-charcoal/10" />
      </div>

      <div className="pointer-events-none absolute inset-3 md:inset-6 border border-vittace-cream/30" />

      <Container className="relative z-10 flex h-full flex-col items-center justify-end pb-24 md:pb-28 text-center">
        <motion.span
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-vittace-sand/90"
        >
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.15}
          variants={fadeUp}
          className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] text-vittace-cream md:text-7xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-6 max-w-xl font-sans text-base font-light text-vittace-cream/85 md:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.45}
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-3"
        >
          <WhatsAppButton
            label={hero.ctaLabel}
            message="Olá! Vim pelo site e gostaria de agendar uma avaliação."
            className="px-9 py-4 text-base"
          />
          <span className="font-sans text-xs text-vittace-cream/60">
            {hero.microcopy}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
