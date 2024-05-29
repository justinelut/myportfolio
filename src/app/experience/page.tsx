import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import ProfessionalExperience from "./professional-experience";

export default function page() {
  return (
    <Move pathN="/frameworks">
      <div className="container mx-auto lg:px-24">
        <ProfessionalExperience />
        <Navigator text="Frameworks" url="/frameworks" />
      </div>
    </Move>
  );
}
