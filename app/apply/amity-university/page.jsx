"use client";
import Image from "next/image";
import ApplicationForm from "@/components/pages/apply/application-form";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  Trophy,
  Users,
  BookOpen,
  Building,
  Network,
  FlaskConical,
  Plus,
  Minus,
  LogIn,
  BookOpenCheck,
  Info
} from "lucide-react";
import { useState } from "react";
import styles from "./styles.module.css";

// Add static data for highlights
const highlights = [
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "NAAC A+ Grade",
    description: "Highest accreditation for academic excellence",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "25,000+ Students",
    description: "Vibrant and diverse student community",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "200+ Programs",
    description: "Wide range of undergraduate and postgraduate courses",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "100% Placement",
    description: "Excellent career opportunities and industry connections",
  },
];

// Add FAQ data after highlights
const faqs = [
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, you'll need to have completed 10+2 with minimum 50% marks for undergraduate programs and a bachelor's degree with minimum 50% marks for postgraduate programs.",
  },
  {
    question: "Is there a entrance exam?",
    answer:
      "Yes, Amity University conducts its own entrance test called AUEE (Amity University Entrance Examination) for various programs. Some programs may also accept scores from national-level entrance exams.",
  },
  {
    question: "What about placements?",
    answer:
      "Amity University has a dedicated placement cell that ensures excellent career opportunities. We have tie-ups with 1000+ companies and maintain a strong track record of placements across sectors.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, Amity University offers various merit-based and means-based scholarships. Special scholarships are also available for sports persons and defense personnel wards.",
  },
];

// Add this component above your main component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="group cursor-pointer" onClick={onClick}>
    <div
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm 
                    hover:from-white/15 hover:to-white/10 transition-all duration-300"
    >
      <div
        className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl 
                      group-hover:bg-blue-500/20 transition-all duration-300"
      ></div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
            {question}
          </h3>
          <span className="text-blue-300 group-hover:text-blue-200 transition-colors">
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </span>
        </div>
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function AmityUniversityPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="min-h-screen bg-[#003366] text-white">
      {/* Header */}
      <header className="bg-white p-4 text-center">
        <div className="flex justify-center items-center space-x-4">
          <Image
            src="/images/marquee/amity_univ.png"
            alt="Amity University Lucknow"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
          <Image
            src="/images/amity-naac.jpg"
            alt="NAAC Grade A+"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>
      </header>
      {/* Hero Section */}
      <section className={styles.heroSection + "pt-4 max-sm:pt-8"}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-sm:justify-center">
            <div className="max-w-2xl  md:w-full order-1 max-sm:order-2 p-2 max-sm:pt-6 max-sm:text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className={styles.gradientText}>Shape Your Future</span>
                <br />
                at Amity University
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Join India&apos;s leading private university with world-class
                education and unparalleled opportunities
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-white/90 
                   transition-all transform hover:scale-105 shadow-lg max-sm:text-center"
              >
                Apply Now
              </button>
            </div>
            {/* Application Form Container */}
            <div className="md:w-1/3 mt-8 md:mt-4 flex justify-center text-black order-2 max-sm:order-1"  id="application-form">
               <ApplicationForm heading="Admission 2025" subHeading=" " />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-start gap-8">
          {/* Video Container */}
          <div className="w-full md:w-[90vw] aspect-video bg-black/20 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/fzObjWKAy6g"
              title="Amity University Introduction"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Extra Details */}
                <div className="w-full mt-12">
                <div className="flex justify-center mb-8">
                <BookOpenCheck className="h-12 w-12"/>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Why Choose Amity University?
                </h2>

                {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {highlight.icon}
                    <h2 className="text-xl text-white font-semibold">
                      {highlight.title}
                    </h2>
                    <p className="text-sm text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Infrastructure Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 p-8 hover:from-blue-600/30 hover:to-blue-900/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-blue-500/10 p-3">
                      <Building className="h-8 w-8 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      World-Class Infrastructure
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Experience learning in state-of-the-art facilities
                      including:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                        Modern Research Laboratories
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                        Digital Libraries & Learning Centers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-400" />
                        Sports Complex & Recreation Areas
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Industry Connections Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 p-8 hover:from-purple-600/30 hover:to-purple-900/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-purple-500/10 p-3">
                      <Network className="h-8 w-8 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      Industry Connections
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Bridge the gap between academia and industry through:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-purple-400" />
                        1000+ Corporate Partners
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-purple-400" />
                        Industry Expert Lectures
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-purple-400" />
                        Internship Opportunities
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Research Excellence Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-900/20 p-8 hover:from-amber-600/30 hover:to-amber-900/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl group-hover:bg-amber-500/30 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-amber-500/10 p-3">
                      <FlaskConical className="h-8 w-8 text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                      Research Excellence
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Be part of groundbreaking research initiatives:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-amber-400" />
                        100+ Research Centers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-amber-400" />
                        Published Research Papers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-amber-400" />
                        Innovation Labs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
          <Info className="h-12 w-12 mx-auto"/>
            <h2 className="text-4xl pt-4 font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-300">
              Find answers to common questions about admissions and life at
              Amity
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Banner */}
      <section className="bg-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-white/90">
              Take the first step towards your future with Amity University
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("application-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Apply Now
            </button>
            <a
              href="tel:+917275610081"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
