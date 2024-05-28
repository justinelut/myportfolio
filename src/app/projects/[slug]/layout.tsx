"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
import QueryProvider from "@/app/query-provider";
import { MainMenu } from "../../mainmenu";

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

  const transitionColor = "rgb(221, 107, 32, 0.9)";
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

  return (
    <html lang="en">
      <body key={pathname} className={inter.className}>
        <QueryProvider>
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
                  <div className="bg-orange-600 pt-4 z-30 rounded-full items-center justify-center w-12 h-12 px-4 py-2 flex">
                    <ModeToggle />
                  </div>

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
              <article className="container relative max-w-3xl py-6 lg:py-10">
                {children}
              </article>
            </AnimatePresence>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}