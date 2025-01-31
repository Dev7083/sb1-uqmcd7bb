"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Globe,
  Building2,
  Microscope,
  Code,
  Briefcase,
  PenTool,
  Binary,
  Calculator,
  ArrowRight,
} from "lucide-react";

const courses = {
  ug: [
    { title: "BA", duration: "3 Years", icon: BookOpen },
    { title: "BBA", duration: "3 Years", icon: Briefcase },
    { title: "BCA", duration: "3 Years", icon: Binary },
    { title: "B.Com", duration: "3 Years", icon: Calculator },
    { title: "B.Sc", duration: "3 Years", icon: Microscope },
  ],
  pg: [
    { title: "MA", duration: "2 Years", icon: PenTool },
    { title: "MBA", duration: "2 Years", icon: Briefcase },
    { title: "MCA", duration: "2 Years", icon: Code },
    { title: "M.Com", duration: "2 Years", icon: Calculator },
    { title: "M.Sc", duration: "2 Years", icon: Microscope },
  ],
};

const CourseCard = ({ course, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className='p-4 hover:shadow-lg transition-all duration-300 group'>
        <div className='flex items-center gap-3'>
          <course.icon className='h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300' />
          <div>
            <h3 className='text-lg font-semibold'>{course.title}</h3>
            <p className='text-sm text-muted-foreground'>{course.duration}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default function Courses() {
  return (
    <section className='pt-16 pb-2 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <div className='flex justify-center gap-8 mb-6'>
            <AnimatedIcon
              Icon={GraduationCap}
              className='text-primary'
            />
            <AnimatedIcon
              Icon={BookOpen}
              className='text-accent'
            />
            <AnimatedIcon
              Icon={Briefcase}
              className='text-primary'
            />
          </div>
          <h2 className='text-4xl font-bold mb-4'>Our Course Offerings</h2>
          <p className='text-lg text-muted-foreground'>
            Choose from our wide range of courses
          </p>
        </motion.div>

        <Tabs
          defaultValue='ug'
          className='relative z-10'
        >
          <TabsList className='grid w-full h-full grid-cols-2 mb-8'>
            <TabsTrigger
              value='ug'
              className='text-lg py-3'
            >
              <GraduationCap className='mr-2 h-5 w-5' />
              UG Courses
            </TabsTrigger>
            <TabsTrigger
              value='pg'
              className='text-lg py-3'
            >
              <BookOpen className='mr-2 h-5 w-5' />
              PG Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value='ug'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {courses.ug.map((course, index) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value='pg'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {courses.pg.map((course, index) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='text-center mt-8'
        >
          <Link href='/explore'>
            <Button
              variant='outline'
              className='group hover:text-white'
            >
              More Courses
              <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
