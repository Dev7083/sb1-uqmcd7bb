"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  FileText,
  Award,
  DollarSign,
  Share2,
  Download,
  CheckCircle2,
  AlertCircle,
  Building2,
} from "lucide-react";
import { exams } from "@/lib/data/exams";

export default function ExamDetailsPage() {
  const { examId } = useParams();
  const exam = exams.find((e) => e.id === examId);

  if (!exam) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Card className='p-6 text-center'>
          <AlertCircle className='h-12 w-12 text-destructive mx-auto mb-4' />
          <h2 className='text-xl font-bold mb-2'>Exam Not Found</h2>
          <p className='text-muted-foreground mb-4'>
            The exam you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link href='/explore'>
            <Button>Back to Explore</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: exam.name,
          text: `Check out details for ${exam.name}`,
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
          <span className='text-foreground'>{exam.name}</span>
        </nav>

        {/* Hero Section */}
        <div className='relative h-[400px] rounded-lg overflow-hidden mb-12'>
          <Image
            src={exam.image.url}
            alt={exam.image.alt}
            fill
            className='object-cover'
            sizes='(max-width: 1280px) 100vw, 1280px'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
          <div className='absolute bottom-8 left-8 right-8'>
            <div className='flex items-center gap-2 mb-4'>
              <span className='px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm'>
                {exam.category}
              </span>
            </div>
            <h1 className='text-4xl font-bold mb-4 text-white'>{exam.name}</h1>
            <div className='flex flex-wrap gap-6 text-white/90'>
              <div className='flex items-center'>
                <Building2 className='h-5 w-5 mr-2' />
                <span>{exam.authority}</span>
              </div>
              <div className='flex items-center'>
                <Calendar className='h-5 w-5 mr-2' />
                <span>{exam.date}</span>
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
              <h2 className='text-2xl font-bold mb-4'>Overview</h2>
              <p className='text-muted-foreground mb-6'>{exam.description}</p>

              <h3 className='font-semibold mb-4'>Eligibility Criteria</h3>
              <ul className='space-y-2 mb-6'>
                {exam.eligibility.map((criteria, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-start gap-2'
                  >
                    <CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-muted-foreground'>{criteria}</span>
                  </motion.li>
                ))}
              </ul>

              <h3 className='font-semibold mb-4'>Application Process</h3>
              <p className='text-muted-foreground'>{exam.applicationProcess}</p>
            </Card>

            {/* Syllabus */}
            <Card className='p-6'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold'>Syllabus</h2>
                <Button
                  variant='outline'
                  className='gap-2 hover:text-white'
                  onClick={() => window.print()}
                >
                  <Download className='h-4 w-4' />
                  Print & Download PDF
                </Button>
              </div>

              <div className='space-y-6'>
                {exam.syllabus.map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className='font-semibold mb-3'>{subject.subject}</h3>
                    <ul className='grid sm:grid-cols-2 gap-2'>
                      {subject.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className='flex items-center gap-2 text-muted-foreground'
                        >
                          <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Exam Pattern */}
            <Card className='p-6'>
              <h2 className='text-2xl font-bold mb-6'>Exam Pattern</h2>
              {exam.examPattern.map((pattern, index) => (
                <div
                  key={index}
                  className='mb-4 last:mb-0'
                >
                  <h3 className='font-semibold mb-2'>{pattern.section}</h3>
                  <p className='text-muted-foreground'>{pattern.details}</p>
                </div>
              ))}
            </Card>

            {/* Preparation Tips */}
            <Card className='p-6'>
              <h2 className='text-2xl font-bold mb-4'>Preparation Tips</h2>
              <ul className='space-y-3'>
                {exam.preparationTips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-start gap-2'
                  >
                    <CheckCircle2 className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-muted-foreground'>{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Important Dates */}
            <Card className='p-6'>
              <h2 className='text-xl font-bold mb-4'>Important Dates</h2>
              <div className='space-y-4'>
                {exam.importantDates.map((date, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-4 w-4 text-primary' />
                      <span className='text-muted-foreground'>
                        {date.event}
                      </span>
                    </div>
                    <span className='font-medium'>{date.date}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className='p-6'>
              <h2 className='text-xl font-bold mb-4'>Quick Actions</h2>
              <div className='space-y-4'>
                <Link
                  href='https://upsc.gov.in/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className='w-full gap-2'>
                    Apply Now
                    <FileText className='h-4 w-4' />
                  </Button>
                </Link>
                <Button
                  variant='outline'
                  className='w-full gap-2 hover:text-white relative'
                  disabled={true}
                >
                  Download Syllabus
                  <Download className='h-4 w-4' />
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
