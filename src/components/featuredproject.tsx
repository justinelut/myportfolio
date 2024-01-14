"use client";
import * as React from "react";
import { ContentCard } from "@/components/contentcard";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const FeaturedProject = () => {
  const linkedindesc = ` My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.
    My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.`;

  return (
    <Link href="/">
      <ContentCard classContent="p-0" className="rounded-xl relative">
        <AspectRatio ratio={10 / 9} className="bg-muted">
          <Image
            src="/assets/featured.jpg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-xl object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="absolute mt-0">
          <span className="px-4 py-2">Category</span>
        </div>
      </ContentCard>
    </Link>
  );
};
