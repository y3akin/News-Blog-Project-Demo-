import React from 'react'
import Flex from './Flex'

const TopNewsBn = ({topnewsb}) => {
  return (
    <div className="w-[628px]">
         <img src={topnewsb.img} alt={topnewsb.head} className="rounded-xl mt-6" />
         <Flex className="flex-col gap-2">
            <h4 className="font-noto text-2xl font-semibold leading-6 text-[#EC8D49] mt-4">
               {topnewsb.topic}
            </h4>
            <h2 className="font-noto text-[40px] text-textcol2 leading-12 font-semibold mt-2 cursor-pointer hover:text-[#BD713A] transition-all duration-300">
               {topnewsb.head}
            </h2>
            <p className="font-noto text-4 font-normal leading-5 text-[#DCDCDC] mt-2 relative left-2">
                  <span className="w-px h-full bg-[#EC8D49] absolute top-0 -left-2"></span>
               {topnewsb.desp}
            </p>
            <div className="flex items-center gap-2">
               <h6 className="font-noto text-textcol2 text-[14px] font-normal ">
                  {topnewsb.time}
               </h6>
               <h6 className="font-noto text-[16px] font-normal text-[#BD713A]">
                  {topnewsb.line}
               </h6>
               <h6 className="font-noto text-[textcol2] text-[14px] font-normal ">
                  {topnewsb.place}
               </h6>
            </div>
         </Flex>
      </div>
  )
}

export default TopNewsBn
