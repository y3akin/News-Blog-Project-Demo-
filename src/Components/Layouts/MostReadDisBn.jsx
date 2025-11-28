import React from "react";
import Flex from "./Flex";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const MostReadDisBn = ({ newsbn, bBorder }) => {
   return (
       <div className={`w-full mt-6 sm:mt-4 px-0 sm:px-2 flex gap-4 items-center sm:gap-0 sm:block  ${
            !bBorder ? "border-b" : ""
         } sm:border-0 border-[#262626] pb-6 sm:pb-0`}>
         <img
            src={newsbn.img}
            alt={newsbn.head}
            className="w-[124px] sm:w-auto"
         />
         <div>
            <h2 className="mt-2 font-noto font-normal sm:font-medium text-[16px] sm:text-[20px] text-textcol2 cursor-pointer hover:text-hvcol transition-all duration-300">
               {newsbn.head.slice(0, 50)} {newsbn.head.length > 50 && "..."}
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
      </div>
   );
};

export default MostReadDisBn;
