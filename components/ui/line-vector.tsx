"use client";

import { motion } from "framer-motion";

interface LineVectorProps {
  className?: string;
  variant?: "wave" | "zigzag" | "curve";
}

export function LineVector({
  className = "",
  variant = "wave",
}: LineVectorProps) {
  const paths = {
    wave: "M0,64 C100,42 200,86 300,64 C400,42 500,86 600,64",
    zigzag: "M0,64 L100,32 L200,96 L300,32 L400,96 L500,32 L600,96",
    curve: "M0,96 Q150,32 300,96 T600,96",
  };

  return (
    <motion.svg
      viewBox='0 0 600 128'
      className={`w-full h-auto opacity-20 ${className}`}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.2 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d={paths[variant]}
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </motion.svg>
  );
}
