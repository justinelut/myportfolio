import * as React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center px-16 max-md:px-5">
      <span className="flex w-full max-w-[1679px] flex-col items-stretch mb-2 max-md:max-w-full max-md:mb-10">
        <div className="text-4xl max-md:max-w-full mb-6">
          Blogs
        </div>
        <div className="max-md:max-w-full max-md:mt-4">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="rounded bg-neutral-300 px-11 py-4 max-md:max-w-full max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                      <span className="text-black text-center text-xs justify-center items-center shadow-sm bg-white w-[121px] h-[121px] m-auto px-3 rounded-md max-md:mt-10">
                        Paste in your floating UI elements here if an image or
                        replace with your Figma Design
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa7ade597eba67ad78fa57fbff31833076052e260b4ddffdc35506d847978b4?apiKey=cc92e77fa59648be96795d005307c4b6&"
                        className="aspect-[0.5] object-contain object-center w-[148px] shadow-sm overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch mt-2.5 max-md:mt-10">
                        <span className="text-black text-center text-xs justify-center items-center shadow-sm bg-white w-[121px] h-[121px] px-3 rounded-md">
                          Paste in your floating UI elements here if an image or
                          replace with your Figma Design
                        </span>
                        <span className="text-black text-center text-xs justify-center items-center shadow-sm bg-white w-[121px] h-[121px] mt-4 px-3 rounded-md">
                          Paste in your floating UI elements here if an image or
                          replace with your Figma Design
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold mt-10 max-md:max-w-full">
                  Client name
                </div>
                <div className="text-2xl leading-9 mt-2 max-md:max-w-full">
                  Provide a brief summary of the project to pique interest,
                  aiming to spark curiosity in hiring managers and prompt an
                  interview invitation.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="rounded bg-neutral-300 pl-9 pt-6 max-md:max-w-full max-md:pl-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                      <span className="text-black text-center text-xs justify-center items-center shadow-sm bg-white z-[1] w-32 h-32 mt-40 mx-auto px-3.5 rounded-lg max-md:mt-10">
                        Paste in your floating UI elements here if an image or
                        replace with your Figma Design
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                      <span className="text-black text-center text-xs justify-center shadow-sm bg-white grow w-full pl-16 pr-20 pt-40 pb-24 rounded-lg items-end max-md:mt-6 max-md:pl-5 max-md:pr-8 max-md:py-10">
                        Paste in your screen if an image or replace with your
                        Figma Design
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" text-2xl font-bold mt-10 max-md:max-w-full">
                  Client name
                </div>
                <div className="text-2xl leading-9 mt-2 max-md:max-w-full">
                  Provide a brief summary of the project to pique interest,
                  aiming to spark curiosity in hiring managers and prompt an
                  interview invitation.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5798eb954f185612810fa21817c76b80807fe2ff2dca9ed0c8fcfb57e0490531?apiKey=cc92e77fa59648be96795d005307c4b6&"
                  className="aspect-[1.53] object-contain object-center w-full justify-center items-center overflow-hidden max-md:max-w-full"
                />
                <div className="text-black text-2xl font-bold mt-10 max-md:max-w-full">
                  Client name
                </div>
                <div className="text-black text-2xl leading-9 mt-2 max-md:max-w-full">
                  Provide a brief summary of the project to pique interest,
                  aiming to spark curiosity in hiring managers and prompt an
                  interview invitation.
                </div>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}


