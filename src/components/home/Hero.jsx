

import React from "react";

function  Hero(){
    return(
        <>
  <section class="text-gray-600 body-font bg-[#F4ECE3]">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-5xl  mb-4 font-bold  text-[#6B5D44]">Find Your
        <br class="title-font sm:text-5xl  mb-4 font-bold  text-[#6B5D44]"/>Perfect Home
      </h1>
      <p class="mb-8 leading-relaxed text-black">We offer you quality homes at affordable prices</p>
      <div class="flex justify-center -1.5 ">
        <button class="inline-flex text-white mr-3.5 bg-[#6B5D44] border-0 py-2 px-6 focus:outline-none hover:bg-[#806E55] text-lg ">Contact us</button>
        <div style={{borderRadius:"50%",border:"4px solid white",backgroundColor:"white"}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 15 15" ><path fill="#6B5D44" d="M6.748 5.066A.5.5 0 0 0 6 5.5v4a.5.5 0 0 0 .748.434l3.5-2a.5.5 0 0 0 0-.868z"/></svg>
   </div> </div>
    </div>
    <div class="lg:max-w-lg lg:w-full w-5/6">
<img src="https://i.pinimg.com/originals/95/39/cc/9539ccb55514a07d22fba95e803f11df.jpg" className="object-cover items-center" alt="House"/>
    </div>
  </div>
</section>
        </>
    )
}

export default Hero
