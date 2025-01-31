"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Logs } from "lucide-react";
import Image from "next/image";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import Link from "next/link";
import Container from "../container";
// Mock Data
const blogs = [
  {
    title: "10 Essential Skills for Remote Work Success",
    slug: "remote-work-skills",
    excerpt:
      "Master these key skills to thrive in the remote work environment and advance your career from anywhere...",
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=400&h=250",
    category: "Education",
    readTime: "5 min read",
  },
  {
    title: "The Future of AI in Career Development",
    slug: "ai-career-development",
    excerpt:
      "Explore how artificial intelligence is reshaping career paths and creating new opportunities across industries...",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&h=250",
    category: "Guides",
    readTime: "4 min read",
  },
  {
    title: "Building a Personal Brand on LinkedIn",
    slug: "linkedin-personal-brand",
    excerpt:
      "Learn effective strategies to build and maintain a strong professional presence on LinkedIn...",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&h=250",
    category: "Insights",
    readTime: "6 min read",
  },
];

const FeaturedBlogs = () => {
  return (
    <section
      id='insights'
      className='pt-16 pb-2 bg-white dark:bg-background'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <div className='flex justify-center gap-8 mb-6'>
            <AnimatedIcon
              Icon={Logs}
              className='text-accent'
            />
          </div>
          <h2 className='text-4xl font-bold mb-4'>Featured Insights</h2>
          <p className='text-xl text-muted-foreground'>
            Latest career advice and industry trends
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Container>
                <Card className='overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-background'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1024} // Adjust width as needed
                    height={480} // Adjust height to maintain aspect ratio
                    className='w-full h-48 object-cover'
                    loading='lazy'
                    quality={50}
                  />

                  <div className='p-6'>
                    <div className='flex justify-between items-center mb-4'>
                      <span className='text-sm font-medium text-primary'>
                        {blog.category}
                      </span>
                      <span className='text-sm text-gray-500'>
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className='text-xl font-semibold mb-2'>{blog.title}</h3>
                    <p className='text-muted-foreground mb-4'>{blog.excerpt}</p>
                    <Link href={`/insights/${blog.slug}`}>
                      <Button
                        variant='ghost'
                        className='group hover:text-white cursor-not-allowed'
                        // disabled
                      >
                        Read More
                        <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Container>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
