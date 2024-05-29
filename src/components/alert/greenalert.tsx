import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React from "react";

interface Props {
  title?: string;
  message?: string;
  children?: React.ReactNode;
}

export function GreenAlert({ title, message, children }: Props) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle className="text-green-500">{title}!</AlertTitle>
      <AlertDescription>
        <div className="text-green-500">{message}</div>
        <br></br>
        {children}
      </AlertDescription>
    </Alert>
  );
}
