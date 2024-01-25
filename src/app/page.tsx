"use client";
import { ModeToggle } from "@/components/modetoggle";
import { AnimatePresence, Spring, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import AnimatedText from "@/app/animation/textanimation";
import { usePathname } from "next/navigation";

export default function page() {
  const title = "Frontend Developer";

  const [replay, setReplay] = React.useState(true);
  // Placeholder text data, as if from API
  const placeholderText: {
    key: number;
    type: "heading1" | "heading2" | "paragraph";
    text: string;
  }[] = [{ key: 1, type: "heading1", text: "My portfolio preview" }];

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
   
      <div className="items-center flex flex-col justify-center px-16 pt-10 max-md:px-5">
        <span className="flex w-full max-w-[960px] flex-col mt-6 mb-10 items-start max-md:max-w-full max-md:mb-10">
          <span className="items-center flex gap-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-3xl self-stretch grow whitespace-nowrap">
              <motion.div
                className="z-10"
                initial="hidden"
                // animate="visible"
                animate={replay ? "visible" : "hidden"}
                variants={container}
              >
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </motion.div>
            </div>
            <div className="bg-black dark:bg-white w-20 shrink-0 h-0.5 my-auto" />
            <div className="text-3xl self-stretch whitespace-nowrap">2024</div>
          </span>
          <div className="self-stretch text-7xl mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Justine Gichana
          </div>
          <div className="self-stretch text-5xl mt-6 max-md:max-w-full max-md:text-4xl">
            {title.split("").map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                {char}
                {""}
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
         
        </span>
        <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="text-2xl leading-8 w-[352px] max-w-full mt-0 self-end max-md:mt-0"
    >
      <div>
        Press the N key or your keyboard arrow keys to move to the next frame
      </div>
      <div className="text-base leading-6 mt-2 self-end">
        (Shift + N to go backward)
      </div>
    </motion.div>
      </div>
    </>
  );
}
