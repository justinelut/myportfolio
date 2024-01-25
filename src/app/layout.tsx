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
import { Menu } from "lucide-react";
import MenuSheet from "@/app/menumodal";
import { usePathname } from "next/navigation";

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
      left: '0',
      width: "100vw",
    },
    animate:{
      width: '0vw',
      transition:{
        duration: 2.25,
        ease: [
          0.83, 0, 0.17, 1
        ]
      }
    }
  };

  return (
    <html lang="en">
      <body key={pathname} className={inter.className}>
       
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             
            <AnimatePresence mode="wait" >
              
            <motion.div  key={pathname}>
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
            <div className="z-1100">
              <MenuSheet />
            </div>

            {children}
            </AnimatePresence>
          </ThemeProvider>
       
      </body>
    </html>
  );
}
