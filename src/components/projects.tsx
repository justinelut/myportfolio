"use client";
import * as React from "react";
import { MapPin, Star } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";
import { motion, useScroll, useTransform } from "framer-motion";

interface props {
  githubstars: number;
  projecttitle: string;
  githublink: string;
}

export const Projects = ({ githubstars, projecttitle, githublink }: props) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div
     
      
    >
      <Link href={`${githublink}`}>
        <ContentCard className="py-2 px-3" classContent="p-0">
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-4 items-center">
              <Icons.gitHub className="w-8 h-8" />
              <h2 className="text-sm">{projecttitle}</h2>
            </div>

            <div className="flex flex-row items-center gap-2">
              <p>{githubstars}</p> <Star size={16} />
            </div>
          </div>
        </ContentCard>
      </Link>
    </motion.div>
  );
};
