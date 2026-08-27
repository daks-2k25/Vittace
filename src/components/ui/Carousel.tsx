"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  getKey: (item: T) => string;
  autoPlayInterval?: number;
  className?: string;
  frameClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  getKey,
  autoPlayInterval = 4500,
  className,
  frameClassName = "aspect-[16/10]",
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(((next % items.length) + items.length) % items.length);
  };

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [paused, items.length, autoPlayInterval]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={cn("relative overflow-hidden", frameClassName)}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={getKey(items[index])}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -48 : 48 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {renderItem(items[index])}
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-vittace-cream/90 text-vittace-brown-dark shadow-md transition-colors hover:bg-vittace-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-vittace-cream/90 text-vittace-brown-dark shadow-md transition-colors hover:bg-vittace-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vittace-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {items.map((item, i) => (
              <button
                key={getKey(item)}
                type="button"
                aria-label={`Ir para imagem ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-6 bg-vittace-brown"
                    : "w-2 bg-vittace-brown/30 hover:bg-vittace-brown/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
