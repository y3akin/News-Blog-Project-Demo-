import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";

const NewsHeadBn = ({headbn}) => {
  return (
    <div className="flex items-center gap-3">
             <div>
                <h2 className="font-noto text-[15px] sm:text-[20px] leading-[30px] font-normal sm:font-medium text-textcol2 cursor-pointer hover:text-hvcol transition-all duration-300">
                   <span className="text-[#BD713A]  ">{headbn.topic}</span>
                   {headbn.head}
                </h2>
                <div className="flex items-center mt-2 gap-2">
                   <h6 className="flex items-center gap-2 text-textcol2 font-noto">
                      <MdOutlineWatchLater />
                      {headbn.pubsh_time}
                   </h6>
                   <h6 className="text-[#BD713A] text-[14px] font-noto">{headbn.des}</h6>
                   <h6 className='text-textcol2 text-[14px] font-noto'>{headbn.catg}</h6>
                   <h6 className='text-textcol2 text-[14px] font-noto'>{headbn.place}</h6>
                </div>
             </div>
             <img src={headbn.img} alt={headbn.topic} className="w-[124px]  sm:w-[193px]" />
          </div>
  )
}

export default NewsHeadBn
