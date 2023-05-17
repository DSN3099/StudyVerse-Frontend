import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Paper, TextField, Button} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../Firebase';


const Profile = () => {
    const [user, setUser] = useState([]);
    const [image, setimage] = useState()
    const [bio, setBio] = useState();
    const [newBio, setNewBio] = useState()
    const [url, setUrl] = useState()


    const choose = useRef();
    const storageRef = ref(storage, `userImage/${image?.name}`);

    const handleChange = async (e) => {
        const file = e.target.files[0];
        setimage(file)
        console.log(file)
        if (file) {
            await uploadBytes(storageRef, file)
            const firebaseUrl = await getDownloadURL(storageRef)
            user.image = firebaseUrl
            console.log(firebaseUrl)
            console.log(user)
            setUser(user)
            setUrl(firebaseUrl)
        }
    }

    useEffect(() => {
        const postImage = async () => {
            try {
                const { data } = await axios.patch('http://localhost:5000/api/user/uploadImage/', { imageUrl: url }, config)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        if(url)
            postImage()
    },[url])

    const breadcrumbs = [
        <Typography key="1" color="text.primary" sx={{ fontWeight: 'bold' }}  >
            My profile
        </Typography>,
        <Link underline="hover" key="3" href="/security" color="inherit" sx={{ cursor: 'pointer' }}>
            Security
        </Link>,
    ];
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
            console.log(data)
            setUser(data)
            setBio(data.bio)
            setNewBio(data.bio)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userdata();
    }, [])

    const update = async () => {
        try {
            const { data } = await axios.patch('http://localhost:5000/api/user/updateprofile', { bio: bio }, config)
            console.log(data)
            setNewBio(bio)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="">
            <Navbar type={"verified"} user={user} isProfile={true} />
            <div className="flex px-20 gap-7 justify-center">
                <div className="mt-20 pb-2 flex gap-0 border border-grey-500 flex-col h-min rounded-md">
                    <div className="flex flex-row px-5 py-1 items-center">
                        <div className="flex overflow-clip w-20 h-20 rounded-full">
                            <Avatar sx={{ borderRadius: "50%", width: '100%', height: '100%', fontSize: '40px' }} alt="dp" src={user?.image}>{user?.firstname?.charAt(0)}</Avatar>
                        </div>
                        <div className=" flex flex-col p-5 gap-5">
                            <span>Upload your Image</span>
                            <div>
                                <input type="file" multiple hidden ref={choose} accept='image/*' onChange={handleChange} />
                                <button className="border border-purple-700 text-purple-700 text-lg rounded-md w-full" onClick={() => { choose.current.click() }}>Choose Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 flex flex-col gap-1">
                        <span className="py-1 font-semibold">
                            {user?.firstname} {user?.lastname} <br />
                        </span>
                        <span className="py-1 text-gray-500">{newBio}</span>
                    </div>
                </div>

                <div className="flex">
                    <form action="" method="post">
                        <div>
                            <span className="text-[40px] font-bold">Settings</span>
                            <Stack >
                                <Breadcrumbs
                                    separator={<KeyboardDoubleArrowRightIcon fontSize="small" />}
                                    aria-label="breadcrumb">{breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                            <Paper elevation={2} sx={{ marginTop: '12px' }}>
                                <div className="shadow-md  w-[768px] h-max mb-5 p-3 flex flex-col gap-5">
                                    <div className="text-[25px] font-bold">Profile</div>
                                    <div className="flex items-stretch gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Full Name</label>
                                            <div className="border-2 rounded-md border-gray-300 p-2 w-[720px] h-[36px] flex items-center">
                                                <input
                                                    style={{ outline: 'none', border: 'none', background: "none", width: '340px' }}
                                                    type="text"
                                                    placeholder="Your full name"
                                                    value={user?.firstname + " " + user?.lastname}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex flex-col">
                                        <label htmlFor="">E-mail</label>
                                        <div className="border-2 rounded-md border-gray-300 p-2 w-[720px] h-[36px] flex items-center">
                                            <input
                                                style={{ outline: 'none', border: 'none', background: "none", width: '720px' }}
                                                type="Email"
                                                value={user?.email}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Bio</label>
                                        <div className="w-full" onChange={(e) => (setBio(e.target.value))} >
                                            <TextField size="medium" maxRows={2} multiline sx={{ width: '720px' }} value={bio}></TextField>
                                        </div>
                                    </div>
                                    <div className="flex justify-end pr-5">
                                        <Button variant="contained" sx={{ textTransform: 'capitalize' }} onClick={update}>Update</Button>
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

export default Profile;
