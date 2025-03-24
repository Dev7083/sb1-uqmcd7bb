"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, IndianRupee , GraduationCap, Briefcase } from "lucide-react";
import type { Course } from "@/lib/types/universities";

interface CoursesListProps {
  courses: Course[];
}

export function CoursesList({ courses }: CoursesListProps) {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-6'>Available Courses</h2>
      <div className='space-y-4'>
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='p-6'>
              <div className='flex flex-wrap gap-6'>
                <div className='flex-1'>
                  <h3 className='text-xl font-semibold mb-4'>{course.name}</h3>
                  <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                    <div className='flex items-center gap-2'>
                      <Clock className='h-4 w-4 text-primary' />
                      <span className='text-sm'>{course.duration}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <IndianRupee  className='h-4 w-4 text-primary' />
                      <span className='text-sm'>{course.tuitionFees}</span>
                    </div>
                  </div>
                  <div className='mb-4'>
                    <h4 className='font-medium mb-2 flex items-center gap-2'>
                      <GraduationCap className='h-4 w-4 text-primary' />
                      Entry Requirements
                    </h4>
                    <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
                      {course.entryRequirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-medium mb-2 flex items-center gap-2'>
                      <Briefcase className='h-4 w-4 text-primary' />
                      Career Prospects
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {course.careerProspects}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
