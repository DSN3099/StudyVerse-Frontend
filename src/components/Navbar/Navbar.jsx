import logo from '../../assests/logo.jpeg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup")
  }

  return (
    <div class="main flex gap-x-5 w-full" >
      <div class='w-max h-max '>
        <img src={logo} alt='logo' class="h-2/3 w-2/3" />
      </div>
      <div class='flex items-center justify-around w-4/5 '>
        <ul class='flex gap-x-20 cursor-pointer ' >
          <li>Home</li>
          <li>Academics</li>
          <li>About</li>
        </ul>
        <ul class='jystify-end cursor-pointer'>
          <li onClick={handleSignup}>Sign In/Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;