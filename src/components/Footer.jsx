import React from 'react'
import logoद from '../assets/logo.jpeg'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/Twitter.svg'
import youtube from '../assets/Youtube.svg'
import linkedin from '../assets/Linkedin.svg'

const Footer = () => {
  return (
    <div className="bg-gray-200/40  flex flex-col ">
      <div class="flex justify-evenly mt-9">
        {/* logo */}
        <div class="h-full w-1/5">
          <img src={logo} alt="" />
        </div>
        {/* Footer items */}
        <div class="grid grid-col-3 grid-flow-col gap-7 ">
          <div class="font-bold flex flex-col gap-y-4">
            Product
            <div class="font-thin">Features</div>
            <div class="font-thin">Pricing</div>
          </div>
          <div class="font-bold flex flex-col gap-y-4">
            Resource
            <div class="font-thin">Blog</div>
            <div class="font-thin">User Guides</div>
            <div class="font-thin">Webinars</div>
          </div>
          <div class="font-bold flex flex-col gap-y-4">
            Comapny
            <div class="font-thin">About Us</div>
            <div class="font-thin">Join Us</div>
          </div>
        </div>
        {/* newsletter */}
        <div class="flex flex-col gap-y-4">
          <div class="font-bold">Newsletter</div>
          <div class="font-thin">
            Subscribe to our newsletter to get the latest news and updates
          </div>
          <div class="flex justify-around">
            <input
              type="text"
              placeholder="Enter your email"
              class="border border-gray-300 rounded-md px-8 focus:outline-none "
            />
            <button class="bg-indigo-700 text-white rounded-md p-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* border line */}
      <div class="border-t border-black-300 mt-9"></div>
      <div class="flex justify-around">
        {/* privacy */}
        <div class=" m-7 px-3 py-2 h-full border border-gray-500  rounded-md ">
          English
        </div>
        <div class="flex items-center  gap-4 cursor-pointer">
          <div>@2022 Brand Inc -</div>
          <div>Privacy -</div>
          <div>Terms -</div>
          <div>Sitemap </div>
        </div>
        {/* social media */}
        <div class="flex items-center gap-3 cursor-pointer  ">
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={twitter} alt="twitter" />
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={facebook} alt="" />
          <img  class='h-8 w-8  transform transition duration-500 hover:scale-110' src={linkedin} alt="" />
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={youtube} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
