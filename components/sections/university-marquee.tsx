"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const universities = [
  {
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200",
    location: "California, USA",
  },
  {
    name: "University of Oxford",
    logo: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=200&h=200",
    location: "Oxford, UK",
  },
  {
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=200&h=200",
    location: "Massachusetts, USA",
  },
  {
    name: "ETH Zurich",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&h=200",
    location: "Zurich, Switzerland",
  },
  {
    name: "University of Tokyo",
    logo: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=200&h=200",
    location: "Tokyo, Japan",
  },
];

const UniversityMarquee = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Partner Universities
        </motion.h2>
        <div className="relative">
          <div className="flex space-x-8 animate-marquee">
            {[...universities, ...universities].map((uni, index) => (
              <Card
                key={`${uni.name}-${index}`}
                className="flex-shrink-0 w-72 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {uni.name}
                </h3>
                <p className="text-gray-600 text-center">{uni.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityMarquee;