import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import Frameworks from "./frameworks";

export default function page() {
  return (
    <Move pathN="/projects">
      <div className="container mx-auto lg:px-24">
        <Frameworks />
        <Navigator text="Projects" url="/projects" />
      </div>
    </Move>
  );
}
