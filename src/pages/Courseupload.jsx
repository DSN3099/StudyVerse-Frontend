import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import file from '../assets/file.png';
// import loader from '../assets/loader1.gif';
import edit from '../assets/editvideos.svg';
import DeleteIcon from '@mui/icons-material/Delete';

const Courseupload = () => {

    const data = [
        { id: 1, name: 'FileName:1', size: "20Mb" },
        { id: 2, name: 'FileName:2', size: "20Mb" },
        { id: 3, name: 'FileName:3', size: "20Mb" },
        { id: 4, name: 'FileName:4', size: "20Mb" },
        { id: 5, name: 'FileName:5', size: "20Mb" },
        { id: 6, name: 'FileName:6', size: "20Mb" },
        { id: 7, name: 'FileName:7', size: "20Mb" },
        { id: 8, name: 'FileName:8', size: "20Mb" },
        { id: 9, name: 'FileName:9', size: "20Mb" },
        { id: 10, name: 'FileName:10', size: "20Mb" },
        { id: 11, name: 'FileName:11', size: "20Mb" },
    ]

    const [edittitle, setEdittitle] = useState(false);
    const [editid,setEditid] = useState();
    const [editname,setEditname] = useState();

    const choose = useRef();
    return (
        <div class='p-4'>
            <div class=" flex justify-between border-2 border-dashed border-slate-300  rounded-md">
                <div class='flex flex-1 items-center justify-center w-full'>
                    <div class='flex flex-col gap-5 items-center w-1/2'>
                        <div class='flex flex-col gap-2 items-center'>
                            <span class='text-[22px] font-bold text-[#292929]'>Upload the videos</span>
                            <span class='text-[12px] text-[#A0A0A0] '>File should be mp4</span>
                        </div>
                        <div class=' h-[274px] bg-[#FBFBFF] rounded-md flex items-center'>
                            <input type="file" hidden ref={choose} accept='video/*' />
                            <Button variant='contained' sx={{ textTransform: 'capitalize', cursor: 'pointer' }} onClick={() => { choose.current.click() }}>Upload Files</Button>
                        </div>
                    </div>
                </div>
                <div class='h-[680px] border-[1px] border-dashed border-[#C8C8C8]'></div>
                <div class='flex flex-1 p-3 w-full'>
                    <div class='flex flex-col gap-5 w-full'>
                        <span class='text-[#A0A0A0] text-[14px]  font-[400]'>Uploaded Files</span>
                        <div class='flex flex-col gap-3 overflow-y-auto h-[550px]'>
                            {data.map((values, i) => (
                                <div class='border-2 border-[#698AFF] p-2 rounded-md' onClick={()=>{setEditid(values.id)}}>
                                    <div class='flex justify-between'>
                                        <div class='flex gap-1'>
                                            <img src={file} alt="file" />
                                            <div class='flex flex-col'>
                                                <span class='text-[14px] text-[#001356] font-[400]'>{values.name}</span>
                                                {/* <img src={loader} alt="loader" class=''  /> */}
                                                <span class='text-[12px] text-[#001356] font-[400]'>{values.size}</span>
                                            </div>
                                        </div>
                                        <div class='flex gap-1 items-center'>
                                            <img src={edit} alt="edit" class='w-[35px] h-[35px] cursor-pointer' onClick={() => { setEdittitle(!edittitle) }} />
                                            <DeleteIcon color='primary' sx={{ width: '30px', height: "30px", cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                    {edittitle && (values.id === editid) &&
                                        <div class='w-full flex gap-2 mt-2'>
                                            <TextField size="small" label='Edit here' sx={{ width: "100%" }} onChange={(e)=>{setEditname(e.target.values)}}></TextField>
                                            <Button variant='contained' sx={{ textTransform: "capitalize", padding: '6px 20px' }} onClick={()=>{setEdittitle(false)}}>Update</Button>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                        <div class='flex justify-end'>
                            <Button variant='contained' sx={{ padding: '8px 30px' }}>Go to Course</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Courseupload