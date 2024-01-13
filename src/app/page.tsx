import Image from "next/image";
import { SideCard } from "@/app/custom/sidecard";
import { MyAvatar } from "@/app/custom/Avatar";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-7xl mx-auto">
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid lg:grid-cols-3 items-start">
        <SideCard>
          <MyAvatar image="https://github.com/shadcn.png" />
          <h3 className="text-md font-extrabold mt-6">
            Frontend Web Developer
          </h3>
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
          </div>
        </SideCard>
        <div className="container">
          <SideCard>
            <h3 className="text-md font-extrabold mt-6">Github</h3>
          </SideCard>

          <SideCard>
            <MyAvatar image="https://github.com/shadcn.png" />
            <h3 className="text-md font-extrabold mt-6">
              Frontend Web Developer
            </h3>
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
            </div>
          </SideCard>
        </div>
      </div>
    </main>
  );
}
