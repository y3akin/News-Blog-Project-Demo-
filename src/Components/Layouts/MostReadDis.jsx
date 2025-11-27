import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDis = ({ news, bBorder }) => {
   return (
      <div className={`w-full mt-6 sm:mt-4 px-0 sm:px-2 flex gap-2 items-center sm:gap-0 sm:block  ${
            !bBorder ? "border-b" : ""
         } sm:border-0 border-[#DCDCDC] pb-6 sm:pb-0`}>
         <img src={news.img} alt={news.head} className="w-[124px] h-[84px] rounded-lg sm:h-auto sm:w-auto" />
         <div>
            <h2 className="mt-2 font-rob font-medium text-[16px] sm:text-[20px] text-textcol cursor-pointer hover:text-hvcol transition-all duration-300">
            {news.head.slice(0,50)} {news.head.length > 50 && "..."}
         </h2>

         <Flex className=" mt-2  items-center gap-2">
            <h6 className="font-rob text-[14px] normal text-[#515151]">
               {news.time}
            </h6>
            <h6 className="text-[#BD713A] text-[16px]">|</h6>
            <h6 className="font-rob text-[14px] normal text-[#515151] flex items-center gap-1">
               <MdOutlineRemoveRedEye />
               {news.views}
            </h6>
         </Flex>
         </div>
      </div>
   );
};

export default MostReadDis;
