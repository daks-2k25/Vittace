"use client";

import { motion } from "framer-motion";
import { sectionHeadings, services } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/icon-map";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="tratamentos" className="bg-vittace-sand/40 py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={sectionHeadings.services.eyebrow}
          title={sectionHeadings.services.title}
          description={sectionHeadings.services.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={cn(
                "group relative flex flex-col gap-5 border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                service.featured
                  ? "border-vittace-brown/40 bg-white"
                  : "border-vittace-brown/10 bg-white/60 hover:border-vittace-brown/30"
              )}
            >
              {service.featured && (
                <span className="absolute right-5 top-5 font-sans text-[0.65rem] font-medium uppercase tracking-widest text-vittace-brown">
                  Destaque
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vittace-brown-dark text-vittace-cream transition-colors duration-300 group-hover:bg-vittace-accent">
                <DynamicIcon name={service.icon} className="h-5 w-5" />
              </div>

              <h3 className="font-display text-2xl text-vittace-brown-dark">
                {service.title}
              </h3>

              <p className="font-sans text-sm font-light leading-relaxed text-vittace-ink/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
