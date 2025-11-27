import React, { Component } from "react";
import Img_1 from "../../assets/Image/ReadMoreCard/img1.png";
import Img_2 from "../../assets/Image/ReadMoreCard/img2.png";
import Img_3 from "../../assets/Image/ReadMoreCard/img3.png";
import Img_4 from "../../assets/Image/ReadMoreCard/img4.png";
import MostReadDis from "../Layouts/MostReadDis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

const MostRead = () => {
   let mstRead = [
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
   ];
   let mstRead2 = [
      {
         img: Img_1,
         head: "Japan will provide 4.8 million dollars in financial support to the Election Commission for the ballot project.",
         time: "3 week ago",
         views: "4k",
      },
      {
         img: Img_2,
         head: "Bangladesh ended the first half in the lead thanks to Rituparna’s goal.",
         time: "2 week ago",
         views: "3k",
      },
      {
         img: Img_3,
         head: "Former CEC Nurul Huda gave a confessional statement in court.",
         time: "1 week ago",
         views: "2k",
      },
      {
         img: Img_4,
         head: "Ariful is on the streets demanding the withdrawal of Sylhet’s DC, calling him “failed.”",
         time: "5 days ago",
         views: "950",
      },
   ];

   const NextArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowRight
         onClick={onClick}
         className="absolute -top-5 right-0 transform -translate-y-1/2 z-20 text-[50px] text-textcol bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300"
      />
   );

   const PrevArrow = ({ onClick }) => (
      <MdOutlineKeyboardArrowLeft
         onClick={onClick}
         className="absolute -top-5 right-20 transform -translate-y-1/2 z-20 text-[50px] text-textcol bg-transparent rounded-full p-2 cursor-pointer hover:text-hvcol transition-all duration-300"
      />
   );

   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      // autoplay: true,
      // autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
   };
   return (
      <section className="mt-6 mx-4 sm:mx-0">
         <div className="flex items-center gap-2.5 ">
            <h2 className="font-rob font-medium text-[20px] sm:text-[24px] text-[#262626]">
               Most Read
            </h2>
            <div className="sm:w-[900px] w-[250px] h-px sm:h-px bg-black"></div>
         </div>

         <div className="w-full hidden sm:block">
            <Slider {...settings}>
               {mstRead.map((item, index) => (
                  <MostReadDis key={index} news={item} />
               ))}
            </Slider>
         </div>

         <div>
            <div className="w-full sm:hidden block">
               {mstRead2.map((item, i) => (
                  <MostReadDis
                     key={i}
                     news={item}
                     bBorder={i === mstRead2.length - 1}
                  />
               ))}
            </div>
            <button className="flex sm:hidden mt-6 mx-auto items-center gap-1 font-rob font-normal text-[14px] text-[#1E222B] p-3 border border-[#1E222B] rounded-3xl hover:bg-[#1E222B] hover:text-textcol2 transition-all duration-300">
               Read More <BsArrowUpRight />
            </button>
         </div>
      </section>
   );
};

export default MostRead;
