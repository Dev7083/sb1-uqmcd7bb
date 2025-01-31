"use client";

import { motion } from "framer-motion";
import BlogCard from "./blog-card";
import { blogPosts } from "@/lib/insights/blog-data";
import { LineVector } from "@/components/ui/line-vector";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogGrid() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative'>
      {/* Decorative Line Vectors */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <LineVector
          className='absolute -left-20 top-1/4 text-primary/20'
          variant='zigzag'
        />
        <LineVector
          className='absolute -right-20 bottom-1/4 text-accent/20'
          variant='curve'
        />
      </div>

      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
