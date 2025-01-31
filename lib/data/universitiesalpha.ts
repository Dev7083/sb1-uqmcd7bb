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
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&h=600",
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

  // Add more universities...
];
