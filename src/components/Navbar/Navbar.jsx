import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import images from '../../images'
import LogoutIcon from '@mui/icons-material/Logout'
import Dropdown from './Dropdown'
import axios from 'axios'
import { googleLogout } from '@react-oauth/google';
import { Avatar } from '@mui/material';
import Search from '../../components/Search';


const Navbar = ({ type, page }) => {
  const navigate = useNavigate()
  const [overlay, isOverlay] = useState(false)
  const [colour, setColour] = useState(false)
  const [user,setUser] = useState();
  const [initial,setInitial] = useState(true);
  const handleSignup = () => {
    navigate('/signin')
  }
  const Token = sessionStorage.getItem('token')
  const config = {
    withCredentials: true,
    headers: {
      'Authorization': `bearer ${Token}`,
      'Content-Type': 'application/json'
    }
  }
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/api/auth/logout', config)
      sessionStorage.clear()
      localStorage.clear()
      googleLogout()
      navigate('/signin')
    } catch (err) {
      console.log(err)
    }
  }
  const handleFill = () => {
    setColour(!colour)
  }
  const colorStyle = { color: '#FFD700' }

  const userdata = async () => {
      try {
          const { data } = await axios.get(`http://localhost:5000/api/user`, config)
          console.log(data)
          setUser(data)
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(()=>{
    if(initial && type === 'verified'){
      setInitial(false)
      userdata();
    }
  },[initial])

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
                  <li onClick={() => { navigate('/home') }}> Home</li>
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
            <img src={logo} alt="logo" class="h-2/3 w-full sm:h-full " />
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
              <li onClick={() => { navigate('/home') }} class="hover:text-pink-500">Home</li>
              <li class="hover:text-pink-500">Academics</li>
              <li class="hover:text-pink-500">
                <a href="#form">Contact Us</a>
              </li>
            </ul>

            <div className="flex gap-9">
              <Search/>
            </div>
            <div class="flex gap-5 items-center">
              {page &&
                <Dropdown page={page} />
              }
              <div class="cursor-pointer">
                <NotificationsIcon
                  style={colour ? colorStyle : null}
                  onClick={handleFill}
                />
              </div>
              <div class="flex items-center cursor-pointer" onClick={()=>{navigate('/profile')}}>
              <Avatar sx={{ borderRadius: "50%" }} alt="dp" src={user?.image}>{user?.firstname?.charAt(0)}</Avatar>
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
