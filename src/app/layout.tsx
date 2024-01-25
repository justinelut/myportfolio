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
      icon: CircleUser ,
    },
    {
      link: "/blog",
      title: "Blog",
      icon: BookCheck ,
    },
    {
      link: "/resume",
      title: "Resume",
      icon: NotepadText,
    },
    {
      link: "/certification",
      title: "Certification",
      icon: ShieldCheck ,
    },
  ];

  return (
    <html lang="en">
      <body key={pathname} className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
            <div className="container w-full mx-auto flex justify-end py-10">
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
                    className="lg:w-1/3 md:w-1/3 w-full right-0 top-0 h-dvh bg-green-300 z-20 py-28 fixed"
                  >
                    <ul className="flex flex-col gap-4 px-6 justify-start">
                      {links &&
                        links.map((link, index) => (
                          <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: 0.8}}}  className="flex flex-row justify-start items-center">
                          <link.icon size={40} />
                          <Link
                            href={link.link}
                            className="text-5xl text-white border-b p-4"
                          >
                            {link.title}
                          </Link>
                          </motion.div>
                        ))}
                    </ul>
                    <ul className="px-3 flex justify-start items-center b-0 gap-4">
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
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {children}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
