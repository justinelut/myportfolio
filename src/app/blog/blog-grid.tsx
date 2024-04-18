import React from "react";
import SingleBlog from "@/app/blog/single-blog";
import { getPosts} from "@/lib/pocketbase/ghost";

export default async function BlogGrid() {
const blogposts = await getPosts()
console.log(blogposts)
  return (
    <>
      <SingleBlog />
    </>
  );
}
