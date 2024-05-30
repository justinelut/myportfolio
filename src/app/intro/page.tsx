import Move from "@/app/move";
import TypingEffect from "../typing-effect";
import AnimatedComponent from "../animate-component";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigator from "../navigator";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Me",
  description: "Get to know me, a frontend developer with a passion for React, Next.js, and Tailwind CSS. Discover my journey from barber to tech enthusiast and web developer.",
  keywords: "Justine G, about me, frontend developer, React, Next.js, Tailwind CSS, web development journey",
  openGraph: {
    images: ["https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/mxbwu49exadjgpm/portrait_1_tPet10eAvs.webp?token="],
  },
};


export default function page() {
  return (
    <Move pathN="/projects">
      <div className="lg:container lg:mx-auto lg:h-screen lg:max-w-7xl pt-4 px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-between">
          <div className="flex flex-col items-stretch lg:w-[44%] max-md:w-full lg:ml-10">
            <span className="flex flex-col my-auto pb-2.5 max-md:max-w-full max-md:mt-10">
              <span className="items-center flex gap-4 self-start">
                <div className="text-2xl self-stretch grow whitespace-nowrap">
                  About me
                </div>
                <div className="bg-black dark:bg-orange-600 w-14 shrink-0 h-0.5 my-auto" />
              </span>
              <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-green-600 font-bold mt-4 self-stretch max-md:max-w-full max-md:text-4xl max-md:mt-10">
                <TypingEffect text="I am a Fronted web developer, optimist and community builder" />
              </div>
              <AnimatedComponent
                animationType="fade"
                direction="up"
                duration={1.5}
              >
                <div className="text-2xl leading-9 self-stretch mt-10 max-md:max-w-full dark:text-black rounded-3xl p-4 bg-orange-100">
                  As a Frontend Web Developer, The key driving factors that keep
                  me passionate in my profession include the constant evolution
                  of web technologies, the creative challenges of designing
                  intuitive user experiences, and the satisfaction of seeing my
                  work come to life on the screen.
                </div>{" "}
              </AnimatedComponent>
              <div className=" text-2xl font-bold self-stretch mt-4 max-md:max-w-full max-md:mt-10">
                Who I’ve worked with
              </div>{" "}
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-2 pr-9 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <Link
                  href="https://currentdigital.studio"
                  className="items-stretch flex justify-between gap-4"
                >
                  <Image
                    loading="lazy"
                    width={1000}
                    height={1000}
                    alt="Current Digital"
                    src="https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/4hfsgzsezw4h5rj/icon_0zT0mu80Xx.svg?token="
                    className="aspect-square object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-center text-xl font-bold self-center grow whitespace-nowrap my-auto">
                    Current Digital
                  </div>
                </Link>{" "}
                <Link
                  href="https://olestonesbuilders.co.ke"
                  className="items-stretch flex justify-between gap-4"
                >
                  <Image
                    loading="lazy"
                    width={1000}
                    height={1000}
                    alt="Olestones Builders"
                    src="https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/x3hc9nx60dbfu4t/icon_JQ0FlGVG6U.png?token="
                    className="object-contain object-center w-[52px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-center text-xl font-bold self-center grow whitespace-nowrap my-auto">
                    Olestones Builders
                  </div>
                </Link>{" "}
              </div>{" "}
            </span>
          </div>{" "}
          <div className="flex flex-col h-screen lg:w-[56%] max-md:w-full max-md:ml-0 justify-center">
            <AnimatedComponent
              animationType="slide"
              direction="left"
              duration={0.8}
            >
              <Image
                loading="lazy"
                width={1200}
                height={1000}
                alt="Justine Gichana"
                src="https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/mxbwu49exadjgpm/portrait_1_tPet10eAvs.webp?token="
                className="object-contain object-center w-[100%] self-end overflow-hidden shrink-0 max-w-full"
              />
            </AnimatedComponent>
            
          </div>
        </div>
        <Navigator text="Programming languages" url="/languages" />
      </div>
    </Move>
  );
}
