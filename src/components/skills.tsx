import React from "react";
import { ContentCard } from "./contentcard";
import { Icons } from "./icons";
import { Star } from "lucide-react";

export default function Skills() {
  return (
    <div className="flex flex-col gap-6 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between">
              <h3>Typescript</h3>
              <Icons.typescript className="w-10 h-10" />
            </div>
          </div>
        </ContentCard>

        <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between">
              <h3>Javascript</h3>
              <Icons.javascript className="w-10 h-10" />
            </div>
          </div>
        </ContentCard>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
          <div className="flex flex-col items-center justify-center">
            <Icons.react className="w-24 h-24 text-blue-500" />
            <h2 className="text-3xl font-bold text-center mt-1">React</h2>
          </div>
        </ContentCard>
        <div className="flex flex-col gap-4">
        <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between">
              <h3>Tailwind</h3>
              <Icons.tailwind className="w-10 h-10" />
            </div>
          </div>
        </ContentCard>
        <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between">
              <h3>Nextjs</h3>
              <Icons.nextjs className="w-10 h-10" />
            </div>
          </div>
        </ContentCard>
        </div>
      </div>
    </div>
  );
}
