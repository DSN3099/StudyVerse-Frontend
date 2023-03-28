import React, { useState } from 'react';
import { Button } from '@mui/material';
import logo from '../../../assets/logo.jpeg';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Changepassword = () => {

    const[pass,setPass] = useState();
    const[confirmpass,setConfirmpass] = useState();
    const {id} = useParams()
    const navigate = useNavigate()

    const config = {
        withCredentials: true,
    }

    const newpassword = async () =>{
        try{
            if(pass === confirmpass){
                const {data} = await axios.patch(`http://localhost:5000/api/auth/changepassword/${id}`,{password:pass},config)
                navigate("/signin")
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className=' flex justify-center py-5'>
                <img src={logo} alt="logo" />
            </div>
            <div classsName='flex flex-col items-center'>
                <span className='text-slate-600 text-1xl font-bold pr-[655px]'>New Password</span>
                <div class='flex border-2 border-slate-600 rounded-md w-[768px] items-center p-1'>
                    <input class='p-2 text-gray-700 font-semibold outline-none w-full  ' type='password' autoComplete='false' placeholder='Enter your Password' onChange={(e)=>{setPass(e.target.value)}} />
                </div>
            </div>
            <div classsName='flex flex-col items-center ' style={{ paddingLeft: '14px' }}>
                <span className='text-slate-600 text-1xl font-bold pr-[655px]'>Confirm Password</span>
                <div class='flex border-2 border-slate-600 rounded-md w-[768px] items-center p-1'>
                    <input class='p-2 text-gray-700 font-semibold outline-none w-full  ' type="text" autoComplete='false' placeholder='Enter your Password' onChange={(e)=>{setConfirmpass(e.target.value)}} />
                </div>
            </div>
            <Button variant='contained' sx={{ textTransform: "capitalize", padding: '8px 12px' }} onClick={()=>{newpassword()}}>Change Password</Button>
        </div>

    )
}

export default Changepassword