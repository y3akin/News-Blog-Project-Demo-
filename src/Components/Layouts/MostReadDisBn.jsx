import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDisBn = ({ newsbn }) => {
   return (
      <div className="w-full mt-4 px-2 inline-block">
         <img src={newsbn.img} alt={newsbn.head} />
         <h2 className="mt-2 font-noto font-medium text-[20px] text-textcol2 cursor-pointer hover:text-hvcol transition-all duration-300">
            {newsbn.head.slice(0,60)} {newsbn.head.length > 60 && "..."}
         </h2>
         <Flex className=" mt-2  items-center gap-2">
            <h6 className="font-noto text-textcol2 text-[14px] font-normal">
               {newsbn.time}
            </h6>
            <h6 className="text-[#BD713A] text-[16px]">|</h6>
            <h6 className="font-noto text-[14px] normal text-textcol2 flex items-center gap-1">
               <MdOutlineRemoveRedEye />
               {newsbn.views}
            </h6>
         </Flex>
      </div>
   );
};

export default MostReadDisBn;
