import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";

const NewsHead = ({ head }) => {
   return (
      <div className="flex items-center gap-3">
         <div>
            <h2 className="font-rob text-[20px] leading-[30px] font-medium text-textcol cursor-pointer hover:text-hvcol transition-all duration-300">
               <span className="text-[#BD713A]  ">{head.topic}</span>
               {head.head}
            </h2>
            <div className="flex items-center mt-2 gap-2">
               <h6 className="flex items-center gap-2 font-rob ">
                  <MdOutlineWatchLater />
                  {head.pubsh_time}
               </h6>
               <h6 className="text-[#BD713A] font-rob ">{head.des}</h6>
               <h6 className="font-rob ">{head.catg}</h6>
               <h6 className="font-rob ">{head.place}</h6>
            </div>
         </div>
         <img src={head.img} alt={head.topic} className="w-[193px]" />
      </div>
   );
};

export default NewsHead;
