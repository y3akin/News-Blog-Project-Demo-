import React, { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Image from "./UI/Image";
import Logo from "../assets/Image/logo.png";
import ListItems from "./UI/ListItems";
import Icon from "./UI/Icon";
import { IoSearchCircleSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


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
      setMoreShow(!moreShow)
   };

   return (
      <header className=" sticky top-0 z-[9999]">
         <nav className="bg-[#F2F2F2] py-4 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]  relative z-[9999]">
            <Container>
               <Flex className="items-center justify-between">
                  <div className="flex items-center gap-5">
                     {/* <TiThMenu className="text-2xl cursor-pointer" /> */}

                     <Image
                        src={Logo}
                        alt="logo_img"
                        className="cursor-pointer"
                        onClick={handleScrollToHome}
                     />
                  </div>

                  <ul className="flex items-center gap-6 relative">
                     <ListItems onClick={handleScrollToHome} list={"Home"} />
                     <ListItems
                        onClick={handleScrollToHillTrack}
                        list={"Hill Districts"}
                     />
                     <ListItems
                        onClick={handleScrollTopolitics}
                        list={"Politics"}
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"National"}
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"Administrative"}
                     />
                     <span className="flex items-center"><ListItems onClick={handleToggleMore} list={"More"} /> <MdOutlineKeyboardArrowDown onClick={handleToggleMore} className="cursor-pointer bg-transparent text-black" /></span>


                    <span className={`${moreShow ?  "w-auto  bg-[#F5F5F5] rounded-xl top-[50px] -right-15 absolute" : "hidden"}`}>
                      <ListItems list={"Education"} className="hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300" />
                     <ListItems list={"Health"} className="hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"/>
                     <ListItems list={"Court & Law"} className="hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"/>
                    </span>
                  </ul>

                  <Flex className="items-center gap-6">
                     <Icon />
                     <IoSearchCircleSharp className="text-[35px] rounded-full cursor-pointer " />
                  </Flex>
               </Flex>
            </Container>
         </nav>
      </header>
   );
};

export default Header;
