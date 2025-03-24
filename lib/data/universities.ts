import { University } from "@/lib/types/universities";

export const universities: University[] = [
  {
    id: "amity",
    name: "Amity University",
    slug: "amity-university",
    logo: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Noida",
      country: "India",
      coordinates: {
        lat: 28.5444,
        lng: 77.3333,
      },
    },
    description:
      "Leading private university in India known for its diverse programs and global partnerships.",
    overview: {
      foundedYear: 2005,
      type: "private",
      totalStudents: 125000,
      campusSize: "1200 acres",
      internationalStudentPercentage: 10,
      accreditation: [
        "University Grants Commission",
        "National Assessment and Accreditation Council",
      ],
    },
    courses: [
      {
        id: "cs-amity",
        name: "Computer Science and Engineering",
        duration: "4 years",
        tuitionFees: "INR 3,00,000 per year",
        entryRequirements: [
          "High School Diploma",
          "Amity Entrance Exam",
          "Strong Mathematics Background",
          "Programming Experience (recommended)",
        ],
        careerProspects:
          "Graduates pursue careers in software engineering, AI research, and tech entrepreneurship.",
      },
      // Add more courses...
    ],
    facilities: [
      {
        name: "Central Library",
        description:
          "Extensive collection of books, journals, and digital resources",
        icon: "book-open",
      },
      // Add more facilities...
    ],
    gallery: [
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&h=600",
      // Add more gallery images...
    ],
    contact: {
      email: "admissions@amity.edu",
      phone: "+91 120 4392000",
      address: "Sector 125, Noida, Uttar Pradesh 201313",
      website: "https://www.amity.edu",
      socialMedia: {
        facebook: "https://facebook.com/amityuniversity",
        twitter: "https://twitter.com/amityuni",
        instagram: "https://instagram.com/amityuniversity",
        linkedin: "https://linkedin.com/school/amity-university",
      },
    },
    testimonials: [
      {
        id: "test-1",
        studentName: "Rohit Verma",
        course: "Computer Science and Engineering",
        year: "2023",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
        content:
          "Amity University provided me with incredible opportunities in tech and research.",
      },
      // Add more testimonials...
    ],
  },
  {
    id: "manipal-university",
    name: "Manipal University",
    slug: "manipal-university",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Manipal",
      country: "India",
      coordinates: {
        lat: 13.3493,
        lng: 74.7957,
      },
    },
    description:
      "Leading private university in India known for its diverse academic programs and vibrant campus life.",
    overview: {
      foundedYear: 1953,
      type: "private",
      totalStudents: 25000,
      campusSize: "600 acres",
      internationalStudentPercentage: 5,
      accreditation: [
        "National Assessment and Accreditation Council",
        "University Grants Commission",
      ],
    },
    courses: [
      {
        id: "cs-manipal",
        name: "Computer Science and Engineering",
        duration: "4 years",
        tuitionFees: "INR 3,00,000 per year",
        entryRequirements: [
          "Manipal Entrance Test (MET)",
          "Strong Mathematics Background",
          "Programming Experience (recommended)",
        ],
        careerProspects:
          "Graduates pursue careers in software development, IT consulting, and tech entrepreneurship.",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description:
          "Extensive collection of books, journals, and digital resources",
        icon: "book-open",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200",
    ],
    contact: {
      email: "admissions@manipal.edu",
      phone: "+91 820 257 1978",
      address: "Madhav Nagar, Manipal, Karnataka 576104",
      website: "https://manipal.edu",
      socialMedia: {
        facebook: "https://facebook.com/manipaluniv",
        twitter: "https://twitter.com/manipaluniv",
        instagram: "https://instagram.com/manipaluniv",
        linkedin: "https://linkedin.com/school/manipaluniv",
      },
    },
    testimonials: [
      {
        id: "test-1",
        studentName: "Aishwarya Raj",
        course: "Computer Science and Engineering",
        year: "2023",
        avatar:
          "https://images.unsplash.com/photo-1502767089025-6572583495b9?auto=format&fit=crop&w=150&h=150",
        content:
          "Manipal University provided me with excellent academic and extracurricular opportunities.",
      },
    ],
  },

  {
    id: "lovely-professional-university",
    name: "Lovely Professional University",
    slug: "lovely-professional-university",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Phagwara",
      country: "India",
      coordinates: {
        lat: 31.2623,
        lng: 75.7033,
      },
    },
    description:
      "One of India's largest and most prestigious private universities, known for its diverse academic programs and strong industry connections.",
    overview: {
      foundedYear: 2005,
      type: "private",
      totalStudents: 30000,
      campusSize: "600 acres",
      internationalStudentPercentage: 8,
      accreditation: [
        "National Assessment and Accreditation Council",
        "University Grants Commission",
      ],
    },
    courses: [
      {
        id: "cs-lpu",
        name: "B.Tech in Computer Science and Engineering",
        duration: "4 years",
        tuitionFees: "INR 1,50,000 per year",
        entryRequirements: [
          "LPUNEST",
          "Strong Mathematics Background",
          "Programming Experience (recommended)",
        ],
        careerProspects:
          "Graduates pursue careers in software development, data science, and IT consulting.",
      },
    ],
    facilities: [
      {
        name: "Central Library",
        description:
          "Extensive collection of books, journals, and digital resources",
        icon: "book-open",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1920&h=600",
    ],
    contact: {
      email: "admissions@lpu.in",
      phone: "+91 1824 404 404",
      address: "Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411",
      website: "https://www.lpu.in",
      socialMedia: {
        facebook: "https://facebook.com/lpuuniversity",
        twitter: "https://twitter.com/lpuuniv",
        instagram: "https://instagram.com/lpuuniversity",
        linkedin: "https://linkedin.com/school/lpuuniversity",
      },
    },
    testimonials: [
      {
        id: "test-4",
        studentName: "Rohan Kumar",
        course: "B.Tech in Computer Science and Engineering",
        year: "2024",
        avatar:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&h=150",
        content:
          "LPU has provided me with excellent education, facilities, and industry exposure.",
      },
    ],
  },
  // Online Universities
  {
    id: "manipal-online",
    name: "Manipal Online University",
    slug: "manipal-online",
    logo: "https://images.unsplash.com/photo-1581091012184-7d35e7a82c5b?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Manipal",
      country: "India",
      coordinates: {
        lat: 13.3511,
        lng: 74.7925,
      },
    },
    description: "Leading online university offering flexible degree programs.",
    overview: {
      foundedYear: 1953,
      type: "private",
      totalStudents: 25000,
      campusSize: "Online",
      internationalStudentPercentage: 10,
      accreditation: [
        "University Grants Commission",
        "National Assessment and Accreditation Council",
      ],
    },
    courses: [
      {
        id: "mba-manipal",
        name: "Online MBA",
        duration: "2 years",
        tuitionFees: "INR 1,20,000 per year",
        entryRequirements: ["Bachelor’s Degree", "Work Experience (preferred)"],
        careerProspects: "Careers in management and entrepreneurship.",
      },
    ],
    facilities: [],
    gallery: [],
    contact: {
      email: "support@manipalonline.edu",
      phone: "+91 98765 43210",
      address: "Manipal, Karnataka, India",
      website: "https://www.onlinemanipal.com",
      socialMedia: {},
    },
    testimonials: [],
  },
  {
    id: "amity-online",
    name: "Amity Online University",
    slug: "amity-online",
    logo: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Noida",
      country: "India",
      coordinates: {
        lat: 28.5448,
        lng: 77.2732,
      },
    },
    description:
      "Premier online university providing industry-aligned degree programs.",
    overview: {
      foundedYear: 2005,
      type: "private",
      totalStudents: 20000,
      campusSize: "Online",
      internationalStudentPercentage: 12,
      accreditation: [
        "University Grants Commission",
        "National Assessment and Accreditation Council",
      ],
    },
    courses: [
      {
        id: "bba-amity",
        name: "Online BBA",
        duration: "3 years",
        tuitionFees: "INR 1,00,000 per year",
        entryRequirements: [
          "Higher Secondary Certificate",
          "English Proficiency",
        ],
        careerProspects: "Careers in business management and marketing.",
      },
    ],
    facilities: [],
    gallery: [],
    contact: {
      email: "admissions@amityonline.com",
      phone: "+91 1800 123 4567",
      address: "Noida, Uttar Pradesh, India",
      website: "https://www.amityonline.com",
      socialMedia: {},
    },
    testimonials: [],
  },
  {
    id: "jain-online",
    name: "Jain Online University",
    slug: "jain-online",
    logo: "https://images.unsplash.com/photo-1573495612937-22c8293ee35b?auto=format&fit=crop&w=200&h=200",
    heroImage:
      "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&w=1920&h=600",
    location: {
      city: "Bangalore",
      country: "India",
      coordinates: {
        lat: 12.9716,
        lng: 77.5946,
      },
    },
    description: "Flexible online degree programs with industry relevance.",
    overview: {
      foundedYear: 1990,
      type: "private",
      totalStudents: 15000,
      campusSize: "Online",
      internationalStudentPercentage: 15,
      accreditation: [
        "University Grants Commission",
        "National Assessment and Accreditation Council",
      ],
    },
    courses: [
      {
        id: "mca-jain",
        name: "Online MCA",
        duration: "2 years",
        tuitionFees: "INR 90,000 per year",
        entryRequirements: [
          "Bachelor’s Degree in Computer Science or Related Field",
        ],
        careerProspects: "Careers in software development and cybersecurity.",
      },
    ],
    facilities: [],
    gallery: [],
    contact: {
      email: "info@jainonline.ac.in",
      phone: "+91 78945 67890",
      address: "Bangalore, Karnataka, India",
      website: "https://www.jainonline.ac.in",
      socialMedia: {},
    },
    testimonials: [],
  },
  // Add more universities...
];
