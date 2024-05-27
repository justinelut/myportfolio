import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";

export default function page() {
  return (
    <Move pathN="/frameworks">
      <div className="container mx-auto lg:px-24">
        <SingleLanguage />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
    </Move>
  );
}
