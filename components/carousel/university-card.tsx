"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import type { University } from "@/lib/types/top-colleges-data";
import Image from "next/image";

interface UniversityCardProps {
  university: University;
}

export function UniversityCard({ university }: UniversityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='flex-shrink-0 w-[350px] px-2'
    >
      <Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
        <div className='relative h-48'>
          <div className='absolute inset-0'>
            <Image
              src={university.coverImage}
              alt={`${university.name} campus`}
              className='w-full h-full object-cover'
              height={200}
              width={350}
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          </div>
          <div className='absolute bottom-4 left-4 right-4'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-white'>
                <Image
                  src={university.logo}
                  alt={university.name}
                  className='w-full h-full object-cover'
                  height={48}
                  width={48}
                  loading='lazy'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-white'>
                  {university.name}
                </h3>
                <p className='text-sm text-white/90'>{university.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='p-4'>
          <div className='flex items-center gap-2 text-primary mb-2'>
            <Trophy className='h-4 w-4' />
            <span className='text-sm font-medium'>
              Ranking: #{university.ranking}
            </span>
          </div>
          <p className='text-sm text-muted-foreground line-clamp-2'>
            {university.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
