"use client";
import type { Metadata } from "next";
import { Inter, Playfair_Display, League_Spartan } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";
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
import { MainMenu } from "./mainmenu";
import Image from "next/image";
import MainNavigation from "./navigation";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["vietnamese"] });
const leaguspatan = League_Spartan({ subsets: ["latin"] });

export default function MainLayout({
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
    <html lang="en" className="scroll-smooth">
      <body key={pathname} className={leaguspatan.className}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <AnimatePresence mode="wait">
              {/* <motion.div key={pathname}>
                <motion.div
                  key={pathname}
                  style={{
                    backgroundColor: transitionColor,
                    position: "fixed",
                    height: "100vh",
                    width: "100%",
                    zIndex: 1000,
                    left: 0,
                  }}
                  transition={transitionSpringPhysics}
                  {...animate(slide)}
                />
              </motion.div> */}
              <MainNavigation />
             <div className="lg:container lg:mx-auto lg:max-w-7xl pt-4 px-4 pb-[50px]">
              {children}
              <Footer />
              
             </div>
             
            </AnimatePresence>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
