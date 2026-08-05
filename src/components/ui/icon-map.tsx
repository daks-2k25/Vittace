import {
  Building2,
  Clock,
  Compass,
  Cpu,
  Droplet,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/ui/social-icons";

type IconComponent = LucideIcon | typeof InstagramIcon;

export const iconMap: Record<string, IconComponent> = {
  Sparkles,
  Smile,
  ShieldCheck,
  Droplet,
  GraduationCap,
  Cpu,
  HeartHandshake,
  Building2,
  Layers,
  MessageCircle,
  Compass,
  Lock,
  Clock,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  tiktok: TiktokIcon,
  whatsapp: MessageCircle,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} />;
}
