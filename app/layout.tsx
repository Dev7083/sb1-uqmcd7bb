import "./globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    default: "CollegeHike - Navigate Your Career Path | Online Counselling Platform",
    template: "%s | CollegeHike"
  },
  description: "CollegeHike offers expert career guidance, mentorship & online degree programs from prestigious universities. Explore flexible learning options, career advancement opportunities, and professional development courses.",
  
  keywords: [
    "CollegeHike","Collegehike","collegehike","College Hike","college hike",
    "Online Education", "Graduation Courses", "Accredited Universities",
    "Career Guidance", "Online Degrees", "Distance Learning",
    "Professional Development", "Higher Education", "E-Learning Platform",
    "Virtual Classrooms", "Career Advancement", "Skill Development",
    "Online Learning India", "University Admission", "Educational Counseling"
  ],

  authors: [{ name: "dev", url: "https://collegehike.com" }],
  creator: "CollegeHike Team",
  publisher: "CollegeHike Education Services",
  metadataBase: new URL("https://collegehike.com"),
  
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code"
  // },

  alternates: {
    canonical: "https://collegehike.com"
    // languages: {
    //   'en-US': 'https://collegehike.com/en-us'
    //   // 'hi-IN': 'https://collegehike.com/hi'
    // }
  },

  openGraph: {
    title: "CollegeHike: Your Gateway to Online Education",
    description: "Transform your career with CollegeHike's online graduation courses, expert mentorship, and career guidance. Join India's leading online education platform.",
    url: "https://collegehike.com",
    siteName: "CollegeHike",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://collegehike.com/images/preview.png",
        width: 1200,
        height: 630,
        alt: "CollegeHike - Online Education Platform",
        type: "image/png",
      },
      {
        url: "https://collegehike.com/images/preview-square.png",
        width: 800,
        height: 800,
        alt: "CollegeHike Logo",
        type: "image/png",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@collegehike",
    creator: "@collegehike",
    title: "CollegeHike: Your Gateway to Online Education",
    description: "Transform your career with CollegeHike's online graduation courses, expert mentorship, and career guidance. Join India's leading online education platform.",
    images: {
      url: "https://collegehike.com/images/preview.png",
      alt: "CollegeHike - Online Education Platform"
    }
  },

  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180" }
    ],
    shortcut: "/favicon/favicon.ico",
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest"
      }
    ],
  },

  category: "Education",
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <NextTopLoader
          color='rgb(36, 112, 235)'
          showSpinner={false}
        />
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
