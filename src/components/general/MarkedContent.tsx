"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Undo } from "lucide-react";
export default function MarkedContent({ check, handlecheck }: any) {
  return (
    <Button
      className="w-full cursor-pointer"
      onClick={() => handlecheck(!check)}
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
