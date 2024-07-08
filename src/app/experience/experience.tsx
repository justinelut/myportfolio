import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import ProfessionalExperience from "./professional-experience";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Work Experience & Education",
  description:
    "Explore my professional journey and educational background. Learn about my work experience in frontend development, as well as my academic achievements and qualifications.",
  keywords:
    "Justine G, work experience, education, frontend development, academic qualifications",
};

export default function Experience() {
  return (
    <div>
      <ProfessionalExperience />
    </div>
  );
}
