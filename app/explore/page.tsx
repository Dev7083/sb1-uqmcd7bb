"use client";

// import { motion } from "framer-motion";
import { ExploreHeader } from "@/components/explore/explore-header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoursesTab } from "@/components/explore/tabs/courses-tab";
import { ExamsTab } from "@/components/explore/tabs/exams-tab";
// import { StudyOnlineTab } from "@/components/explore/tabs/study-online-tab";
import UniversitiesPage from "@/app/universities/page";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className='bg-background py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <ExploreHeader />

        {/* Search Bar */}
        <div className='max-w-2xl mx-auto mb-8'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input
              type='search'
              placeholder='Search...'
              className='pl-10'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs
          defaultValue='courses'
          className='space-y-8'
        >
          <TabsList className='w-full justify-center border-b rounded-lg p-0 h-auto'>
            <TabsTrigger
              value='courses'
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3'
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value='exams'
              id='exams'
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3'
            >
              Exams
            </TabsTrigger>
            <TabsTrigger
              value='colleges'
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3'
            >
              Colleges
            </TabsTrigger>
            {/* <TabsTrigger
              value='study-online'
              id='study-online'
              className='rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3'
            >
              Study Online
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value='courses'>
            <CoursesTab searchQuery={searchQuery} />
          </TabsContent>

          <TabsContent value='exams'>
            <ExamsTab searchQuery={searchQuery} />
          </TabsContent>

          <TabsContent value='colleges'>
            <UniversitiesPage />
          </TabsContent>

          {/* <TabsContent value='study-online'>
            <StudyOnlineTab />
          </TabsContent> */}
        </Tabs>
      </div>
    </main>
  );
}
