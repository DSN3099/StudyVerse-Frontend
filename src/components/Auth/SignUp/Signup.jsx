import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo.jpeg'
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [validated, setValidated] = useState(false)
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
    setValidated(true)
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

  useEffect(()=>{
    const handleSignin = async() =>{
      try{
        const data = await axios.post('https://studyverse-su4s.onrender.com/api/auth/register',states)
        console.log(data)
        sessionStorage.setItem('isSignUp','true')
        navigate('/signin')
      }
      catch(err){
        console.log(err)
      }
    }
    if(validated){
      handleSignin()
    }
  },[validated,navigate,states])

  return (
    <div class='flex flex-col gap-8 w-full items-center ' >
      <div class='w-max h-max sm:justify-center mt-4 sm:w-full sm:flex'>
        <img src={logo} alt="logo" class='w-full h-full sm:w-1/2' />
      </div>
      <div class='flex justify-center items-center w-full h-full '>
        <div class='flex flex-col w-1/2 h-1/2 sm:w-full sm:h-full md:w-5/6 md:gap-5 lg:w-4/6 lg:gap-5 gap-2.5'>
          <div class='font-sans text-3xl font-bold'>Sign Up</div>
          <div class='flex flex-col gap-2 w-full'>
            <div class='flex w-full gap-1 rounded-md bg-blue-600 text-white items-center p-2 justify-center cursor-pointer '>
              <GoogleIcon style={{ color: 'white', width: '30px', height: '30px' }} />
              <div class='text-2xl '>Sign up with Google</div>
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
                  <div >First name</div>
                  <div >
                    <input type="text" onChange={e => { setStates({ ...states, fname: e.target.value }) }} required class='mt-1 w-full border border-slate-600 rounded-md p-2.5 focus:outline-none' />
                  </div>
                </div>
                <div class='flex flex-col w-full'>
                  <div>Last name</div>
                  <div>
                    <input type="text" onChange={e => { setStates({ ...states, lname: e.target.value }) }} required class='mt-1 w-full border border-slate-600 rounded-md p-2.5 focus:outline-none' />
                  </div>
                </div>
              </div>
              <div class='flex flex-col w-full'>
                <div>Email</div>
                <div class='w-full'>
                  <input type="text" required onChange={e => { setStates({ ...states, email: e.target.value }) }} placeholder='example.email@gmail.com' class='mt-1 w-full border border-slate-600 rounded-md p-2.5 pl-1 focus:outline-none' />
                </div>
                {states.emailerr && <div class='text-red-600'>Invalid email!!!</div>}
              </div>
              <div class='flex flex-col w-full gap-2 '>
                <div>Password</div>
                <div class=' flex w-full border border-slate-600 rounded-md p-1 items-center justify-between'>
                  <input type={showPassword ? 'text' : 'password'} required onChange={handleChange} placeholder='Enter atleast 8+ characters' class='mt-1 p-1.5 w-5/6 focus:outline-none ' />
                  <div class='pr-1' onClick={() => { setShowPassword(!showPassword) }}>{!showPassword ? <VisibilityOffIcon style={{ width: '16px', height: '16px', cursor: 'pointer' }} /> : <VisibilityIcon style={{ width: '16px', height: '16px', cursor: 'pointer' }} />}</div>
                </div>
                {states.passerr && <div class='text-red-600'>Please choose a strong password...</div>}
              </div>
              <button class='flex w-full bg-blue-700 text-white text-2xl py-2 items-center justify-center mt-2 rounded-md' type="submit">Sign up</button>
            </div>
          </form>
          <div class='flex gap-1  justify-center mb-4'>
            Already have an account?
            <ul>
              <li class='text-blue-500 cursor-pointer' onClick={() => { navigate('/signin') }}>Sign in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup;