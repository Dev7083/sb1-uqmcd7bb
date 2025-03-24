"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Course } from "@/lib/course/course";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
        <div className='relative'>
          <Image
            src={course.image}
            alt={course.name}
            width={400}
            height={200}
            className='w-full h-48 object-cover'
          />
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm'>
              {course.university}
            </span>
          </div>
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-2'>{course.name}</h3>

          <div className='space-y-2 mb-4'>
            <div className='flex items-center text-muted-foreground'>
              <Clock className='h-4 w-4 mr-2' />
              <span className='text-sm'>{course.duration}</span>
            </div>
            <div className='flex items-center text-muted-foreground'>
              <MapPin className='h-4 w-4 mr-2' />
              <span className='text-sm'>{course.location}</span>
            </div>
            <div className='flex items-center text-muted-foreground'>
              <GraduationCap className='h-4 w-4 mr-2' />
              <span className='text-sm'>{course.qualification}</span>
            </div>
          </div>

          <Button
            className='w-full group dark:text-white'
            onClick={() => router.push(`/explore/course/${course.id}`)}
          >
            View Details
            <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
