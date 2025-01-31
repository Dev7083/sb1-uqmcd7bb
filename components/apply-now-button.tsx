'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function ApplyNowButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Apply Now
        <ArrowLeft className="ml-3 h-5 w-5 rotate-90" />
      </Button>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
    </motion.div>
  );
}
