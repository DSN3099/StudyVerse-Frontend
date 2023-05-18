import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LogoutIcon from '@mui/icons-material/Logout'
import Dropdown from './Dropdown'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from 'axios'
import { googleLogout } from '@react-oauth/google';
import { Avatar } from '@mui/material';
import Search from '../../components/Search';


const Navbar = ({ type, page, isProfile, isCart,setCart,component }) => {
  const navigate = useNavigate()
  const [colour, setColour] = useState(false)
  const [isCartt, setIsCartt] = useState()
  const [user, setUser] = useState();
  const [initial, setInitial] = useState(true);

  const isTeacher = localStorage.getItem('isTeacher')

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
      setUser(data)
      setCart(data.cart)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (type === 'verified') {
      setInitial(false)
      userdata();
      setIsCartt(isCart)
    }
  }, [initial, isCartt,isCart])

  return (
    <>
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
        <div class="main flex gap-5 w-full sm:px-2 px-5 justify-evenly shadow-sm border-b border-gray-300">
          <div class="flex w-52 sm:w-max h-max">
            <img src={logo} alt="logo" class="h-2/3 w-full sm:h-full " />
          </div>
      
          <div class="flex items-center justify-between w-4/5 sm:hidden ">
            <ul class="flex gap-16 lg:gap-10 cursor-pointer font-medium ">
              {isTeacher !== 'true' &&
                <li onClick={() => { navigate('/home') }} class="hover:text-pink-500">Home</li>
              }
              {/* {isTeacher !== 'true' &&
                <li class="hover:text-pink-500">Academics</li>
              } */}
              {isTeacher === 'true' &&
                <li class="hover:text-pink-500">
                  <a href="/teacher">Create Course</a>
                </li>
              }
              {/* {isTeacher === 'true' &&
                <li class="hover:text-pink-500">
                  <a href="/teacher/mycourse">My Course</a>
                </li>
              } */}
              {component !== 'study' && <li class="hover:text-pink-500">
                <a href="#form">Contact Us</a>
              </li>}
            </ul>

            <div className="flex gap-9">
              <Search />
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
              {isTeacher !== 'true' &&
                <div className='relative' onClick={() => navigate(`/checkout`)}>
                  {user?.cart?.length >0 && <div className='w-3 h-3 rounded-full bg-pink-500 absolute right-0 '></div>}
                  <ShoppingCartOutlinedIcon className='cursor-pointer' />
                </div>
              }
              {!isProfile && <div class="flex items-center cursor-pointer" onClick={() => { const isTeacher = localStorage.getItem('isTeacher'); navigate(`/${isTeacher === "true" ? 'teacherform' : 'profile'}`) }}>
                <Avatar sx={{ borderRadius: "50%" }} alt="dp" src={user?.image}>{user?.firstname?.charAt(0)}</Avatar>
              </div>}
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
