"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UniversityCard } from "@/components/universities/university-card";
import type { University } from "@/lib/types/universities";

interface UniversitiesListProps {
  universities: University[];
  numberOfCards?: number;
}

export function UniversitiesList({ 
  universities,
  numberOfCards = universities.length 
}: UniversitiesListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [...new Set(universities.map((uni) => uni.location.city))];
  const filteredUniversities = universities.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || uni.location.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Search and Filter Section */}
      {/* Search and Filter Section */}
      <div className='mb-12'>
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input
              type='search'
              placeholder='Search universities...'
              className='pl-10'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select
            value={selectedCity || "all"}
            onValueChange={(value) =>
              setSelectedCity(value === "all" ? "" : value)
            }
          >
            <SelectTrigger>
              <MapPin className='h-4 w-4 mr-2' />
              <SelectValue placeholder='Filter by city' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem
                  key={city}
                  value={city}
                >
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Universities Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredUniversities.slice(0, numberOfCards).map((university, index) => (
          <motion.div
            key={university.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <UniversityCard university={university} />
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredUniversities.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-lg text-muted-foreground'>
            No universities found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}