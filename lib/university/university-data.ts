import type { Course } from "@/lib/university/university";

export const universityData: Record<string, Course[]> = {
  management: [
    {
      id: "mba-1",
      name: "Master of Business Administration",
      university: "Amity University",
      duration: "2 Years",
      location: "Mumbai",
      qualification: "MBA",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      category: "management",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    {
      id: "mba-2",
      name: "Executive MBA",
      university: "JAIN University",
      duration: "18 Months",
      location: "Bangalore",
      qualification: "MBA",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      category: "management",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    // Add more management courses...
  ],
  engineering: [
    {
      id: "btech-1",
      name: "Computer Science Engineering",
      university: "Manipal University",
      duration: "4 Years",
      location: "Manipal",
      qualification: "B.Tech",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      category: "engineering",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    {
      id: "btech-2",
      name: "Electronics Engineering",
      university: "LPU Online",
      duration: "4 Years",
      location: "Online",
      qualification: "B.Tech",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      category: "engineering",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    // Add more engineering courses...
  ],
  commerce: [
    {
      id: "bcom-1",
      name: "Bachelor of Commerce",
      university: "Amity University",
      duration: "3 Years",
      location: "Delhi",
      qualification: "B.Com",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      category: "commerce",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    {
      id: "mcom-1",
      name: "Master of Commerce",
      university: "JAIN University",
      duration: "2 Years",
      location: "Bangalore",
      qualification: "M.Com",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "commerce",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    // Add more commerce courses...
  ],
  arts: [
    {
      id: "ba-1",
      name: "Bachelor of Arts in Psychology",
      university: "Manipal University",
      duration: "3 Years",
      location: "Manipal",
      qualification: "BA",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      category: "arts",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    {
      id: "ma-1",
      name: "Master of Arts in English",
      university: "LPU Online",
      duration: "2 Years",
      location: "Online",
      qualification: "MA",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
      category: "arts",
      tuitionFees: "",
      entryRequirements: [],
      careerProspects: "",
    },
    // Add more arts courses...
  ],
};
