"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  Icon: LucideIcon;
  className?: string;
}

export function AnimatedIcon({ Icon, className }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Icon className={className || "h-6 w-6"} />
    </motion.div>
  );
}
