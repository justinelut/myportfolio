import { MyAvatar } from "@/components/Avatar";
import { MapPin } from "lucide-react";
import { ContentCard } from "@/components/contentcard";
import { SocialCard } from "@/components/socialcard";
import { FeaturedProject } from "@/components/featuredproject";
import { Projects } from "@/components/projects";
import SmallSocial from "@/components/smallsocial";
import { pb } from "@/lib/api";
import { Loading } from "@/components/loading";
import { Suspense } from "react";

export default async function Home() {
  const projectdata = await pb.collection("Projects").getList(1, 4);

  return (
    <section className="lg:col-span-2 md:col-span-2 flex gap-4">
      <div className="w-full flex flex-col gap-6">
        <SocialCard />
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
          <SmallSocial />
          <SmallSocial />
        </div>
        <SocialCard />
      </div>
    </section>
  );
}
