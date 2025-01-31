"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Target,
  Users,
  TrendingUp,
  Compass,
  Award,
  Goal,
  Percent,
  CheckCircle,
} from "lucide-react";
import Container from "@/components/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const features = [
  {
    title: "UG & PG Degree Courses",
    description:
      "Enroll in a variety of undergraduate and postgraduate degree programs from reputable universities.",
    icon: BookOpen,
  },
  {
    title: "Discounts on Courses",
    description:
      "Avail exclusive discounts on degree courses to make education more affordable.",
    icon: Percent,
  },
  {
    title: "Relaxed Attendance Criteria",
    description:
      "Benefit from flexible attendance policies designed to accommodate your schedule.",
    icon: CheckCircle,
  },
  {
    title: "Recognized by UGC",
    description:
      "Earn genuine degrees that are recognized by the University Grants Commission (UGC).",
    icon: Award,
  },
  {
    title: "Expert Mentorship",
    description:
      "Connect with industry professionals who provide personalized guidance and insights.",
    icon: Users,
  },
  {
    title: "Career Assessment",
    description:
      "Discover your strengths and ideal career path through our comprehensive assessment tools.",
    icon: Compass,
  },
];

const Features = () => {
  return (
    <section
      id='services'
      className='pt-16 pb-3 bg-white dark:bg-background'
    >
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
                Icon={Goal}
                className='text-accent'
              />
            </div>
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-muted-foreground'
          >
            Comprehensive online education solutions tailored to your needs
          </motion.p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Container>
                <Card className='p-6 h-full hover:shadow-lg transition-shadow'>
                  <feature.icon className='h-12 w-12 text-primary mb-4' />
                  <h3 className='text-xl font-semibold mb-2'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </Card>
              </Container>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
