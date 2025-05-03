import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

export default function HomeComponent() {
  return (
    <section
      className="h-screen w-6/5 py-20 px-4 text-center shadow-lg flex justify-center items-center flex-col  
      relative bg-gradient-to-br gap-6 
      from-[#f3f4f6] via-white to-[#f3f4f6] text-black overflow-hidden
      dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] dark:text-white"
    >
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-700 opacity-25 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="text-desc flex flex-col items-center justify-center gap-2.5 mt-12 md:mt-0">
        <h1 className="font-DM font-medium text-4xl  sm:text-5xl  text-black dark:text-white mb-4 z-10">
          Seamless Task Management for <br /> Teams and Individuals
        </h1>

        <p className="font-LATO text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6">
          In today’s fast-paced world, staying organized and on track can be
          challenging, whether you’re working alone or as part of a team.
        </p>
      </div>

      <div className="button-container flex flex-col sm:flex-row justify-center gap-6">
        <Input
          type="email"
          placeholder="Enter your email"
          className="rounded-md focus:outline-none w-full py-5 
          bg-white dark:bg-zinc-900 dark:text-white"
        />

        <Link
          href="api/auth/login"
          className={`cursor-pointer bg-black  text-white hover:text-white dark:bg-white dark:text-black z-30 ${buttonVariants(
            { size: "lg" }
          )}`}
        >
          Try It Free →
        </Link>
      </div>
    </section>
  );
}
