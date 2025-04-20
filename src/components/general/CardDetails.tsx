import React from "react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
export default function CardDetails({ data, check }: any) {
  let { id, title, content, authorname, createdAt, picture } = data;
  return (
    <>
      <div className="space-y-1 flex justify-start items-start flex-col gap-2">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p
          className={`text-sm ${
            check
              ? "line-through text-muted-foreground"
              : "text-muted-foreground"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="user-info flex gap-2.5 items-center">
          <Image
            src={picture ? picture : "https://github.com/shadcn.png"}
            height={100}
            width={100}
            alt={authorname}
            className={`${buttonVariants({ size: "icon" })} object-cover`}
          />
          <p className="text-sm font-normal  leading-none">{authorname}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(createdAt)}
        </p>
      </div>
    </>
  );
}
