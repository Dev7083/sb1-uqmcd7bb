import Link from "next/link";
import { client, urlFor } from "@/lib/SanityConfig/SanityConfiguration";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "preview": body[0].children[0].text
    }
  `);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <section className='relative sm:min-h-screen lg:min-h-screen flex items-center p-16 max-sm:pb-22 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold my-8'>Blog Posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post: any) => (
            <Link
              href={`/post/${post.slug.current}`}
              key={post._id}
            >
              <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col'>
                {post.mainImage && (
                  <div className='w-full h-48 relative'>
                    <Image
                      src={urlFor(post.mainImage).width(500).url()}
                      alt={post.title}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                )}
                <div className='p-4 flex-grow bg-muted flex flex-col'>
                  <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
                  <p className='text-gray-600 mb-2'>
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  {post.preview && (
                    <p className='text-foreground mb-4 flex-grow'>
                      {post.preview.substring(0, 100)}...
                    </p>
                  )}
                  <div className='mt-auto'>
                    <span className='text-background hover:underline'>
                      <Button
                        variant='ghost'
                        className='group bg-foreground hover:text-foreground transition-colors'
                      >
                        Read More
                        <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
