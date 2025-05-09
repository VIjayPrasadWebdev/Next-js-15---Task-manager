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
    <Carousel className="relative p-6 md:mt-0 mt-12  ">
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
                className="h-44 w-44 object-cover"
              />
              <CardContent className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-medium font-POPPINS">
                  {card.title}
                </h3>
                <p className=" text-sm font-LATO">{card.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="  carousel-btns   absolute md:right-18 md:-top-2 right-16 -top-2 flex items-center gap-2">
        <CarouselPrevious data-carousel-prev className="cursor-pointer" />
        <CarouselNext data-carousel-next className="cursor-pointer" />
      </div>
    </Carousel>
  );
}
