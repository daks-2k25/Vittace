"use client";

import { motion } from "framer-motion";
import { authorityBadges } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { DynamicIcon } from "@/components/ui/icon-map";

export function AuthorityStrip() {
  return (
    <section className="bg-vittace-brown-dark py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4"
        >
          {authorityBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-center md:text-left"
            >
              <DynamicIcon
                name={badge.icon}
                className="h-5 w-5 shrink-0 text-vittace-accent"
              />
              <span className="font-sans text-xs tracking-wide text-vittace-cream/90 md:text-sm">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
