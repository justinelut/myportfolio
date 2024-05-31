import React from 'react'
import Home from './home'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Justine Gichana",
  description: "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
  keywords: "Justine G, frontend developer, React, Next.js, Tailwind CSS, web development, portfolio",
  openGraph: {
    images: ["https://api2.pixelayout.site/api/files/bs6ha7egdp060nv/mxbwu49exadjgpm/portrait_1_tPet10eAvs.webp?token="],
  },
};


export default function page() {
  return (
    <div>
      <Home />
    </div>
  )
}
