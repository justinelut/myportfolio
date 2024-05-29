import * as React from "react";
import Move from "../move";
import Navigator from "../navigator";
import Contact from "./contact";

export default function page(){
  return (
    <Move pathN="/frameworks">
      <div className="container mx-auto lg:px-24">
        <Contact />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
    </Move>
  );
}


