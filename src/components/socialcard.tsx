"use client";
import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";
import {motion, useScroll, useTransform} from 'framer-motion'

export const LinkedinSocial = () => {
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

export const XSocial = () => {
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
            <Icons.x className="w-14 h-14" />
          </div>
          <div className="connect">
            <Link
              className="bg-slate-800 rounded-lg px-4 py-2 text-white text-sm"
              href="linkedin"
            >
              Follow 100
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-slate-800 dark:text-white text-sm">@username</p>
          <p className="text-slate-800 dark:text-white text-sm">
            {truncateText({ text: linkedindesc, maxWords: 22 })}
          </p>
        </div>
      </ContentCard>
    </Link>
 
  );
};


export const Discord = () => {
  return (
    <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
      <div className="flex flex-col">
        <div className="text-md font-extrabold">
          <Icons.discord className="w-14 h-14 text-blue-600" />
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <p className="text-blue-600 text-md">Discord</p>
          <p className="text-blue-600 text-sm">@username</p>
          <Link href="discord" className="bg-blue-600 inline-block max-w-fit text-white text-sm px-3 py-1 rounded-xl mt-2">
            Join 44
          </Link>
        </div>
      </div>
    </ContentCard>
  );
}

export const Github = () => {
  return (
    <ContentCard classContent="pt-4" className="lg:min-w-[200px] md:min-w-[200px]">
      <div className="flex flex-col">
        <div className="text-md font-extrabold">
          <Icons.gitHub className="w-14 h-14" />
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <p className="text-slate-800 dark:text-white text-md">Github</p>
          <p className="text-slate-800 dark:text-white text-sm">@username</p>
          <Link href="discord" className="bg-slate-800 inline-block max-w-fit text-white text-sm px-3 py-1 rounded-xl mt-2">
            Follow 10
          </Link>
        </div>
      </div>
    </ContentCard>
  );
}
