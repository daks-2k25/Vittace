import { clsx, type ClassValue } from "clsx";
import { siteConfig } from "@/lib/site-config";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getWhatsAppLink(message?: string) {
  const text = message ?? siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
