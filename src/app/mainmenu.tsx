import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignLeft,
  ArrowRight,
  BookCheck,
  CircleUser,
  FolderDot,
  NotepadText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    link: "/projects",
    title: "Projects",
    icon: FolderDot,
  },
  {
    link: "/contact",
    title: "Contact",
    icon: CircleUser,
  },
  {
    link: "/blog",
    title: "Blog",
    icon: BookCheck,
  },
  {
    link: "/resume",
    title: "Resume",
    icon: NotepadText,
  },
  {
    link: "/certification",
    title: "Certification",
    icon: ShieldCheck,
  },
];

export function MainMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="text-white">
        <Button
          variant="outline"
          className="bg-green-600 rounded-full p-6 text-white"
        >
          <AlignLeft size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-opacity-70 bg-orange-600 min-w-full">
        <div className="flex flex-col items-end justify-center py-20 text-white h-screen pr-10 gap-y-10">
            {
                links && links.map((link, index)=>(
                    <Link
                    href={`${link.link}`}
                    key={index}
                    className="text-4xl hover:underline  flex items-center justify-between gap-x-10 gap-y-10"
                  >
                    <h3>{link?.title}</h3>
                    <ArrowRight size={30} />
                  </Link>
                ))
            }
        
        </div>
      </SheetContent>
    </Sheet>
  );
}
