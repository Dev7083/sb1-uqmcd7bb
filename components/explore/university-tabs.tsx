"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseGrid } from "./course-grid";
import { BookOpen, Briefcase, Code, Calculator } from "lucide-react";
import { universityData } from "@/lib/course/course-data";

interface UniversityTabsProps {
  searchQuery: string;
}

export function UniversityTabs({ searchQuery }: UniversityTabsProps) {
  const filterCourses = (courses: any[]) => {
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.university.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Tabs
      defaultValue='management'
      className='space-y-8 '
    >
      <TabsList className='grid grid-cols-2 lg:grid-cols-4 w-full'>
        <TabsTrigger
          value='management'
          className='space-x-2'
        >
          <Briefcase className='h-4 w-4' />
          <span>Management</span>
        </TabsTrigger>
        <TabsTrigger
          value='engineering'
          className='space-x-2'
        >
          <Code className='h-4 w-4' />
          <span>Engineering</span>
        </TabsTrigger>
        <TabsTrigger
          value='commerce'
          className='space-x-2'
        >
          <Calculator className='h-4 w-4' />
          <span>Commerce</span>
        </TabsTrigger>
        <TabsTrigger
          value='arts'
          className='space-x-2'
        >
          <BookOpen className='h-4 w-4' />
          <span>Arts</span>
        </TabsTrigger>
      </TabsList>

      {Object.entries(universityData).map(([category, courses]) => (
        <TabsContent
          key={category}
          value={category}
        >
          <CourseGrid courses={filterCourses(courses)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
