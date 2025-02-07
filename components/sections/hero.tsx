"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { ApplyNowButton } from "@/components/apply-now-button";
import Container from "@/components/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import Image from "next/image";
import Link from "next/link";
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { image1, image2, image3, image4, image5, image6 } from "@/lib/constant";

const sliderData = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Career Guidance Slide Image-I",
  },
  {
    src: image1,
    alt: "Career Guidance Slide Image-IV",
  },
  {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Career Guidance Slide Image-II",
  },
  {
    src: image2,
    alt: "Career Guidance Slide Image-V",
  },
  {
    src: image3,
    alt: "Career Guidance Slide Image-VI",
  },
  {
    src: image4,
    alt: "Career Guidance Slide Image-VII",
  },
  {
    src: image5,
    alt: "Career Guidance Slide Image-VIII",
  },
  {
    src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    alt: "Career Guidance Slide Image-III",
  },
  {
    src: image6,
    alt: "Career Guidance Slide Image-IX",
  },
];

const socialIcons = [
  { icon: Linkedin },
  { icon: Twitter },
  { icon: Instagram },
  { icon: Facebook },
  { icon: Youtube },
];
const Hero = () => {
  return (
    <>
      <section className='relative flex items-center max-sm:pt-24 pt-40 pb-16 max-sm:pb-16 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90'>
        {/* Animated Wave Background */}
        <motion.div
          className='absolute inset-0 z-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
        >
          <motion.svg
            className='absolute bottom-0 w-full'
            viewBox='0 0 1440 320'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <motion.path
              className='fill-primary/10'
              d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
              animate={{
                d: [
                  "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,149.3C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
          </motion.svg>
        </motion.div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Image Swiper Section - Appears first on mobile & tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='relative order-1 lg:order-2 max-sm:pt-4 overflow-hidden p-4 max-sm:p-0'
            >
              <Container>
                {/* <Image
                    src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=533'
                    alt='Career Guidance'
                    width={800}
                    height={533}
                    className='relative rounded-lg shadow-2xl w-full md:w-[90%] mx-auto sm:mt-6'
                    priority={true} // Prioritize loading for critical images
                  /> */}
                <div className='relative container p-0'>
                  <div className='absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30' />
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
                    className='w-full h-full rounded-lg'
                  >
                    {sliderData.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          width={800}
                          height={533}
                          className='w-full h-full object-cover shadow-2xl rounded-lg'
                          priority={true}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Container>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center lg:text-left order-2 lg:order-1 py-2'
            >
              <Container>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-6'>
                  Navigate Your Career Path with{" "}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600'>
                    Confidence
                  </span>
                </h1>
                <p className='text-lg md:text-xl text-muted-foreground mb-8'>
                  Secure your future with online degrees from prestigious
                  universities worldwide.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <Link href='/apply'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='group bg-black dark:bg-white dark:hover:text-primary  text-background'
                    >
                      Start Your Journey
                      <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                    </Button>
                  </Link>
                  <Link href='/#how-it-works'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='group text-foreground hover:text-secondary'
                    >
                      Learn More
                      <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                    </Button>
                  </Link>
                </div>
                {/* Social Icons */}
                <div className='flex  justify-center gap-8 pt-6 max-sm:hidden lg:justify-start '>
                  {socialIcons.map((social, index) => (
                    <div
                      className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 hover:bg-primary/30 px-8'
                      key={index}
                    >
                      <AnimatedIcon
                        Icon={social.icon}
                        className='text-primary h-6 w-6'
                      />
                    </div>
                  ))}
                </div>
              </Container>
            </motion.div>
          </div>
          <Container>
            {/* Fixed Button */}
            <Link
              className='fixed top-[45%] rotate-90 -left-12 hidden min-[1366px]:flex z-50'
              href='/apply'
            >
              <ApplyNowButton />
            </Link>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Hero;
