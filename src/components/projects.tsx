"use client";
import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";

export const Projects = () => {


  return (
    <Link href="/">
      <ContentCard className="p-2" classContent="p-0">
        <div className="flex flex-row justify-between items-center">
          <div className="text-md font-extrabold">
            <Icons.gitHub className="w-10 h-10 text-green-500" />
          </div>
          <div className="connect">
            <Link
              className="bg-black dark:bg-green-500 font-bold rounded-lg px-4 py-2 text-white text-sm"
              href="linkedin"
            >
              Connect 237
            </Link>
          </div>
        </div>
      </ContentCard>
    </Link>
  );
};
