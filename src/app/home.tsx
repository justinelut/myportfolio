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
      <div className="items-center grid lg:grid-cols-1 gap-x-10 grid-cols-1 justify-center px-16 pt-10 max-md:px-5 lg:pb-20">
        <div className="relative h-full w-full bg-slate-950 flex lg:flex-row flex-col items-center justify-center">
          <div className="absolute bottom-0 lg:left-[-20%] lg:right-0 lg:blur-[0] blur-[100px] top-[-10%] h-[500px] lg:w-[500px] w-[100%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 lg:right-[-20%] top-[-10%] h-[500px] lg:w-[500px] lg:flex hidden rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <div className="flex w-full flex-col mt-6 mb-10 items-center max-md:max-w-full max-md:mb-10">
          <span className="items-center flex gap-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-3xl self-stretch grow whitespace-nowrap">
              <AnimateItems text={placeholderText} />
            </div>
            <div className="bg-black dark:bg-white w-20 shrink-0 h-0.5 my-auto" />
            <div className="text-3xl self-stretch whitespace-nowrap">
              {new Date().getFullYear()}
            </div>
          </span>

          <div className="text-7xl text-balance mt-32 lg:text-start text-center  text-gradient_orange-green  font-urban lg:text-5xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[70px]">
            Justine Gichana
          </div>

          <div className="font-urban lg:text-4xl text-4xl text-gradient_orange-green font-extrabold sm:text-4xl md:text-5xl ">
            <TypingEffect text={title} />
          </div>

          <div className="flex lg:flex-row flex-col lg:justify-start gap-x-10 lg:items-center">
            <Link
              href={"#about-me"}
              className="items-center  lg:w-full min-w-dvw text-xl mt-10 px-8 py-4 dark:bg-white rounded-full dark:text-black text-white font-extrabold bg-orange-600 grow flex gap-4"
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
        {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-2xl leading-8 max-w-full w-[100%] max-md:mt-0"
        >
          <YoutubeVideo video_id="caPz8mB5rwU" />
        </motion.div> */}
      </div>
    </>
  );
}
