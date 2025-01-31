"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExamCard } from "@/components/explore/exam-card";
import { exams } from "@/lib/data/exams";

interface ExamsTabProps {
  searchQuery: string;
}

export function ExamsTab({ searchQuery }: ExamsTabProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.authority.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || exam.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    "engineering",
    "medical",
    "management",
    "government",
  ];

  return (
    <div className='space-y-8'>
      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
      >
        <TabsList className='grid grid-cols-2 lg:grid-cols-5 w-full'>
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className='capitalize'
            >
              {category === "all" ? "All Exams" : category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredExams.map((exam, index) => (
          <motion.div
            key={exam.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ExamCard exam={exam} />
          </motion.div>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-lg text-muted-foreground'>
            No exams found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
