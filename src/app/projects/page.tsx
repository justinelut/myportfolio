import * as React from "react";
import Projects from "./projects";
import Navigator from "../navigator";
import Move from "../move";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Learn more about the diverse projects I have worked on, showcasing skills in frontend development using React, Next.js, and Tailwind CSS. Check out my portfolio to see my work in action.",
  keywords:
    "Justine G, projects, portfolio, frontend development, React, Next.js, Tailwind CSS",
};

export default async function page() {
  return (
    <Move pathN="/languages">
      <div className="lg:container lg:mx-auto lg:px-24">
        <Projects />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
    </Move>
  );
}
