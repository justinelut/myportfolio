import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import ProfessionalExperience from "./professional-experience";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Work Experience & Education",
  description: "Explore my professional journey and educational background. Learn about my work experience in frontend development, as well as my academic achievements and qualifications.",
  keywords: "Justine G, work experience, education, frontend development, academic qualifications",
};


export default function page() {
  return (
    <Move pathN="/contact">
      <div className="lg:container lg:mx-auto lg:px-24 h-screen">
        <ProfessionalExperience />
        <Navigator text="Contact me" url="/contact" />
      </div>
    </Move>
  );
}
