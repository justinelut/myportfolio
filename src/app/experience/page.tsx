import React from "react";
import SingleLanguage from "@/app/languages/single-language";
import Move from "@/app/move";
import Navigator from "../navigator";
import ProfessionalExperience from "./professional-experience";
export const metadata = {
  title: "Work Experience & Education",
  description: "Explore Justine G's professional journey and educational background. Learn about my work experience in frontend development, as well as my academic achievements and qualifications.",
  keywords: "Justine G, work experience, education, frontend development, academic qualifications",
  author: "Justine G",
  og: {
    title: "Work Experience & Education",
    description: "Explore Justine G's professional journey and educational background. Learn about my work experience in frontend development, as well as my academic achievements and qualifications.",
    type: "website",
    url: "https://www.justinegportfolio.com/work-experience-education",
    image: "https://www.justinegportfolio.com/images/work-education-thumbnail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience & Education",
    description: "Explore Justine G's professional journey and educational background. Learn about my work experience in frontend development, as well as my academic achievements and qualifications.",
    image: "https://www.justinegportfolio.com/images/work-education-thumbnail.png",
  },
};


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
