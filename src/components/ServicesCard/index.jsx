import React from 'react'

function ServicesCard({title , desc , image , bgColor}) {
  return (
    <div className={`flex flex-col p-6 rounded-[20px] gap-4 border-2 border-[#212121]`} style={{ backgroundColor: bgColor }}>
        <img className='w-13.5 h-13.5 mx-auto' src={image} alt="service image" />
        <h3 className='text-[20px] font-semibold text-[#212121] text-center'>{title}</h3>
        <p className='text-[16px] font-medium text-[#505050]'>{desc}</p>
    </div>
  )
}

export default ServicesCard