import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface TypeChildren {
  children: React.ReactNode;
}

export const SideCard = ({ children }: TypeChildren) => {
  return (
    <Card className="min-w-[350px] w-full pt-6 items-start">
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
