import React from "react";
import WorkExperience from "./work-eperience";
import TypingEffect from "../typing-effect";
import { BetweenHorizontalStart, GraduationCap, MonitorSmartphone, Settings } from "lucide-react";

export default function ProfessionalExperience() {
  return (
    <div className="grid lg:grid-cols-2 gap-x-4">
      <div className="bg-orange-600 h-full w-full rounded-3xl py-10">
        <WorkExperience />
      </div>
      <div className="bg-transparent h-full w-full rounded-3xl flex flex-col gap-y-4 lg:mt-0 mt-10">
        <div className="bg-slate-300 dark:bg-stone-800 rounded-3xl px-6 py-4 bg-opacity-50 w-full h-[50%] flex flex-col items-start justify-center">
          <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-slate-600 dark:to-orange-600 font-bold mt-4 self-stretch max-md:max-w-full max-md:text-4xl max-md:mt-10">
            <TypingEffect text="University of Nairobi" />
          </div>
          <div className="flex flex-start text-6xl dark:text-gray-400 font-extrabold justify-start mt-4 text-stone-700">
            <h3>DEC 2021</h3>
            <GraduationCap />
          </div>
        </div>
        <div className="bg-slate-300 p-6 bg-opacity-50 rounded-3xl w-full h-[50%] lg:gap-y-0 gap-y-6 grid grid-cols-2">
          
          <p className="font-bold text-3xl">Other skills</p>
          <div className="">
            <BetweenHorizontalStart size={60} />
            <p className="text-stone-700 dark:text-gray-100 font-bold mt-3 text-xl">Api integration</p>
            </div>
          <div className="">
            <Settings size={60}/>
            <p className="text-stone-700 dark:text-gray-100 font-bold mt-3 text-xl">Performance optimization</p>
          </div>
          <div className="">
            <MonitorSmartphone size={60} />
            <p className="text-stone-700 dark:text-gray-100 font-bold mt-3 text-xl">Responsive design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
