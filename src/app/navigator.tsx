import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navigator({ text, url }: { text: string, url:string }) {
  return (
    <div className="lg:flex hidden items-end justify-end self-end sticky bottom-4">
      <Link
        href={url}
        className="bg-orange-600 rounded-full py-2 mb-4 px-5 flex flex-x-4 items-center"
      >
        <span>{text}</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
