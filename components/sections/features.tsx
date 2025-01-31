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
} from "lucide-react";

const features = [
  {
    title: "Career Assessment",
    description:
      "Discover your strengths and ideal career path through our comprehensive assessment tools.",
    icon: Compass,
  },
  {
    title: "Expert Mentorship",
    description:
      "Connect with industry professionals who provide personalized guidance and insights.",
    icon: Users,
  },
  {
    title: "Skill Development",
    description:
      "Access curated learning resources and workshops to build essential skills.",
    icon: BookOpen,
  },
  {
    title: "Goal Setting",
    description:
      "Define clear career objectives and create actionable plans to achieve them.",
    icon: Target,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your career development journey with detailed progress analytics.",
    icon: TrendingUp,
  },
  {
    title: "Certification",
    description:
      "Earn recognized certifications to validate your skills and expertise.",
    icon: Award,
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Comprehensive career development solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;