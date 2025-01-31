"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { LineVector } from "@/components/ui/line-vector";

export function ExploreHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='text-center mb-6'
    >
      {/* Background Line Vectors */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <LineVector
          className='absolute top-10 left-0 text-primary'
          variant='wave'
        />
        <LineVector
          className='absolute top-50 right-0 rotate-180 text-accent'
          variant='curve'
        />
      </div>
      <div className='flex justify-center mb-4'>
        <GraduationCap className='h-10 w-10 text-primary' />
      </div>
      <h1 className='text-4xl font-bold mb-4'>Explore Courses</h1>
      <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
        Discover top universities and their comprehensive range of courses
        tailored to your academic aspirations.
      </p>
    </motion.div>
  );
}
