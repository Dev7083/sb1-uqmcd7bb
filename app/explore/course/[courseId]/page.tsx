"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Clock,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  Award,
  Calendar,
  DollarSign,
  BookmarkPlus,
  Share2,
  CheckCircle2,
  BriefcaseIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { universityData } from "@/lib/course/course-data";
import { universities } from "@/lib/data/universities";
import { useState } from "react";

export default function CoursePage() {
  const { courseId } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find course from all categories
  const course = Object.values(universityData)
    .flat()
    .find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Card className='p-6 text-center'>
          <h2 className='text-xl font-bold mb-2'>Course Not Found</h2>
          <p className='text-muted-foreground mb-4'>
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href='/explore'>
            <Button>Back to Courses</Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Find universities offering this course
  const offeringUniversities = universities.filter((uni) =>
    uni.courses.some((c) =>
      c.name.toLowerCase().includes(course.name.toLowerCase())
    )
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: course.name,
          text: `Check out ${course.name} at ${course.university}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <main className='min-h-screen bg-background pt-24 pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumb */}
        <nav className='flex items-center space-x-2 text-muted-foreground mb-8'>
          <Link
            href='/explore'
            className='hover:text-foreground transition-colors'
          >
            Explore
          </Link>
          <ChevronRight className='h-4 w-4' />
          <span className='text-foreground'>{course.name}</span>
        </nav>

        {/* Hero Section */}
        <div className='relative h-[400px] rounded-lg overflow-hidden mb-12'>
          <Image
            src={course.image}
            alt={course.name}
            width={1200}
            height={600}
            className={"w-full h-full object-cover"}
            // loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
          <div className='absolute bottom-8 left-8 right-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm'>
                {course.category}
              </span>
            </div>
            <h1 className='text-4xl font-bold mb-4 text-white'>
              {course.name}
            </h1>
            <div className='flex flex-wrap gap-6 text-white/90'>
              <div className='flex items-center'>
                <Clock className='h-5 w-5 mr-2' />
                <span>{course.duration}</span>
              </div>
              <div className='flex items-center'>
                <Building2 className='h-5 w-5 mr-2' />
                <span>{course.university}</span>
              </div>
              <div className='flex items-center'>
                <GraduationCap className='h-5 w-5 mr-2' />
                <span>{course.qualification}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Overview */}
            <Card className='p-6'>
              <h2 className='text-2xl font-bold mb-4'>Course Overview</h2>
              <p className='text-muted-foreground mb-6'>
                This comprehensive {course.name} program provides students with
                a strong foundation in theoretical knowledge and practical
                skills. The curriculum is designed to meet industry standards
                and prepare students for successful careers.
              </p>

              <div className='grid sm:grid-cols-2 gap-6'>
                <div className='flex items-start gap-3'>
                  <Users className='h-5 w-5 text-primary mt-1' />
                  <div>
                    <p className='font-medium'>Class Size</p>
                    <p className='text-sm text-muted-foreground'>
                      30-40 students per batch
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <BookOpen className='h-5 w-5 text-primary mt-1' />
                  <div>
                    <p className='font-medium'>Study Mode</p>
                    <p className='text-sm text-muted-foreground'>
                      Full-time with practical sessions
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Award className='h-5 w-5 text-primary mt-1' />
                  <div>
                    <p className='font-medium'>Accreditation</p>
                    <p className='text-sm text-muted-foreground'>
                      UGC Approved | AICTE Recognition
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <BriefcaseIcon className='h-5 w-5 text-primary mt-1' />
                  <div>
                    <p className='font-medium'>Career Support</p>
                    <p className='text-sm text-muted-foreground'>
                      Placement Assistance & Industry Connect
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Curriculum Highlights */}
            <Card className='p-6'>
              <h2 className='text-2xl font-bold mb-4'>Curriculum Highlights</h2>
              <div className='grid gap-4'>
                {[
                  "Foundation courses in core subjects",
                  "Specialized electives for focused learning",
                  "Industry-relevant projects and case studies",
                  "Practical training and workshops",
                  "Soft skills development modules",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center gap-3'
                  >
                    <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0' />
                    <span className='text-muted-foreground'>{item}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Universities Offering */}
            <section>
              <h2 className='text-2xl font-bold mb-6'>
                Universities Offering This Course
              </h2>
              <div className='grid gap-4'>
                {offeringUniversities.map((uni, index) => (
                  <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className='p-6 hover:shadow-lg transition-all duration-300'>
                      <div className='flex items-center gap-6'>
                        <Image
                          src={uni.logo}
                          alt={uni.name}
                          width={80}
                          height={80}
                          className={"w-20 h-20 rounded-lg object-cover"}
                          loading='lazy'
                        />
                        <div className='flex-1'>
                          <h3 className='text-xl font-semibold mb-2'>
                            {uni.name}
                          </h3>
                          <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                            <div className='flex items-center'>
                              <MapPin className='h-4 w-4 mr-1' />
                              {uni.location.city}, {uni.location.country}
                            </div>
                            <div className='flex items-center'>
                              <Users className='h-4 w-4 mr-1' />
                              {uni.overview.totalStudents.toLocaleString()}{" "}
                              Students
                            </div>
                          </div>
                        </div>
                        <Link href={`/universities/${uni.slug}`}>
                          <Button>View University</Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Quick Actions */}
            <Card className='p-6'>
              <div className='flex gap-4 mb-6'>
                <Button
                  className='flex-1 text-white relative'
                  size='lg'
                  disabled={true}
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                  }}
                >
                  <BookmarkPlus className='mr-2 h-5 w-5' />
                  {isWishlisted ? "Wishlisted" : "Add to Wishlist"}

                  {/* Coming Soon Badge (Positioned in the top-right of the button with added space) */}
                  <span className='absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 inline-block px-2 py-1 text-xs bg-red-500 font-semibold text-yellow-400 rounded-full'>
                    Coming Soon
                  </span>
                </Button>

                <Button
                  variant='outline'
                  size='lg'
                  className='flex-shrink-0 dark:text-white hover:text-white'
                  onClick={handleShare}
                >
                  <Share2 className='h-5 w-5' />
                </Button>
              </div>

              <div className='space-y-4 mb-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='h-5 w-5 text-primary' />
                    <span className='font-medium'>Next Intake</span>
                  </div>
                  <span>September 2024</span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <DollarSign className='h-5 w-5 text-primary' />
                    <span className='font-medium'>Course Fee</span>
                  </div>
                  <span>₹4,50,000/year</span>
                </div>
              </div>
              <Link href='/apply'>
                <Button
                  className='w-full text-white'
                  size='lg'
                >
                  Apply Now
                </Button>
              </Link>
            </Card>

            {/* Eligibility */}
            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4'>Eligibility Criteria</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    Minimum 60% in qualifying examination
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    Valid entrance test score
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    English language proficiency
                  </span>
                </li>
              </ul>
            </Card>

            {/* Career Prospects */}
            <Card className='p-6'>
              <h3 className='text-xl font-bold mb-4'>Career Prospects</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <BriefcaseIcon className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    Industry-specific roles
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <BriefcaseIcon className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    Research opportunities
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <BriefcaseIcon className='h-4 w-4 text-primary mt-1' />
                  <span className='text-muted-foreground'>
                    Entrepreneurship pathways
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
