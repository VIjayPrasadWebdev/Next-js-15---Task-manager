"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { aboutdata } from "@/app/utils/aboutdata";
import { Card, CardContent } from "@/components/ui/card";

export default function CarouselComponent() {
  //   const carouselRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const nextButton = carouselRef.current?.querySelector(
  //         "[data-carousel-next]"
  //       ) as HTMLElement;
  //       nextButton?.click();
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <Carousel className="relative p-6 md:mt-0 mt-12">
      <CarouselContent className="flex gap-8">
        {aboutdata.map((card) => (
          <CarouselItem
            key={card.id}
            className="lg:basis-1/4 md:basis-1/2 sm:basis-3/4"
          >
            <Card
              className="flex flex-col h-full w-full items-center justify-center text-center p-6 
                         bg-transparent border-2"
            >
              <Lottie
                animationData={card.animation}
                loop
                className="h-36 w-36"
              />
              <CardContent className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className=" text-sm">{card.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="  carousel-btns  max-md:right-6 absolute md:right-12 md:-top-2 right-12 -top-2 flex items-center gap-2">
        <CarouselPrevious data-carousel-prev />
        <CarouselNext data-carousel-next />
      </div>
    </Carousel>
  );
}
