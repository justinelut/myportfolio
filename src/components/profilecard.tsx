import * as React from "react";
import { MapPin } from "lucide-react";
import { ModeToggle } from "@/components/modetoggle";
import { MyAvatar } from "@/components/Avatar";
import { ContentCard } from "@/components/contentcard";

export const ProfileCard = () => {
  return (
    <ContentCard className="pt-6">
      <MyAvatar image="https://github.com/shadcn.png" />
      <h3 className="text-md font-extrabold mt-6">Frontend Web Developer</h3>
      <h2 className="text-2xl font-extrabold mt-4">Justine Gichana</h2>
      <p>I am a Frontend developer, Optimist & Community builder.</p>
      <div className="flex flex-row justify-between items-center mt-4 gap-4">
        <div className="flex flex-1 flex-row items-center border p-2 rounded-lg justify-start">
          <span>
            <MapPin size={16} className="mr-4" />
          </span>{" "}
          <span>Nakuru, Kenya</span>
        </div>
        <div className="border p-2 rounded-lg">Contact Me </div>
        <ModeToggle />
      </div>
    </ContentCard>
  );
};
