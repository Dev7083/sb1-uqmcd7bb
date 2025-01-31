"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar, Users, Map, Award } from "lucide-react";
import type { University } from "@/lib/types/universities";

interface UniversityOverviewProps {
  university: University;
}

export function UniversityOverview({ university }: UniversityOverviewProps) {
  const stats = [
    {
      icon: Calendar,
      label: "Founded",
      value: university.overview.foundedYear,
    },
    {
      icon: Users,
      label: "Total Students",
      value: university.overview.totalStudents.toLocaleString(),
    },
    {
      icon: Map,
      label: "Campus Size",
      value: university.overview.campusSize,
    },
    {
      icon: Award,
      label: "International Students",
      value: `${university.overview.internationalStudentPercentage}%`,
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-bold mb-6'>University Overview</h2>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className='p-4'>
              <stat.icon className='h-8 w-8 text-primary mb-2' />
              <div className='text-2xl font-bold mb-1'>{stat.value}</div>
              <div className='text-sm text-muted-foreground'>{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className='p-6'>
        <h3 className='text-lg font-semibold mb-4'>Accreditation</h3>
        <ul className='space-y-2'>
          {university.overview.accreditation.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className='flex items-center'
            >
              <Award className='h-4 w-4 text-primary mr-2' />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
