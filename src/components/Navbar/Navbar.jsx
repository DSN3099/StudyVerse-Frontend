import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import images from '../../images'
import LogoutIcon from '@mui/icons-material/Logout'
import Dropdown from './Dropdown'

const Navbar = ({ type,page }) => {
  const navigate = useNavigate()
  const [overlay, isOverlay] = useState(false)
  const [colour, setColour] = useState(false)
  const handleSignup = () => {
    navigate('/signin')
  }
  const handleLogout = () => {
    navigate('/signin')
  }
  const handleFill = () => {
    setColour(!colour)
  }
  const colorStyle = { color: '#FFD700' }

  return (
    <>
      {overlay && (
        <div class="hidden sm:flex sm:w-full sm:z-20 sm:h-full sm:absolute ">
          <Dropdown />
          <div class="flex flex-col w-2/3 h-full items-center gap-2.5 bg-white">
            <div class="w-3/4 flex h-max self-start pl-1 ">
              <img src={logo} alt="" class="w-full h-full " />
            </div>
            <div class="w-full h-max ">
              <div class="w-full h-max ">
                <ul class="flex flex-col pl-5 gap-2.5 cursor-pointer ">
                  <li> Home</li>
                  <li>Academics</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {type === 'notVerified' && (
                <button
                  onClick={handleSignup}
                  class="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white mt-5 w-5/6 px-2 py-1 rounded-full"
                >
                  Login/Register
                </button>
              )}
              {type === 'verified' && (
                <div class="flex cursor-pointer border-2 border-pink-500 rounded-md p-1 text-pink-500 hover:text-white hover:bg-pink-500 transition ease-in duration-300 font-semibold">
                  <LogoutIcon />
                  <div>Log Out</div>
                </div>
              )}
            </div>
            <div class="flex w-1/3 h-full bg-gray-300/80">
              <div onClick={() => isOverlay(false)} class="pt-5">
                <CloseIcon style={{ color: 'white' }} />
              </div>
            </div>
          </div>
        </div>
      )}
          
      {type === 'notVerified' && (
        <div class="main flex gap-5 w-full sm:px-2 px-5 justify-between items-center">
          <div class="flex w-60 sm:w-max h-max">
            <img src={logo} alt="logo" class="h-2/3 w-full sm:h-full " x />
          </div>
          <div class="w-1/2 flex justify-end">
            <button
              onClick={handleSignup}
              class="border-2 font-semibold border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-2 py-1 rounded-lg text-base transition ease-in duration-500"
            >
              Login/Register
            </button>
          </div>
        </div>
      )}
      {type === 'verified' && (
        <div class="main flex gap-5 w-full sm:px-2 px-5 justify-evenly">
          <div class="flex w-60 sm:w-max h-max">
            <img src={logo} alt="logo" class="h-2/3 w-full sm:h-full " x />
          </div>
          <div class="hidden sm:flex sm:items-center sm:justify-evenly sm:w-full sm:gap-5">
            <div class="flex cursor-pointer border-2 border-pink-500 rounded-md p-1 text-pink-500 hover:text-white hover:bg-pink-500 transition ease-in duration-300 font-semibold">
              <LogoutIcon />
              <div>Log Out</div>
            </div>
            <div onClick={() => isOverlay(true)}>
              <MenuIcon />
            </div>
          </div>
          <div class="flex items-center justify-between w-4/5 sm:hidden ">
            <ul class="flex gap-16 lg:gap-10 cursor-pointer font-medium ">
              <li class="hover:text-pink-500">
                <a href="#home">Home</a>
              </li>
              <li class="hover:text-pink-500">Academics</li>
              <li class="hover:text-pink-500">
                <a href="#form">Contact Us</a>
              </li>
            </ul>
           
            <div className="flex gap-9">
              <div class="flex bg-gray-100 p-1 rounded-md items-center gap-1">
                <img src={search} alt="search" class="w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  class="focus:outline-none bg-gray-100 text-gray-500"
                />
              </div>
            </div>
            <div class="flex gap-5 items-center">
            <Dropdown page={page} />
              <div class="cursor-pointer">
                <NotificationsIcon
                  style={colour ? colorStyle : null}
                  onClick={handleFill}
                />
              </div>
              <div class="flex items-center">
                <img
                  src={images.jevon}
                  class="rounded-full w-8 hover:scale-150 cursor-pointer"
                  alt="profile"
                />
              </div>
              <div
                class="flex cursor-pointer border-2 border-pink-500 rounded-md p-1 text-pink-500 hover:text-white hover:bg-pink-500 transition ease-in duration-300 font-semibold"
                onClick={handleLogout}
              >
                <LogoutIcon />
                <div>Log Out</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
