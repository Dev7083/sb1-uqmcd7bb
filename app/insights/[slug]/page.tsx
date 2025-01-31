"use client";

import { use } from "react";
import { blogPosts } from "@/lib/insights/blog-data";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function BlogPost({ params }: Props) {
  const { slug } = use(params);

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>
      <header className='mb-12'>
        <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
        <div className='flex items-center gap-4 text-muted-foreground'>
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className='rounded-full'
          />
          <div>
            <p className='font-medium'>{post.author.name}</p>
            <p className='text-sm'>
              {format(new Date(post.date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </header>

      <div className='relative aspect-video mb-12'>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className='object-cover rounded-lg'
        />
      </div>

      <div className='prose prose-lg dark:prose-invert max-w-none'>
        {post.content}
      </div>
    </article>
  );
}
