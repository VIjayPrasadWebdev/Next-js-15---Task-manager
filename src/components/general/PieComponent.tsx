"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell, Label as RechartsLabel } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  {
    label: "Current Users",
    visitors: 3,
    fill: "hsl(var(--chart-1))",
  },
  {
    label: "Total Users",
    visitors: 11,
    fill: "hsl(var(--chart-2))",
  },
];

const chartConfig = {
  visitors: {
    label: "Users",
  },
  CurrentUsers: {
    label: "Current Users",
    color: "hsl(var(--chart-1))",
  },
  TotalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PieComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col bg-transparent md:w-[750px] w-auto">
      <CardHeader className="items-center pb-0">
        <CardTitle>Managing Users</CardTitle>
        <CardDescription>April - Present 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="label"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}

              <RechartsLabel
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox as { cx: number; cy: number };

                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground text-3xl font-bold"
                    >
                      <tspan x={cx} dy={0}>
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={cx}
                        dy={24}
                        className="fill-muted-foreground text-sm font-normal"
                      >
                        Total Users
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          3 out of 11 users are currently active
        </div>
      </CardFooter>
    </Card>
  );
}
