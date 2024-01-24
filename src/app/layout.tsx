"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";
import Navigation from "@/components/navigation";
import { AnimatePresence } from "framer-motion";
import { MobileMenu } from "@/components/mobilemenu";
import TopNav from "@/components/header/topnav";
import { ModeToggle } from "@/components/modetoggle";
import { Menu } from "lucide-react";
import MenuSheet from "@/app/menumodal";
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence key={pathname} mode="wait" initial={false}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MenuSheet />
            
            {children}
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
