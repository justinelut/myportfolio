import * as React from "react";
import Projects from "./projects";
import Navigator from "../navigator";
import Move from "../move";
import { Metadata } from "next";
import ProjectsGrid from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Learn more about the diverse projects I have worked on, showcasing skills in frontend development using React, Next.js, and Tailwind CSS. Check out my portfolio to see my work in action.",
  keywords:
    "Justine G, projects, portfolio, frontend development, React, Next.js, Tailwind CSS",
};

export default async function MainProjects() {
  return (
    <div id="projects">
     
      <ProjectsGrid />
    </div>
  );
}
