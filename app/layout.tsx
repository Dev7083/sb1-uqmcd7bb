import "./globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "CollegeHike - Navigate Your Career Path",
  description: "Expert career guidance, mentorship & Online degree platform",

  keywords:
    "Online Education, Graduation Courses, Accredited Universities, Flexible Learning, Career Advancement, Skill Development, Self-Paced Courses, E-Learning Platform, Higher Education, Distance Learning, Online Degrees, Professional Growth, Virtual Classrooms, Academic Success, Educational Resources",

  authors: { name: "dev" },
  metadataBase: new URL("https://collegehike.vercel.app/"),

  openGraph: {
    title: "CollegeHike: Your Gateway to Online Education",
    description:
      "CollegeHike- where opportunity meets innovation! Platform for online graduation courses with various prestigious universities.",
    url: "https://collegehike.vercel.app/",
    siteName: "CollegeHike",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://collegehike.vercel.app/images/preview.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CollegeHike: Your Gateway to Online Education",
    description:
      "CollegeHike- where opportunity meets innovation! Platform for online graduation courses with various prestigious universities.",
    images: ["https://collegehike.vercel.app/images/preview.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
