"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { BarComponent } from "./BarComponent";

export default function AdminComponent() {
  let { user } = useKindeBrowserClient();
  console.log(user);

  return (
    <section className="h-full grid md:grid-cols-3 grid-cols-1 justify-center items-center  gap-3">
      <BarComponent />
      <BarComponent />
      <BarComponent />
    </section>
  );
}
