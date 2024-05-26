"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { AnimatePresence, Spring, motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";


import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";



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
        <article className="container relative max-w-3xl py-6 lg:py-10">
          {children}
          <hr className="mt-12" />
          <div className="flex justify-center py-6 lg:py-10">
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
              See all projects
            </Link>
          
          </div>
        </article>
      </body>
    </html>
  );
}
