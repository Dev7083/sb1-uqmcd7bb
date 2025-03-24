"use client";
import { motion } from "framer-motion";
import BlogCard from "./blog-card";
import { LineVector } from "@/components/ui/line-vector";
import { useEffect, useState } from 'react';
import type { Post } from '@/types/post'; 
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

interface BlogGridProps {
  initialPosts: Post[];
}

export default function BlogGrid({ initialPosts }: BlogGridProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  if (!posts.length) {
    return (
      <div className="py-24 text-center">
        <p className="text-lg text-muted-foreground">No posts found.</p>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative'>
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
        {posts.map((post) => (
          <motion.div
            key={post._id}
            variants={item}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
