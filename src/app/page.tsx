import { MyAvatar } from "@/components/Avatar";
import { MapPin } from "lucide-react";
import { ContentCard } from "@/components/contentcard";
import {
  Discord,
  Github,
  LinkedinSocial,
  XSocial,
} from "@/components/socialcard";
import { FeaturedProject } from "@/components/featuredproject";
import { Projects } from "@/components/projects";
import { pb } from "@/lib/api";
import { Loading } from "@/components/loading";
import { Suspense } from "react";
import Skills from "@/components/skills";

export default async function Home() {
  const projectdata = await pb.collection("Projects").getList(1, 4);

  return (
  <>
      <div className="w-full flex flex-col gap-6">
        <LinkedinSocial />
        <FeaturedProject />
        <div className="flex flex-col gap-3">
          <h3 className="text-sm mb-1 font-bold">@popular projects</h3>

          <Suspense fallback={<Loading />}>
            {projectdata.items.map((item, index) => (
              <Projects
                key={index}
                githublink={item.githublink}
                githubstars={item.githubstars}
                projecttitle={item.projecttitle}
              />
            ))}
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 w-full gap-4 items-start">
          <Discord />
          <Github />
        </div>
        <XSocial />
        <Skills />
      </div>
    </>
  );
}
