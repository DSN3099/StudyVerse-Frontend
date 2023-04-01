import React, { useState } from 'react';
import logo from '../../../assets/logo.jpeg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [states, setStates] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    passerr: false,
    emailerr: false,
  })
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validator.isEmail(states.email)) {
      setStates({
        ...states,
        emailerr: false,
      })
    }
    else {
      setStates({
        ...states,
        emailerr: true,
      })
    }
    const res = !states.passerr && validator.isEmail(states.email)
    if (res)
      console.log(states)
    else
      console.log('Please fill the details properly...')
  }
  const handleChange = (e) => {
    const pass = e.target.value
    if (validator.isStrongPassword(pass, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setStates({
        ...states,
        password: pass,
        passerr: false,
      })
    } else {
      setStates({
        ...states,
        password: pass,
        passerr: true,
      })
    }
  }

  return (
    <div class='flex flex-col w-full items-center ' >
      <div class='w-max h-max sm:justify-center sm:w-full sm:flex'>
        <img src={logo} alt="logo" class='w-5/6 h-5/6 sm:w-3/6'/>
      </div>
      <div class='flex justify-center items-center w-full h-full'>
        <div class='flex flex-col w-1/2 h-1/2 sm:w-full sm:h-full md:w-5/6 md:gap-5 lg:w-4/6 lg:gap-5 gap-2.5'>
          <div class='font-sans text-2xl font-bold'>Sign Up</div>
          <div class='flex flex-col gap-2'>
            <div class='flex w-full gap-1 rounded-md bg-blue-600 text-white items-center p-2 justify-center cursor-pointer'>
              <GoogleIcon style={{ color: 'white', width: '16px', height: '16px' }} />
              <div class='text-sm'>Sign up with Google</div>
            </div>
            <div class='flex w-full gap-1 rounded-md bg-indigo-800 text-white items-center p-2 justify-center cursor-pointer'>
              <FacebookRoundedIcon style={{ color: 'white', width: '16px', height: '16px' }} />
              <div class='text-sm'>Sign up with Facebook</div>
            </div>
            <div class='flex w-full gap-1 rounded-md bg-black text-white items-center p-2 justify-center cursor-pointer'>
              <AppleIcon style={{ color: 'white', width: '16px', height: '16px' }} />
              <div class='text-sm'>Sign up with Apple</div>
            </div>
          </div>
          <div class='flex gap-2 items-center justify-center'>
            <div class='w-1/2 h-px bg-slate-300'></div>
            <div class='text-gray-600'>OR</div>
            <div class='w-1/2 h-px bg-slate-300'></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div class='flex flex-col gap-2 md:gap-5 lg:gap-5'>
              <div class='flex gap-5 w-full'>
                <div class='flex flex-col w-full'>
                  <div>First name</div>
                  <div>
                    <input type="text" onChange={e => { setStates({ ...states, fname: e.target.value }) }} required class='mt-1 w-full border border-slate-500 rounded-md p-1 focus:outline-none' />
                  </div>
                </div>
                <div class='flex flex-col w-full'>
                  <div>Last name</div>
                  <div>
                    <input type="text" onChange={e => { setStates({ ...states, lname: e.target.value }) }} required class='mt-1 w-full border border-slate-500 rounded-md p-1 focus:outline-none' />
                  </div>
                </div>
              </div>
              <div class='flex flex-col w-full'>
                <div>Email</div>
                <div class='w-full'>
                  <input type="text" required onChange={e => { setStates({ ...states, email: e.target.value }) }} placeholder='example.email@gmail.com' class='mt-1 w-full border border-slate-500 rounded-md p-1 pl-1 focus:outline-none' />
                </div>
                {states.emailerr && <div class='text-red-600'>Invalid email!!!</div>}
              </div>
              <div class='flex flex-col w-full'>
                <div>Password</div>
                <div class=' flex w-full border border-slate-500 rounded-md p-1 items-center justify-between'>
                  <input type={showPassword ? 'text' : 'password'} required onChange={handleChange} placeholder='Enter atleast 8+ characters' class='mt-1 pl-1 w-5/6 focus:outline-none' />
                  <div class='pr-1' onClick={() => { setShowPassword(!showPassword) }}>{!showPassword ? <VisibilityOffIcon style={{ width: '16px', height: '16px' }} /> : <VisibilityIcon style={{ width: '16px', height: '16px' }} />}</div>
                </div>
                {states.passerr && <div class='text-red-600'>Please choose a strong password...</div>}
              </div>
              <button class='flex w-full bg-blue-700 text-white py-2 items-center justify-center rounded-md' type="submit">Sign up</button>
            </div>
          </form>
          <div class='flex gap-1 justify-center'>
            Already have an account?
            <ul>
              <li class='text-blue-500 cursor-pointer' onClick={()=>{navigate('/signin')}}>Sign in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup;