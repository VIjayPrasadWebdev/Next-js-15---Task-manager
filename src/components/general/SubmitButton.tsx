"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
export default function SubmitButton() {
  let { pending } = useFormStatus();

  return (
    <Button className="w-full cursor-pointer" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          Please Wait
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
