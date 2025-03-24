import { universities } from "@/lib/data/universities";
import { UniversitiesList } from "@/components/universities/universities-list";

interface PageProps {
  searchParams: Promise<{
    cards?: string;
  }>;
}

export default async function UniversitiesPage({ searchParams }: PageProps) {
  // Await the searchParams
  const params = await searchParams;
  const numberOfCards = params.cards ? parseInt(params.cards) : universities.length;

  return (
    <>
      <UniversitiesList 
        universities={universities} 
        numberOfCards={numberOfCards}
      />
    </>
  );
}