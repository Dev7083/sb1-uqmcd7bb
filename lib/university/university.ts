export interface Course {
  id: string;
  name: string;
  duration: string;
  university: string;
  tuitionFees: string;
  qualification: string;
  entryRequirements: string[];
  careerProspects: string;
  image: string;
  location: string;
  category: string;
}

export interface Facility {
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  course: string;
  year: string;
  avatar: string;
  content: string;
}

export interface University {
  id: string;
  name: string;
  slug: string;
  logo: string;
  heroImage: string;
  location: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  overview: {
    foundedYear: number;
    type: "public" | "private";
    totalStudents: number;
    campusSize: string;
    internationalStudentPercentage: number;
    accreditation: string[];
  };
  courses: Course[];
  facilities: Facility[];
  gallery: string[];
  contact: {
    email: string;
    phone: string;
    address: string;
    website: string;
    socialMedia: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  testimonials: Testimonial[];
}
