"use client";

import { motion } from "framer-motion";
import { FounderCard } from "@/components/about/founder-card";
import { CompanyInfo } from "@/components/about/company-info";
import { SocialConnect } from "@/components/about/social-connect";
import { Timeline } from "@/components/about/timeline";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { BadgeInfo } from "lucide-react";
import { LineVector } from "@/components/ui/line-vector";

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-background pt-24 pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-16'
        >
          <div className='flex justify-center gap-8 mb-6'>
            <AnimatedIcon
              Icon={BadgeInfo}
              className='h-10 w-10 text-accent'
            />
          </div>
          <h1 className='text-3xl font-bold mb-4'>About CollegeHike</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Empowering students to make informed career decisions through expert
            guidance and personalized mentorship.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 mb-16'>
          <FounderCard />
          <CompanyInfo />
        </div>

        <Timeline />
        <SocialConnect />
      </div>
    </main>
  );
}
