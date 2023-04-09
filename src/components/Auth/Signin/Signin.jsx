import React, { useEffect, useRef } from 'react'
import logo from '../../../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState } from 'react'
import axios from 'axios'
import Alert from '../../Alert'
import Loader from '../SignUp/Loader'
import Google from './Google';


const Signin = () => {

  const navigate = useNavigate();
  const [states, setStates] = useState({
    email: '',
    password: '',
  })
  const [seepassword, setSeepassword] = useState(false)
  const [loading, setLoading] = useState(sessionStorage.getItem('isSignUp'));
  const [error, setError] = useState()
  const timeOutRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])

  useEffect(() => {
    const expired = localStorage.getItem('expired');
    if (expired === 'true') {
      setError('Session has expired, please login again...')
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', states, { withCredentials: true })
      sessionStorage.setItem('signedin', 'true');
      localStorage.setItem('token', data.token)
      localStorage.removeItem('expired')
      navigate('/home')
    } catch (err) {
      setError(err.response.data)
    }
  }

  function resetTimeOut() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
    }
  }
  // const gref = useRef()
  useEffect(() => {
    resetTimeOut();
    timeOutRef.current = setTimeout(() => {
      setError(null)
      sessionStorage.removeItem('isSignUp')
    }, 3000)
  }, [error])

  const handleChange = () => {
    navigate('/signup')
  }

  return (
    <>
      {loading &&
        <Loader />
      }
      {!loading && <div class=' flex items-center gap-8 mt-5 flex-col sm:w-full '>
        {error &&
          <Alert msg={error} type={"ERROR"} />
        }
        <div class='flex mt-4 justify-center cursor-pointer' onClick={() => { navigate('/') }}>
          <img src={logo} alt="logo" class=' w-full h-full sm:w-1/2' />
        </div>
        <div class=' flex justify-center w-full h-full sm:w-full sm:px-10 '>
          <div class=' flex flex-col w-1/2  bg-white gap-3 sm:w-full'>
            <div class='flex  '>
              <span class='font-bold text-3xl'>Sign In</span>
            </div>
            {/* <div class="flex items-center justify-center">
              <div class="border-x-8 bg-slate-500 h-px w-1/2"> </div>
              <span class="text-gray-600 ">OR </span>
              <div class="border-x-8 bg-slate-500 h-px w-1/2"></div>
            </div> */}
            <div class='flex flex-col gap-4 '>
              <form onSubmit={handleSubmit} class='flex flex-col gap-4 '>
                <div class='flex flex-col gap-2'>
                  <span class='text-slate-600 text-1xl font-bold'>Email</span>
                  <div class='flex border-2 border-slate-600 rounded-md w-full items-center'>
                    <div class='flex items-center w-full px-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input class='p-2.5 text-gray-700 font-semibold outline-none w-full  ' type="text" autoComplete='false' placeholder='Enter your Email' value={states.email} onChange={(e) => {
                        setStates({
                          ...states, email: e.target.value
                        })
                      }} />
                    </div>
                  </div>
                </div>
                <div class='flex flex-col gap-2'>
                  <span class='text-slate-600 text-1xl font-bold'>Password</span>
                  <div class='flex border-2 border-slate-600 rounded-md w-full items-center '>
                    <div class='flex items-center justify-between w-full ml-2'>
                      <div class='flex items-center w-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input class='p-2.5 text-gray-700 font-semibold outline-none w-full ' type={seepassword ? 'text' : 'password'} placeholder='Enter your Password' value={states.password} onChange={(e) => {
                          setStates({
                            ...states, password: e.target.value
                          })
                        }} />
                      </div>
                      <div class='pr-2.5 cursor-pointer' onClick={() => { setSeepassword(!seepassword) }}>{!seepassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</div>
                    </div>
                  </div>
                </div>
                <div class='flex justify-between w-full sm:gap-24'>
                  <div class='flex items-center  gap-2'>
                    <input class='w-4 h-4 ' type="checkbox" />
                    <span class='text-xl text-slate-600'>Remember Me</span>
                  </div>
                  <div class='flex  cursor-pointer ' onClick={() => { navigate('/forget') }}>
                    <span class='text-xl text-slate-600'>Forgot Password?</span>
                  </div>
                </div>
                <div>
                  <button type='submit' class='flex items-center justify-center  gap-2 bg-blue-600 w-full p-2.5 rounded-md'>
                    <span class='text-2xl text-white'>Sign in</span>
                    {

                    }
                  </button>
                </div>
              </form>
              <div class='flex justify-center gap-1 w-full'>
                <Google />
              </div>
              <div class='flex justify-center gap-2 mb-4'>
                <span>Don't Have An Account?</span>
                <span class='text-sky-500 cursor-pointer' onClick={handleChange}>Sign up</span>
              </div>
            </div>
          </div>
        </div>

      </div>}
    </>
  )
}

export default Signin
