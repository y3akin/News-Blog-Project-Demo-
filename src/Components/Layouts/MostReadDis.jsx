import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDis = ({ news }) => {
   return (
      <div className="w-[290px] mt-4">
         <img src={news.img} alt={news.head} />
         <h2 className="mt-2 font-rob font-medium text-[20px] text-textcol cursor-pointer hover:text-hvcol transition-all duration-300">
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
   );
};

export default MostReadDis;
