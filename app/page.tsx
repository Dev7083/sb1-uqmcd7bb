import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import HowItWorks from '@/components/sections/how-it-works';
import UniversityMarquee from '@/components/sections/university-marquee';
import FeaturedBlogs from '@/components/sections/featured-blogs';
import FAQ from '@/components/sections/faq';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UniversityMarquee />
      <FeaturedBlogs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
