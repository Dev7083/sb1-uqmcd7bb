"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Container from "@/components/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";

const Contact = () => {
  return (
    <section
      id='contact'
      className='pt-16 pb-4 bg-white dark:bg-background'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl font-bold mb-4'
          >
            <div className='flex justify-center gap-8 mb-6'>
              <AnimatedIcon
                Icon={Mail}
                className='text-primary'
              />
              <AnimatedIcon
                Icon={Phone}
                className='text-accent'
              />
              <AnimatedIcon
                Icon={MessageSquare}
                className='text-primary'
              />
            </div>
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600'
          >
            Have questions? We&apos;re here to help you succeed
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Container>
              <Card className='p-8 h-full'>
                <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
                <div className='space-y-6'>
                  <div className='flex items-center'>
                    <Mail className='h-6 w-6 text-primary mr-4' />
                    <div>
                      <p className='font-medium'>Email</p>
                      <a
                        href='mailto:support@careermantra.com'
                        className='text-muted-foreground hover:text-primary'
                      >
                        support@careermantra.com
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Phone className='h-6 w-6 text-primary mr-4' />
                    <div>
                      <p className='font-medium'>Phone</p>
                      <a
                        href='tel:+917275610081'
                        className='text-muted-foreground hover:text-primary'
                      >
                        +91 (727) 561-0081
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <MessageSquare className='h-6 w-6 text-primary mr-4' />
                    <div>
                      <p className='font-medium'>Live Chat</p>
                      <p className='text-muted-foreground'>Available 24/7</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Container>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Container>
              <Card className='p-8'>
                <form className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Name
                    </label>
                    <Input
                      id='name'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Email
                    </label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Your email'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Message
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Your message'
                      rows={4}
                    />
                  </div>
                  <Button className='w-full text-white'>Send Message</Button>
                </form>
              </Card>
            </Container>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
