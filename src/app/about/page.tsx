import AboutUi from "@/components/general/AboutComponent";
import React from "react";

export default function About() {
  return (
    <main
      className="h-screen w-full py-20 px-4 text-center shadow-lg   
      relative bg-gradient-to-br gap-6 
      from-[#f3f4f6] via-white to-[#f3f4f6] text-black overflow-hidden
      dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] dark:text-white"
    >
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-700 opacity-25 rounded-full blur-[150px] pointer-events-none z-0" />
      <AboutUi />
    </main>
  );
}
