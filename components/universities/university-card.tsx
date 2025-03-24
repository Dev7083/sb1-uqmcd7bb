"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, GraduationCap, ArrowRight } from "lucide-react";
import type { University } from "@/lib/types/universities";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
        <div className='relative h-48'>
          <Image
            src={university.heroImage}
            alt={university.name}
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute bottom-4 left-4'>
            <div className='w-16 h-16 rounded-lg overflow-hidden border-2 border-white mb-2'>
              <Image
                src={university.logo}
                alt={`${university.name} logo`}
                width={64}
                height={64}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-2'>{university.name}</h3>

          <div className='flex items-center gap-4 text-muted-foreground mb-4'>
            <div className='flex items-center'>
              <MapPin className='h-4 w-4 mr-1' />
              <span className='text-sm'>
                {university.location.city}, {university.location.country}
              </span>
            </div>
            <div className='flex items-center'>
              <GraduationCap className='h-4 w-4 mr-1' />
              <span className='text-sm'>
                {university.courses.length} Courses
              </span>
            </div>
          </div>

          <p className='text-muted-foreground mb-6 line-clamp-2'>
            {university.description}
          </p>

          <Link href={`/universities/${university.slug}`}>
            <Button className='w-full group text-white'>
              View Details
              <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
