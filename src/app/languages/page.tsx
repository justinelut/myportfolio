import React from 'react'
import SingleLanguage from '@/app/languages/single-language'
import Move from '@/app/move'


export default function page() {
  return (
    <Move pathN='/frameworks'>
    <div className='container mx-auto lg:px-24'>
      <SingleLanguage />
    </div>
    </Move>
  )
}
