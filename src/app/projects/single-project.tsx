import getBase64 from "@/lib/getblurredimage";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface ServiceHomeProp {
  url: string;
  title: string;
  slug: string;
  image: string;
}

export default async function SingleProject({
  url,
  title,
  slug,
  image,
}: ServiceHomeProp) {
  const myBlurDataUrl = await getBase64(image)

  return (
    <div className="relative rounded-3xl h-[600px] overflow-hidden flex flex-col lg:px-6 pb-10 px-4">
      {/* Background Image */}
      <Image
        alt={title}
        src={image}
        height={1000}
        width={1000}
        placeholder='blur'
        blurDataURL={myBlurDataUrl}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-800 bg-opacity-80"></div>

      <div className="flex-grow flex flex-col justify-end relative z-10">
        <h3 className="text-4xl font-bold text-white">{title}</h3>
        <div className="flex items-center py-6 gap-x-4">
          <Link
            href={`/projects/${slug}`}
            className="bg-primary text-secondary rounded-full p-4 flex items-center justify-start gap-4 z-20"
          >
            <h3>Learn more</h3>
            <Plus />
          </Link>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-secondary rounded-full p-4 flex items-center justify-start gap-4 z-20"
          >
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
