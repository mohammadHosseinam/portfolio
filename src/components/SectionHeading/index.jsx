import React from 'react'

function SectionHeading({text}) {
  return (
    <div className=' mx-auto'>
        <h4 className='text-[24px] font-bold text-[#212121]'>{text}</h4>
        <div className='flex gap-2 mt-1'>
            <div className='w-1.5 h-1.5 rounded-md bg-[#F35D28]'></div>
            <div className='w-12 h-1.5 rounded-md bg-[#F35D28]'></div>
        </div>
    </div>
  )
}

export default SectionHeading