import React from "react";

const TopHead = ({ tHead }) => {
   return (
      <div className="mt-4">
         <img src={tHead.img} alt={tHead.head} />

         <p className=" h-[46px] font-rob font-medium text-[18px] text-[#515151] mt-4">
            {tHead.description}
         </p>
         <h2 className="font-rob font-semibold text-[30px] text-textcol leading-10 mt-2 hover:text-[#BD713A] transition-all duration-300 cursor-pointer">
            {tHead.head}
         </h2>
      </div>
   );
};

export default TopHead;
