import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import Frameworks from "./frameworks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Preferred Frameworks",
  description:
    "Explore the frameworks I love to work with as a frontend developer. From React and Next.js to other cutting-edge tools, learn about the technologies that power my web projects.",
  keywords:
    "Justine G, frameworks, React, Next.js, frontend development, web development",
};

export default function page() {
  return (
    <Move pathN="/blog">
      <div className="lg:container lg:mx-auto lg:px-24 px-4 h-screen">
        <Frameworks />
        <Navigator text="Blog" url="/blog" />
      </div>
    </Move>
  );
}
