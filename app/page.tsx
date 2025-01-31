import Hero from "@/components/sections/hero";
// import Courses from "@/components/sections/courses";
import ExplorePage from "@/app/explore/page";
import Features from "@/components/sections/features";
import HowItWorks from "@/components/sections/how-it-works";
import PartnerUniversity from "@/components/sections/partner-university";
import StudyOnline from "@/components/sections/study-online";
import FeaturedBlogs from "@/components/sections/featured-blogs";
import FAQ from "@/components/sections/faq";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import ImageMarquee from "@/components/sections/marquee";
import ChatToggler from "@/components/chat/chat-toggler";
import DiscoverColleges from "@/components/sections/discover-colleges";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Courses /> */}
      <ExplorePage />
      <HowItWorks />
      <PartnerUniversity />
      <DiscoverColleges />
      <StudyOnline />
      <Features />
      <FeaturedBlogs />
      <Testimonials />
      <FAQ />
      <ImageMarquee />
      <Contact />
      <ChatToggler />
    </>
  );
}
