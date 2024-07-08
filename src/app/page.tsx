import React from "react";
import Home from "./home";
import { Metadata } from "next";
import AboutMe from "./intro/about-me";
import MainProjects from "./projects/main-projects";
import ProgrammingLanguages from "./languages/languages";
import Frameworks from "./frameworks/frameworks";
import Blogs from "./blog/blog";
import Experience from "./experience/experience";
import Contact from "./contact/contact";
import { HeadingGradient } from "./heading";
import FadeInSection from "./fade-inview";

export const metadata: Metadata = {
  title: "Justine Gichana",
  description:
    "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
  keywords:
    "Justine G, frontend developer, React, Next.js, Tailwind CSS, web development, portfolio",
  openGraph: {
    images: [
      "https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/mxbwu49exadjgpm/portrait_1_tPet10eAvs.webp?token=",
    ],
  },
};

export default function page() {
  return (
    <div>
      <Home />
      <div
        id="intro"
        className="lg:mt-10 mt-10 mb-10 text-center flex flex-col justify-center"
      >
        <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>
        <FadeInSection>
          <HeadingGradient>More about me</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <AboutMe />
        </FadeInSection>
      </div>
      <div id="projects" className="lg:mt-32 mt-10 mb-10">
        <FadeInSection>
          <HeadingGradient>Some of my projects</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <MainProjects />
        </FadeInSection>
      </div>
      <div id="languages" className="lg:mt-32 mt-10">
        <FadeInSection>
          <HeadingGradient>Programming languages I use</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <ProgrammingLanguages />
        </FadeInSection>
      </div>
      <div id="frameworks" className="mt-32 mb-10">
        <FadeInSection>
          <HeadingGradient>Frameworks of choice</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <Frameworks />
        </FadeInSection>
      </div>
      <div id="blog" className="lg:mt-32 mt-10 mb-10">
        <FadeInSection>
          <HeadingGradient>Latest blogs</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <Blogs />
        </FadeInSection>
      </div>
      <div id="experience" className="lg:mt-32 mt-10 mb-10">
        <FadeInSection>
          <HeadingGradient>My work experience</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
      </div>

      <div id="contact" className="mt-32 mb-10">
        <FadeInSection>
          <HeadingGradient>Contact me</HeadingGradient>
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </div>
    </div>
  );
}
