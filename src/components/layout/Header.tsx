"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-config";
import { Logo } from "@/components/layout/Logo";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Enquanto o menu mobile (overlay full-screen) está aberto, o conteúdo
  // por trás dele fica visualmente escondido mas continua focável por
  // teclado/leitor de tela. `inert` remove essas áreas da navegação até
  // o menu fechar, evitando que o foco "vaze" para trás do overlay.
  useEffect(() => {
    if (!("inert" in HTMLElement.prototype)) return;
    const targets = [
      document.getElementById("main-content"),
      document.querySelector("footer"),
      document.getElementById("floating-whatsapp"),
    ].filter((el): el is HTMLElement => el !== null);

    targets.forEach((el) => {
      el.inert = menuOpen;
    });

    return () => {
      targets.forEach((el) => {
        el.inert = false;
      });
    };
  }, [menuOpen]);

  return (
    <header
      id="top"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-vittace-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(138,107,71,0.15)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Logo variant={scrolled ? "brown" : "cream"} />

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-sm font-sans text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-brown-dark focus-visible:ring-offset-2",
                scrolled
                  ? "text-vittace-ink/80 hover:text-vittace-brown focus-visible:ring-offset-vittace-cream"
                  : "text-vittace-cream/90 hover:text-vittace-cream focus-visible:ring-offset-vittace-charcoal"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton label="Agendar" message="Olá! Gostaria de agendar uma avaliação na Vittace." />
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className={cn(
            "rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-brown-dark focus-visible:ring-offset-2 md:hidden",
            scrolled ? "text-vittace-brown-dark focus-visible:ring-offset-vittace-cream" : "text-vittace-cream focus-visible:ring-offset-vittace-charcoal"
          )}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-[78px] w-screen bg-vittace-cream md:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-8 pb-24">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + index * 0.05, ease: "easeOut" }}
                  className="rounded-sm font-display text-3xl text-vittace-brown-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-brown-dark focus-visible:ring-offset-2 focus-visible:ring-offset-vittace-cream"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + navLinks.length * 0.05, ease: "easeOut" }}
              >
                <WhatsAppButton
                  label="Agendar pelo WhatsApp"
                  message="Olá! Gostaria de agendar uma avaliação na Vittace."
                  className="mt-2 w-full"
                />
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
