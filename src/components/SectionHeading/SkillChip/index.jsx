import React from 'react'

function SkillChip({text}) {
    return (
        <div>
            <div className='relative inline-block  bg-[#F0E7FE] px-5 py-2 rounded-[20px] border-2 border-[#212121] text-[#212121] text-[16px] font-semibold '>{text}
                <span className='bg-[#212121] px-5 py-2 rounded-[20px] border-2 border-[#212121] flex text-[16px] font-semibold whitespace-nowrap absolute top-0.5 right-0.5 -z-10'>{text}</span>
            </div>
        </div>
    )
}

export default SkillChip