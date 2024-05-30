import { getAllPostsMeta } from "@/lib/mdx";

export default async function sitemap() {
  const projects = await getAllPostsMeta();

  const projectsUrl =
    projects.map((project) => {
      return {
        url: `${process.env.ME_URL}/projects/${project?.slug}}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: `${process.env.ME_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/intro`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/languages`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/frameworks`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/experience`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.ME_URL}/contact`,
      lastModified: new Date(),
    },

    ...projectsUrl,
  ];
}
