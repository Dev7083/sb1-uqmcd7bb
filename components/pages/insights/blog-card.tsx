"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/insights/types";
import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className='relative'
    >
      {/* Card Glow Effect */}
      <div className='absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300' />

      <Card className='relative overflow-hidden h-full bg-card hover:shadow-lg transition-all duration-300'>
        <div className='relative aspect-video overflow-hidden'>
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className='object-cover w-full h-full'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary backdrop-blur-sm'>
              {post.category}
            </span>
          </div>
        </div>
        <div className='p-6'>
          <div className='flex items-center gap-4 mb-4 text-muted-foreground'>
            <div className='flex items-center gap-1 px-4'>
              <AnimatedIcon
                Icon={Calendar}
                className='w-4 h-4 px-4'
              />
              <span className='text-sm px-4'>{post.date}</span>
            </div>
            <div className='flex items-center gap-1 px-4'>
              <AnimatedIcon
                Icon={Clock}
                className='w-4 h-4 px-4'
              />
              <span className='text-sm px-4'>{post.readTime} read</span>
            </div>
          </div>
          <motion.h3
            className='text-xl font-semibold mb-2 line-clamp-2'
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {post.title}
          </motion.h3>
          <p className='text-muted-foreground mb-4 line-clamp-3'>
            {post.excerpt}
          </p>
          {/* <Link href={`/insights/${post.slug}`}> */}
          <Button
            variant='ghost'
            className='group hover:text-background transition-colors'
            onClick={() => router.push(`/insights/${post.slug}`)}
          >
            Read More
            <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Button>
          {/* </Link> */}
        </div>
      </Card>
    </motion.div>
  );
}
