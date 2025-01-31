"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  "BA - Bachelor of Arts",
  "BBA - Bachelor of Business Administration",
  "BCA - Bachelor of Computer Applications",
  "B.Com - Bachelor of Commerce",
  "B.Sc - Bachelor of Science",
  "MA - Master of Arts",
  "MBA - Master of Business Administration",
  "MCA - Master of Computer Applications",
  "M.Com - Master of Commerce",
  "M.Sc - Master of Science",
];

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Show success message or redirect
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-card p-8 rounded-lg shadow-lg'
    >
      <h1 className='text-4xl font-bold mb-2'>
        Welcome to{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600'>
          CollegeHike
        </span>
      </h1>
      <p className='text-muted-foreground mb-6'>
        Fill this Application Form to Assist you better
      </p>

      <form
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              placeholder='Enter your full name'
              required
              className='bg-background'
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              required
              className='bg-background'
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              type='tel'
              placeholder='+91 1234567890'
              required
              className='bg-background'
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='course'>Course</Label>
            <Select>
              <SelectTrigger className='bg-background'>
                <SelectValue placeholder='Select a course' />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem
                    key={course}
                    value={course}
                  >
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type='submit'
          className='w-full bg-primary hover:bg-primary/90'
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </motion.div>
  );
}
