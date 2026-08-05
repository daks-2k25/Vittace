import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  label: string;
  message?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  label,
  message,
  variant = "primary",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={cn(className)}
    >
      {showIcon && <MessageCircle className="h-4 w-4" />}
      {label}
    </Button>
  );
}
