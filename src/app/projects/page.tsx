
import * as React from "react";
import Projects from "./projects";
import Navigator from "../navigator";

export default async function page() {
  
  return (
    <div className="container mx-auto lg:px-24">
        <Projects />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
  );
}


