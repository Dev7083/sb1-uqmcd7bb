"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";

export function CompanyInfo() {
  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality guidance",
    },
    {
      icon: Heart,
      title: "Student-First",
      description: "Putting students' needs at the heart of everything we do",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving our approach to career guidance",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className='p-6 h-full'>
        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Our Story</h3>
          <p className='text-muted-foreground'>
            Founded in 2020, CollegeHike emerged from a simple yet powerful
            idea: every student deserves personalized, expert guidance to
            navigate their educational journey. What started as a small
            counseling practice has grown into a comprehensive career
            development platform serving thousands of students nationwide.
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-semibold mb-4'>Mission & Vision</h3>
          <p className='text-muted-foreground mb-4'>
            Our mission is to empower students with the knowledge, tools, and
            confidence they need to make informed career decisions.
          </p>
          <p className='text-muted-foreground'>
            We envision a future where every student has access to quality
            career guidance, enabling them to realize their full potential and
            contribute meaningfully to society.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Core Values</h3>
          <div className='grid gap-4'>
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='flex items-start gap-3'
              >
                <value.icon className='h-6 w-6 text-primary flex-shrink-0' />
                <div>
                  <h4 className='font-medium'>{value.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
