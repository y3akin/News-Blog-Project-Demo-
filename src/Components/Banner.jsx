import React from "react";
import Container from "./Layouts/Container";
import Banner_img from "../assets/Image/Banner_img/banner_img.png";
import NewsHead from "./Layouts/NewsHead";

import h_img1 from "../assets/Image/Banner_img/h_img1.png";
import h_img2 from "../assets/Image/Banner_img/h_img2.png";
import h_img3 from "../assets/Image/Banner_img/h_img3.png";
import h_img4 from "../assets/Image/Banner_img/h_img4.png";
import MostRead from "./UI/MostRead";
import TopNews from "./Layouts/TopNews";

const Banner = () => {
   let newsHeadLine = [
      {
         topic: "International Day for Biological Diversity ",
         head: "• Biodiversity threatened by hill agriculture",
         pubsh_time: "30 minute ago",
         des: "|",
         catg: "Politics",
         img: h_img1,
      },
      {
         topic: "Talks with consensus commission ",
         head: "• NCP calls for scrapping 4 fundamental principles of ’72 constitution",
         pubsh_time: "30 minute ago",
         des: "|",
         catg: "Politics",
         img: h_img2,
      },
      {
         topic: "Abuse of Nurul Huda ",
         head: "• Govt to take action against those who incited mob",
         pubsh_time: "30 minute ago",
         des: "|",
         catg: "National",
         img: h_img3,
      },
      {
         topic: "",
         head: "Govt service ordinance to be amended",
         pubsh_time: "30 minute ago",
         des: "|",
         catg: "National",
         img: h_img4,
      },
   ];

   let bannerTopNews = [
      {
         img: Banner_img,
         topic: "Movement of tourist houseboats",
         head: "Ban on entry of houseboats in Tanguar haor’s watchtower area in Sylhet",
         desp: "The local administration has imposed a ban on the entry of houseboats into the Tanguar Haor’s watchtower area. This development came a day after the authorities issued 12 mandatory guidelines for tourists visiting the haor in Sunamganj.",
         time: "",
         line: "",
         place: "",
      },
   ];

   return (
      <section className=" bg-[#FFFFFF] sm:bg-[#F2F2F2] pt-6 pb-12" id="home">
         <Container>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px]  ">
               <div>
                  {bannerTopNews.map((topitem) => (
                     <TopNews topnews={topitem} />
                  ))}
               </div>

               <div className="hidden sm:w-px h-[614px] bg-[#DCDCDC]"></div>

               <div className=" hidden sm:block bg-[#FFFFFF] sm:bg-transparent">
                  <div className=" flex flex-col gap-8 items-center">
                     {newsHeadLine.map((item, index) => (
                        <NewsHead key={index} head={item} />
                     ))}
                  </div>
               </div>
            </div>

            <div className="block sm:hidden bg-[#F2F2F2] sm:bg-transparent mt-6 pt-6 p-4">
               <div className="sm:hidden flex items-center gap-2.5 mb-6">
                  <h2 className="font-rob font-medium text-xl text-[#262626]">
                     Latest
                  </h2>
                  <div className="w-[250px] h-px bg-black"></div>
               </div>
               <div className=" flex flex-col gap-8 items-start">
                  {newsHeadLine.map((item, i) => (
                     <NewsHead key={i} head={item}   bBorder={i === newsHeadLine.length - 1}/>
                     
                  ))}
               </div>
            </div>

            <div className="relative ">
               <MostRead />
               
            </div>
         </Container>
      </section>
   );
};

export default Banner;
