"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

const footerData = [
  {
    title: "Quick Links",
    links: [
      { href: "/apply", label: "Apply" },
      { href: "/explore", label: "Online Courses" },
      { href: "/explore#exams", label: "Exams" },
      { href: "/explore#study-online", label: "Study Online" },
      { href: "/universities", label: "Explore Colleges" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/post", label: "Blog" },

      { href: "/insights", label: "Insights" },
      { href: "/universities", label: "Universities" },
      { href: "/#contact", label: "Career Guidance" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Link
              href='/'
              className='flex items-center space-x-2'
            >
              <GraduationCap className='h-8 w-8 text-primary' />
              <span className='font-bold text-xl text-white'>CollegeHike</span>
            </Link>
            <p className='text-gray-400 text-pretty'>
              Helping you reach your career goals with expert advice, mentors &
              online degree courses & counselling.
            </p>
          </div>

          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-white mb-4'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className='hover:text-white transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border-t border-gray-800 mt-12 pt-8 text-center lg:flex lg:justify-between'>
          <p>© {currentYear} CollegeHike. All rights reserved.</p>
          <p className='lg:text-right'>
            Proudly Made in India by
            <Link
              href='https://www.linkedin.com/in/geekydev/'
              className='hover:text-white transition-colors'
            >
              {" "}
              Dev &hearts;
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
