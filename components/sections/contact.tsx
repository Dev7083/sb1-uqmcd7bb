"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Container from "@/components/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbygPleQhGEd8qY-DpL7F-_bmNFWyFDHrm-62PJdlNCwEZCsOjJNoeztUJ2BtWIivMgC/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            formType: "contact" // Add this to differentiate from apply form
          })
        }
      );

      toast.success("Message sent successfully!");
      setFormData(initialFormData);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

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
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Name
                    </label>
                    <Input
                      id='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Your email'
                      pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                      title='Please enter a valid email address'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Phone
                    </label>
                    <Input
                      id='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Your phone'
                      pattern='^\+?[1-9]\d{1,14}$'
                      title='Please enter a valid phone number'
                      required
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your message'
                      rows={4}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className='w-full text-white'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
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
