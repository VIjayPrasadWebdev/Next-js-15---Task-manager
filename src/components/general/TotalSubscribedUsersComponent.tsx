import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundPlus } from "lucide-react";
export default function TotalSubscribedUsersComponent() {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Total Subscribed Users
          <UserRoundPlus className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>

      <CardContent className="text-3xl font-GABARITO font-medium">
        7 Users
      </CardContent>
    </Card>
  );
}
