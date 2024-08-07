import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleBlog({ post }: { post: any }) {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0 bg-secondary rounded-xl">
      <span className="items-stretch flex grow flex-col max-md:max-w-full">
        <Image
          height={1000}
          width={1000}
          alt={post?.title}
          src={post?.feature_image}
          className="object-cover rounded-xl object-center max-h-[300px] min-h-[300px] w-full justify-center items-center overflow-hidden max-md:max-w-full"
        />
        <Link
          href={post?.url}
          className="text-2xl font-bold mt-10 max-md:max-w-full px-4 text-orange-600 underline line-clamp-2"
        >
          {post?.title}
        </Link>
        <div className="text-gray-400 text-2xl leading-9 mt-2 max-md:max-w-full pb-1 line-clamp-3 px-4">
          {post?.excerpt}
        </div>
      </span>
    </div>
  );
}
