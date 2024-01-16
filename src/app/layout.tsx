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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <div className="block sm:hidden md:hidden lg:hidden sticky bottom-4 w-full p-2 z-20">
              <MobileMenu />
            </div>
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
