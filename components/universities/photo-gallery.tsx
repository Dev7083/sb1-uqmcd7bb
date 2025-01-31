"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  images: string[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section>
      <h2 className='text-2xl font-bold mb-6'>Campus Gallery</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className='overflow-hidden cursor-pointer hover:shadow-lg transition-shadow'
              onClick={() => setSelectedImage(image)}
            >
              <div className='relative aspect-video'>
                <Image
                  src={image}
                  alt={`Campus view ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className='max-w-4xl p-0'>
          {selectedImage && (
            <div className='relative aspect-video'>
              <Image
                src={selectedImage}
                alt='Campus view'
                fill
                className='object-contain'
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
