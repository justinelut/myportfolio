"use client";
import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import Link from "next/link";
import { motion } from "framer-motion";

export const MenuCard = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      exit={{ opacity: 1, transition: { duration: 0.2 } }}
      className="group shadow-2xl relative inline-block overflow-hidden rounded-md border border-gray-10 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
    >
      <ContentCard className="pt-6 rounded-md">
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
      <div className="repeat-infinite shadow-2xl">
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-600 delay-100 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-600 delay-100 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-600 delay-100 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-600 delay-100 group-hover:h-full"></span>
      </div>
    </motion.div>
  );
};
