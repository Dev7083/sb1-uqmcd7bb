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
    <section className='relative sm:min-h-screen lg:min-h-screen flex items-center p-16 max-sm:pb-22 px-32 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90'>
      <Link href='/post'>
        <Button className='w-12 h-12 rounded-full bg-primary hover:bg-foreground text-background shadow-lg'>
          <ArrowLeft className='w-6 h-6 hover:scale-150 ' />
        </Button>
      </Link>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
        <p className='text-gray-600 mb-4'>
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            width={800}
            height={256}
            className='w-full h-64 object-cover rounded-lg mb-8'
          />
        )}
        <div className='prose max-w-none'>
          <PortableText value={post.body} />
        </div>
      </div>
    </section>
  );
}
