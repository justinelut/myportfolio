import React from 'react'

export default function SingleBlog() {
  return (
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
  )
}
