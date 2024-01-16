import { ContentCard } from "@/components/contentcard";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <ContentCard>testimonial</ContentCard>
        <ContentCard>Download resume</ContentCard>
      </div>

      <div className="flex flex-col gap-4">
        <ContentCard>experience</ContentCard>
        <ContentCard>education</ContentCard>
      </div>
    </>
  );
}
