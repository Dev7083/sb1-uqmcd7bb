"use client";
import React, { useRef, memo } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useInView,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import Container from "@/components/container";

const ParallaxText = memo(function ParallaxText({
  children,
  baseVelocity = 50,
}: {
  children: React.ReactNode;
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useAnimationFrame((_, delta) => {
    if (!isInView) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className='parallax'
    >
      <motion.div
        className='scroller'
        style={{ x }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const universities = [
  { name: "Amity University", logo: "/images/marquee/amity_univ.png" },
  { name: "United University", logo: "/images/marquee/united_univ.webp" },
  { name: "Amity University", logo: "/images/marquee/amity_univ.png" },
  { name: "United University", logo: "/images/marquee/galgotia_univ.jpg" },
  { name: "Amity University", logo: "/images/marquee/amity_univ.png" },
  { name: "United University", logo: "/images/marquee/united_univ.webp" },
  { name: "Galgotia University", logo: "/images/marquee/galgotia_univ.jpg" },
  { name: "Amity University", logo: "/images/marquee/amity_univ.png" },
  { name: "United University", logo: "/images/marquee/united_univ.webp" },
  { name: "Amity University", logo: "/images/marquee/amity_univ.png" },
];

const UniversityCard = memo(
  ({ uni }: { uni: { name: string; logo: string } }) => (
    <Card className='inline-flex items-center justify-center w-[200px] h-[100px] mx-4 bg-white'>
      <div className='relative w-full h-full'>
        <Image
          src={uni.logo}
          alt={`${uni.name} logo`}
          fill
          sizes='200px'
          className='object-contain p-2'
          onError={(e) => {
            e.currentTarget.src = `/placeholder.svg?height=80&width=160&text=${uni.name}`;
          }}
        />
      </div>
    </Card>
  )
);

UniversityCard.displayName = "UniversityCard";

export default function ImageMarquee() {
  return (
    <div className='relative overflow-hidden whitespace-nowrap py-16'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <ParallaxText baseVelocity={5}>
            {universities.map((uni, index) => (
              <UniversityCard
                key={index}
                uni={uni}
              />
            ))}
          </ParallaxText>
          <ParallaxText baseVelocity={-5}>
            {universities.map((uni, index) => (
              <UniversityCard
                key={index}
                uni={uni}
              />
            ))}
          </ParallaxText>
        </Container>
      </motion.div>
    </div>
  );
}
