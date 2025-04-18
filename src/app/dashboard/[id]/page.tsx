import EditCard from "@/components/general/EditCard";
import React from "react";
import { TaskId } from "@/app/utils/serverActions";

export default async function page({ params }: { params: any }) {
  let id = params.id;
  let data = await TaskId(id);

  return <EditCard data={data} />;
}
