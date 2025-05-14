"use client";
import React from "react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import TotalUsersComponent from "./TotalUsersComponent";
import TotalActiveUsersComponent from "./TotalActiveUsersComponent";
import TotalSubscribedUsersComponent from "./TotalSubscribedUsersComponent";
import { PieComponent } from "./PieComponent";

export default function AdminComponent() {
  let { user } = useKindeBrowserClient();
  console.log(user);

  return (
    <main
      className="md:h-screen h-auto p-6  w-screen  py-20 px-4 text-center shadow-lg flex justify-center items-center flex-col  
      relative bg-gradient-to-br gap-6 
      from-[#f3f4f6] via-white to-[#f3f4f6] text-black overflow-hidden
      dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] dark:text-white"
    >
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-700 opacity-25 rounded-full blur-[150px] pointer-events-none z-0" />
      <section className="mt-18   h-full grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-3 md:w-3/6 w-5/6 mx-auto">
        <TotalUsersComponent />
        <TotalActiveUsersComponent />
        <TotalSubscribedUsersComponent />
      </section>
      <section>
        <PieComponent />
      </section>
    </main>
  );
}
