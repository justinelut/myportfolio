"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";
import Navigation from "@/components/navigation";
import { AnimatePresence } from "framer-motion";

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
          <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 items-start gap-6 w-full mx-auto container py-10">
            <Navigation>
              <div className="flex flex-col gap-4">
                <ProfileCard />
                <MenuCard />
              </div>
            </Navigation>
            {children}
          </div>
        </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
