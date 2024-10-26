import React from "react"
import Dash from "./Dash"
import Image from "next/image"



function About() {
  return (
     
    <div className="container pt-2 mr-3  ">
    <h2 className="text-6xl font-bold space-x-4  ml-6 ">Our</h2>
    <h2 className="text-6xl font-bold pt-2  ml-6  ">  Nuts<span className="text-fuchsia-700">
      Available</span> 
    </h2>
    <p className="max-m-[550px] pt-8 text-black text-boldtext-[40px]
     sm:text-[16px]  ml-6">
    Feel Good, Eat Dry Fruit.
Sun-Dried Perfection, Bursting With <br/>
Pure, Wholesome Snacking Made Easy.
Naturally Sweet, Always Satisfying. <br/>
Sweet, Natural, and Oh So Tasty!
More items are Available
    </p>

    {/* new image 1 */}
    {/* <Dash /> */}
    
<div className="flex gap-20 mt-10 ">
 
 
  <br />
  <div className="w-fit mx-auto ease-in -out transform hover:scale-105  ">
    <Image
      className="w-[199%] max-w-[400px] sm:max-w-52 h-60 shadow-2xl
       ease-in-out transform hover:scale-110 border-2 border-slate-200"
      src="/nuts-1.jpg"
      
      width={300}
      height={600}
      alt="/grid image"
    />
    
    <div className="space-y-4">
      <Dash />
      <h2 className="font-medium text-xl mr-2">Cashew Nuts</h2>
      <p className="text-black text-[14px] xl:text-[16px] mr-2">
      Cashews are seeds rich in nutrients, antioxidants, and fiber. 
      They may help with weight loss, heart health
      </p>
      <br />
    </div>
  </div>

<br />
 {/* Image 2 */}
  <div className="w-fit mx-auto ease-in-out transform hover:scale-110 ">
    <Image
      className="w-[199%] max-w-[400px] sm:max-w-48 h-60 shadow-2xl border-2 border-slate-200"
      src="/nuts.png"
      width={300}
      height={600}
      alt="/grid image"
    />
    <div className="space-y-4">
      <Dash />
      <h2 className="font-medium text-xl">Pistacho</h2>
      <p className="text-black text-[14px] xl:text-[16px]">
        Pistachios  may support weight loss,
         blood sugar control, and heart health.
      </p>
    </div>
  </div>

<br />
{/* Image 3 */}
  <div className="w-fit mx-auto ease-in-out transform hover:scale-110">
    <Image
      className="w-[199%] max-w-[400px] sm:max-w-44 h-60   shadow-2xl border-2 border-slate-200"
      src="/nuts-7.jpeg"
      width={300}
      height={600}
      alt="/grid image"
    />
    <div className="space-y-4">
      <Dash />
      <h2 className="font-medium text-xl">Almonds</h2>
      <p className="text-black text-[14px] xl:text-[16px]">
        Almonds are rich in a variety of nutrients, blood sugar control, and heart health.
      </p>
    </div>
  </div>

<br />
  {/* Image 4 */}
  <div className="w-fit mx-auto ease-in-out transform hover:scale-110">
    <Image
      className="w-[199%] max-w-[400px] sm:max-w-48 h-60 shadow-2xl border-2 border-slate-200"
      src="/nuts-2.jpg"
      width={300}
      height={600}
      alt="/grid image"
    />
    <div className="space-y-4">
      <Dash />
      <h2 className="font-medium text-xl">Walnuts</h2>
      <p className="text-black text-[14px] xl:text-[16px]">
        Walnuts are a healthy nut chock-full of essential nutrients  omega-3 fatty acids and antioxidants.
      </p>
    </div>
  </div>

<br />
  {/* Image 5 */}
  <div className="w-fit mx-auto  ease-in-out transform hover:scale-110">
    <Image
      className="w-[199%] max-w-[400px] sm:max-w-48 h-60 shadow-2xl border-2 border-slate-300"
      src="/nuts-6.jpg"
      width={300}
      height={900}
      alt="/grid image"
    />
    <div className="space-y-4">
      <Dash />
      <h2 className="font-medium text-xl">Fig</h2>
      <p className="text-black text-[14px] xl:text-[16px]">
        Figs are a fat-free, cholesterol-free food that can help with high blood pressure,
        and bone density.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default About
