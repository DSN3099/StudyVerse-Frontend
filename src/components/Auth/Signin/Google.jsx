import React from 'react';
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Google = ({setError}) => {

    const navigate = useNavigate()
    const handleSuccess = async ({ credential }) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/glogin', { token: credential }, { withCredentials: true })
            sessionStorage.setItem('signedin', 'true');
            localStorage.setItem('token', data.newtoken)
            localStorage.removeItem('expired')
            navigate('/home')
        } catch (error) {
            setError(error.response.data)
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