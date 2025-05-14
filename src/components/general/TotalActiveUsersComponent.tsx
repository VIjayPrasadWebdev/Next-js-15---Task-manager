import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleDotIcon } from "lucide-react";
export default function TotalActiveUsersComponent() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Active Now
          <CircleDotIcon className="h-4 w-4 text-green-500" />
        </CardTitle>
      </CardHeader>

      <CardContent className="text-3xl font-GABARITO font-medium">
        2 Users
      </CardContent>
    </Card>
  );
}
