"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Exam } from "@/lib/types/exam";

interface ExamCardProps {
  exam: Exam;
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
      <div className='relative aspect-[2/1]'>
        <Image
          src={exam.image.url}
          alt={exam.image.alt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority={false}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
        <div className='absolute bottom-4 left-4'>
          <span className='px-3 py-1 text-sm font-medium rounded-full bg-primary/10 backdrop-blur-sm text-white'>
            {exam.category}
          </span>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-4'>{exam.name}</h3>

        <div className='space-y-2 mb-4'>
          <div className='flex items-center text-muted-foreground'>
            <Building2 className='h-4 w-4 mr-2' />
            <span className='text-sm'>{exam.authority}</span>
          </div>
          <div className='flex items-center text-muted-foreground'>
            <Calendar className='h-4 w-4 mr-2' />
            <span className='text-sm'>{exam.date}</span>
          </div>
        </div>

        <p className='text-muted-foreground mb-6 line-clamp-2'>
          {exam.description}
        </p>

        <Link href={`/explore/exam/${exam.id}`}>
          <Button className='w-full group'>
            View Details
            <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
