"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { UniversityCard } from "@/components/carousel/university-card";
import { CarouselButton } from "@/components/carousel/carousel-button";
import { FloatingShapes } from "@/components/carousel/floating-shapes";
import { GraduationCap, BookOpen, Laptop } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { universities } from "@/lib/data/top-colleges-data";

export default function UniversityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const newIndex = Math.max(0, Math.min(index, universities.length - 1));
      setCurrentIndex(newIndex);

      const cardWidth = 366; // card width + padding
      containerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const next = () => scrollToIndex(currentIndex + 1);
  const prev = () => scrollToIndex(currentIndex - 1);

  return (
    <section
      className='pt-16 pb-2 bg-background relative overflow-hidden'
      id='partners'
    >
      <FloatingShapes />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              Icon={Laptop}
              className='text-primary'
            />
          </div>
          <h2 className='text-4xl font-bold mb-4'>Top Universities</h2>
          <p className='text-lg text-muted-foreground'>
            Join our network of prestigious educational institutions
          </p>
        </motion.div>

        <div className='relative'>
          <div
            ref={containerRef}
            className='flex gap-4 overflow-x-hidden scroll-smooth relative mb-6'
          >
            {universities.map((university, index) => (
              <UniversityCard
                key={university.name}
                university={university}
              />
            ))}
          </div>

          <div className='flex justify-end gap-2 pr-2 pb-2'>
            <CarouselButton
              direction='left'
              onClick={prev}
              className='shadow-lg hover:bg-primary hover:text-white'
            />
            <CarouselButton
              direction='right'
              onClick={next}
              className='shadow-lg hover:bg-primary hover:text-white'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
