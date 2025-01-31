"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2022",
    title: "Foundation",
    description:
      "CollegeHike was established with a vision to transform career guidance.",
  },
  {
    year: "2023",
    title: "Digital Platform Launch",
    description:
      "Launched our comprehensive online career assessment platform.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description: "Recognized as the Career Guidance Platform.",
  },
  {
    year: "2025",
    title: "National Expansion",
    description:
      "Extended our services to international students across 10+ States & Cities.",
  },
];

export function Timeline() {
  return (
    <section className='mb-16'>
      <h2 className='text-2xl font-bold text-center mb-8'>Our Journey</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='p-6 hover:shadow-lg transition-shadow'>
              <div className='text-primary font-bold text-2xl mb-2'>
                {milestone.year}
              </div>
              <h3 className='font-semibold mb-2'>{milestone.title}</h3>
              <p className='text-sm text-muted-foreground'>
                {milestone.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
