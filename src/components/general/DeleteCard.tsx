import React from "react";
import { DeleteData } from "@/app/utils/serverActions";
import { SubmitDeleteButton } from "./SubmitButton";
export default function DeleteCard({ id }: any) {
  return (
    <form action={DeleteData}>
      <input type="hidden" name="id" value={id} />
      <SubmitDeleteButton />
    </form>
  );
}
