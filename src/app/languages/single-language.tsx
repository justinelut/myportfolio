import React from "react";
import TypeScript from "../icons/typescript";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import JavaScript from "../icons/javascript";
import { MainDialogue } from "./maindialogue";

export const languages = [
  {
    icon: <TypeScript className="size-60 rounded-xl" />,
    title: "Typescript",
    info: () => <div>Typescript is a programmming language that is embed</div>,
  },
  {
    icon: <JavaScript className="size-60 rounded-xl" />,
    title: "Javascript",
    info: () => <div>Typescript is a programmming language that is embed</div>,
  },
];

export default function SingleLanguage() {
  return (
    <div className="lg:p-10 grid lg:grid-cols-2 grid-cols-1 gap-6 items-center justify-center">
      {languages &&
        languages.map((lang, index) => (
          <div
            key={index}
            className="bg-secondary bg-opacity-50 p-10 rounded-3xl flex flex-col gap-y-6"
          >
            {lang?.icon}
            <div className="flex flex-col gap-y-2">
            <h3 className="text-3xl font-bold">{lang?.title}</h3>
            {lang?.info()}
            <div className="flex items-start">
              <MainDialogue title={lang?.title} />
            </div>
            </div>
          </div>
        ))}
    </div>
  );
}
