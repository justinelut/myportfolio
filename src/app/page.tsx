"use client";
import { ModeToggle } from "@/components/modetoggle";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function page() {
  const title = "Framer Motion is a really cool tool";
  

  return (
    <>
      <div className="items-center flex flex-col justify-center px-16 py-12 max-md:px-5">
        <span className="flex w-full max-w-[960px] flex-col mt-8 mb-16 items-start max-md:max-w-full max-md:mb-10">
          <span className="items-center flex gap-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-3xl self-stretch grow whitespace-nowrap">
              <h3>My Portfolio Preview</h3>
            </div>
            <div className="bg-black dark:bg-white w-20 shrink-0 h-0.5 my-auto" />
            <div className="text-3xl self-stretch whitespace-nowrap">2024</div>
          </span>
          <div className="self-stretch text-7xl mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Justine Gichana
          </div>
          <div className="self-stretch text-5xl mt-6 max-md:max-w-full max-md:text-4xl">
            {title.split('').map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                {char}{" "}
              </motion.span>
            ))}
          </div>

          <Link
            href={"/intro"}
            className="items-center text-xl mt-10 px-6 py-2 dark:bg-white rounded-xl dark:text-black text-white font-extrabold bg-black grow flex justify-between gap-4"
          >
            <span>Start</span>
            <span>
              <ArrowRight />
            </span>
          </Link>
          <Link
            href={"/contact"}
            className="items-center text-xl mt-10 px-6 py-2 dark:bg-white rounded-xl dark:text-black text-white font-extrabold bg-black grow flex justify-between gap-4"
          >
            <span>Contact</span>
            <span>
              <ArrowRight />
            </span>
          </Link>
        </span>
        <div className="text-2xl leading-8 w-[352px] max-w-full mt-0 self-end max-md:mt-0">
          Press the N key or your keyboard arrow keys to move to the next frame
        </div>
        <div className="text-base leading-6 mt-2 self-end">
          (Shift + N to go backwards)
        </div>
      </div>
    </>
  );
}
