
import * as React from "react";
import Projects from "./projects";
import Navigator from "../navigator";
import Move from "../move";

export default async function page() {
  
  return (
    <Move pathN="/languages">
    <div className="lg:container lg:mx-auto lg:px-24">
        <Projects />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
      </Move>
  );
}


