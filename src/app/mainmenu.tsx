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
import YoutubeVideo from "./videos/youtube-video";
import { AnimatePresence, Spring, motion } from "framer-motion";
import OrbitingLangFramework from "./orbiter";

const links = [
  {
    link: "/intro",
    title: "About me",
    icon: FolderDot,
  },
  {
    link: "/projects",
    title: "Projects",
    icon: FolderDot,
  },
  {
    link: "/languages",
    title: "P. Languages",
    icon: FolderDot,
  },
  {
    link: "/frameworks",
    title: "Frameworks",
    icon: ShieldCheck,
  },
  {
    link: "/blog",
    title: "Blog",
    icon: BookCheck,
  },
  {
    link: "/experience",
    title: "Experience",
    icon: NotepadText,
  },
  {
    link: "/contact",
    title: "Contact",
    icon: CircleUser,
  },
];

export function MainMenu() {
  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Sheet>
      <SheetTrigger asChild className="text-white">
        <Button
          variant="outline"
          className="bg-orange-600 rounded-full p-6 text-white"
        >
          <AlignLeft size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-opacity-70 bg-orange-600 min-w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between lg:pt-20 items-center h-screen">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl leading-8 max-w-full w-[100%] max-md:mt-0"
          >
       <div className="lg:flex hidden">
        {/* <OrbitingLangFramework /> */}
       </div>
        </motion.div>
        <div className="flex flex-col lg:items-end justify-center pb-20 pt-4 text-white pr-10 gap-y-8">
          {links &&
            links.map((link, index) => (
              <Link
                href={`${link.link}`}
                key={index}
                className="text-4xl hover:underline  flex items-center justify-between gap-x-10 gap-y-10"
              >
                <h3>{link?.title}</h3>
                <ArrowRight size={30} />
              </Link>
            ))}
        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
