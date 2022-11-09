import logo from '../../assets/logo.jpg';
import logo from '../../assets/logo.jpeg';
import search from '../../assets/search.svg'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup")
  }

  return (
    <div class="main flex gap-x-5 w-full" >
      <div class='w-max h-max '>
        <img src={logo} alt='logo' class="h-2/3 w-2/3 pl-1 sm:w-1/2 "x/>
      </div>
      <div class='hidden'>
        <MenuIcon/>
      </div>
      <div class='flex items-center justify-around w-4/5 sm:hidden '>
        <ul class='flex gap-x-20 cursor-pointer ' >
          <li class='hover:text-blue-500'>Home</li>
          <li class='hover:text-blue-500'>Academics</li>
          <li class='hover:text-blue-500'>About</li>
        </ul>
        <div>
          <div class = 'flex bg-gray-100 p-1 rounded-md items-center gap-1'>
            <img src={search} alt="search" class = 'w-5' />
            <input type="text" placeholder='Search...' class= 'focus:outline-none bg-gray-100 text-gray-500' />
          </div>
        </div>
        <ul class='jystify-end cursor-pointer'>
          <li onClick={handleSignup} class='hover:text-blue-500'>Sign In/Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;