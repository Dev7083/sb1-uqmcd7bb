"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { urlFor } from "@/lib/SanityConfig/SanityConfiguration";
import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: string;
  publishedAt: string;
  preview: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
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
            src={urlFor(post.mainImage).width(500).url()}
            alt={post.title}
            className='object-cover w-full h-full'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className='p-6'>
          <div className='flex items-center gap-4 mb-4 text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <AnimatedIcon
                Icon={Calendar}
                className='w-4 h-4'
              />
              <span className='text-sm'>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <motion.h3
            className='text-xl font-semibold mb-2 line-clamp-2'
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {post.title}
          </motion.h3>
          <div className='text-foreground mb-4 flex-grow line-clamp-3'>
            {post.preview && post.preview.substring(0, 100)}...
          </div>
          <Link href={`/post/${post.slug.current}`}>
            <Button
              variant='ghost'
              className='group hover:text-white transition-colors'
            >
              Read More
              <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
