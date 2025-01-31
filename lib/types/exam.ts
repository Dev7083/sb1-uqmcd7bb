export interface Exam {
  id: string;
  name: string;
  category: "engineering" | "medical" | "management" | "government";
  authority: string;
  date: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  eligibility: string[];
  applicationProcess: string;
  importantDates: {
    event: string;
    date: string;
  }[];
  syllabus: {
    subject: string;
    topics: string[];
  }[];
  examPattern: {
    section: string;
    details: string;
  }[];
  preparationTips: string[];
}
