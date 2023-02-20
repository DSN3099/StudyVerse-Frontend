import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import file from '../assets/file.png';
import loader from '../assets/loader1.gif';
import edit from '../assets/editvideos.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 } from "uuid"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase.js"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Courseupload = () => {


    const [fileupload, setFileupload] = useState([]);
    const [coursedata, setCoursedata] = useState()
    const [initial, setInitial] = useState(true)
    const [edittitle, setEdittitle] = useState(false);
    const [editid, setEditid] = useState();
    const [editname, setEditname] = useState();

    const navigate = useNavigate();



    const { id } = useParams();
    const addvideos = async (Data) => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/video/${id}`, Data)
            console.log(data)

        } catch (err) {
            console.log(err)
        }
    }
    const handleChange = async (e) => {
        const file = e.target.files[0];
        setFileupload([...fileupload, file])
        // console.log(fileupload)
        const fileid = v4()
        const storageref = ref(storage, `video/${file.name + fileid}`)
        await uploadBytes(storageref, file)
        const url = await getDownloadURL(storageref)
        const Data = { id: fileid, name: file.name, size: file.size, url }
        // console.log(url)
        addvideos(Data)
        alert('uploaded..')
    }

    const getvideos = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/course/${id}`)
            setFileupload(data.lessons)
            setCoursedata(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (initial) {
            getvideos()
            setInitial(false)
        }
    }, [initial])

    const choose = useRef();
    return (
        <div class='p-4'>
            <div class=" flex justify-between border-2 border-dashed border-slate-300  rounded-md">
                <div class='flex flex-1 items-center justify-center w-full'>
                    <div class='flex flex-col gap-5 items-center w-1/2'>
                        <div class='flex flex-col gap-2 items-center'>
                            <span class='text-4xl mb-10 font-semibold '>{coursedata?.title}</span>
                            <span class='text-[22px] font-bold text-[#292929]'>Upload the videos</span>
                            <span class='text-[12px] text-[#A0A0A0] '>File should be mp4</span>
                        </div>
                        <div class=' h-[274px] bg-[#FBFBFF] rounded-md flex items-center'>
                            <input type="file" hidden ref={choose} accept='video/*' onChange={handleChange} />
                            <Button variant='contained' sx={{ textTransform: 'capitalize', cursor: 'pointer' }} onClick={() => { choose.current.click() }}>Upload Files</Button>
                        </div>
                    </div>
                </div>
                <div class='h-[680px] border-[1px] border-dashed border-[#C8C8C8]'></div>
                <div class='flex flex-1 p-3 w-full'>
                    <div class='flex flex-col gap-5 w-full'>
                        <span class='text-[#A0A0A0] text-[14px]  font-[400]'>Uploaded Files</span>
                        <div class='flex flex-col gap-3 overflow-y-auto h-[550px]'>
                            {fileupload.map((values, i) => (
                                <div class='border-2 border-[#698AFF] p-2 rounded-md ' onClick={() => { setEditid(values.id) }}>
                                    <div class='flex justify-between'>
                                        <div class='flex gap-1'>
                                            <img src={file} alt="file" />
                                            <div class='flex flex-col justify-center'>
                                                <span class='text-[14px] text-[#001356] font-[400]'>{values.name}</span>
                                                {/* <img src={loader} alt="loader" class='w-1/2 h-'  /> */}
                                                <span class='text-[12px] text-[#001356] font-[400]'>{Math.round((values.size) / 1000000)}MB</span>
                                            </div>
                                        </div>
                                        <div class='flex gap-1 items-center'>
                                            <img src={edit} alt="edit" class='w-[35px] h-[35px] cursor-pointer' onClick={() => { setEdittitle(!edittitle) }} />
                                            <DeleteIcon color='primary' sx={{ width: '30px', height: "30px", cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                    {edittitle && (values.id === editid) &&
                                        <div class='w-full flex gap-2 mt-2'>
                                            <TextField size="small" label='Edit here' sx={{ width: "100%" }} onChange={(e) => { setEditname(e.target.values) }}></TextField>
                                            <Button variant='contained' sx={{ textTransform: "capitalize", padding: '6px 20px' }} onClick={() => { setEdittitle(false) }}>Update</Button>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                        <div class='flex justify-end'>
                            <Button variant='contained' sx={{ padding: '8px 30px' }} onClick={() => { navigate(`/video/${id}`) }}>Go to Course</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Courseupload;