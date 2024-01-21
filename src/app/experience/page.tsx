import * as React from "react";

export default function page() {
  return (
    <div className="bg-stone-50 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <span className="flex w-full max-w-[1662px] flex-col items-stretch my-8 max-md:max-w-full">
        <div className="text-black text-2xl max-md:max-w-full">Experience</div>
        <div className="flex justify-between gap-5 mt-1 items-end max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex flex-col mt-32 max-md:max-w-full max-md:mt-10">
            <div className="text-black text-5xl max-md:max-w-full max-md:text-4xl">
              Enter your years of experience here, along with the types of
              companies or organisations you've worked with.
              <br />
            </div>{" "}
            <div className="text-black text-2xl leading-9 mt-10 max-md:max-w-full">
              Highlight how you excel in your role. Are you great at team
              collaboration? Solving challenging problems? Make it known here.
            </div>
          </span>{" "}
          <span className="shadow-sm bg-white self-stretch flex flex-col pl-10 pr-14 pb-9 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c873fe5beadf9fba5cdafbd6e93fc6c86e5c9177adc040127c1894ca9b5e0b8?apiKey=cc92e77fa59648be96795d005307c4b6&"
              className="aspect-[1.34] object-contain object-center w-[47px] fill-neutral-300 overflow-hidden self-center z-[1] max-w-full -mt-3.5"
            />{" "}
            <div className="text-black text-7xl font-black leading-[68.73px] whitespace-nowrap ml-3 mt-7 self-start max-md:text-4xl max-md:ml-2.5">
              “
            </div>{" "}
            <div className="text-black text-xl font-medium leading-8 self-stretch max-w-sm ml-3 mt-8 max-md:ml-2.5">
              Example of a testimonial: NAME’s design expertise was pivotal in
              elevating our website's user experience. Their innovative
              solutions and keen eye for aesthetics significantly boosted our
              online engagement. Highly recommend their skills for impactful
              design projects.
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-7">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30090028876b1c020888ecb1cb757b35f96e89d96033ad6bbab52a8aa4570d98?apiKey=cc92e77fa59648be96795d005307c4b6&"
                className="aspect-square object-contain object-center w-[76px] justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <span className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <div className="text-black text-lg font-medium">
                  First Name, Last Name
                </div>
                <div className="text-black text-base font-semibold leading-6 mt-3.5">
                  Company & Role
                </div>
              </span>
            </div>
          </span>
        </div>
        <div className="mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[81%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex grow flex-col mt-2 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-2xl font-bold max-md:max-w-full">
                  Work experience
                </div>
                <div className="mt-6 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                        <div className="text-black text-xl font-bold max-md:max-w-full">
                          Job Title | Company Name
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Year Started — Year Ended
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Summarise your role and key responsibilities. Did you
                          lead a team, solve critical issues, or contribute to
                          special projects? Include that information here.
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                        <div className="text-black text-xl font-bold max-md:max-w-full">
                          Job Title | Company Name
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Year Started — Year Ended
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Summarise your role and key responsibilities. Did you
                          lead a team, solve critical issues, or contribute to
                          special projects? Include that information here.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                        <div className="text-black text-xl font-bold max-md:max-w-full">
                          Job Title | Company Name
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Year Started — Year Ended
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Summarise your role and key responsibilities. Did you
                          lead a team, solve critical issues, or contribute to
                          special projects? Include that information here.
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                        <div className="text-black text-xl font-bold max-md:max-w-full">
                          Job Title | Company Name
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Year Started — Year Ended
                        </div>
                        <div className="text-black text-xl mt-2.5 max-md:max-w-full">
                          Summarise your role and key responsibilities. Did you
                          lead a team, solve critical issues, or contribute to
                          special projects? Include that information here.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-black text-2xl font-bold">Skills</div>
                <span className="items-center flex justify-between gap-4 mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2870c1623d36f401937e370b77143a789453af321b3127c3a2af81493e1737bf?apiKey=cc92e77fa59648be96795d005307c4b6&"
                    className="aspect-[0.07] object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto max-md:hidden"
                  />
                  <div className="text-black text-xl leading-8 self-stretch grow shrink basis-auto">
                    Discovery sessions
                    <br />
                    User Research
                    <br />
                    Ideation Workshops
                    <br />
                    Design Research
                    <br />
                    Rapid Prototyping
                    <br />
                    UI Design
                    <br />
                    Usability testing
                  </div>
                </span>
                <div className="justify-center items-stretch bg-black flex w-full flex-col mt-8 px-4 py-3 rounded-lg">
                  <span className="items-stretch flex justify-between gap-2 px-px">
                    <div className="text-white text-2xl leading-9 grow whitespace-nowrap">
                      View recent projects
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f14db46258b37a2d555806dc3c472183ba169b14a8d579cca2f6e1faa4edf833?apiKey=cc92e77fa59648be96795d005307c4b6&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}


