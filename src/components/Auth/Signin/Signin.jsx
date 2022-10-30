import React from 'react';
import logo from '../../../assets/logo.jpg';
import back from '../../../assets/back.svg';
const Signin = () => {
  return (
    <div class='flex-col h-full'>
      <div class='mt-4'>
        <img src={logo} alt="logo" class='w-48 h-24' />
        {/* <img src={back} alt="" /> */}
      </div>
    </div>
  )
}

export default Signin