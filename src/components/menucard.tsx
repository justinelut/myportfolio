import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import Link from "next/link";

export const MenuCard = () => {
  return (
    <ContentCard className="shadow-2xl pt-6">
      <div className="grid grid-cols-2">
        <div className="">
          <Link href="/resume">Resume</Link>
        </div>
        <div className="">
          <Link href="/">Home</Link>
        </div>
        <div className="">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </ContentCard>
  );
};
