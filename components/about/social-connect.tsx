"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export function SocialConnect() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/careermantra",
      color: "text-[#0077B5]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/careermantra",
      color: "text-[#1DA1F2]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/careermantra",
      color: "text-[#4267B2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/careermantra",
      color: "text-[#E4405F]",
    },
  ];

  return (
    <section>
      <h2 className='text-2xl font-bold text-center mb-8'>Connect With Us</h2>
      <Card className='p-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Social Media Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='grid grid-cols-2 gap-4'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant='outline'
                    className='w-full justify-start gap-2 hover:bg-gray-100 hover:text-background'
                    asChild
                  >
                    <a
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                      {social.name}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-primary' />
                <a
                  href='mailto:contact@collegehike.com'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  contact@careermantra.com
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='h-5 w-5 text-primary' />
                <a
                  href='tel:+1234567890'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  +91 (727) 561-0081
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
