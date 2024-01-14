import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Navigation({ children }: Props) {
  return <div className="md:sticky md:top-10 md:left-0 lg:col-span-1 md:col-span-1">{children}</div>;
}
