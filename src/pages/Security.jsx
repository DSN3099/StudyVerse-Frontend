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
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useNavigate, useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import axios from 'axios';

const Security = () => {
    const [dialog, setDialog] = useState(false)
    const [opendialog, setOpendialog] = useState(false);
    const [seepassword, setSeepassword] = useState(false);
    const [error, setError] = useState()
    const [spanerror, setSpanerror] = useState()
    const [type, setType] = useState()
    const [initial, setInitial] = useState(true)
    const [confirmpassword, setConfirmpassword] = useState(false);
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
        <Link underline="hover" key="1" color="inherit" href="/profile">
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
    }, [passData.confirmPass,passData.newPass,initial])


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

    const handleDeactivate = async () => {
        try {
            const {data}  = await axios.delete('http://localhost:5000/api/user/deactivate', config)
            console.log(data)
            navigate('/signup')
        } catch (err) {
            console.log(err)
        }
    }

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
                <div className='flex gap-5 justify-center items-center w-full'>
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
                                <Button variant='outlined' color='error' onClick={()=>{setDialog(true);setOpendialog(true)}}>Deactivate account</Button>
                            </div>
                            {dialog &&
                                <Dialog
                                    open={opendialog}>
                                    <DialogTitle>{"Deactivate the account"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            {"Are you sure you want to deactivate your account!"}
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => { setOpendialog(false) }}>Cancel</Button>
                                        <Button onClick={() => { handleDeactivate() ; setDialog(false) }}>OK</Button>
                                    </DialogActions>
                                </Dialog>
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={sideimg} alt="img" className='w-[350px] h-[450px] rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security;