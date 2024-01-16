"use client";
import * as React from "react";
import {
  ArrowRight,
  BookCheck,
  CircleUser,
  Home,
  MapPin,
  Newspaper,
  NotepadText,
  ShieldCheck,
} from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    link: "/",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/contact",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/blog",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/resume",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/certification",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/blog",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/resume",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/certification",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/blog",
    title: "Mastering Responsive Design with Tailwind CSS",
  },
  {
    link: "/resume",
    title: "Mastering Responsive Design with Tailwind CSS sdggsdsgdsgdgdgd",
  },
  
 
];

export const LatestBlog = () => {
  return (
    <>
      {links.map((link, index) => (
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          exit={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          <Link href={link.link} key={index}>
            <div className="flex flex-row justify-between items-center py-4 border-b hover:border-b-red-600 transition duration-300">
              <div className="flex flex-row gap-2 items-center w-full">
                <h2 className="rounded-full px-2 py-2 bg-red-500 font-bold">
                  0{index +1}
                </h2>
                <Link href="/resume" className="truncate">{link.title}</Link>
              </div>

              <div className="">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
};
