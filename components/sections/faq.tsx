"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const faqs = [
  {
    question: "What is CollegeHike?",
    answer:
      "CollegeHike is an online platform that offers a variety of degree courses from top universities around the world. Our platform provides flexible learning options to help you achieve your educational goals.",
  },
  {
    question: "How do I enroll in a course on CollegeHike?",
    answer:
      "To enroll in a course, simply browse our catalog of available programs, select the course you're interested in, and follow the enrollment instructions. Our support team is also available to assist you with the process.",
  },
  {
    question: "Are the degrees offered by CollegeHike recognized?",
    answer:
      "Yes, all degrees offered through CollegeHike are accredited and recognized by the respective universities. You will receive a valid degree certificate upon successful completion of your course.",
  },
  {
    question: "What kind of support does CollegeHike provide to students?",
    answer:
      "CollegeHike offers comprehensive support to students, including academic advising, technical support, and access to a community of peers and instructors. Our goal is to ensure you have all the resources you need to succeed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='pt-16 bg-gray-50 dark:bg-background'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <div className='flex justify-center gap-8 mb-6'>
            <AnimatedIcon
              Icon={MessageCircleQuestion}
              className='text-accent'
            />
          </div>
          <h2 className='text-4xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-muted-foreground'>
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-white dark:bg-muted rounded-lg shadow-sm'
            >
              <button
                className='w-full px-6 py-4 flex justify-between items-center'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-lg font-medium text-left'>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className='h-5 w-5 text-primary flex-shrink-0' />
                ) : (
                  <Plus className='h-5 w-5 text-primary flex-shrink-0' />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <p className='px-6 pb-4 text-muted-foreground'>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
