"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types/universities";

interface TestimonialsListProps {
  testimonials: Testimonial[];
}

export function TestimonialsList({ testimonials }: TestimonialsListProps) {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-6'>Student Testimonials</h2>
      <div className='grid sm:grid-cols-2 gap-6'>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='p-6'>
              <Quote className='h-8 w-8 text-primary/20 mb-4' />
              <p className='text-muted-foreground mb-6'>
                {testimonial.content}
              </p>
              <div className='flex items-center gap-4'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.studentName}
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold'>{testimonial.studentName}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.course}, Class of {testimonial.year}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
