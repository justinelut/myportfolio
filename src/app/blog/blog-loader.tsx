import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogLoader() {
  const skeletons = new Array(3).fill(null); // Create an array with 3 elements
  return (
    <>
      {skeletons.map((_, index) => (
        <div key={index} className="flex flex-col items-stretch w-full lg:w-[33%] gap-4 max-md:w-full max-md:ml-0 rounded-xl">
          <span className="items-stretch flex grow flex-col max-md:max-w-full gap-4">
            <Skeleton className="object-cover rounded-xl object-center max-h-[300px] min-h-[300px] w-full justify-center items-center overflow-hidden max-md:max-w-full" />
            <div className="text-2xl font-bold d:max-w-full px-4 text-orange-600 underline line-clamp-2">
              <Skeleton className="text-2xl font-bold mt-10 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-full h-[20px]" />
            </div>

            <div className="text-2xl space-y-4 leading-9 mt-2 max-md:max-w-full pb-1 flex flex-col line-clamp-3 px-4">
              <Skeleton className="text-2xl font-bold mt-2 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-[100%] h-[14px]" />
              <Skeleton className="text-2xl font-bold mt-2 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-[50%] h-[14px]" />
              <Skeleton className="text-2xl font-bold mt-2 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-[70%] h-[14px]" />
              <Skeleton className="text-2xl font-bold mt-2 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-[95%] h-[14px]" />
              <Skeleton className="text-2xl font-bold mt-2 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2 w-[45%] h-[14px]" />
            </div>
          </span>
        </div>
      ))}
    </>
  );
}
