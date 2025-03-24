import { Suspense } from 'react';
import BlogGrid from "@/components/pages/post/blog-grid";
import BlogHeader from "@/components/pages/post/blog-header";
import { client } from "@/lib/SanityConfig/SanityConfiguration";

async function getPosts() {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "preview": body[0].children[0].text
      }
    `);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function PostPage() {
  const posts = await getPosts();

  return (
    <section className='bg-background pt-8'>
      <BlogHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogGrid initialPosts={posts} />
      </Suspense>
    </section>
  );
}

export const metadata = {
  title: 'Blog Posts | CollegeHike',
  description: 'Read our latest blog posts about career development and education.',
};
