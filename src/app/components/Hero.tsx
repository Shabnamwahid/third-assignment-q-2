import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen">

    <Image className="absolute right-0 top-1.5 z-10 lg:w-[600px] xl:w-[620px] h-auto rounded-l-full"
       
    src="/nuts-4.jpg" 
     width={800} height={660}
    alt="hero bg" />
     <div className="container h-[calc(100vh-120px)] grid items-center">
<div className="space-y-4 bg-[#ffffff98] w-fit p-4">
<p className="uppercase  font-black ">Winter Treat With Crazy</p>
<h1 className="text-4xl sm:text-6xl font-bold">Nutty 
  <span className="text-fuchsia-700">Delight</span> </h1>

<p className="text-slate-700 text-[40px] sm:text-[16px]">Healthy & Natural Food For Brain n Body
<br />What are you Waiting for???</p>
<button className="bg-fuchsia-700 text-white px-4 py-2 rounded-3xl  text-[14px] sm:text-[16px]">
  view more
</button>

</div>
     </div>
    </div>
  );
};

export default Hero;


