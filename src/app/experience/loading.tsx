import * as React from "react";

export default function page() {
  return (
    <span className="justify-center items-center bg-neutral-300 flex flex-col px-20 py-12 max-md:px-5">
      <div className="w-[822px] max-w-full mt-96 max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/60de7acea220b56f584078f35c4a914e56bf0ff099e0a2ea3421d88f1e01a594?apiKey=cc92e77fa59648be96795d005307c4b6&"
              className="aspect-[1.21] object-contain object-center w-[154px] overflow-hidden shrink-0 max-w-full grow"
            />
          </div>
          <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-center text-6xl font-bold mt-3.5 max-md:max-w-full max-md:text-4xl">
              Insert client logo here
            </div>
          </div>
        </div>
      </div>
      <div className="text-black text-center text-2xl font-bold max-w-[822px] mt-3 mb-72 max-md:max-w-full max-md:mb-10">
        If the client isn’t well known you could add brief sentence about who
        they are and the industry.
      </div>
    </span>
  );
}


