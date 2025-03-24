import { urlFor, client } from "../../../lib/SanityConfig/SanityConfiguration";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function getPost(slug: string) {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      mainImage,
      publishedAt,
      body,
    }
  `,
    { slug }
  );
  return post;
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <section className='relative min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-background/95 to-background/90'>
      <div className='container mx-auto max-w-4xl'>
        {/* Back Button and Header */}
        <div className='mb-2 mt-4 pt-6 max-sm:pt-8 space-y-6'>
          <Link href='/post'>
            <Button 
              variant="ghost" 
              className='group flex items-center text-muted-foreground hover:text-white transition-colors duration-200'
            >
              <ArrowLeft className='w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1' />
              Back to Posts
            </Button>
          </Link>

          <header className='mt-0'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight'>
              {post.title}
            </h1>
            <time 
              dateTime={post.publishedAt}
              className='text-sm sm:text-base text-muted-foreground'
            >
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className='relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              fill
              className='object-cover'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className='prose prose-sm sm:prose lg:prose-lg max-w-none 
          prose-headings:font-bold 
          prose-h1:text-2xl sm:prose-h1:text-3xl
          prose-h2:text-xl sm:prose-h2:text-2xl
          prose-p:text-base sm:prose-p:text-lg
          prose-p:leading-relaxed
          prose-a:text-primary hover:prose-a:text-primary/80
          prose-img:rounded-lg
          prose-pre:bg-muted
          prose-code:text-primary
          prose-blockquote:border-l-primary
          prose-strong:text-foreground'>
          <PortableText value={post.body} />
        </article>
      </div>
    </section>
  );
}
