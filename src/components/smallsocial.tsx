import React from "react";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";
import { Button } from "@/components/ui/button";

export default function SmallSocial() {
  return (
    <ContentCard classContent="pt-4" className="min-w-200">
      <div className="flex flex-col">
        <div className="text-md font-extrabold">
          <Icons.linkedin className="w-14 h-14 text-blue-500" />
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <p className="text-blue-500 text-md">Discord</p>
          <p className="text-blue-500 text-sm">@username</p>
          <Link href="discord" className="bg-blue-500 inline-block max-w-fit text-white text-sm px-3 py-1 rounded-xl mt-2">
            Join 44
          </Link>
        </div>
      </div>
    </ContentCard>
  );
}
