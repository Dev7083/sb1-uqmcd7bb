"use client";

import { universities } from "@/lib/data/universities";
import { UniversitiesList } from "./universities-list";

interface UniversitiesPreviewProps {
  limitCards?: number;
}

export function UniversitiesPreview({ limitCards = 3 }: UniversitiesPreviewProps) {
  return (
    <UniversitiesList 
      universities={universities}
      numberOfCards={limitCards}
    />
  );
}