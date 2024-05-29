import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import ProfessionalExperience from "./professional-experience";

export default function page() {
  return (
    <Move pathN="/contact">
      <div className="lg:container lg:mx-auto lg:px-24">
        <ProfessionalExperience />
        <Navigator text="Contact me" url="/contact" />
      </div>
    </Move>
  );
}
