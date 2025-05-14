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
    <main className="md:h-screen h-auto p-6  flex w-screen justify-center items-center flex-col gap-3">
      <section className="mt-18   h-full grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-3 w-3/6 mx-auto">
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
