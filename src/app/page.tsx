"use client";
import { ModeToggle } from "@/components/modetoggle";
import { AnimatePresence, Spring, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import AnimatedText from "@/app/animation/textanimation";
import { usePathname } from "next/navigation";
import Move from "@/app/move";
import TypingEffect from "./typing-effect";
import AnimateItems from "./animate-items";
import AnimatedComponent from "./animate-component";

export default function page() {
  const title = "Frontend Developer";

  const [replay, setReplay] = React.useState(true);
  // Placeholder text data, as if from API
  const placeholderText: {
    key: number;
    type: "heading1" | "heading2" | "paragraph";
    text: string;
  }[] = [{ key: 1, type: "heading1", text: "My portfolio" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  const pathname = usePathname();
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "red";

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Move pathN="/intro">
        <div className="items-center flex flex-col justify-center px-16 pt-10 max-md:px-5">
          <span className="flex w-full max-w-[960px] flex-col mt-6 mb-10 items-start max-md:max-w-full max-md:mb-10">
            <span className="items-center flex gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-3xl self-stretch grow whitespace-nowrap">
               <AnimateItems text={placeholderText} />
              </div>
              <div className="bg-black dark:bg-white w-20 shrink-0 h-0.5 my-auto" />
              <div className="text-3xl self-stretch whitespace-nowrap">
                {new Date().getFullYear()}
              </div>
            </span>

            <div className="text-7xl mt-32">Justine Gichana</div>

            <div className="self-stretch text-5xl mt-6 max-md:max-w-full max-md:text-4xl">
              <TypingEffect text={title} />
            </div>
            <AnimatedComponent animationType="slide" direction="up" duration={0.3} delay={0.5}>
            <div className="flex justify-start gap-x-10 items-center">
              <Link
                href={"/intro"}
                className="items-center text-xl mt-10 px-8 py-4 dark:bg-white rounded-full dark:text-black text-white font-extrabold bg-orange-600 grow flex justify-between gap-4"
              >
                <span>About me</span>
                <span>
                  <ArrowRight />
                </span>
              </Link>
             
                <Link
                  href="https://storage.rxresu.me/clp9fvgah3umc9hunmz3t51sk/resumes/Justine Web.pdf"
                  className="items-center text-xl mt-10 px-8 py-4 rounded-full  text-white font-extrabold bg-orange-600 grow flex justify-start gap-4"
                >
                  <span>Resume</span>
                  <ArrowUpRight />
                </Link>
              
            </div>
            </AnimatedComponent>
          </span>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-2xl leading-8 w-[352px] max-w-full mt-0 self-end max-md:mt-0"
          >
            <div>
              Press the N key on your keyboard arrow keys to move to the next
              page
            </div>
            <div className="text-base leading-6 mt-2 self-end">
              (Press B to go backward)
            </div>
          </motion.div>
        </div>
      </Move>
    </>
  );
}
