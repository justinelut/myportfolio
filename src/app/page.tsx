import React from 'react'
import Home from './home'

export const metadata = {
  title: "Welcome to My Portfolio | Justine G",
  description: "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
  keywords: "Justine G, frontend developer, React, Next.js, Tailwind CSS, web development, portfolio",
  author: "Justine G",
  og: {
    title: "Welcome to My Portfolio | Justine G",
    description: "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
    type: "website",
    url: "https://www.justinegportfolio.com",
    image: "https://www.justinegportfolio.com/images/portfolio-thumbnail.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to My Portfolio | Justine G",
    description: "Hi there! I'm Justine G, a passionate frontend developer specializing in React, Next.js, and Tailwind CSS. Check out my work and get to know my journey in web development.",
    image: "https://www.justinegportfolio.com/images/portfolio-thumbnail.png",
  },
};


export default function page() {
  return (
    <div>
      <Home />
    </div>
  )
}
