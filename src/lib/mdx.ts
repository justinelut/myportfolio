import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

import Link from "next/link";
import Image from "next/image";
import { Check, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Nextjs from "@/app/icons/nextjs";
import Pocketbase from "@/app/icons/pocketbase";
import TailwindCSS from "@/app/icons/tailwind";
import Ghostcms from "@/app/icons/ghostcms";

const components = {
  Link,
  Image,
  Check,
  cn,
  buttonVariants,
  Nextjs,
  Pocketbase,
  Search,
  TailwindCSS,
  Ghostcms
};

const rootDirectory = path.join(process.cwd(), "src", "app/content");

interface Frontmatter {
  title: string;
  date: string;
  description: string;
  icon: string;
  websiteslug: string;
  image: string;
  [key: string]: any; // To handle any additional frontmatter properties
}

interface PostMeta extends Frontmatter {
  slug: string;
}

interface Post {
  meta: PostMeta;
  content: string;
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  // @ts-ignore
  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components,
  });
// @ts-ignore
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const files = fs.readdirSync(rootDirectory);

  const posts: PostMeta[] = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(file);
      return meta;
    })
  );

  return posts;
};
