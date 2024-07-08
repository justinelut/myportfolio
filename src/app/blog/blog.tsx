import * as React from "react";
import BlogGrid from "./blog-grid";
import Move from "../move";
import Navigator from "../navigator";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Read Justine my latest articles and insights on frontend development, web design, and more. Explore tutorials, tips, and industry trends to stay updated and inspired.",
  keywords:
    "Justine G, blog, frontend development, web design, tutorials, tips, industry trends",
  author: "Justine G",
};

export default function Blogs() {
  return (
   
      <div className="flex flex-col justify-center items-center">
        <span className="flex w-full flex-col items-stretch mb-2 max-md:max-w-full max-md:mb-10">
         
          <div className="max-md:max-w-full max-md:mt-4">
            <div className="gap-y-6 flex max-md:flex-col max-md:items-stretch gap-4">
              <BlogGrid />
            </div>
            {/* <BlogLoader /> */}
            
          </div>
          <Link
            href="https://pixelayout.site"
            className="text-2xl underline text-orange-600 max-md:max-w-full mb-6 text-center mt-10"
          >
            All blogs
          </Link>
        </span>
        {/* <Navigator text="Work experience" url="/experience" /> */}
      </div>
   
  );
}
