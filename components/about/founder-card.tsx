"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import Image from "next/image";

export function FounderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className='p-6 h-full'>
        {/* <div className='relative mb-6'>
          <div className='absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30' />
          <Image
            src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80'
            alt='Dr. Sarah Mitchell'
            className='w-48 h-48 object-cover rounded-lg mx-auto relative'
            width={400}
            height={400}
          />
        </div> */}

        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold mb-2'>CollegeHike</h2>
          <p className='text-primary font-medium'>Carrier Guidance Platform</p>
        </div>

        <p className='text-muted-foreground mb-6'>
          With years of experience in education and career counseling, we
          founded CollegeHike with a vision to revolutionize how students
          approach their academic and professional journeys. Her unique blend of
          academic expertise and industry insight has helped thousands of
          students find their true calling.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex items-center gap-2'>
            <GraduationCap className='h-5 w-5 text-primary' />
            <span className='text-sm'>Guidance</span>
          </div>
          <div className='flex items-center gap-2'>
            <Award className='h-5 w-5 text-primary' />
            <span className='text-sm'>Mentorship</span>
          </div>
          <div className='flex items-center gap-2'>
            <BookOpen className='h-5 w-5 text-primary' />
            <span className='text-sm'>Counselling</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
