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
import { createData } from "@/app/utils/serverActions";
import SubmitButton from "./SubmitButton";

export default function TaskForm() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
          <CardDescription>
            Add a new task to stay on top of your goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createData}>
            <article className="form-container flex flex-col justify-start items-start gap-6">
              <div className="input-container flex   items-center gap-3 w-full">
                <Label className="w-[72px]">Title</Label>
                <Input
                  type="text"
                  placeholder="Task title"
                  name="title"
                  required
                />
              </div>
              <div className="input-container flex  items-center gap-3 w-full">
                <Label className="w-[72px]">Content</Label>
                <div className="description flex flex-col items-center gap-3 w-full">
                  <Textarea
                    placeholder="Task content "
                    name="content"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Add details about the task – what needs to be done, any
                    relevant notes, links, or instructions."
                  </p>
                </div>
              </div>
              {/* <div className="input-container flex   items-center gap-3 w-full">
                <Label className="w-[72px]">Image</Label>
                <Input type="url" name="url" required />
              </div> */}
              {/* <div className="input-container flex items-center gap-3 w-full">
                <Label className="w-[72px]">Upload Image</Label>
                <Input type="file" name="upload" className="cursor-pointer" />
              </div> */}

              <SubmitButton />
            </article>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
