"use client";
import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";

export const SocialCard = () => {
  const linkedindesc = ` My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.
    My true passion is learning and sharing my knowledge, which is why I
    started creating Youtube videos about web development, startups, and
    marketing.`;

  return (
    <Link href="/">
      <ContentCard classContent="pt-6">
        <div className="flex flex-row justify-between items-center">
          <div className="text-md font-extrabold">
            <Icons.linkedin className="w-14 h-14 text-blue-500" />
          </div>
          <div className="connect">
            <Link
              className="bg-blue-500 rounded-lg px-4 py-2 text-white text-sm"
              href="linkedin"
            >
              Connect 237
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-blue-500 text-sm">@username</p>
          <p className="text-blue-400 text-sm">
            {truncateText({ text: linkedindesc, maxWords: 22 })}
          </p>
        </div>
      </ContentCard>
    </Link>
  );
};
