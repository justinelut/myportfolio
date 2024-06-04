import React from "react";
import X from "../icons/x";
import { AtSign, FolderRoot, Smartphone, Star, UserPlus } from "lucide-react";
import Link from "next/link";
import WhatsApp from "../icons/whatsapp";
import AnimatedComponent from "../animate-component";
import AnchorTag from "../projects/anchor";
import AnimateItems from "../animate-items";
import Gmail from "../icons/gmail";
import LinkedIn from "../icons/linkedin";
import ContactUs from "./form";

export default function Contact() {
  const placeholderText: {
    key: number;
    type: "heading1" | "heading2" | "paragraph";
    text: string;
  }[] = [{ key: 1, type: "heading1", text: "Gihub" }];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
      <div className="h-[600px] w-full flex flex-col gap-4">
        <div className="h-[200px] w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-slate-800 w-full h-[100%] gap-x-4 flex items-center px-4 py-2 rounded-3xl">
            <X className="text-white size-28" />
            <Link
              href="https://x.com/justinegichana7"
              className="flex underline items-center gap-x-2 text-gray-300"
            >
              <AtSign size={18} />
              <h3>justinegichana7</h3>
            </Link>
          </div>
          <div className="bg-green-600 w-full h-[100%] flex items-center px-4 py-2  gap-x-4 rounded-3xl">
            <WhatsApp className="text-white size-28" />
            <Link
              href="https://wa.me/254740455200"
              className="flex underline items-center gap-x-2 text-gray-300"
            >
              <AtSign size={18} />
              <h3>+254740455200</h3>
            </Link>
          </div>
        </div>
        <div className="h-[400px] w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1 h-[100%] gap-4 lg:mt-0 mt-20">
            <div className="h-[100%] dark:bg-slate-200 w-full rounded-3xl">
              <AnimatedComponent
                animationType="slide"
                direction="right"
                duration={0.3}
                delay={0.5}
              >
                <div className="relative h-full w-full bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/r8x81dqwo6scz50/github_yPcPMWhAwi.png?token=')] bg-cover bg-center  bg-opacity-50 p-8 rounded-3xl flex flex-col gap-y-6">
                  <div className="absolute inset-0 bg-slate-300 bg-opacity-50 rounded-3xl"></div>
                  <div className="flex flex-col gap-y-2 relative rounded-3xl dark:text-slate-900">
                    <div className="flex items-start">
                      <h3 className="text-5xl font-bold text-slate-800">
                        <AnimateItems text={placeholderText} />
                      </h3>
                    </div>
                    <Link
                      href="https://github.com/justinelut"
                      className="flex underline text-slate-800 items-center gap-x-2"
                    >
                      <AtSign size={18} />
                      <h3 className="text-slate-800">justinelut</h3>
                    </Link>

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-x-4">
                        <Star size={18} className="text-slate-800" />
                        <span className="font-bold">47 Stars</span>
                      </div>
                      <div className="flex items-center gap-x-4">
                        <UserPlus size={18} className="text-slate-800" />{" "}
                        <span className="font-bold">8 Followers</span>
                      </div>
                      <div className="flex items-center gap-x-4">
                        <FolderRoot size={18} className="text-slate-800" />{" "}
                        <span className="font-bold">37 Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="bg-rose-600 w-full h-[50%] flex flex-col items-start px-6 py-4  gap-x-4 rounded-3xl">
                <Gmail className="text-white size-28" />
                <Link
                  href="mailto:justinequartz@gmail.com"
                  className="flex underline items-center gap-x-2 text-gray-300"
                >
                  <AtSign size={18} />
                  <h3>justinequartz@gmail.com</h3>
                </Link>
              </div>
              <div className="bg-fuchsia-600 w-full h-[50%] flex flex-col items-start px-6 py-4  gap-x-4 rounded-3xl">
                <Smartphone className="text-slate-300 size-28" />
                <Link
                  href="tel:+254740455200"
                  className="flex underline items-center gap-x-2 text-gray-300"
                >
                  <AtSign size={18} />
                  <h3>+254740455200</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[600px] w-full flex flex-col gap-y-4 lg:mt-0 mt-[360px]">
        <div className="w-full bg-slate-300 bg-opacity-50 h-[70%] py-10 rounded-3xl flex flex-col lg:px-24 px-2 justify-center">
        <ContactUs />
        </div>
        <div className="w-full bg-blue-500 h-[30%] rounded-3xl flex items-center gap-x-10 px-4 justify-center">
        <LinkedIn className="text-white size-20" />
            <Link
              href="https://www.linkedin.com/in/justine-gichana-879904155/"
              className="flex underline items-center gap-x-2 text-gray-300"
            >
              <AtSign size={18} />
              <h3>justine-gichana</h3>
            </Link>
        </div>
      </div>
    </div>
  );
}
