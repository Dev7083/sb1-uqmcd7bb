"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import type { University } from "@/lib/types/universities";

interface ContactInfoProps {
  contact: University["contact"];
}

export function ContactInfo({ contact }: ContactInfoProps) {
  const contactItems = [
    { icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, value: contact.address },
    { icon: Globe, value: "Visit Website", href: contact.website },
  ];

  const socialMedia = [
    { icon: Facebook, href: contact.socialMedia.facebook },
    { icon: Twitter, href: contact.socialMedia.twitter },
    { icon: Instagram, href: contact.socialMedia.instagram },
    { icon: Linkedin, href: contact.socialMedia.linkedin },
  ].filter((item) => item.href);

  return (
    <Card className='p-6'>
      <h2 className='text-xl font-bold mb-6'>Contact Information</h2>

      <div className='space-y-4 mb-6'>
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors'
              >
                <item.icon className='h-5 w-5' />
                <span>{item.value}</span>
              </a>
            ) : (
              <div className='flex items-center gap-3 text-muted-foreground'>
                <item.icon className='h-5 w-5' />
                <span>{item.value}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {socialMedia.length > 0 && (
        <>
          <h3 className='font-semibold mb-4'>Connect With Us</h3>
          <div className='flex gap-2'>
            {socialMedia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant='outline'
                  size='icon'
                  asChild
                  className='hover:text-primary hover:text-white'
                >
                  <a
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Visit our ${item.icon.name}`}
                  >
                    <item.icon className='h-4 w-4' />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}
