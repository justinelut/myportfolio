import * as React from "react";

export default function page() {
  return (
    <div className="bg-stone-50 pl-20 pt-12 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col mt-8 max-md:max-w-full max-md:mt-10">
            <span className="items-center flex gap-4 self-start">
              <div className="text-black text-2xl self-stretch grow whitespace-nowrap">
                Project
              </div>
              <div className="bg-black w-14 shrink-0 h-0.5 my-auto" />
              <div className="text-black text-2xl self-stretch grow whitespace-nowrap">
                Client name
              </div>
            </span>
            <div className="self-stretch text-black text-5xl mt-32 max-md:max-w-full max-md:text-4xl max-md:mt-10">
              Craft a compelling headline that encapsulates the essence of your
              project.
            </div>
            <div className="self-stretch text-black text-2xl leading-9 mt-10 max-md:max-w-full">
              Introduce your project, highlighting its mission and primary
              objectives. Share key accomplishments or milestones achieved,
              emphasising the impact and scale. Reflect on your personal journey
              within the project, focusing on how you applied your skills and
              creativity to contribute to its success and drive innovation.
            </div>
            <div className="self-stretch mt-28 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <span className="items-stretch flex grow flex-col max-md:mt-10">
                    <div className="text-black text-2xl font-bold">Client</div>
                    <div className="text-black text-xl leading-8 mt-2">
                      Clients name goes here
                    </div>
                    <div className="text-black text-2xl font-bold mt-6">
                      My role
                    </div>
                    <div className="text-black text-xl leading-8 mt-2">
                      E.g. Lead designer
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="items-stretch flex grow flex-col pb-12 max-md:mt-10">
                    <div className="text-black text-2xl font-bold">
                      Deliverables
                    </div>
                    <div className="text-black text-xl leading-8 mt-2 mb-11 max-md:mb-10">
                      Clients name goes here
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="grow mt-8 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a2bf9c924c9db79be26b45aa88eb610da4ffc28de6d272c9860762366a8ff89?apiKey=cc92e77fa59648be96795d005307c4b6&"
                  className="aspect-[0.65] object-contain object-center w-full shadow-sm overflow-hidden z-[1] grow mt-96 max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                <span className="text-black text-center text-2xl max-w-[471px] justify-center items-center shadow-sm bg-white grow w-full pl-28 pr-16 pt-[476px] pb-96 rounded-2xl max-md:max-w-full max-md:px-5 max-md:py-10">
                  Paste in your screen if an image or replace with your Figma
                  Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


