import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
<div className=' bg-fuchsia-200 border-2 border-fuchsia-700 p-2'>
    
  <div className="flex  items-start justify-center gap-10 
     text-4xl pt-16 bg-fuchsia-200
    
    ">
  <FaFacebookSquare className="text-blue-600 ease-in-out transform hover:scale-150 "/>
  <FaXTwitter className="text-bg-purple ease-in-out transform hover:scale-150"/>
  <FaPinterest className='text-red-700 ease-in-out transform hover:scale-150'/>
  <FaWhatsappSquare className='text-green-700 ease-in-out transform hover:scale-150'/>
  </div>

    <div className="flex flex-col space-y-12 justify-center m-10 mb-0
     bg-fuchsia-200 " >
<p className='text-center hover:text-white text-black mb-8  font-extrabold
 bg-fuchsia-700'> 
  Shabnam Wahid 2024 All Rights Reserved</p>


</div>

    </div>
  ); 
};


export default Footer;


