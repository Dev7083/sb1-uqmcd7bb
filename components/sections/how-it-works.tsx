"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ClipboardList, Users, Rocket, University } from "lucide-react";
import Container from "@/components/container";
import { AnimatedIcon } from "../ui/animated-icon";

const steps = [
  {
    title: "Choose Your University",
    description:
      "Select from a wide range of reputable Indian universities offering online degree courses.",
    icon: University,
  },
  {
    title: "Enroll in a Course",
    description:
      "Sign up for your desired undergraduate or postgraduate degree program.",
    icon: ClipboardList,
  },
  {
    title: "Start Learning",
    description:
      "Access course materials, attend virtual classes, and complete assignments online.",
    icon: Rocket,
  },
];

const HowItWorks = () => {
  return (
    <section
      id='how-it-works'
      className='pt-16 pb-2 bg-gray-50 dark:bg-background'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='flex justify-center gap-8 mb-6'>
            <AnimatedIcon
              Icon={Rocket}
              className='text-primary'
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl font-bold mb-4'
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-muted-foreground'
          >
            Your journey to earning a degree online in three simple steps
          </motion.p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Container>
                <Card className='p-6 text-center h-full hover:shadow-lg transition-shadow'>
                  <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6'>
                    <step.icon className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                  <p className='text-muted-foreground'>{step.description}</p>
                </Card>
              </Container>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
