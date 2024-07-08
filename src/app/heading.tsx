"use client";

import * as React from "react";

import {
  GradientHeading,
  Size,
  Variant,
  Weight,
} from "@/components/ui/gradient-heading";

export function HeadingGradient({ children }: { children: React.ReactNode }) {
  const variants: Variant[] = ["default", "pink", "light"];
  const sizes: Size[] = ["lg", "xl", "xxl", "xxxl"];
  const weights: Weight[] = ["thin", "base", "semi", "bold", "black"];

  return (
    <div className="space-y-8 p-4">
      <div>
        {/* <h2 className="text-xl font-semibold mb-4">Variant: {variant}</h2> */}

        <GradientHeading
          variant="light"
          size="xxxl"
          weight="bold"
          className="mb-2"
        >
          {children}
        </GradientHeading>
      </div>
    </div>
  );
}
