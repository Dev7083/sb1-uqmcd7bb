"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// SLide Image Data
const sliderData = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=533",
    alt: "Slide Image",
  },
  {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=533",
    alt: "Slide Image",
  },
  {
    src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=533",
    alt: "Slide Image",
  },
];

const onlineUniversities = [
  {
    name: "Amity Online University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&h=100&q=80",
    description: "Flexible online learning with globally recognized degrees",
    link: "/universities/amity-online",
  },
  {
    name: "JAIN Online",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=100&h=100&q=80",
    description: "Industry-aligned programs with expert faculty support",
    link: "/universities/jain-online",
  },
  {
    name: "Manipal Online",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=100&h=100&q=80",
    description: "Quality education with innovative learning technology",
    link: "/universities/manipal-online",
  },
  {
    name: "LPU Online",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&h=100&q=80",
    description: "Career-focused programs with placement assistance",
    link: "/universities/lpu-online",
  },
];

export default function StudyOnline() {
  return (
    <section className='pt-16 bg-background overflow-hidden' id='study-online'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid  lg:grid-cols-2 gap-12 items-center'>
          {/* 3D Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative overflow-hidden'
            whileHover={{ scale: 1.01 }}
          >
            <div className='relative items-center aspect-video md:aspect-3/2 max-md:max-h-72 mx-auto'>
              <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl blur-2xl shadow-lg' />
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className='w-full h-full rounded-lg shadow-2xl'
              >
                {sliderData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={800}
                      height={533}
                      className='w-full h-full object-cover shadow-2xl'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl shadow-lg' />
            <div className='absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-xl shadow-lg' />
          </motion.div>

          {/* Universities Grid Side */}
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <h2 className='text-4xl font-bold mb-4'>
                Study <span className='text-primary'>Online</span>
              </h2>
              <p className='text-lg text-muted-foreground'>
                Access quality education from leading universities, anytime,
                anywhere
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-6'>
              {onlineUniversities.map((university, index) => (
                <motion.div
                  key={university.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className='p-2 pb-4 h-full hover:shadow-lg transition-all duration-300'>
                    <div className='flex flex-col h-full'>
                      <div className='flex flex-col items-center text-center gap-4 mb-4'>
                        <div className='relative w-20 h-20 rounded-full overflow-hidden'>
                          <Image
                            src={university.logo}
                            alt={university.name}
                            width={400}
                            height={400}
                            className='object-cover'
                          />
                        </div>
                        <div>
                          <h3 className='font-semibold'>{university.name}</h3>
                        </div>
                      </div>
                      {/* <p className='text-muted-foreground text-sm mb-4 flex-grow text-center'>
                        {university.description}
                      </p> */}
                      <Link href={university.link}>
                        <Button
                          variant='outline'
                          className='w-full group hover:text-white'
                        >
                          Learn More
                          <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='flex justify-center'
            >
              <Link href='/explore?tab=online'>
                <Button
                  size='lg'
                  className='group text-white'
                >
                  <GraduationCap className='mr-2 h-5 w-5' />
                  Explore All Online Programs
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
