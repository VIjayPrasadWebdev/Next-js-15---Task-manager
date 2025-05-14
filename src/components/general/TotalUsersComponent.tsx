import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
export default function TotalUsersComponent() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Total Users
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>

      <CardContent className="text-3xl font-GABARITO font-medium">
        4 Users
      </CardContent>
    </Card>
  );
}
