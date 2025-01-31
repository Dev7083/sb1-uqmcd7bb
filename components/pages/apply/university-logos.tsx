"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const universities = [
  {
    name: "Amity University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "Manipal University",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "JAIN University",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    name: "LPU Online",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
  },
];

export default function UniversityLogos() {
  return (
    <div className='mt-8'>
      <h3 className='text-lg font-semibold mb-4 text-center'>
        Our Partner Universities
      </h3>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {universities.map((university, index) => (
          <motion.div
            key={university.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='flex flex-col items-center'
          >
            <div className='w-16 h-16 rounded-full overflow-hidden mb-2'>
              <Image
                src={university.logo}
                alt={university.name}
                width={100}
                height={100}
              />
            </div>
            <p className='text-sm text-center text-muted-foreground'>
              {university.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
