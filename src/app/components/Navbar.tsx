import React from 'react'
import { FaGripfire } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
   <div className="    grid  xl:grid-cols-1 grid-cols-1 border-x-2">
        <div className="p-4">
          <div className=" bg-fuchsia-200 py-0 px-0 rounded-full  min-w-fit border-y-fuchsia-700
           border-x-fuchsia-700 border-2 outline-offset-[6px]">
            <div className=" text-slate-700 flex justify-between items-center px-16">
              <div className="flex justify-items-center items-center gap-6">
                {/* page logo  */} 
                <FaGripfire className="w-24 h-24 text-fuchsia-700 hover:text-black"/>
                {/* search icon */}
                <div style={{ position: "relative" }}>
  <input
    className=" bg-white   rounded-2xl py-2 px-2 outline-2 text-xs w-[280px] pr-10 "
    placeholder="Search for your Favorite food items."
  />
   <FaSearch className="w-5 h-5 text-black absolute font-extrabold
          right-0 left-56 top-2.5 transform translate-x-1/2"
          />
         </div>  
         <ul className="flex gap-4  lg:gap-20 items-center font-bold text-[20px] ml-auto outline-offset-[3px] ">
  <li className="hover:text-fuchsia-700 flex gap-2">Home</li>
  <li className="hover:text-fuchsia-700 flex gap-2">About</li>
  <li className="hover:text-fuchsia-700 flex gap-2">Contact</li>
  <li className="hover:text-fuchsia-700 flex gap-2">Order</li>

  {/* shopping cart logo */}
  <div className="inline-block w-14 h-14">
    <FaCartShopping className="w-14 h-14 text-black hover:text-fuchsia-700" />
  </div>
</ul>
                </div> 
   
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}; 
   export default Navbar
