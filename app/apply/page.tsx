"use client";

import { motion } from "framer-motion";
import ApplicationForm from "@/components/pages/apply/application-form";
import UniversityLogos from "@/components/pages/apply/university-logos";
import { LineVector } from "@/components/ui/line-vector";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <main className='min-h-screen bg-background'>
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
      <div className='container mx-auto px-4 py-24'>
        <div className='grid lg:grid-cols-2 gap-8 items-center'>
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='order-2 lg:order-1'
          >
            <ApplicationForm />
          </motion.div>

          {/* Right side - Image and Logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='order-1 lg:order-2'
          >
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30' />
              <Image
                src='https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
                alt='University Campus'
                width={1470}
                height={980}
                className='w-full h-[300px] lg:h-[400px] object-cover rounded-lg relative'
              />
            </div>
            <UniversityLogos />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
