import React from 'react'
import { TbBrandFacebook } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";


const Icon = () => {
  return (
    <div className='hidden sm:flex items-center gap-2'>
      <TbBrandFacebook className='w-8 cursor-pointer text-[20px]' />
      <BsInstagram className='w-8 cursor-pointer text-[20px]' />
      <FaXTwitter className='w-8 cursor-pointer text-[20px]' />
      <AiOutlineYoutube className='w-8 cursor-pointer text-[20px]' />
    </div>
  )
}

export default Icon
