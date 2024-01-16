import { ContentCard } from "@/components/contentcard";
import { FeaturedProject } from "@/components/featuredproject";
import { LatestBlog } from "@/components/latestblog";
import { MenuCard } from "@/components/menucard";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <FeaturedProject />

        <FeaturedProject />
      </div>
      <div className="flex flex-col gap-4">
      <FeaturedProject />
      <FeaturedProject />
      </div>
    </>
  );
}
