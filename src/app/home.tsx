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
import YoutubeVideo from "./videos/youtube-video";




export default function Home() {
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
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Move pathN="/intro">
        <div className="items-center grid lg:grid-cols-2 gap-x-10 grid-cols-1 justify-center px-16 pt-10 max-md:px-5">
          <div className="flex w-full max-w-[960px] flex-col mt-6 mb-10 items-start max-md:max-w-full max-md:mb-10">
            <span className="items-center flex gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-3xl self-stretch grow whitespace-nowrap">
                <AnimateItems text={placeholderText} />
              </div>
              <div className="bg-black dark:bg-white w-20 shrink-0 h-0.5 my-auto" />
              <div className="text-3xl self-stretch whitespace-nowrap">
                {new Date().getFullYear()}
              </div>
            </span>

            <div className=" text-7xl text-balance mt-32  text-gradient_orange-green  font-urban lg:text-5xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">Justine Gichana</div>

            <div className="self-stretch text-5xl mt-6 max-md:max-w-full max-md:text-4xl">
              <div className="text-balance font-urban lg:text-4xl text-4xl text-gradient_orange-green font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[66px]"><TypingEffect text={title} /></div>
            </div>

            <div className="flex lg:flex-row flex-col lg:justify-start gap-x-10 items-center">
              <Link
                href={"/intro"}
                className="items-center  w-full text-xl mt-10 px-8 py-4 dark:bg-white rounded-full dark:text-black text-white font-extrabold bg-orange-600 grow flex gap-4"
              >
                <span>About me</span>
                <span>
                  <ArrowRight />
                </span>
              </Link>

              <Link
                href="https://storage.rxresu.me/clp9fvgah3umc9hunmz3t51sk/resumes/Justine Web.pdf"
                className="items-center text-xl mt-10 px-8 py-4 rounded-full  text-white font-extrabold bg-orange-600 flex gap-4"
              >
                <span>Resume</span>
                <ArrowUpRight />
              </Link>
            </div>
            
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl leading-8 max-w-full w-[100%] max-md:mt-0"
          >
           <YoutubeVideo video_id="kghwFYOJiNg" />
          </motion.div>
        </div>
      </Move>
    </>
  );
}
