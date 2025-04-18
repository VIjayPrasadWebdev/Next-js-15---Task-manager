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
import SubmitButton from "./SubmitButton";
import { EditData } from "@/app/utils/serverActions";

export default function EditCard({ data }: { data: any }) {
  let { id, title, content } = data;
  return (
    <section className="w-full h-screen flex justify-center items-center">
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
              <SubmitButton />
            </article>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
