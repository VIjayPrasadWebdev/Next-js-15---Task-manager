import TaskCard from "@/components/general/TaskCard";
import React from "react";
import { fetchData } from "../utils/serverActions";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Adminaccess } from "../utils/adminaccess";
export default async function Dashboard() {
  let data = await fetchData();
  // console.log(data);
  let permission = await Adminaccess();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main
      className={`${
        data.length > 3 ? "h-full" : "h-screen"
      }lg:h-screen flex flex-col justify-center items-center h-screen w-full py-20 px-4 text-center shadow-lg   
      relative bg-gradient-to-br gap-6 
      from-[#f3f4f6] via-white to-[#f3f4f6] text-black overflow-x-hidden
      dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] dark:text-white`}
    >
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-700 opacity-25 rounded-full blur-[150px] pointer-events-none z-0" />

      <section className="w-full h-full">
        <div className=" btn-container flex items-center justify-start gap-3.5 mr-auto md:flex-row flex-col p-12  md:p-24">
          <h2 className="text-xl font-normal font-POPPINS">
            Create your own quest
          </h2>
          <Link
            href="/dashboard/create"
            className={`cursor-pointer ${buttonVariants()} px-3  z-10`}
          >
            Create Quest
          </Link>
        </div>
        <div className="card-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-4.5  place-items-center p-4">
          {data.map((data) => {
            return (
              <TaskCard key={data.id} data={data} permission={permission} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
