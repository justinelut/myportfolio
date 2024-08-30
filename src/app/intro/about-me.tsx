import Move from "@/app/move";
import TypingEffect from "../typing-effect";
import AnimatedComponent from "../animate-component";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigator from "../navigator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know me, a frontend developer with a passion for React, Next.js, and Tailwind CSS. Discover my journey from barber to tech enthusiast and web developer.",
  keywords:
    "Justine G, about me, frontend developer, React, Next.js, Tailwind CSS, web development journey",
  openGraph: {
    images: [
      "https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/mxbwu49exadjgpm/portrait_1_tPet10eAvs.webp?token=",
    ],
  },
};

export default function AboutMe() {
  return (
    <div className="text-5xl mx-auto container max-w-3xl text-center text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-green-600 font-bold mt-4 self-stretch max-md:max-w-full max-md:text-4xl max-md:mt-10">
      <TypingEffect text="I am a Full stack web developer, who loves to build engaging and modern websites" />
    </div>
  );
}
