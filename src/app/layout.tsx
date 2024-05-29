import React from "react";
import MainLayout from "./mainlayout";
import { Metadata } from "next";


export const metadata: Metadata = {

  title: {
    template: "%s | Justine G",
    default: "Justine G",
  },

  description:
    "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
  keywords:
    "Justine G, frontend developer, React, Next.js, Tailwind CSS, web development, portfolio",

  openGraph: {
    images: ["/"],
  },
  metadataBase: new URL(process?.env?.NEXT_PUBLIC_JUSTINE_FRONTEND as string),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
