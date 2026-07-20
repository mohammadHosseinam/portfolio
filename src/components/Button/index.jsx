import React from 'react'
import { Link } from 'react-router-dom'

function Button({ text = "تست" , LinkTo = "/" }) {
    return (
        <div className=' pl-0.5'>
            <Link to={LinkTo} className='relative inline-block  bg-[#F35D28] active: hover:bg-[#F47F56] px-6 py-2 rounded-[20px] border-2 border-[#212121] text-[#fafafa] text-[20px] font-medium '>{text}
            <span className='bg-[#212121] px-6 py-2 rounded-[20px] border-2 border-[#212121] flex text-[#fafafa] text-[20px] whitespace-nowrap font-medium absolute top-0.5 right-0.5 -z-10'>{text}</span>
            </Link>
        </div>
    )
}

export default Button