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
import Navigation from "@/components/navigation";
import { ProfileCard } from "@/components/profilecard";


export default async function Home() {
  const projectdata = await pb.collection("Projects").getList(1, 4);

  return (
    <>
      <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 items-start gap-6 w-full py-10 px-2 lg:mx-auto lg:container md:mx-auto md:container">
        <Navigation>
          <div className="flex flex-col gap-4">
            <ProfileCard />
            <div className="hidden md:block lg:block">
             featured blogs
            </div>
          </div>
        </Navigation>

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

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-2 gap-4">
            <Discord />
            <Github />
          </div>
          <XSocial />
          <Skills />
        </div>
      </div>
    </>
  );
}
