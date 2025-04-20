"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Undo } from "lucide-react";
export default function MarkedContent({ check, handlecheck, toast }: any) {
  return (
    <Button
      className="w-full cursor-pointer z-10"
      onClick={() => {
        handlecheck(!check);

        {
          check
            ? toast.success("Data unmarked successfully", {
                style: {
                  backgroundColor: "green",
                  color: "white",
                },
                description: `${new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date())}`,
              })
            : toast.warning("Data marked successfully", {
                style: {
                  backgroundColor: "yellow",
                },
                description: `${new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date())}`,
              });
        }
      }}
    >
      {check ? (
        <>
          <Undo />
          Undo read
        </>
      ) : (
        <>
          <Check /> Mark all as read
        </>
      )}
    </Button>
  );
}
