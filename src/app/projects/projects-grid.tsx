import React from "react";
import { pb } from "@/lib/pocketbase/api";
import { pbfiles } from "@/lib/pocketbase/pbfiles";
import { getAllPostsMeta } from "@/lib/mdx";
import SingleProject from "./single-project";

export default async function ProjectsGrid() {
  // const services = await pb.collection("ob_services").getList(1, 4, {
  //   sort: "-created",
  // });

  const unsortedprojects = await getAllPostsMeta();
  const projects = unsortedprojects.sort((a, b) => a.id - b.id);

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 pb-4 lg:px-24 gap-6">
        {projects &&
          projects.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className={index === 0 ? "col-span-1" : "lg:col-span-2"}
            >
              <SingleProject
                slug={project.slug}
                title={project.title}
                image={project?.image}
                url={project?.websiteslug}
              />
            </div>
          ))}
      </div>

      <div className="grid lg:grid-cols-3 pt-4 grid-cols-1 lg:px-24 gap-6">
        {projects &&
          projects.slice(2, 4).map((project, index) => (
            <div
              key={index}
              className={index === 0 ? "lg:col-span-2" : "col-span-1"}
            >
              <SingleProject
                slug={project.slug}
                title={project.title}
                image={project?.image}
                url={project?.websiteslug}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
