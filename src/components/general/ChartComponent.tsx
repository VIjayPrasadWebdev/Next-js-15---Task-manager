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

export default function ChartComponent() {
  let { user } = useKindeBrowserClient();
  console.log(user);

  return (
    <Card className="w-[550px] bg-transparent ">
      <CardHeader>
        <CardTitle>Total Users</CardTitle>
        <CardDescription>
          Total Users logged in the task manager application
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Total Number of Users 42</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
