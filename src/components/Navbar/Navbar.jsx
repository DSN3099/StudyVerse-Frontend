import logo from '../../assets/logo.jpeg'
import search from '../../assets/search.svg'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [overlay, isOverlay] = useState(false)
  const handleSignup = () => {
    navigate('/signin')
  }

  return (
    <>
      {overlay && (
        <div class="hidden sm:flex sm:w-full sm:z-20 sm:h-full sm:absolute">
          <div class="flex flex-col w-2/3 h-full items-center gap-2.5 bg-white">
            <div class="w-3/4 flex h-max self-start pl-1 ">
              <img src={logo} alt="" class="w-full h-full " />
            </div>

            <div class="w-full h-max ">
              <ul class="flex flex-col pl-5 gap-2.5 cursor-pointer ">
                <li class="hover:text-pink-500">Home</li>
                <li class="hover:text-blue-500">Academics</li>
                <li class="hover:text-blue-500">About</li>

            <div class='w-full h-max '>
              <ul class='flex flex-col pl-5 gap-2.5 cursor-pointer ' >
                <li>Home</li>
                <li>Academics</li>
                <li>About</li>
                <li>Contact Us</li>

              </ul>
            </div>
            <button
              onClick={handleSignup}
              class="border-2 border-pink-500  hover:bg-pink-500 hover:text-white mt-5 w-5/6 text-white px-2 py-1 rounded-full"
            >
              Login/Register
            </button>
          </div>
          <div class="flex w-1/3 h-full bg-gray-300/80">
            <div onClick={() => isOverlay(false)} class="pt-5">
              <CloseIcon style={{ color: 'white' }} />
            </div>
          </div>
        </div>
      )}
      <div class="main flex gap-x-5 w-full sm:px-2">
        <div class="flex w-60 sm:w-max h-max">
          <img src={logo} alt="logo" class="h-2/3 w-full pl-1 sm:h-full " x />
        </div>
        <div class="hidden sm:flex sm:items-center sm:justify-evenly sm:w-full sm:gap-5">
          <button
            onClick={handleSignup}
            class="border-2 border-pink-500 font-semibold text-pink-500 w-20  px-2.5 rounded-full"
          >
            Login
          </button>
          <div onClick={() => isOverlay(true)}>
            <MenuIcon />
          </div>
        </div>

        <div class="flex items-center justify-around w-4/5 sm:hidden ">
          <ul class="flex gap-20 lg:gap-10 cursor-pointer font-medium ">
            <li class="hover:text-pink-500">Home</li>
            <li class="hover:text-pink-500">Academics</li>
            <li class="hover:text-pink-500">About</li>

        <div class='flex items-center justify-around w-4/5 sm:hidden '>
          <ul class='flex gap-20 lg:gap-10 cursor-pointer font-medium ' >
            <li class='hover:text-pink-500'>Home</li>
            <li class='hover:text-pink-500'>Academics</li>
            <li class='hover:text-pink-500'>About</li>
            <li class='hover:text-pink-500'>Contact Us</li>

          </ul>
          <div>
            <div class="flex bg-gray-100 p-1 rounded-md items-center gap-1">
              <img src={search} alt="search" class="w-5" />
              <input
                type="text"
                placeholder="Search..."
                class="focus:outline-none bg-gray-100 text-gray-500"
              />
            </div>
          </div>

          <button
            onClick={handleSignup}
            class="border border-2 font-semibold border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg transition ease-in duration-500"
          >
            Login/Register
          </button>

          <button onClick={handleSignup} class='border-2 font-semibold border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg transition ease-in duration-500'>Login/Register</button>

        </div>
      </div>
    </>
  )
}

export default Navbar
