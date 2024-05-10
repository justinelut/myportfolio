"use client";
import React, { useEffect } from "react";
import SingleBlog from "@/app/blog/single-blog";
import { getPosts } from "@/lib/pocketbase/ghost";
import { useQuery } from "@tanstack/react-query";

export default function BlogGrid() {
  const { isPending, error, data } = useQuery({
    queryKey: ["blogpost"],
    queryFn: () => getPosts().then((res) => res),
  });

  data && console.log(data);

  return (
    <>
      {isPending
        ? "Loading"
        : data &&
          data.map((blog, index) => (
            
              <SingleBlog post={blog} />
           
       
          ))}
    </>
  );
}
