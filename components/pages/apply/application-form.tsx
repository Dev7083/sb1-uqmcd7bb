"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
};

const courses = [
  "BA - Bachelor of Arts",
  "BBA - Bachelor of Business Administration",
  "BCA - Bachelor of Computer Applications",
  "B.Com - Bachelor of Commerce",
  "B.Sc - Bachelor of Science",
  "MA - Master of Arts",
  "MBA - Master of Business Administration",
  "MCA - Master of Computer Applications",
  "M.Com - Master of Commerce",
  "M.Sc - Master of Science",
];

// Update the interface to make props optional
interface ApplicationFormProps {
  heading?: string;  // Add ? to make optional
  subHeading?: string;  // Add ? to make optional
}

// Update the component to handle optional props with default values
export default function ApplicationForm({ 
  heading = "Welcome to ", 
  subHeading = "CollegeHike" 
}: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCourseChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      course: value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!formData.course) {
      toast.error("Please select a course");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // Format the data for form submission
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbydvjz1aMoKguzo0Q8Z_pmGnYJ2xa28N6BBPUbyejr1uAMsEczXTWQ0IQgHG2x1zktH/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString()
          })
        }
      );

      // Since no-cors mode doesn't return response status
      // We'll assume success if no error is thrown
      toast.success("Application submitted successfully!");
      setFormData(initialFormData);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = 
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.course !== "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card p-8 rounded-lg shadow-lg"
    >
      <h1 className='text-4xl font-bold text-center'>
        {heading || "Welcome to  "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600'>
         {subHeading || "CollegeHike"}
        </span>
      </h1>
      <p className='text-muted-foreground mb-6'>
        Fill this Application Form to Assist you better
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background"
              minLength={2}
              maxLength={50}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 1234567890"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-background"
              pattern="[0-9]{10}"
              maxLength={10}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="course">Course</Label>
            <Select onValueChange={handleCourseChange} required>
              <SelectTrigger className="bg-background text-foreground">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-black dark:text-white"
          disabled={isSubmitting || !isFormValid}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Submitting...
            </div>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </motion.div>
  );
}
