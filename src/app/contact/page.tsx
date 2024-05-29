import * as React from "react";
import Move from "../move";
import Navigator from "../navigator";
import Contact from "./contact";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Contact Me",
  description: "Get in touch with Justine G for collaboration opportunities, inquiries, or just to say hello! Reach out via email or connect on social media.",
  keywords: "Justine G, contact, collaboration, inquiry, social media, email",
  author: "Justine G",
  og: {
    title: "Contact Me",
    description: "Get in touch with Justine G for collaboration opportunities, inquiries, or just to say hello! Reach out via email or connect on social media.",
    type: "website",
    url: "https://www.justinegportfolio.com/contact",
    image: "https://www.justinegportfolio.com/images/contact-thumbnail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me",
    description: "Get in touch with Justine G for collaboration opportunities, inquiries, or just to say hello! Reach out via email or connect on social media.",
    image: "https://www.justinegportfolio.com/images/contact-thumbnail.png",
  },
};


export default function page(){
  return (
    <Move pathN="/">
      <div className="lg:container lg:mx-auto px-4 lg:px-24">
        <Contact />
        <Navigator text="Home" url="/" />
      </div>
    </Move>
  );
}


