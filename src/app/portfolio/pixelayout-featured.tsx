import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Nextjs from "@/app/icons/nextjs";
import Pocketbase from "@/app/icons/pocketbase";
import TailwindCSS from "@/app/icons/tailwind";

export default function PixelayoutFeatured() {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className="rounded-lg flex flex-row items-center justify-start gap-x-6 mt-10">
          <Pocketbase className="text-green-600 size-16" />

          <div className="flex flex-col">
            <h3>**Frontend Framework**</h3>
            <p>Next.js</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-start gap-x-6 mt-10">
          <TailwindCSS className="text-green-600 size-16" />

          <div className="flex flex-col">
            <h3>**CSS Framework**</h3>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-center justify-start gap-x-6 mt-10">
          <Pocketbase className="text-green-600 size-16" />

          <div className="flex flex-col">
            <h3>**Database**</h3>
            <p>Pocketbase</p>
          </div>
        </div>
      </div>
      ## Features
      <div className="grid lg:grid-cols-2 gap-4 py-6">
        <div className="rounded-lg bg-green-600 p-6 text-white">
          <h3 className="mb-4 text-xl font-semibold flex items-center gap-x-2">
            <Check className="font-bold" size={20} />
            <span>Clean and Minimalist Design</span>
          </h3>
          <p className="text-primary text-gray-300">
            Pixelayout features a clean and minimalist design, prioritizing
            readability and usability.
          </p>
        </div>

        <p>
          The use of Tailwind CSS ensures consistent styling and responsive
          layouts, providing an optimal reading experience across devices.
        </p>

        <div className="rounded-lg bg-green-600 text-white p-6">
          <h3 className="mb-4 text-xl font-semibold flex items-center gap-x-2">
            <Check className="font-bold" size={20} />
            <span>Iterative Development</span>
          </h3>

          <p className="text-primary text-gray-300">
            The development process involves experimenting with new ideas,
            gathering feedback from the community, and continuously iterating to
            improve the platform.
          </p>
        </div>
        <p>
          This agile approach allows for adaptation to changing requirements and
          efficient delivery of value to the audience.
        </p>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="row-gap-8 sm:row-gap-0 grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-b p-8 sm:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Check />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Optimized Performance
              </h6>
              <p className="mb-3 text-sm">
                Performance optimization is a top priority for Pixelayout,
                ensuring fast loading times and smooth navigation.
              </p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Check />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Streamlined Operations
              </h6>
              <p className="mb-3 text-sm">
                Efficient workflows and streamlined processes have optimized
                business operations, saving time and resources for clients.
              </p>
            </div>
          </div>
          <div className="border-b p-8 sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Check />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Intuitive Functionality
              </h6>
              <p className="mb-3 text-sm">
                Seamless navigation and user-friendly interface ensure smooth
                interactions, enhancing user satisfaction and driving
                engagement.
              </p>
            </div>
          </div>
          <div className="border-b p-8 lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Check />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Immersive User Experience
              </h6>
              <p className="mb-3 text-sm ">
                Immersive visuals and seamless interactions create an engaging
                user experience, fostering deeper connections and driving
                conversions.
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Check />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Dark mode</h6>
              <p className="mb-3 text-sm">
                Toggle for dark mode and light mode which enhances user
                experience for those who love dark and light themes
              </p>
            </div>
          </div>
        </div>
      </div>
      ## Achievements - ## Improved search engine optimization (SEO) &
      Performance Using handlesbars which is a rendering engine that return html
      from the server we were able to get near maximum performance and maximum
      seo for the site
      <Image
        src="https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/z9ryr7vaatdfwkw/pixelpulseseo_7TKu0PZwGT.webp?token="
        alt="google lighthouse results"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />
      This reduced page load times and better indexing in google which inturn
      led to better performace and improved seo as can be seen on the above
      image. -The improved seo and performance also ment that google was able to
      easily crawl pixel pulse which improved its search on google{" "}
      <Image
        src="https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/67brvfihz7ik1wh/pixelpulsegooglesearch_1MULHi1aHx.webp?token="
        alt="google lighthouse results"
        width={720}
        height={405}
        className="my-8 rounded-md border bg-muted transition-colors"
        priority
      />
      <div className="flex items-start py-10 text-white">
        <Link
          className="flex items-center justify-start gap-x-4 rounded-full bg-green-600 px-4 py-1 no-underline"
          href="https://www.google.com/search?q=pixelayout.site&sca_esv=8b3c2fe050857b40&sxsrf=ADLYWIJf3dmx6KGme0f3x0F7760GGEbyQQ%3A1716388224832&source=hp&ei=gAFOZrbuL83t7_UPu8-amA8&iflsig=AL9hbdgAAAAAZk4PkPQCTL1biwE56NSwmgjvZbs_e7jQ&ved=0ahUKEwi2rr2zvKGGAxXN9rsIHbunBvMQ4dUDCBU&uact=5&oq=pixelayout.site&gs_lp=Egdnd3Mtd2l6Ig9waXhlbGF5b3V0LnNpdGUyBBAjGCcyBBAjGCdIrRlQAFilGHAAeACQAQGYAegGoAHwMKoBBzQtOC4yLjK4AQPIAQD4AQGYAgugAu0qwgIKECMYgAQYJxiKBcICERAAGIAEGJECGLEDGIMBGIoFwgILEAAYgAQYkQIYigXCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIOEC4YgAQYsQMYgwEYigXCAgUQABiABMICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAhEQLhiABBixAxjRAxiDARjHAcICChAAGIAEGBQYhwLCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICCBAAGIAEGKIEmAMAkgcHNC05LjEuMaAHz10&sclient=gws-wiz"
        >
          <Search />
          <span>Search on google</span>
        </Link>
      </div>
    </>
  );
}
