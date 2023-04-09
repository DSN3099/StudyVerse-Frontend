import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Alert from '../components/Alert'
import { Button } from '@mui/material';
import sideimg from '../assets/young.jpg';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const Security = () => {
    const [seepassword, setSeepassword] = useState(false);
    const [error, setError] = useState()
    const [spanerror, setSpanerror] = useState()
    const [type, setType] = useState()
    const [initial, setInitial] = useState(true)
    const [confirmpassword,setConfirmpassword] = useState(false);
    const [passData, setPassData] = useState({
        currentPass: "",
        newPass: "",
        confirmPass: ""
    })
    const navigate = useNavigate();

    const timeOutRef = useRef(null);
    const Token = localStorage.getItem('token')

    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${Token}`,
            'Content-Type': 'application/json'
        }
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            My profile
        </Link>,
        <Typography key="3" color="text.primary" sx={{ fontWeight: 'bold' }}>
            Security
        </Typography>,
    ];

    useEffect(() => {
        if (initial) setInitial(false)
        else {
            if (passData.newPass !== passData.confirmPass) {
                setSpanerror('New password and Confirm password should be same.')
            }
            else {
                setSpanerror(null)
            }
        }
    }, [passData.confirmPass])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.patch('http://localhost:5000/api/auth/changepassword', { newPass: passData.newPass, currentPass: passData.currentPass }, config)
            setError(data)
            setType("SUCCESS")
        } catch (err) {
            setError(err.response.data)
            setType("ERROR")
        }
    }
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
    return (
        <div>
            <Navbar type='verified' />
            <div className='pl-7 flex flex-col gap-3 w-full'>
                {error &&
                    <Alert msg={error} type={type} />
                }
                <div>
                    <span className='text-3xl font-bold'>Security</span>
                </div>
                <Stack >
                    <Breadcrumbs
                        separator={<KeyboardDoubleArrowRightIcon fontSize="small" />}
                        aria-label="breadcrumb">{breadcrumbs}
                    </Breadcrumbs>
                </Stack>
                <div className='flex flex-col gap-5 items-center w-full relative'>
                    <div className='w-1/2 gap-3 flex flex-col'>
                        <div>
                            <span className='text-3xl font-bold'>Change Password</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='border-2 border-gray-300 w-[560px] h-[345px] rounded-md gap-3 flex flex-col'>
                                <div className='flex flex-col pl-3 pr-3 gap-1'>
                                    <span className='mt-3'>Current Password</span>
                                    <div className='border-2 border-gray-300 p-1 rounded-md flex items-center'>
                                        <input onChange={(e) => setPassData({
                                            ...passData,
                                            currentPass: e.target.value
                                        })} required value={passData.currentPass} placeholder='Enter current password....' type={seepassword ? 'text' : 'password'} style={{ width: '508px', height: '36px', outline: 'none' }} />
                                        <div class='pr-2.5 cursor-pointer' onClick={() => { setSeepassword(!seepassword) }}>{!seepassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col pl-3 pr-3 gap-1'>
                                    <span>New Password</span>
                                    <div className='border-2 border-gray-300 p-1 rounded-md flex items-center'>
                                        <input onChange={(e) => setPassData({
                                            ...passData,
                                            newPass: e.target.value
                                        })} required value={passData.newPass} placeholder='Enter new password....' type='password' style={{ width: '508px', height: '36px', outline: 'none' }} />
                                    </div>
                                </div>
                                <div className='flex flex-col pl-3 pr-3 gap-1'>
                                    <span>Confirm Password</span>
                                    <div className='border-2 border-gray-300 p-1 rounded-md flex items-center'>
                                        <input onChange={(e) => setPassData({
                                            ...passData,
                                            confirmPass: e.target.value
                                        })} required value={passData.confirmPass} placeholder='Confirm new password....' type={confirmpassword ? 'text' : 'password'} style={{ width: '508px', height: '36px', outline: 'none' }} />
                                        <div class='pr-2.5 cursor-pointer' onClick={() => { setConfirmpassword(!confirmpassword) }}>{!confirmpassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</div>
                                    </div>
                                    {spanerror &&
                                        <Typography fontSize={'12px'} color='error'>{spanerror}</Typography>
                                    }
                                </div>
                                <div className='w-[545px] flex justify-end mt-1'>
                                    <Button type='submit' variant='contained'>Change Password</Button>
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-col gap-1'>
                            <span>Deactivate Account</span>
                            <div className='border-2 border-gray-300 bg-gray-100/100 w-[570px] h-[64px] rounded-md flex items-center gap-3'>
                                <span className='pl-3'>You can reactivate your account within 48 hours.</span>
                                <Button variant='outlined' color='error'onClick={()=>{navigate('/signup')}}>Deactivate account</Button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-10 top-10 rounded-md'>
                        <img src={sideimg} alt="img" className='w-[350px] h-[450px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security;