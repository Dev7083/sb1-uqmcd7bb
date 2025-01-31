"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

export function CarouselButton({
  direction,
  onClick,
  className,
}: CarouselButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={onClick}
        variant='outline'
        size='icon'
        className={cn(
          "rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90",
          className
        )}
        aria-label={`Scroll ${direction}`}
      >
        <Icon className='h-5 w-5' />
      </Button>
    </motion.div>
  );
}
