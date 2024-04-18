import * as React from "react";
import Move from "../move";

export default function page(){
  return (
    <Move pathN="/">
    <div className="bg-stone-50 flex flex-col justify-center px-16 py-12 items-start max-md:px-5">
      <span className="flex w-[707px] max-w-full flex-col ml-16 mt-8 mb-11 max-md:mb-10">
        <div className="text-black text-2xl self-stretch max-md:max-w-full">
          Get in touch
        </div>
        <div className="self-stretch text-black text-5xl mt-36 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Here is a great place to add a thank you message to the person
          reviewing your ‘folio.
        </div>
        <div className="self-stretch text-black text-2xl leading-9 mt-10 max-md:max-w-full">
          Encourage further engagement by inviting inquiries about your
          experience. Suggest that while the portfolio provides an overview,
          there's more to your story. Offer to discuss your work in more detail
          through a call or video chat.
        </div>{" "}
        <span className="items-stretch flex w-[494px] max-w-full justify-between gap-5 mt-10 self-start max-md:flex-wrap">
          <div className="text-black text-3xl underline">Email</div>{" "}
          <div className="text-black text-3xl underline">Linkedin</div>{" "}
          <div className="text-black text-3xl underline">Blog/Website</div>
        </span>{" "}
        <div className="self-stretch text-black text-2xl leading-8 mt-60 max-md:max-w-full max-md:mt-10">
          Press the R key if you want to go back to the start!
        </div>
      </span>
    </div>
    </Move>
  );
}


