"use client";
import * as React from "react";
import {
  ArrowRight,
  BookCheck,
  CircleUser,
  FolderDot,
  Home,
  NotepadText,
  ShieldCheck,
} from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { ContentCard } from "@/components/contentcard";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

const links = [
  {
    link: "/projects",
    title: "Projects",
    icon: FolderDot,
  },
  {
    link: "/contact",
    title: "Contact",
    icon: CircleUser,
  },
  {
    link: "/blog",
    title: "Blog",
    icon: BookCheck,
  },
  {
    link: "/resume",
    title: "Resume",
    icon: NotepadText,
  },
  {
    link: "/certification",
    title: "Certification",
    icon: ShieldCheck,
  },
];

export const MenuCard = () => {
  const pathname = usePathname();

  return (
    <div className="px-10">
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
            <div
              className={`flex flex-row justify-between gap-6 items-center py-4 border-b hover:border-b-red-600 transition duration-300 ${
                pathname == link.link ? "border-b-red-600" : ""
              }`}
            >
              <div className="flex flex-row gap-2 items-center">
                <div className="rounded-full p-3 bg-red-500 font-bold">
                  <link.icon size={30} className="text-salte-500" />
                </div>
                <Link
                  className="text-3xl font-extrabold text-slate-500"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>

              <div className="mr-6">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
      <ul className="flex justify-between items-center b-0 gap-4">
        <li className="p-4">
          <Icons.x className="w-10" />
        </li>
        <li className="p-4">
          <Icons.linkedin className="w-10" />
        </li>
        <li className="p-4">
          <Icons.gitHub className="w-10" />
        </li>
        <li className="p-4">
          <Icons.discord className="w-10" />
        </li>
      </ul>
    </div>
  );
};
