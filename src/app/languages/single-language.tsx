import React from "react";
import TypeScript from "../icons/typescript";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import JavaScript from "../icons/javascript";
import { MainDialogue } from "./maindialogue";
import HTML5 from "../icons/html";
import AnimatedComponent from "../animate-component";
import AnimateItems from "../animate-items";
import Navigator from "../navigator";

export const languages = [
  {
    icon: <TypeScript className="size-48 rounded-xl" />,
    title: "Typescript",
    info: () => (
      <div className="text-white">
        A statically typed superset of JavaScript that provides type
        definitions, helping to catch errors early and improve code
        maintainability
      </div>
    ),
  },
  {
    icon: <JavaScript className="size-40 rounded-xl" />,
    title: "Javascript",
    info: () => (
      <div>
        A highly versatile, dynamic programming language crucial for creating
        interactive and responsive web applications
      </div>
    ),
  },
  {
    icon: <HTML5 className="size-40 rounded-xl" />,
    title: "Html",
    info: () => (
      <div>
        The foundational markup language for structuring and presenting content
        on the web
      </div>
    ),
  },
];

const placeholderText: {
  key: number;
  type: "heading1" | "heading2" | "paragraph";
  text: string;
}[] = [{ key: 1, type: "heading1", text: languages[0]?.title }];

export default function SingleLanguage() {
  return (
    <div className="lg:px-10 grid lg:grid-cols-2 lg:pt-20 grid-cols-1 gap-6 items-center justify-center">
      <AnimatedComponent
        animationType="slide"
        direction="right"
        duration={0.3}
        delay={0.5}
      >
        <div className="lg:h-[500px] relative bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/y041ka7n063gvm8/typescript_TWfjLMIhpp.svg?token=')] bg-cover bg-center  bg-opacity-50 p-8 rounded-3xl flex flex-col gap-y-6">
          <div className="absolute inset-0 bg-slate-300 bg-opacity-50 rounded-3xl"></div>
          <div className="flex flex-col gap-y-2 relative dark:text-slate-900">
           
           <div className="flex items-start">
            <h3 className="text-5xl font-bold"><AnimateItems text={placeholderText} /></h3>
            </div>
            {languages[0]?.info()}
          </div>
        </div>
      </AnimatedComponent>
      <AnimatedComponent
          animationType="slide"
          direction="left"
          duration={0.3}
          delay={0.5}
        >
      <div className="flex flex-col gap-y-6 lg:h-[500px]">
        
          {languages &&
            languages.slice(1).map((lang, index) => (
              <div
                key={index}
                className="bg-secondary h-[250px] items-center bg-opacity-50 px-8 py-4 rounded-3xl flex flex-row gap-y-6 gap-x-4"
              >
                {lang?.icon}
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-3xl font-bold">{lang?.title}</h3>
                  {lang?.info()}
                </div>
              </div>
            ))}
        
      </div>
      
      </AnimatedComponent>
      
     
     
    </div>
  );
}
