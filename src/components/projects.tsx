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
  const linkedindesc = ` My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.
    My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.`;

  return (
    <Link href="/">
      <ContentCard>
        <div className="flex flex-row justify-between items-center">
          <div className="text-md font-extrabold">
            <Icons.linkedin color="green" className="w-14 h-14" />
          </div>
          <div className="connect">
            <Link
              className="bg-green-600 rounded-lg px-4 py-2 text-white text-sm"
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
