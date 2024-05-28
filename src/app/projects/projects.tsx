import { getAllPostsMeta } from "@/lib/mdx";
import React from "react";
import AnimatedComponent from "../animate-component";
import AnimateItems from "../animate-items";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnchorTag from "./anchor";

export default async function Projects() {
  const projects = await getAllPostsMeta();
  console.log(projects);
  const placeholderText: {
    key: number;
    type: "heading1" | "heading2" | "paragraph";
    text: string;
  }[] = [{ key: 1, type: "heading1", text: "Pixelayout - SaaS" }];
  return (
    <div className="grid lg:grid-cols-2 justify-center gap-10 h-[600px]">
      <div className="flex w-full">
        <AnimatedComponent
          animationType="slide"
          direction="right"
          duration={0.3}
          delay={0.5}
        >
          <div className="lg:h-[550px] relative bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/y041ka7n063gvm8/typescript_TWfjLMIhpp.svg?token=')] bg-cover bg-center  bg-opacity-50 p-8 rounded-3xl flex flex-col gap-y-6">
            <div className="absolute inset-0 bg-slate-300 bg-opacity-50 rounded-3xl"></div>
            <div className="flex flex-col gap-y-2 relative rounded-3xl dark:text-slate-900">
              <div className="flex items-start">
                <h3 className="text-5xl font-bold">
                  <AnimateItems text={placeholderText} />
                </h3>
              </div>
              Pixel Layout - A Saas platform
              <AnchorTag link="/" url="/" />
            </div>
          </div>
        </AnimatedComponent>
      </div>
      <div className="flex gap-y-4 flex-col h-[550px] items-center justify-center">
        <div className="bg-slate-300 bg-opacity-40 w-full h-[275px] items-center gap-x-6 rounded-3xl flex flex-row">
          <Image
            src={projects[1]?.image}
            alt={projects[1]?.title}
            height={1000}
            width={1000}
            className="object-cover w-[50%] h-full rounded-3xl"
          />
          <div className="flex flex-col">
            <h3 className="text-bold dark:text-white text-3xl text-slate-800">
              {projects[1]?.title}
            </h3>
            <AnchorTag
              link={projects[1]?.websiteslug}
              url={projects[1]?.slug}
            />
          </div>
        </div>
        <div className="w-full flex h-[275px] rounded-3xl gap-4">
          <div className="h-full relative p-4 bg-cover bg-center bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/y041ka7n063gvm8/typescript_TWfjLMIhpp.svg?token=')] bg-orange-600 w-[50%] rounded-3xl">
            <div className="absolute inset-0 bg-slate-300 bg-opacity-50 rounded-3xl"></div>
            <div className="relative">
              <AnchorTag
                link={projects[1]?.websiteslug}
                url={projects[1]?.slug}
              />
               <h3 className="text-bold dark:text-white text-3xl text-slate-800 mt-6">
              {projects[1]?.title}
            </h3>
            </div>
           
          </div>
          <div className="h-full relative p-4 bg-cover bg-center bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/y041ka7n063gvm8/typescript_TWfjLMIhpp.svg?token=')] bg-orange-600 w-[50%] rounded-3xl">
            <div className="absolute inset-0 bg-orange-300 bg-opacity-50 rounded-3xl"></div>
            <div className="relative">
              <AnchorTag
                link={projects[1]?.websiteslug}
                url={projects[1]?.slug}
              />
              <h3 className="text-bold dark:text-white text-3xl text-slate-800 mt-6">
              {projects[1]?.title}
            </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
