import React from 'react';
import logo from '../../../assets/logo1.jpg';
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

const Signin = () => {
  const navigate = useNavigate();
  const [seepassword,setSeepassword] = useState(false);

  const handleChange = () => {
    navigate('/signup')
  }
  return (
    <div class=' flex items-center gap-8 flex-col sm:w-full '>
      <div class='flex mt-4 justify-center '>
        <img src={logo} alt="logo" class=' w-full h-full sm:w-1/2' />
      </div>
      <div class=' flex justify-center w-full h-full sm:w-full sm:px-10 '>
        <div class=' flex flex-col w-1/2  bg-white gap-3 sm:w-full'>
          <div class='flex  '>
            <span class='font-bold text-3xl'>Sign In</span>
          </div>
          <div class='flex flex-col gap-1 w-full'>
            <button class='flex items-center justify-center  gap-2 bg-blue-600 w-full p-2.5 rounded-md  '>
              <img class='' src="https://img.icons8.com/material-sharp/30/ffffff/google-logo.png" alt='google' />
              <span class='text-2xl text-white'>Sign in with Google.</span>
            </button>
            <button class='flex justify-center flex-row gap-2 bg-indigo-800 w-full p-2.5 rounded-md'>
              <img class='w-8 h-8' src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt='facebook' />
              <span class='text-2xl text-white'>Sign in with Facebook.</span>
            </button>
            <button class='flex justify-center flex-row gap-2 bg-black w-full p-2.5 rounded-md'>
              <img class='w-8 h-8' src="https://img.icons8.com/material-rounded/24/ffffff/mac-os.png" alt='apple' />
              <span class='text-2xl text-white'>Sign in with Apple.</span>
            </button>
          </div>
          <div class='flex items-center justify-center'>
            <div class='border-x-8 bg-slate-500 h-px w-1/2'>  </div>
            <span class='text-gray-600 '>OR  </span>
            <div class='border-x-8 bg-slate-500 h-px w-1/2'></div>
          </div>
          {/* <div> */}
            <div class='flex flex-col gap-4 '>
              <form class='flex flex-col gap-4 '>
                <div class='flex flex-col gap-2'>
                  <span class='text-slate-600 text-1xl font-bold'>Email</span>
                  <div class='flex border-2 border-slate-600 rounded-md w-full items-center'>
                    <div class='flex items-center  ml-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input class='p-2.5 text-gray-700 font-semibold outline-none w-full  ' type="text" placeholder='Enter your Email' />
                    </div>
                  </div>
                </div>
                <div class='flex flex-col gap-2'>
                  <span class='text-slate-600 text-1xl font-bold'>Password</span>
                  <div class='flex border-2 border-slate-600 rounded-md w-full items-center '>
                    <div class='flex items-center justify-between w-full ml-2'>
                      <div class='flex items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input class='p-2.5 text-gray-700 font-semibold outline-none w-full ' type={seepassword ? 'text' : 'password'} placeholder='Enter your Password' />
                      </div>
                      <div class='pr-2.5 cursor-pointer' onClick={() => { setSeepassword(!seepassword) }}>{!seepassword ? <VisibilityOffIcon /> : <VisibilityIcon  />}</div>
                    </div>
                  </div>
                </div>
              </form>
              <div class='flex justify-between w-full'>
                <div class='flex items-center  gap-2'>
                  <input class='w-4 h-4 ' type="checkbox" />
                  <span class='text-xl text-slate-600'>Remember Me</span>
                </div>
                <div class='flex  cursor-pointer '>
                  <span class='text-xl text-slate-600'>Forgot Password?</span>
                </div>
              </div>
              <div>
                <button class='flex items-center justify-center  gap-2 bg-blue-600 w-full p-2.5 rounded-md'>
                  <span class='text-2xl text-white'>Sign in</span>
                </button>
              </div>
              <div class='flex justify-center gap-2 mb-4'>
                <span class='cursor-pointer' onClick={handleChange}>Don't Have An Account?</span>
                <span class='text-sky-500 cursor-pointer' onClick={handleChange}>Sign up</span>
              </div>
            </div>
          {/* </div> */}

        </div>
    <div class='flex-col h-full'>
      <div class='mt-4'>
        <img src={logo} alt="logo" class='w-48 h-24' />
        {/* <img src={back} alt="" /> */}
      </div>
    </div>
  )
}

export default Signin