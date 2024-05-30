import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Programming Languages",
  description: "Explore the programming languages that i excel in. From JavaScript to TypeScript and beyond, discover the tools that power my web development projects.",
  keywords: "Justine G, programming languages, JavaScript, TypeScript, web development, frontend developer",
};


export default function page() {
  return (
    <Move pathN="/frameworks">
      <div className="lg:container lg:mx-auto lg:px-24 px-4">
        <SingleLanguage />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
    </Move>
  );
}
