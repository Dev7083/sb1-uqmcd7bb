"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Map,
  Award,
  Share2,
  Phone,
  FileText,
} from "lucide-react";
import { universities } from "@/lib/data/universities";
import { UniversityOverview } from "@/components/universities/university-overview";
import { CoursesList } from "@/components/universities/courses-list";
import { FacilitiesList } from "@/components/universities/facilities-list";
import { PhotoGallery } from "@/components/universities/photo-gallery";
import { ContactInfo } from "@/components/universities/contact-info";
import { TestimonialsList } from "@/components/universities/testimonails-list";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { use } from "react";
import { Button } from "@/components/ui/button";

export default function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const university = universities.find((uni) => uni.slug === slug);

  if (!university) {
    notFound();
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: university.name,
          text: `Check out details for ${university.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <main className='min-h-screen bg-background pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumb */}
        <nav className='flex items-center space-x-2 text-muted-foreground mb-8'>
          <Link
            href='/universities'
            className='hover:text-foreground transition-colors'
          >
            Universities
          </Link>
          <ChevronRight className='h-4 w-4' />
          <span className='text-foreground'>{university.name}</span>
        </nav>

        {/* Hero Section */}
        <div className='relative h-[400px] rounded-lg overflow-hidden mb-12'>
          <Image
            src={university.heroImage}
            alt={university.name}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute bottom-8 left-8 right-8'>
            <div className='flex items-center gap-6'>
              <div className='w-24 h-24 rounded-lg overflow-hidden border-4 border-white'>
                <Image
                  src={university.logo}
                  alt={`${university.name} logo`}
                  width={96}
                  height={96}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <h1 className='text-3xl font-bold text-white mb-2'>
                  {university.name}
                </h1>
                <div className='flex items-center text-white/90'>
                  <MapPin className='h-4 w-4 mr-2' />
                  <span>
                    {university.location.city}, {university.location.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-12'>
            <UniversityOverview university={university} />
            <CoursesList courses={university.courses} />
            <FacilitiesList facilities={university.facilities} />
            <PhotoGallery images={university.gallery} />
            <TestimonialsList testimonials={university.testimonials} />
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            <ContactInfo contact={university.contact} />
            {/* Add Map Component Here */}
            <Card className='p-6'>
              <h2 className='text-xl font-bold mb-4'>Quick Actions</h2>
              <div className='space-y-4'>
                <Link
                  href={`/apply/${slug}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='w-full gap-2 text-white'>
                    Apply Now
                    <FileText className='h-4 w-4' />
                  </Button>
                </Link>
                <Button
                  variant='outline'
                  className='w-full gap-2 hover:text-white relative'
                  disabled={true}
                >
                  Call Now
                  <Phone className='h-4 w-4' />
                  {/* Coming Soon Badge (Positioned in the top-right of the button with added space) */}
                  <span className='absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 inline-block px-2 py-1 text-xs bg-red-500 font-semibold text-yellow-400 rounded-full'>
                    Coming Soon
                  </span>
                </Button>
                <Button
                  variant='outline'
                  className='w-full gap-2 hover:text-white'
                  onClick={handleShare}
                >
                  Share
                  <Share2 className='h-4 w-4' />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
