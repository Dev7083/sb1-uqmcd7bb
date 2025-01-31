"use client";

import { motion } from "framer-motion";
import { LineVector } from "@/components/ui/line-vector";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { BookOpen, Lightbulb, Target } from "lucide-react";

export default function BlogHeader() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-0 pt-16'>
      {/* Background Line Vectors */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <LineVector
          className='absolute top-0 left-0 text-primary'
          variant='wave'
        />
        <LineVector
          className='absolute bottom-0 right-0 rotate-180 text-accent'
          variant='curve'
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center relative z-10'
      >
        <div className='flex justify-center gap-8 mb-8'>
          <AnimatedIcon
            Icon={BookOpen}
            className='text-primary'
          />
          <AnimatedIcon
            Icon={Lightbulb}
            className='text-accent'
          />
          <AnimatedIcon
            Icon={Target}
            className='text-primary'
          />
        </div>

        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Latest{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
            Insights
          </span>
        </h1>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          Discover expert advice, industry trends, and career development
          strategies to help you succeed in your professional journey.
        </p>
      </motion.div>
    </div>
  );
}
