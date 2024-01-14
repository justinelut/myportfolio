import { MyAvatar } from "@/components/Avatar";
import { MapPin } from "lucide-react";
import { ContentCard } from "@/components/contentcard";
import { SocialCard } from "@/components/socialcard";
import { FeaturedProject } from "@/components/featuredproject";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <section className="lg:col-span-2 md:col-span-2 flex gap-4">
      <div className="w-full flex flex-col gap-6">
        <SocialCard />
        <FeaturedProject />
        <div className="flex flex-col gap-3">
        <h3 className="text-sm mb-2 font-bold">@popular projects</h3>
        <Projects />
        <Projects />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <ContentCard>
          <h3 className="text-md font-extrabold mt-6">Github</h3>
        </ContentCard>

        <ContentCard>
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
        </ContentCard>
      </div>
    </section>
  );
}
