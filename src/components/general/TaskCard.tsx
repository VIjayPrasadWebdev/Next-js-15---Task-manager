"use client";
import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import CardDetails from "./CardDetails";
import MarkedContent from "./MarkedContent";
import DeleteCard from "./DeleteCard";
import { toast } from "sonner";
export default function TaskCard({ data, permission }: any) {
  // console.log(Image);

  let { id } = data;

  let [check, handlecheck] = useState(false);

  return (
    <Card className="w-[350px] ">
      <CardHeader className="flex items-start justify-start flex-col ">
        <CardTitle className="flex items-center justify-between w-full font-MONTE">
          {permission?.isGranted ? (
            <div className="font-GABARITO admin-control flex items-center justify-between w-full">
              <p>Forge a New Quest</p>
              <div className="btn-container flex items-center gap-3">
                <Link
                  href={`/dashboard/${id}`}
                  className={`cursor-pointer ${buttonVariants({
                    variant: "outline",
                    size: "icon",
                  })}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="rgb(0, 140, 255)"
                    className="size-5"
                  >
                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                  </svg>
                </Link>
                <DeleteCard id={id} />
              </div>
            </div>
          ) : (
            "Forge a New Quest"
          )}
        </CardTitle>
        <CardDescription className="font-LATO">
          Begin your journey — one task at a time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDetails data={data} check={check} />
      </CardContent>
      <CardFooter className="w-full">
        <MarkedContent check={check} handlecheck={handlecheck} toast={toast} />
      </CardFooter>
    </Card>
  );
}
