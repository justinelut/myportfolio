import * as React from "react";
import BlogGrid from "./blog-grid";
import Move from "../move";
import Navigator from "../navigator";

export default function page() {
  return (
    <Move pathN="/experience">
    <div className="flex flex-col justify-center items-center px-16 max-md:px-5">
      <span className="flex w-full max-w-[1679px] flex-col items-stretch mb-2 max-md:max-w-full max-md:mb-10">
        <div className="text-4xl max-md:max-w-full mb-6">
          Blogs
        </div>
        <div className="max-md:max-w-full max-md:mt-4">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <BlogGrid />
          </div>
        </div>
      </span>
      <Navigator text="Work experience" url="/experience" />
    </div>
    
    </Move>
  );
}


