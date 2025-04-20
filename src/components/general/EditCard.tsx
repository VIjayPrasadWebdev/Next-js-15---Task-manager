import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SubmitEditButton } from "./SubmitButton";
import { EditData } from "@/app/utils/serverActions";

export default function EditCard({ data }: { data: any }) {
  let { id, title, content } = data;
  return (
    <section
      className="h-screen w-full py-20 px-4 text-center shadow-lg flex justify-center items-center flex-col  
      relative bg-gradient-to-br gap-6 
      from-[#f3f4f6] via-white to-[#f3f4f6] text-black overflow-hidden
      dark:from-[#0e0e0e] dark:via-[#1a1a1a] dark:to-[#0e0e0e] dark:text-white"
    >
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-300 dark:bg-indigo-700 opacity-25 rounded-full blur-[150px] pointer-events-none z-0" />

      <Card className="w-[550px]" id={id}>
        <CardHeader>
          <CardTitle>Update your Task</CardTitle>
          <CardDescription>
            Edit an existing task to stay aligned with your goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={EditData}>
            <article className="form-container flex flex-col justify-start items-start gap-6">
              <input type="hidden" name="id" value={id} />
              <div className="input-container flex   items-center gap-3 w-full">
                <Label className="w-[72px]">Title</Label>
                <Input
                  type="text"
                  placeholder="Task title"
                  name="title"
                  defaultValue={title}
                />
              </div>
              <div className="input-container flex  items-center gap-3 w-full">
                <Label className="w-[72px]">Content</Label>
                <div className="description flex flex-col items-center gap-3 w-full">
                  <Textarea
                    placeholder="Task content "
                    name="content"
                    defaultValue={content}
                  />
                  <p className="text-sm text-muted-foreground">
                    Add details about the task – what needs to be done, any
                    relevant notes, links, or instructions."
                  </p>
                </div>
              </div>
              <SubmitEditButton />
            </article>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
