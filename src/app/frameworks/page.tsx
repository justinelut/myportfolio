import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import Frameworks from "./frameworks";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "My Preferred Frameworks",
  description: "Explore the frameworks I love to work with as a frontend developer. From React and Next.js to other cutting-edge tools, learn about the technologies that power my web projects.",
  keywords: "Justine G, frameworks, React, Next.js, frontend development, web development",
  author: "Justine G",
  og: {
    title: "My Preferred Frameworks",
    description: "Explore the frameworks I love to work with as a frontend developer. From React and Next.js to other cutting-edge tools, learn about the technologies that power my web projects.",
    type: "website",
    url: "https://www.justinegportfolio.com/frameworks",
    image: "https://www.justinegportfolio.com/images/frameworks-thumbnail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Preferred Frameworks",
    description: "Explore the frameworks I love to work with as a frontend developer. From React and Next.js to other cutting-edge tools, learn about the technologies that power my web projects.",
    image: "https://www.justinegportfolio.com/images/frameworks-thumbnail.png",
  },
};


export default function page() {
  return (
    <Move pathN="/blog">
      <div className="lg:container lg:mx-auto lg:px-24 px-4">
        <Frameworks />
        <Navigator text="Blog" url="/blog" />
      </div>
     
    </Move>
  );
}
