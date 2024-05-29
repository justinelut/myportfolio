"use client";
import React, { useEffect } from "react";
import SingleBlog from "@/app/blog/single-blog";
import { getPosts } from "@/lib/pocketbase/ghost";
import { useQuery } from "@tanstack/react-query";
import BlogLoader from "./blog-loader";

export default function BlogGrid() {
  const { isPending, error, data } = useQuery({
    queryKey: ["blogpost"],
    queryFn: () => getPosts().then((res) => res),
  });

  return (
    <>
      {isPending ? (
        <BlogLoader />
      ) : (
        data && data.map((blog, index) => <SingleBlog post={blog} />)
      )}
    </>
  );
}
