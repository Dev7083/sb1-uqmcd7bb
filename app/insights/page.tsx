import BlogGrid from "@/components/pages/insights/blog-grid";
import BlogHeader from "@/components/pages/insights/blog-header";

export default function BlogPage() {
  return (
    <section className=' bg-background pt-8'>
      <BlogHeader />
      <BlogGrid />
    </section>
  );
}
