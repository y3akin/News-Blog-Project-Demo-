import React from "react";

const TopHead = ({ tHead }) => {
   return (
      <div className="w-[380px] sm:w-auto mt-4">
         <img src={tHead.img} alt={tHead.head} className="w-[360px] sm:w-auto " />

         <p className="  h-[46px] font-rob font-medium text-[16px] sm:text-[18px] text-[#515151] mt-4">
            {tHead.description}
         </p>
         <h2 className="font-rob font-semibold text-[32px] sm:text-[30px] text-textcol leading-auto sm:leading-10 mt-2 hover:text-[#BD713A] transition-all duration-300 cursor-pointer">
            {tHead.head}
         </h2>
      </div>
   );
};

export default TopHead;
