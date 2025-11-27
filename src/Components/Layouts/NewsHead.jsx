import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

const NewsHead = ({ head, isLast }) => {
   return (
      <div
         className={`flex justify-between items-center gap-3 ${
            !isLast ? "border-b" : ""
         } sm:border-0 border-[#DCDCDC] pb-6 sm:pb-0`}>
         <div className="w-60 sm:w-[380px]">
            <h2 className="font-rob text-[16px] sm:text-[20px] sm:leading-[30px] font-medium text-textcol cursor-pointer hover:text-hvcol transition-all duration-300">
               <span className="text-[#BD713A]  ">{head.topic}</span>
               {head.head.slice(0, 25)}
               {head.head.length > 25 && "..."}
            </h2>
            <div className="flex items-center mt-2 gap-2">
               <h6 className="flex text-[14px] items-center gap-2 font-rob ">
                  <MdOutlineWatchLater />
                  {head.pubsh_time}
               </h6>
               <h6 className="text-[#BD713A] font-rob ">{head.des}</h6>
               <h6 className="font-rob text-[14px] ">{head.catg}</h6>
               <h6 className="font-rob text-[14px] ">{head.place}</h6>
            </div>
         </div>
         <img
            src={head.img}
            alt={head.topic}
            className="w-[124px] sm:w-[193px]"
         />
      </div>
   );
};

export default NewsHead;
