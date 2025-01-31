"use client";

import { CourseCard } from "./course-card";
import type { Course } from "@/lib/university/university";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          course={course}
          index={index}
        />
      ))}
    </div>
  );
}
