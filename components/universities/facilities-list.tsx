"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Coffee, Dumbbell, Wifi, Users, Library } from "lucide-react";
import type { Facility } from "@/lib/types/universities";

const iconMap: Record<string, any> = {
  "book-open": BookOpen,
  coffee: Coffee,
  dumbbell: Dumbbell,
  wifi: Wifi,
  users: Users,
  library: Library,
};

interface FacilitiesListProps {
  facilities: Facility[];
}

export function FacilitiesList({ facilities }: FacilitiesListProps) {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-6'>Campus Facilities</h2>
      <div className='grid sm:grid-cols-2 gap-4'>
        {facilities.map((facility, index) => {
          const Icon = iconMap[facility.icon] || Library;

          return (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='rounded-full bg-primary/10 p-3'>
                    <Icon className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>{facility.name}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {facility.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
