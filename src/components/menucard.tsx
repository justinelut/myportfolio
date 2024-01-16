"use client";
import * as React from "react";
import {
  ArrowRight,
  BookCheck,
  CircleUser,
  FolderDot,
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
    link: "/projects",
    title: "Projects",
    icon: <FolderDot size={16} />,
  },
  {
    link: "/contact",
    title: "Contact",
    icon: <CircleUser size={16} />,
  },
  {
    link: "/blog",
    title: "Blog",
    icon: <BookCheck size={16} />,
  },
  {
    link: "/resume",
    title: "Resume",
    icon: <NotepadText size={16} />,
  },
  {
    link: "/certification",
    title: "Certification",
    icon: <ShieldCheck size={16} />,
  },
];

export const MenuCard = () => {
  return (
    <ContentCard className="p-4 pb-0 mb-0 ring-2 shadow-sm shadow-green-500 hover:border-red-500 border-opacity-70 hover:ring-red-500 hover:shadow-lg hover:shadow-red-500 hover:border-opacity-85 transition duration-300">
      <div className="flex flex-row justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            exit={{ opacity: 1, transition: { duration: 0.2 } }}
            className="rounded-full px-2 py-2 bg-red-500 font-bold"
          >
            <Home size={16} />
          </motion.div>
        </Link>

        <ModeToggle />
      </div>
      {links.map((link, index) => (
        <motion.div
          initial={{ opacity: 1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          exit={{ opacity: 1, transition: { duration: 0.2 } }}
          key={index}
        >
          <Link href={link.link}>
            <div className="flex flex-row justify-between items-center py-4 border-b hover:border-b-red-600 transition duration-300">
              <div className="flex flex-row gap-2 items-center">
                <h2 className="rounded-full px-2 py-2 bg-red-500 font-bold">
                  {link.icon}
                </h2>
                <Link href={link.link}>{link.title}</Link>
              </div>

              <div className="">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </ContentCard>
  );
};
