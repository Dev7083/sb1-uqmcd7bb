"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  MapPin,
  GraduationCap,
  ArrowRight,
  School,
  MapPinCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { universities } from "@/lib/data/universities";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export default function DiscoverColleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Get unique cities with college counts
  const citiesWithCounts = useMemo(() => {
    const cityMap = universities.reduce(
      (acc, uni) => {
        const city = uni.location.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(cityMap)
      .map(([city, count]) => ({ city, count }))
      .sort((a, b) => a.city.localeCompare(b.city));
  }, []);

  // Filter cities based on search
  const filteredCities = useMemo(() => {
    return citiesWithCounts.filter(({ city }) =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [citiesWithCounts, searchQuery]);

  // Get colleges for selected city
  const collegesInCity = useMemo(() => {
    return universities.filter(
      (uni) => !selectedCity || uni.location.city === selectedCity
    );
  }, [selectedCity]);

  return (
    <section className='py-16 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <AnimatedIcon
            Icon={MapPinCheck}
            className='text-accent text-center mx-auto mb-6'
          />
          <h2 className='text-3xl font-bold mb-4'>
            Discover Colleges in Your{" "}
            <span className='text-primary'>`Dream City`</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Find the perfect college in your preferred city and take the first
            step towards your future
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5' />
            <Input
              type='search'
              placeholder='Search your dream city...'
              className='pl-10'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className='grid lg:grid-cols-12 gap-8'>
          {/* City List */}
            <Card className='lg:col-span-3 p-4 h-auto overflow-y-auto'>
            <div className='space-y-2'>
              <motion.button
              onClick={() => setSelectedCity("")}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCity === ""
                ? "bg-primary text-white"
                : "hover:bg-muted"
              }`}
              whileHover={{ x: 4 }}
              >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                <span>All Cities</span>
                </div>
                <span className='text-sm'>
                {universities.length} college{universities.length !== 1 ? "s" : ""}
                </span>
              </div>
              </motion.button>

              {filteredCities.map(({ city, count }) => (
              <motion.button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCity === city
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
                }`}
                whileHover={{ x: 4 }}
              >
                <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <MapPin className='h-4 w-4' />
                  <span>{city}</span>
                </div>
                <span className='text-sm'>
                  {count} college{count !== 1 ? "s" : ""}
                </span>
                </div>
              </motion.button>
              ))}

              {filteredCities.length === 0 && (
              <div className='text-center py-8 text-muted-foreground'>
                No cities found matching your search
              </div>
              )}
            </div>
            </Card>

          {/* College Grid */}
          <div className='lg:col-span-9'>
            <AnimatePresence mode='wait'>
              {collegesInCity.length > 0 ? (
                <motion.div
                  key='colleges'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
                >
                  {collegesInCity.slice(0,3).map((college, index) => (
                    <motion.div
                      key={college.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className='overflow-hidden hover:shadow-lg transition-all duration-300'>
                        <div className='relative h-40'>
                          <Image
                            src={college.heroImage}
                            alt={college.name}
                            fill
                            sizes='(min-width: 640px) 50vw, 100vw'
                            className='object-cover'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                          <div className='absolute bottom-4 left-4'>
                            <div className='w-12 h-12 rounded-lg overflow-hidden border-2 border-white'>
                              <Image
                                src={college.logo}
                                alt={`${college.name} logo`}
                                width={48}
                                height={48}
                                className='w-full h-full object-cover'
                              />
                            </div>
                          </div>
                        </div>

                        <div className='p-4'>
                          <h3 className='font-semibold mb-2 line-clamp-1'>
                            {college.name}
                          </h3>
                          <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
                            {college.description}
                          </p>
                          <div className='flex items-center gap-4 text-sm text-muted-foreground mb-4'>
                            <div className='flex items-center'>
                              <School className='h-4 w-4 mr-1' />
                              <span>{college.courses.length} Courses</span>
                            </div>
                            <div className='flex items-center'>
                              <GraduationCap className='h-4 w-4 mr-1' />
                              <span>{college.overview.type}</span>
                            </div>
                          </div>
                          <Link href={`/universities/${college.slug}`}>
                            <Button className='w-full group text-white'>
                              Learn More
                              <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key='empty'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='text-center py-12'
                >
                  <School className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
                  <h3 className='text-lg font-semibold mb-2'>
                    No Colleges Found
                  </h3>
                  <p className='text-muted-foreground'>
                    Try selecting a different city or adjusting your search
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
