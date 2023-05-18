import Navbar from "../components/Navbar/Navbar";
import course from '../assets/piccourse.jpg'
import course1 from '../assets/piccourse1.jpg'
import Footer from "../components/Footer";
import { Avatar, Button, Paper } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from 'moment'
import Alert from "../components/Alert";

function Teacher() {
    const [userdata, setUserdata] = useState();
    const [msg, setmsg] = useState(null)
    const [coursedata, setCoursedata] = useState();
    const [cart, setCart] = useState([])
    const [isCart, setIsCart] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate();
    const Token = localStorage.getItem('token')
    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${Token}`,
            'Content-Type': 'application/json'
        }
    }

    const teacherdata = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/teacher/teacherdata/${id}`, config)
            setUserdata(data);
            setCoursedata(data?.teacherData?.courses);
        } catch (err) {
            console.log(err)
        }
    }

    const timeOutRef = useRef()

    function resetTimeOut() {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
    }

    useEffect(() => {
        resetTimeOut()
        if (msg) {
            timeOutRef.current = setTimeout(() => {
                setmsg(null)
            }, 3000)
        }
    }, [msg])


    const addToCart = async (id) => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/user/addToCart`, { courseId: id }, config)
            setIsCart(!isCart)
            setmsg(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        teacherdata();
    }, [])

    return (

        <>
            <div className="nav">
                <Navbar type='verified' isCart={isCart} setCart={setCart} />
            </div>
            <div className="p-10 flex flex-col gap-7 ">
                {msg && <Alert msg={msg} type='SUCCESS' />}
                <div className=" p-3 rounded-md gap-3  flex flex-col justify-between ">
                    <div className="flex w-full justify-between ">
                        <div className="flex gap-3 items-center">
                            <Avatar src={userdata?.image} sx={{ width: '50px', height: '50px' }}>G</Avatar>
                            <div className="flex flex-col">
                                <span className="font-bold font-mono">{userdata?.firstname} {userdata?.lastname}</span>
                                <span className="text-sm text-slate-500">{userdata?.teacherData?.profession}</span>
                            </div>
                        </div>
                        <div className="bg-orange-100 w-[80px] h-[28px] flex items-center rounded-xl justify-center ">
                            <span className="text-xs text-orange-400">Top Teacher</span>
                        </div>
                    </div>
                    <div className="flex flex-col px-3">
                        <span className="text-2xl font-semibold font-mono ">Overview</span>
                        <span className="text-slate-500">{userdata?.teacherData?.bio}</span>
                    </div>
                </div>
                <hr style={{ height: "2px" }} />
                <Paper elevation={2}>
                    <div className=" px-5 rounded-md  flex flex-col gap-5 h-[680px] ">
                        <h1 className='font-bold text-lg pt-3'>Courses</h1>
                        <div className="overflow-scroll flex flex-col gap-3">
                            {coursedata?.map((value, i) => (
                                <div className="p-3 w-[90%] rounded-md ">
                                    <div className="flex justify-between w-[90%]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xl font-bold">{value.title}</span>
                                            <span className="text-xs text-gray-400 mb-2">{moment(value.created).fromNow()}</span>
                                        </div>
                                        <span className="text-xl font-bold">₹{value.price}</span>
                                    </div>
                                    <div className="flex gap-3 items-center relative">
                                        <img src={value.image} alt="course" style={{ width: "331px", height: "196px", borderRadius: "12px"}} />
                                        <div className="flex flex-col gap-5 ">
                                            <span className="text-[18px] text-gray-400 ">{value.description}</span>
                                            <div className="flex gap-5 justify-end w-[90%] absolute right-5 top-28">
                                                {!cart.includes(value._id) ?
                                                    <Button type="button" onClick={() => addToCart(value._id)} variant="outlined">Add to Cart</Button>:
                                                    <Button variant="outlined" onClick={()=>{navigate('/checkout')}}>Go to Cart</Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ marginTop: '3rem', width: '80%', marginLeft: '5rem ' }} />
                                </div>
                            ))
                            }

                        </div>
                    </div>
                </Paper>
            </div>
            <div>
                <Footer />
            </div>

        </>
    );
}

export default Teacher;