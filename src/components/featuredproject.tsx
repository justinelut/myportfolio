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
      <ContentCard
        classContent="p-0"
        className="rounded-xl relative items-end overflow-hidden"
      >
        <AspectRatio ratio={10 / 9} className="bg-muted">
          <Image
            src="/assets/featured.jpg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-xl object-cover w-full h-full"
          />
        </AspectRatio>

        <div className="absolute flex items-end z-20 w-full inset-0 p-4 space-y-3 md:p-8 bg-gradient-to-t from-green-500 to-transparent">
          <div className="flex flex-wrap gap-3">
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Categorydggggggggggggggggggggg
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Categoryddddddddddddddddddddd
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
            <span className="py-1 text-slate-800 text-sm bg-gray-200 px-4 rounded-lg">
              Category
            </span>
          </div>
        </div>
      </ContentCard>
    </Link>
  );
};
