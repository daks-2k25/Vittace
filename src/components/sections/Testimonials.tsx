"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { sectionHeadings, testimonials } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-vittace-sand/40 py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={sectionHeadings.testimonials.eyebrow}
          title={sectionHeadings.testimonials.title}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-6 border border-vittace-brown/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-vittace-brown/30 hover:shadow-xl"
            >
              <div
                className="flex gap-1"
                role="img"
                aria-label={`Avaliação ${testimonial.rating} de 5 estrelas`}
              >
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    aria-hidden="true"
                    className="h-4 w-4 fill-vittace-accent text-vittace-accent"
                  />
                ))}
              </div>

              <blockquote className="font-display text-xl leading-relaxed text-vittace-brown-dark">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 border-t border-vittace-brown/10 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-vittace-brown-dark font-sans text-xs text-vittace-cream">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-sans text-sm text-vittace-ink/70">
                  {testimonial.name}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
