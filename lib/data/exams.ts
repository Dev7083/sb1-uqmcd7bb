import { Exam } from "@/lib/types/exam";

export const exams: Exam[] = [
  {
    id: "jee-main",
    name: "JEE Main",
    category: "engineering",
    authority: "National Testing Agency (NTA)",
    date: "January & April 2024",
    description:
      "Joint Entrance Examination for admission to premier engineering institutions across India.",
    image: {
      url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400",
      alt: "Engineering student working on complex mathematical equations",
    },
    eligibility: [
      "Passed Class 12 with Physics, Chemistry, and Mathematics",
      "No age limit for JEE Main",
    ],
    applicationProcess: "Online application through NTA website",
    importantDates: [
      { event: "Registration Start", date: "November 2023" },
      { event: "Registration End", date: "December 2023" },
      { event: "Admit Card Release", date: "1 week before exam" },
    ],
    syllabus: [
      {
        subject: "Physics",
        topics: ["Mechanics", "Electromagnetism", "Modern Physics"],
      },
      {
        subject: "Chemistry",
        topics: [
          "Physical Chemistry",
          "Organic Chemistry",
          "Inorganic Chemistry",
        ],
      },
      {
        subject: "Mathematics",
        topics: ["Algebra", "Calculus", "Coordinate Geometry"],
      },
    ],
    examPattern: [
      {
        section: "Paper 1",
        details: "Computer Based Test with MCQs and Numerical Value Questions",
      },
    ],
    preparationTips: [
      "Focus on NCERT books",
      "Practice previous year papers",
      "Time management during exam",
    ],
  },
  {
    id: "neet",
    name: "NEET UG",
    category: "medical",
    authority: "National Medical Commission",
    date: "May 2024",
    description:
      "National Eligibility cum Entrance Test for admission to MBBS/BDS courses in India.",
    image: {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=400",
      alt: "Medical students in a laboratory setting",
    },
    eligibility: [
      "Passed Class 12 with Physics, Chemistry, and Biology",
      "Minimum 50% marks in qualifying examination",
    ],
    applicationProcess: "Online application through NTA website",
    importantDates: [
      { event: "Registration Start", date: "March 2024" },
      { event: "Registration End", date: "April 2024" },
      { event: "Admit Card Release", date: "1 week before exam" },
    ],
    syllabus: [
      {
        subject: "Biology",
        topics: ["Zoology", "Botany"],
      },
      {
        subject: "Physics",
        topics: ["Mechanics", "Optics", "Modern Physics"],
      },
      {
        subject: "Chemistry",
        topics: ["Organic", "Inorganic", "Physical"],
      },
    ],
    examPattern: [
      {
        section: "Single Paper",
        details: "180 MCQs from Physics, Chemistry, and Biology",
      },
    ],
    preparationTips: [
      "Strong focus on NCERT books",
      "Regular practice tests",
      "Concept clarity is key",
    ],
  },
  {
    id: "cat",
    name: "CAT",
    category: "management",
    authority: "IIM Bangalore (2023)",
    date: "November 26, 2023",
    description:
      "Common Admission Test for admission to premier management institutions in India.",
    image: {
      url: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&h=400",
      alt: "Business professionals in a meeting room discussing strategy",
    },
    eligibility: [
      "Bachelor's degree with minimum 50% marks",
      "Final year students can also apply",
    ],
    applicationProcess: "Online application through CAT website",
    importantDates: [
      { event: "Registration Start", date: "August 2023" },
      { event: "Registration End", date: "September 2023" },
      { event: "Admit Card Release", date: "October 2023" },
    ],
    syllabus: [
      {
        subject: "VARC",
        topics: ["Reading Comprehension", "Verbal Ability"],
      },
      {
        subject: "DILR",
        topics: ["Data Interpretation", "Logical Reasoning"],
      },
      {
        subject: "Quantitative Ability",
        topics: ["Arithmetic", "Algebra", "Geometry"],
      },
    ],
    examPattern: [
      {
        section: "Computer Based Test",
        details: "Three sections with MCQs and Non-MCQs",
      },
    ],
    preparationTips: [
      "Focus on speed and accuracy",
      "Regular mock tests",
      "Time management skills",
    ],
  },
  {
    id: "upsc-cse",
    name: "UPSC Civil Services",
    category: "government",
    authority: "Union Public Service Commission",
    date: "June 2024 (Prelims)",
    description:
      "Prestigious examination for recruitment to various Civil Services of Government of India.",
    image: {
      url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&h=400",
      alt: "Indian Parliament building representing civil services",
    },
    eligibility: [
      "Bachelor's degree in any discipline",
      "Age between 21-32 years",
    ],
    applicationProcess: "Online application through UPSC website",
    importantDates: [
      { event: "Notification", date: "February 2024" },
      { event: "Prelims", date: "June 2024" },
      { event: "Mains", date: "September 2024" },
    ],
    syllabus: [
      {
        subject: "General Studies",
        topics: ["History", "Geography", "Polity", "Economics"],
      },
      {
        subject: "CSAT",
        topics: ["Comprehension", "Logical Reasoning", "Basic Numeracy"],
      },
    ],
    examPattern: [
      {
        section: "Three Stages",
        details: "Prelims (MCQ), Mains (Written), Interview",
      },
    ],
    preparationTips: [
      "Comprehensive coverage of syllabus",
      "Regular newspaper reading",
      "Answer writing practice",
    ],
  },
];
