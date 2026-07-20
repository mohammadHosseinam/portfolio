import React from "react";

function ContactButton({ Icon }) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center bg-[#FFF0EA] w-20 h-20 rounded-[40px] border-2 border-[#212121] text-[#212121]">
        {Icon}

        <span className="absolute top-0.5 right-0.5 -z-10 flex items-center justify-center w-20 h-20 rounded-[40px] border-2 border-[#212121] bg-[#212121]">
        {Icon}
        </span>
      </div>
    </div>
  );
}

export default ContactButton