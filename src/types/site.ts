export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook" | "whatsapp" | "tiktok" | "linkedin";
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export type ServicePillar = "odontologia" | "estetica";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  pillar: ServicePillar;
  featured?: boolean;
  image?: string;
}

export interface Differential {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface GalleryItem {
  label: string;
  alt: string;
  category: string;
  src?: string;
}

export interface AuthorityBadge {
  icon: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: { icon: string; label: string }[];
  image?: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  microcopy: string;
  image?: string;
}

export interface CtaSectionContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  image?: string;
}
