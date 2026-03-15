import React from "react";
function Navbar(){
return(
    <>
    <div className='bg-[#816E55]'>
       <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1"><path stroke-width="1.5" d="M21 7.485c0-1.098 0-1.646-.276-2.11S19.939 4.609 18.922 4l-1.294-.774c-1.597-.956-2.396-1.434-3.012-1.138S14 3.245 14 4.967V22h7z"/><path stroke-linecap="round" stroke-width="1.5" d="M22 22H2M14 9h-4m4 6h-4"/><path stroke-width="1.5" d="M3 7.485c0-1.098 0-1.646.276-2.11S4.061 4.609 5.078 4l1.294-.774C7.97 2.269 8.768 1.79 9.384 2.087S10 3.245 10 4.967V22H3z"/><path stroke-linecap="round" stroke-width="2" d="M6.501 8h-.009m.01 4h-.01m.01 4h-.01m11.009-8h-.009m.01 4h-.01m.01 4h-.01"/></g></svg>
      <span class="ml-3 text-xl text-white">Urban Utopia</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Services</a>
      <a class="mr-5 hover:text-gray-900">Resources</a>
    </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200  text-[#806E55] text-base mt-4 md:mt-0">Contact
      
    </button>
  </div>
</header>
    </div>
    
    </>
)


}
export default Navbar;