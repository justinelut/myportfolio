"use client";
import * as React from "react";
import { MapPin, Star } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import { Icons } from "@/components/icons";
import Link from "next/link";
import truncateText from "./truncate";
import {motion, useScroll, useTransform} from 'framer-motion'

export const Projects = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div style={{scale}} animate={{transition:{duration: 1, ease: "easeInOut", delay: 1}}} >
    <Link href="/">
      <ContentCard className="py-2 px-3" classContent="p-0">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-4 items-center">
            <Icons.gitHub className="w-8 h-8 text-green-500" />
            <h2 className="text-sm">Mpesa pay</h2>
          </div>
         
          <div className="flex flex-row items-center gap-2">
            <p>43</p> <Star size={16}/>
          </div>
        </div>
      </ContentCard>
    </Link>
    </motion.div>
  );
};
