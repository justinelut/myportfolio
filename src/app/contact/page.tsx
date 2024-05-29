import * as React from "react";
import Move from "../move";
import Navigator from "../navigator";
import Contact from "./contact";

export default function page(){
  return (
    <Move pathN="/">
      <div className="lg:container lg:mx-auto px-4 lg:px-24">
        <Contact />
        <Navigator text="Home" url="/" />
      </div>
    </Move>
  );
}


