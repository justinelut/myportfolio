import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import Frameworks from "./frameworks";

export default function page() {
  return (
    <Move pathN="/blog">
      <div className="lg:container lg:mx-auto lg:px-24 px-4">
        <Frameworks />
        <Navigator text="Blog" url="/blog" />
      </div>
     
    </Move>
  );
}
