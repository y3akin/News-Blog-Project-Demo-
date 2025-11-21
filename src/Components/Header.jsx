import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Image from "./UI/Image";
import Logo from "../assets/Image/logo.png";
import ListItems from "./UI/ListItems";
import Icon from "./UI/Icon";
import { IoSearchCircleSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Category from "./UI/Category";

const Header = () => {
   let handleScrollToHome = () => {
      let home = document.getElementById("home");

      if (home) {
         home.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollToHillTrack = () => {
      let hillTrack = document.getElementById("hillTrack");

      if (hillTrack) {
         hillTrack.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollTopolitics = () => {
      let politics = document.getElementById("politics");

      if (politics) {
         politics.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollToNatAdd = () => {
      let natAdd = document.getElementById("nat_add");

      if (natAdd) {
         natAdd.scrollIntoView({ behavior: "smooth" });
      }
   };

   let [moreShow, setMoreShow] = useState(false);
   let handleToggleMore = () => {
      setMoreShow(!moreShow);
   };

   let [menuShow, setMenuShow] = useState(false);
   let handleToggleMenu = () => {
      setMenuShow(!menuShow);
   };

   return (
      <header className="sticky top-0 z-9999">
         <nav className=" p-4 bg-[#F2F2F2] sm:py-4 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]  relative z-9999">
                  
            <Container>
               <Flex className="items-center justify-between relative">
                  <Category menuShow={menuShow}/>
                  <div className="flex items-center gap-5">
                     <TiThMenu
                        onClick={handleToggleMenu}
                        className="block sm:hidden text-2xl cursor-pointer"
                     />

                     <Image
                        src={Logo}
                        alt="logo_img"
                        className="cursor-pointer"
                        onClick={handleScrollToHome}
                     />
                  </div>

                  <ul className="hidden sm:flex items-center gap-6 relative">
                     <ListItems
                        onClick={handleScrollToHome}
                        list={"Home"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToHillTrack}
                        list={"Hill Districts"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollTopolitics}
                        list={"Politics"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"National"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"Administrative"}
                        className="text-[20px] hover:font-medium"
                     />
                     <span className="flex items-center">
                        <ListItems
                           onClick={handleToggleMore}
                           list={"More"}
                           className="text-[20px] hover:font-medium"
                        />
                        <MdOutlineKeyboardArrowDown
                           onClick={handleToggleMore}
                           className={`${
                              moreShow
                                 ? "hidden"
                                 : "cursor-pointer bg-transparent text-black"
                           }`}
                        />
                        <MdOutlineKeyboardArrowUp
                           onClick={handleToggleMore}
                           className={`${
                              moreShow
                                 ? "cursor-pointer bg-transparent text-black"
                                 : "hidden"
                           }`}
                        />
                     </span>

                     <span
                        className={`${
                           moreShow
                              ? "w-auto  bg-[#F5F5F5] rounded-xl top-[50px] -right-15 absolute"
                              : "hidden"
                        }`}>
                        <ListItems
                           list={"Education"}
                           className="text-[20px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                        />
                        <ListItems
                           list={"Health"}
                           className="text-[20px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                        />
                        <ListItems
                           list={"Court & Law"}
                           className="text-[20px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                        />
                     </span>
                  </ul>

                  <div className="flex items-center gap-6">
                     <Icon />
                     <div className="flex items-center gap-1">
                        {/* <input type="text" className="border rounded-xl text-[16px] px-2 py-0.5 border-[#929292] bg-[#ffffff]" /> */}
                     <IoSearchCircleSharp className="text-[35px] rounded-full cursor-pointer " />
                     </div>
                  </div>
               </Flex>
            </Container>
         </nav>
      </header>
   );
};

export default Header;
