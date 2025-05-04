"use server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createData(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { getUser } = getKindeServerSession();
  let user = await getUser();
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();

  await prisma.taskmanager.create({
    data: {
      title: title as string,
      content: content as string,
      authorid: user.id as string,
      authorname: user.given_name as string,
    },
  });
  redirect("/dashboard");
}

export async function fetchData() {
  let fetchData = await prisma.taskmanager.findMany();
  return fetchData;
}

export async function TaskId(id: string) {
  return prisma.taskmanager.findUnique({
    where: {
      id,
    },
  });
}

export async function EditData(formData: FormData) {
  let id = formData.get("id")?.toString();
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();

  await prisma.taskmanager.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
    },
  });

  return redirect("/dashboard");
}

export async function DeleteData(formData: FormData) {
  let id = formData.get("id");
  await prisma.taskmanager.delete({
    where: {
      id: id as string,
    },
  });
  redirect("/dashboard");
}
