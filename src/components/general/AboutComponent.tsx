"use client";
import React from "react";
import CarouselComponent from "./CarouselComponent";
import { useIsMobile } from "@/hooks/use-mobile";
export default function AboutComponent() {
  const mobileDisplay = useIsMobile();
  console.log("display", mobileDisplay);
  return (
    <section>
      <div className="text-info h-52 flex justify-center items-center flex-col gap-8">
        <h1 className="md:text-5xl text-3xl font-dm font-medium">
          Our Background
        </h1>
        <p>
          Discover how our solution simplifies complex processes, making it
          easier to manage key operations and deliver exceptional experiences.
        </p>
      </div>

      <CarouselComponent />
    </section>
  );
}
