import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/carousel";
import { getAllPostsMeta } from "@/lib/mdx";
import SingleProject from "../projects/single-project";
import Image from "next/image";
import getBase64 from "@/lib/getblurredimage";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";

export default async function FeaturedProjects() {
  const unsortedprojects = await getAllPostsMeta();
  const projects = unsortedprojects.sort((a, b) => b.id - a.id);

  return (
    <div className="relative w-full">
      <Carousel>
        <CarouselContent>
          {projects &&
            projects.slice(4, 6).reverse().map((project, index) => (
              <CarouselItem
                key={index}
                className="w-full rounded-3xl w-full"
              >
                <div className="flex rounded-3xl h-[600px] items-center justify-center border border-zinc-200 dark:border-zinc-800 w-full">
                  <div className="relative rounded-3xl h-[600px] overflow-hidden flex flex-col pb-10 px-4 w-full">
                    {/* Background Image */}
                    <Image
                      alt={project?.title}
                      src={project?.image}
                      height={1000}
                      width={1000}
                      // blurDataURL={await getBase64(project?.image)}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-stone-800 bg-opacity-80"></div>

                    <div className="flex-grow flex flex-col justify-end relative z-10">
                      <h3 className="text-4xl font-bold text-white">
                        {project?.title}
                      </h3>
                      <div className="flex items-center py-6 gap-x-4">
                        <Link
                          href={`/projects/${project?.slug}`}
                          className="bg-primary text-secondary rounded-full p-4 flex items-center justify-start gap-4 z-20"
                        >
                          <h3>Learn more</h3>
                          <Plus />
                        </Link>
                        <Link
                          href={project?.websiteslug}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-secondary rounded-full p-4 flex items-center justify-start gap-4 z-20"
                        >
                          <ArrowUpRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        {/* <CarouselNavigation alwaysShow /> */}
        <CarouselIndicator />
      </Carousel>
    </div>
  );
}
