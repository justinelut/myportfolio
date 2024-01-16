import { ContentCard } from "@/components/contentcard";
import { FeaturedProject } from "@/components/featuredproject";
import { LatestBlog } from "@/components/latestblog";
import { MenuCard } from "@/components/menucard";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <ContentCard>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-4xl mt-4 mb-4">
              Mastering Responsive Design with Tailwind CSS
            </h2>
            <FeaturedProject />
            <p className="mt-4">
              Hey there, design enthusiasts and coding Heros! Today, we're
              taking a look on a creative journey building a visually stunning
              hero section using Tailwind CSS. This step-by-step guide will not
              only walk you through the code but also demystify the magic behind
              each Tailwind class. Let's dive in!
            </p>
          </div>
        </ContentCard>
      </div>
      <div className="bg-red ">
        <LatestBlog />
      </div>
    </>
  );
}
