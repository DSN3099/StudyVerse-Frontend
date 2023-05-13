import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfilePic from "../assets/gaurav.jpg";
import { Paper, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Teacherform = () => {
    const [user, setUser] = useState([]);
    const [profession, setProfession] = useState();
    const [image, setimage] = useState()
    const [bio, setBio] = useState();
    const [newBio, setNewBio] = useState()
    const [newProfession, setNewProfession] = useState()
    const [url, setUrl] = useState()

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
        } catch (err) {
            console.log(err)
        }
    }

    const createdata = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/teacher/updateteacher`,{profession:profession , bio: bio}, config)
            console.log(data)
            setNewProfession(profession)
            setNewBio(bio);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userdata();
    }, [])

    return (
        <div className="m-0">
            <Navbar type={"verified"} page="Teacher" />
            <div className="flex px-20">
                <div className="mx-20 mt-20 pb-2 rounded-md flex gap-0 border border-grey-500 flex-col h-max">
                    <div className="flex flex-row px-5 py-1 items-center">
                        <div className="flex overflow-clip w-20 h-20 rounded-full">
                            <Avatar sx={{ borderRadius: "50%", width: '100%', height: '100%', fontSize: '40px' }} alt="dp" src={user?.image}>{user?.firstname?.charAt(0)}</Avatar>
                        </div>
                        <div className=" flex flex-col p-5 gap-5">
                            <span>Upload your Image</span>
                            <div>
                                <input type="file" multiple hidden ref={choose} accept='image/*' onChange={''} />
                                <button className="border border-purple-700 text-purple-700 text-lg rounded-md w-full" onClick={() => { choose.current.click() }}>Choose Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 flex flex-col gap-1">
                        <span className="py-1 font-semibold">
                            {user?.firstname} {user?.lastname} <br />
                        </span>
                        <span className="py-1 text-gray-500">{newProfession}</span>
                        <span className="py-1 text-gray-500">{newBio}</span>
                    </div>
                </div>

                <div className="flex">
                    <form action="" method="post">
                        <div>
                            <div className="flex flex-col">
                                <span className="text-[40px] font-bold">Settings</span>
                                <span className="text-[20px] font-semibold">Application Form</span>
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
                                                value={profession}
                                                onChange={(e) => { setProfession(e.target.value) }}>
                                                <MenuItem value="Professor" selected >Professor</MenuItem>
                                                <MenuItem value="Lecturer" >Lecturer</MenuItem>
                                            </TextField>
                                        </div>

                                        <div className="flex relative items-center w-[360px] border rounded-[4px] border-gray-400 px-2 h-[55px]">
                                            <div className="absolute -top-[12px] left-[10px] text-sm bg-white text-gray-600">Demo Video*</div>
                                            <input type="file" accept="video/*" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-2">
                                        <label htmlFor="">E-mail</label>
                                        <div className="border-2 rounded-md border-gray-300 p-2 w-[720px] h-[36px] flex items-center">
                                            <input
                                                style={{ outline: 'none', border: 'none', background: "none", width: '720px' }}
                                                type="Email"
                                                value={user?.email}
                                                readOnly
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Bio</label>
                                        <div className="w-full" onChange={(e) => (setBio(e.target.value))} >
                                            <TextField size="medium" maxRows={2} multiline sx={{ width: '720px' }} value={bio} required></TextField>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pr-5">
                                        <Button variant="contained" sx={{ textTransform: 'capitalize' }} onClick={() =>{createdata()}}>Create</Button>
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