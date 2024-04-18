"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";
import Navigation from "@/components/navigation";
import { AnimatePresence, Spring, motion } from "framer-motion";
import { MobileMenu } from "@/components/mobilemenu";
import TopNav from "@/components/header/topnav";
import { ModeToggle } from "@/components/modetoggle";
import {
  BookCheck,
  CircleUser,
  FolderDot,
  Menu,
  NotepadText,
  ShieldCheck,
} from "lucide-react";
import MenuSheet from "@/app/menumodal";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "@/components/icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "rgb(248, 248, 233)";
  const [open, setOpen] = useState<Boolean>(false);
  const animate = (variants: any) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants,
    };
  };

  const slide = {
    initial: {
      left: "0",
      width: "100vw",
    },
    animate: {
      width: "0vw",
      transition: {
        duration: 1.25,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const OpenNav = () => {
    open ? setOpen(false) : setOpen(true);
  };

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

  return (
    <html lang="en">
      <body key={pathname} className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatePresence mode="wait">
            <motion.div key={pathname}>
              <motion.div
                key={pathname}
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  height: "100vh",
                  zIndex: 1000,
                  left: 0,
                }}
                transition={transitionSpringPhysics}
                {...animate(slide)}
              />
            </motion.div>
            <div className="bg-white dark:bg-slate-950 sticky top-0">
              <div className="container w-full mx-auto flex items-center justify-end py-10 gap-6 ">
                <div className="bg-green-500 pt-4 z-30 rounded-full items-center justify-center w-12 h-12 px-4 py-2 flex">
                  <ModeToggle />
                </div>
                <div
                  onClick={OpenNav}
                  className="rounded-full w-12 h-12 p-4 bg-red-400 z-30 gap-2 transition-all relative duration-300 hover:bg-red-400 hover:cursor-pointer flex flex-col items-center justify-center"
                >
                  {open ? (
                    <>
                      <motion.div
                        initial={{ rotate: 0, scaleY: 1 }}
                        animate={{ rotate: -45, scaleY: 1 }}
                        exit={{ rotate: 0, scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-[3px] w-7 absolute bg-white transform -rotate-45 origin-center"
                      ></motion.div>
                      <motion.div
                        initial={{ rotate: 0, scaleY: 1 }}
                        animate={{ rotate: 45, scaleY: 1 }}
                        exit={{ rotate: 0, scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-[3px] w-7 absolute bg-white transform rotate-45 origin-center"
                      ></motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ rotate: 0, scaleY: 1 }}
                        animate={{ rotate: 0, scaleY: 1 }}
                        exit={{ rotate: 0, scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-[3px] w-7 bg-white transform  origin-center"
                      ></motion.div>
                      <motion.div
                        initial={{ rotate: 0, scaleY: 1 }}
                        animate={{ rotate: 0, scaleY: 1 }}
                        exit={{ rotate: 0, scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-[3px] w-7 bg-white transform  origin-center"
                      ></motion.div>
                    </>
                  )}
                </div>

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

            {children}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
