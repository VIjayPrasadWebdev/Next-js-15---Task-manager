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
      }lg:h-screen flex flex-col justify-center items-center`}
    >
      <div className=" btn-container flex items-center justify-start gap-3.5 mr-auto p-24">
        <p>Create your own quest</p>
        <Link
          href="/dashboard/create"
          className={`cursor-pointer ${buttonVariants()} px-3`}
        >
          Create Quest
        </Link>
      </div>

      <section className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-4.5  place-items-center p-4">
        {data.map((data) => {
          return <TaskCard key={data.id} data={data} permission={permission} />;
        })}
      </section>
    </main>
  );
}
