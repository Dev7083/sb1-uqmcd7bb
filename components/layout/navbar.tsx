"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "Home", href: "/#" },
  { name: "Apply", href: "/apply" },
  { name: "Colleges", href: "/universities" },
  { name: "Explore", href: "/explore" },
  { name: "Blogs", href: "/insights" },
  { name: "About", href: "/about-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full bg-background/80 backdrop-blur-md z-50 border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link
            href='/'
            className='flex items-center space-x-2'
          >
            <GraduationCap className='h-8 w-8 text-primary' />
            <span className='font-bold text-xl'>CollegeHike</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='group relative text-foreground hover:text-primary transition-colors duration-200'
              >
                {item.name}
                <span className='absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100' />
              </Link>
            ))}
            <ThemeToggle />
            <Link href={`#contact`}>
              <Button className='bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white'>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile and Tablet Navigation */}
          <div className='lg:hidden flex items-center space-x-4'>
            <ThemeToggle />
            <Button
              variant='ghost'
              className='p-2'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='lg:hidden'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 bg-background border-b'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className='px-3 py-2'>
              <Link href={`#contact`}>
                <Button className='w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white'>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
