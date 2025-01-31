"use client";

import { UniversityTabs } from "@/components/explore/university-tabs";

interface CoursesTabProps {
  searchQuery: string;
}

export function CoursesTab({ searchQuery }: CoursesTabProps) {
  return <UniversityTabs searchQuery={searchQuery} />;
}