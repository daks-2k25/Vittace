import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { DynamicIcon } from "@/components/ui/icon-map";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vittace-brown-dark pt-20 pb-8">
      <Container className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="cream" />
          <p className="max-w-xs font-sans text-sm font-light leading-relaxed text-vittace-sand/70">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs uppercase tracking-widest text-vittace-sand/60">
            Contato
          </h3>
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-vittace-accent" />
            <span className="font-sans text-sm text-vittace-cream/85">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-vittace-accent" />
            <span className="font-sans text-sm text-vittace-cream/85">
              {siteConfig.phone}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs uppercase tracking-widest text-vittace-sand/60">
            Horários
          </h3>
          {siteConfig.hours.map((entry) => (
            <div key={entry.days} className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-vittace-accent" />
              <span className="font-sans text-sm text-vittace-cream/85">
                {entry.days}
                <br />
                {entry.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs uppercase tracking-widest text-vittace-sand/60">
            Redes sociais
          </h3>
          <div className="flex gap-3">
            {siteConfig.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-vittace-sand/25 text-vittace-cream/85 transition-colors hover:border-vittace-accent hover:text-vittace-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-accent focus-visible:ring-offset-2 focus-visible:ring-offset-vittace-brown-dark"
              >
                <DynamicIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-16 border-t border-vittace-sand/15 pt-6">
        <p className="font-sans text-xs text-vittace-sand/50">
          © {year} {siteConfig.name} — {siteConfig.tagline}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
