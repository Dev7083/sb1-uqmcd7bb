"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Laptop, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StudyOnlineTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='flex items-center justify-center py-12'
    >
      <Card className='max-w-2xl p-8 text-center'>
        <div className='flex justify-center mb-6'>
          <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center'>
            <Laptop className='h-8 w-8 text-primary' />
          </div>
        </div>
        <h2 className='text-2xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-muted-foreground mb-8'>
          We&apos;re working hard to bring you a comprehensive online learning
          platform. Stay tuned for an immersive educational experience.
        </p>
        <Button
          variant='outline'
          className='group hover:text-white'
          disabled
        >
          Learn More
          <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
        </Button>
      </Card>
    </motion.div>
  );
}
