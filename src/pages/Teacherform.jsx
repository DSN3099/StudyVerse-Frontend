import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import eclipse from '../assets/eclipse.gif'
import { Paper, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../Firebase.js'

const Teacherform = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        bio: '',
        image: '',
        isTeacher: null,
        teacherData: {
            profession : '',
            bio : '',
            video : '',
        }
    });
    const [loading, setLoading] = useState(false)
    const [newBio,setNewBio] = useState(false)
    const [newProfession,setNewProfession] = useState(false)
    const navigate = useNavigate();
    const choose = useRef();
    const Token = localStorage.getItem('token')
    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${Token}`,
            'Content-Type': 'application/json'
        }
    }
    const userdata = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/user`, config)
            setUser(data)
            setNewBio(data.teacherData.bio)
            setNewProfession(data.teacherData.profession)
        } catch (err) {
            console.log(err)
        }
    }
    const teacherData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/teacher/teacherdata`, config)
            setUser(data)
        } catch (err) {
            console.log(err)
        }
    }

    const createdata = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/teacher/createteacher`, { profession: newProfession, bio: newBio, video: user.teacherData.video }, config)
            user.teacherData.bio = newBio
            user.teacherData.profession = newProfession
            setUser({...user})
            navigate('/teacher')
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (user?.isTeacher === 'true')
            teacherData();
        else
            userdata();
    }, [])

    const postImage = async () => {
        try {
            const { data } = await axios.patch('http://localhost:5000/api/user/uploadImage/', { imageUrl: user.image }, config)
        } catch (err) {
            console.log(err)
        }
    }

    const handleProfile = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const storageRef = ref(storage, `userImage/${file.name + v4()}`)
            await uploadBytes(storageRef, file)
            const firebaseUrl = await getDownloadURL(storageRef)
            user.image = firebaseUrl
            setUser({...user})
        }
        postImage()
    }

    const handleChange = async (e) => {
        const file = e.target.files[0]
        setLoading(true)
        const fileid = v4()
        const storageref = ref(storage, `video/${file.name + fileid}`)
        await uploadBytes(storageref, file)
        user.teacherData.video = await getDownloadURL(storageref)
        setLoading(false)
    }

    const updateData = async () => {
        try {
            const { data } = await axios.patch(`http://localhost:5000/api/teacher/updateteacher`, { profession: newProfession, bio: newBio }, config)
            user.teacherData.bio = newBio
            user.teacherData.profession = newProfession
            setUser({...user})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="m-0">
            <Navbar type={"verified"} page="Teacher" isProfile={true} />
            <div className="flex px-20 gap-7 justify-center">
                <div className="mt-20 pb-2 rounded-md flex gap-0 border border-grey-500 flex-col h-max">
                    <div className="flex px-5 py-1 items-center">
                        <div className="flex overflow-clip w-20 h-20 rounded-full">
                            <Avatar sx={{ borderRadius: "50%", width: '100%', height: '100%', fontSize: '40px' }} alt="dp" src={user?.image}>{user?.firstname?.charAt(0)}</Avatar>
                        </div>
                        <div className=" flex flex-col p-5 gap-5">
                            <span>Upload your Image</span>
                            <div>
                                <input type="file" multiple hidden ref={choose} accept='image/*' onChange={handleProfile} />
                                <button className="border border-purple-700 text-purple-700 text-lg rounded-md w-full" onClick={() => { choose.current.click() }}>Choose Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 flex flex-col gap-1">
                        <span className="py-1 font-semibold">
                            {user?.firstname} {user?.lastname} <br />
                        </span>
                        <span className="py-1 text-gray-500">{user?.teacherData.profession}</span>
                        <span className="py-1 text-gray-500">{user?.teacherData?.bio}</span>
                    </div>
                </div>

                <div className="flex">
                    <form action="" method="post">
                        <div>
                            <div className="flex flex-col">
                                <span className="text-[40px] font-bold">Settings</span>
                                {!user.isTeacher && <span className="text-[20px] font-semibold">Application Form</span>}
                            </div>
                            <Paper elevation={2} sx={{ marginTop: '12px' }}>
                                <div className="shadow-md  w-[768px] h-[500px] p-3 flex flex-col gap-5">
                                    <div className="text-[25px] font-bold">Profile</div>
                                    <div className="flex items-stretch gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Full Name</label>
                                            <div className="border-2 rounded-md border-gray-300 p-2 w-[720px] h-[36px] flex items-center">
                                                <input
                                                    style={{ outline: 'none', border: 'none', background: "none", cursor: "not-allowed" }}
                                                    type="text"
                                                    placeholder="Your full name"
                                                    value={user?.firstname + " " + user?.lastname}
                                                    readOnly
                                                    required

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" flex gap-5">
                                        <div>
                                            <TextField select sx={{ outline: 'none', border: 'none', width: '340px', height: '40px' }}
                                                id="profession"
                                                name=''
                                                label="Profession"
                                                type="text"
                                                multiple
                                                required
                                                value={newProfession}
                                                onChange={(e) => {setNewProfession(e.target.value)}}>
                                                <MenuItem value="Professor" selected >Professor</MenuItem>
                                                <MenuItem value="Lecturer" >Lecturer</MenuItem>
                                            </TextField>
                                        </div>
                                        {!user.isTeacher && <div className="flex relative items-center w-[360px] border rounded-[4px] border-gray-400 px-2 h-[55px] ">
                                            <div className="absolute -top-[12px] left-[10px] text-sm bg-white text-gray-600">Demo Video*</div>
                                            <input type="file" accept="video/*" name="" id="" onChange={handleChange} />
                                            {loading && <div className="flex overflow-hidden w-10 h-10">
                                                <img src={eclipse} alt="" className="w-full object-contain" />
                                            </div>}
                                        </div>}
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="">E-mail</label>
                                        <div className="border-2 rounded-md border-gray-300 p-2 w-[720px] h-[36px] flex items-center">
                                            <input
                                                style={{ outline: 'none', border: 'none', background: "none", width: '720px', cursor:'not-allowed' }}
                                                type="Email"
                                                value={user?.email}
                                                readOnly
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Bio</label>
                                        <div className="w-full" >
                                            <TextField size="medium" onChange={(e) => {setNewBio(e.target.value)}} maxRows={2} multiline sx={{ width: '720px' }} value={newBio} required></TextField>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pr-5">
                                        <Button variant="contained" sx={{ textTransform: 'capitalize' }} onClick={user.isTeacher ? updateData : createdata}>{user.isTeacher ? 'Update' : 'Create'}</Button>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Teacherform;