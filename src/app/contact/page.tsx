import * as React from "react";
import Move from "../move";
import Navigator from "../navigator";
import Contact from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me for collaboration opportunities, inquiries, or just to say hello! Reach out via email or connect on social media.",
  keywords: "Justine G, contact, collaboration, inquiry, social media, email",
  openGraph: {
    images: ["https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/u20f6e2nk2wm2lx/image_processing20200813_478_6hj4av_b3vp0sUVMN.jpg?token="],
  },
};

export default function page() {
  return (
    <div className="lg:container lg:mx-auto px-4 lg:px-24">
      <Contact />
      {/* <Navigator text="Home" url="/" /> */}
    </div>
  );
}
