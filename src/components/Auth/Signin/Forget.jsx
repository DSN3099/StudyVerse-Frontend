import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.jpeg'
import { MuiOtpInput } from 'mui-one-time-password-input'
import axios from 'axios';
import Alert from '../../Alert'


const Forget = () => {

    const [getotp, setGetotp] = useState(false);
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState()
    const [response, setResponse] = useState()
    const [error, setError] = useState()
    const timeOutRef = useRef(null)

    function resetTimeOut() {
        if (timeOutRef.current) {
          clearTimeout(timeOutRef.current)
        }
      }
    
      useEffect(() => {
        resetTimeOut();
        timeOutRef.current = setTimeout(() => {
          setError(null)
          sessionStorage.removeItem('isSignUp')
        }, 3000)
      }, [error])


    const navigate = useNavigate();

    const config = {
        withCredentials: true,
    }

    const verifyemail = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/auth/verifyEmail`, { email: email }, config)
            console.log(data)
            setResponse(data)
            setGetotp(true)
        } catch (err) {
            console.log(err)
           setError(err.response.data)
        }
    }

    const validateotp = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/auth/verifyOtp`, { otp: otp, otpId: response.otpId }, config)
            console.log(data)
            if (data.message === "OTP verified"){
                navigate(`/changepass/${data.userId}`)
            }
        } catch (err) {
            setError(err.response.data)
        }
    }

    return (
        <div className='flex flex-col w-full gap-5  '>
            <div className=' flex justify-center py-5'>
                <img src={logo} alt="logo" />
            </div>
            <div class='flex w-1/2 justify-center ml-28 '>
                <span class='font-bold text-3xl'>Forget Password</span>
            </div>
            <div className='flex items-center justify-center flex-col gap-5'>
                <div className='flex flex-col w-full items-center'>
                    <span className='text-slate-600 text-1xl font-bold pr-[728px]'>Email</span>
                    <div class='flex border-2 border-slate-600 rounded-md w-1/2 items-center p-1'>
                        <input class='p-2 text-gray-700 font-semibold outline-none w-full' type="text" autoComplete='false' placeholder='Enter your Email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                </div>
                {!getotp &&
                    <Button variant='contained' sx={{ textTransform: "capitalize" }} onClick={() => {verifyemail() }}>Get OTP</Button>
                }
                {getotp &&
                    <div className='flex flex-col w-full items-center gap-3'>
                        <span className='text-slate-600 text-1xl font-bold pr-[695px]'>Enter OTP</span>
                        <div className='flex flex-col w-[280px]'>
                            <MuiOtpInput value={otp} onChange={(value) => { setOtp(value) }} />
                            <span className=' text-gray-700 flex justify-end cursor-pointer ' onClick={() => { verifyemail() }}>Resend OTP?</span>
                        </div>
                        <Button variant='contained' sx={{ textTransform: 'capitalize' }} onClick={() => { validateotp() }}>Verify OTP</Button>
                    </div>
                }
                {error && 
                <Alert type='ERROR' msg={error}/>
                }
            </div>

        </div>
    )
}

export default Forget