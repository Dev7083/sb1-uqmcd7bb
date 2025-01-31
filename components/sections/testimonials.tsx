"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import Image from "next/image";
import Container from "@/components/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Shivi Pandey",
    role: "Software Engineer",
    content:
      "CareerMantra helped me transition from a junior developer to a senior role. The mentorship and guidance were invaluable.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sanskar Dubey",
    role: " Sr. Consultant",
    content:
      "The career assessment tools provided clear insights into my strengths. Now I'm leading a team at a top agency.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Astha Singh",
    role: "UX Designer",
    content:
      "The structured approach to career development and expert mentorship helped me land my dream job.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className='pt-16 pb-2 bg-white dark:bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl font-bold mb-4'
          >
            <div className='flex justify-center gap-8 mb-6'>
              <AnimatedIcon
                Icon={MessageSquare}
                className='text-accent'
              />
            </div>
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-muted-foreground'
          >
            Hear from professionals who transformed their careers with
            CollegeHike
          </motion.p>
        </div>

        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className='max-w-3xl mx-auto'
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  if (
                    swiper.params &&
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Container>
                    <Card className='p-8'>
                      <Quote className='h-12 w-12 text-primary/40 mb-6' />
                      <p className='text-xl text-gray-600 dark:text-foreground mb-6'>
                        {testimonial.content}
                      </p>
                      <div className='flex items-center'>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className='h-12 w-12 rounded-full mr-4'
                        />
                        <div>
                          <h4 className='font-semibold'>{testimonial.name}</h4>
                          <p className='text-gray-600 dark:text-muted-foreground'>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <button
            ref={prevRef}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-muted rounded-full shadow-lg hover:bg-primary hover:text-background dark:hover:bg-white max-sm:hidden ${isBeginning ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isBeginning}
          >
            <ChevronLeft className='h-6 w-6' />
          </button>
          <button
            ref={nextRef}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-muted rounded-full shadow-lg hover:bg-primary hover:text-background dark:hover:bg-white max-sm:hidden ${isEnd ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isEnd}
          >
            <ChevronRight className='h-6 w-6' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
