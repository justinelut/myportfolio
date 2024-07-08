"use client";
import { ModeToggle } from "@/components/modetoggle";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MainMenu } from "./mainmenu";
import { MenuCard } from "@/components/menucard";

export default function MainNavigation() {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <div className=" dark:lg:bg-stone-900 lg:bg-white bg-transparent rounded-full opacity-85 sticky top-4 z-50 flex items-center justify-between lg:container lg:mx-auto lg:max-w-7xl">
      <div className="lg:pl-10 pl-6">
        <Link href="/">
          <Image
            src="/logo.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="lg:scale-50 lg:w-[30%] w-[40%]"
          />
        </Link>
      </div>

      <div className="container w-full mx-auto flex items-center justify-end py-4 gap-6 ">
        <ModeToggle />

        <MainMenu />

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="lg:w-1/3 md:w-1/3 w-full right-0 top-0 h-dvh z-20 py-28 fixed border-l bg-white dark:bg-slate-800 shadow-slate-500 shadow-lg"
            >
              <MenuCard />
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
