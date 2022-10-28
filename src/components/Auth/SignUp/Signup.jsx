import React from 'react';
import logo from '../../../assests/logo.jpg'
const Signup = () => {
  return (
    <div class = 'flex w-full' >
      <div class='flex w-1/3 ' >
        <img src={logo} alt="logo" class = 'w-44' />
      </div>
      <div class = 'flex-col justify-center w-full'>
        <div class = 'flex justify'>Sign Up</div>
      </div>
    </div>
  )
}
export default Signup;