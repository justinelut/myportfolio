import Paystack from "../icons/paystack";
import Nextjs from "../icons/nextjs";
import Reactjs from "../icons/react";
import TailwindCSS from "../icons/tailwind";
import Pocketbase from "../icons/pocketbase";
import Supabase from "../icons/supabase";
import Stripe from "../icons/stripe";
import AnimateItems from "../animate-items";
import AnimatedComponent from "../animate-component";
import TypingEffect from "../typing-effect";

export default function Frameworks() {
  const placeholderText: {
    key: number;
    type: "heading1" | "heading2" | "paragraph";
    text: string;
  }[] = [{ key: 1, type: "heading1", text: "Nextjs" }];
  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <div className="flex flex-col lg:w-[45%] w-full gap-y-4 h-[600px]">
        <div className="w-full bg-slate-200 lg:h-[100px] px-8 flex lg:flex-row flex-col gap-10 rounded-3xl items-center justify-start">
          <Stripe className="size-52" />
          <p className="font-bold text-stone-700">
            Leading payment processing platform that simplifies online
            transactions for businesses
          </p>
        </div>
        <AnimatedComponent
          animationType="slide"
          direction="right"
          duration={0.3}
          delay={0.5}
        >
          <div className="lg:h-[500px] h-full relative bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/cket277wy29q5go/nextjs_icon_dark_wZoDIbfcOV.png?token=')] bg-cover bg-center  bg-opacity-50 p-8 rounded-3xl flex flex-col gap-y-6">
            <div className="absolute inset-0 bg-slate-300 h-[100%] bg-opacity-50 rounded-3xl "></div>
            <div className="flex flex-col gap-y-2 relative dark:text-slate-900">
              <div className="flex items-start">
                <h3 className="text-5xl font-bold">
                  <AnimateItems text={placeholderText} />
                </h3>
              </div>
              <div className="flex">
                <div className="self-stretch lg:text-xl text-sm max-md:max-w-full max-md:text-4xl">
                  <TypingEffect text="Ideal for building high-performance, scalable web applications with dynamic content, server-side rendering and static site generation" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedComponent>
      </div>

      <div className="flex flex-row lg:w-[55%] w-full gap-10 lg:mt-0 mt-[250px] lg:h-[600px] h-full">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full gap-4 flex lg:flex-row flex-col lg:h-[400px] h-full">
            <div className="flex flex-col gap-4 lg:w-[40%] w-full">
              <AnimatedComponent
                animationType="slide"
                direction="right"
                duration={0.3}
                delay={0.5}
              >
                <div className="relative lg:h-[180px] bg-[url('https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/n0etw9h00dn6cfj/nextjs_icon_dark_2pQKwPgwlq.png?token=')] bg-cover bg-center  bg-opacity-50 p-8 rounded-3xl flex flex-col gap-y-6">
                  <div className="absolute inset-0 bg-slate-300 bg-opacity-50 rounded-3xl"></div>
                  <div className="flex flex-col gap-y-2 relative dark:text-slate-900">
                    <div className="flex items-start">
                      <h3 className="text-5xl font-bold text-orange-600">
                        React js
                      </h3>
                    </div>
                    <div className="flex">
                      <div className="self-stretch text-xl max-md:max-w-full max-md:text-4xl">
                        <TypingEffect text="" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
              <AnimatedComponent
                animationType="fade"
                direction="up"
                duration={0.3}
                delay={0.5}
              >
                <div className="flex flex-col bg-slate-200 h-[200px] bg-opacity-50 rounded-3xl py-10 px-10 w-full">
                  <Pocketbase className="size-32" />
                  <h3 className="mt-4 text-stone-900">Pocketbase</h3>
                </div>
              </AnimatedComponent>
            </div>

            <div className="flex flex-col bg-green-600 bg-opacity-50 lg:h-400 rounded-3xl py-4 px-10 w-full lg:w-[60%]">
              <AnimatedComponent
                animationType="slide"
                direction="left"
                duration={0.3}
                delay={0.5}
              >
                <TailwindCSS className="size-48" />
                <h3 className="text-slate-800 font-bold text-3xl">
                  Tailwind css
                </h3>
                <p className="mt-4">
                  A highly customizable, utility-first CSS framework that allows
                  developers to build modern, responsive web designs without
                  writing traditional CSS
                </p>
              </AnimatedComponent>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col gap-4 lg:h-[200px]">
            <div className="bg-orange-600 bg-opacity-40 rounded-3xl py-10 px-10 lg:w-[70%] w-full">
              <AnimatedComponent
                animationType="slide"
                direction="down"
                duration={0.3}
                delay={0.5}
              >
                <Paystack className="w-[65%]" />
                <p className="mt-4">
                  Modern payment processing platform that enables businesses in
                  Africa to accept online and offline payments
                </p>
              </AnimatedComponent>
            </div>
            <div className="bg-blue-600 bg-opacity-50 rounded-3xl px-4 py-4 lg:w-[30%] w-full lg:mb-0 mb-20">
              <h3 className="text-stone-600 mb-4 dark:text-inherit font-bold">
                Supabase
              </h3>
              <p>Open-source backend-as-a-service (BaaS)</p>
              <Supabase className="size-14" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
