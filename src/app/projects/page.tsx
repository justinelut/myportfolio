import { getAllPostsMeta } from "@/lib/mdx";
import * as React from "react";
import Projects from "./projects";

export default async function page() {
  const projects = await getAllPostsMeta()
  console.log(projects)
  return (
    <div className="container mx-auto lg:px-24">
        <Projects />
      </div>
  );
}


