import React from "react";
import CarouselComponent from "./CarouselComponent";

export default function AboutComponent() {
  return (
    <section>
      <div className="text-info h-52 flex justify-center items-center flex-col gap-8">
        <h1 className="md:text-5xl text-3xl font-DM font-medium">
          Our Background
        </h1>
        <p className="font-LATO">
          Discover how our solution simplifies complex processes, making it
          easier to manage key operations and deliver exceptional experiences.
        </p>
      </div>

      <CarouselComponent />
    </section>
  );
}
