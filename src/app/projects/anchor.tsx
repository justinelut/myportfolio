import { ArrowRight, Eye, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AnchorTag({
  url,
  link,
}: {
  url: string;
  link: string;
}) {
  return (
    <div className="flex gap-x-4 mt-6">
      <Link
        href={link}
        className="rounded-full bg-orange-600 text-white px-4 py-2 flex gap-x-2 items-center justify-center"
      >
        <span>Check it out</span>
        <ArrowRight size={16}/>
      </Link>
      <Link
        href={url}
        className="rounded-full bg-orange-600 text-white px-4 py-2 flex gap-x-2 items-center justify-center"
      >
        <Plus size={16} />
      </Link>
    </div>
  );
}
