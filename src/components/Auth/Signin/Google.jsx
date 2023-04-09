import React from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Google = () => {

    const navigate = useNavigate()
    const handleSuccess = async ({ credential }) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/glogin', { token: credential }, { withCredentials: true })
            sessionStorage.setItem('signedin', 'true');
            localStorage.setItem('token', data.newtoken)
            localStorage.removeItem('expired')
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='cursor-pointer flex justify-center w-full'>
            <GoogleLogin
                width='100%'
                type='standard'
                onSuccess={(c) => handleSuccess(c)}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default Google