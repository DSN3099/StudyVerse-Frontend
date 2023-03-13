import Navbar from '../components/Navbar/Navbar';
import ReactPlayer from "react-player";
import star from '../assets/star.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Fab from '@mui/material/Fab';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import PauseIcon from '@mui/icons-material/Pause';
import { useNavigate, useParams } from 'react-router-dom';
import Discussion from './Discussion';
import ClearIcon from '@mui/icons-material/Clear';
import Reviews from '../components/Reviews';
import { Button, ButtonGroup, Paper } from '@mui/material';
import Clear from '@mui/icons-material/Clear';

function Study() {
    const [color, setColor] = useState(false);
    const [active, setActive] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [courseData, setCoursedata] = useState([])
    const [url, setUrl] = useState(0);
    const [progress, setProgress] = useState(0);
    const [initial, setInitial] = useState(true);
    const [reviews, setReviews] = useState(false);
    const [discussion, setdiscussion] = useState(true);
    const [theater, setTheater] = useState(false)

    const handleColor = (level) => {
        setColor(!color);
    }
    const handlePlay = (url, level) => {
        if (active === level) {
            setPlaying(!playing);
        }
        else {
            setPlaying(true)
            setUrl(url);
        }
        setActive(level);
    }
    const { id } = useParams()
    const navigate = useNavigate()

    const Token = localStorage.getItem('token')
    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${Token}`,
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) navigate('/signin')
    }, [navigate])

    useEffect(() => {
        const getCourse = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/course/${id}`,config)
                console.log(data)
                setCoursedata(data)
                setUrl(data.lessons[1].url)
            }
            catch (err) {
                console.log(err)
            }
        }
        if (initial) {
            getCourse()
        } else {
            setInitial(false)
        }
    }, [initial, id])

    return (
        <div className='flex flex-col w-full'>
            <Navbar type="verified"></Navbar>
            <div className='studyPage flex gap-5 justify-between px-10'>
                <div className={theater ? "left flex flex-col w-[100%] gap-2.5" : "left flex flex-col w-[70%] gap-2.5"}>
                    {/* <div className='text-sm'>My course/In Progress</div> */}
                    <div className='course_header flex items-center'>
                        <div class='font-bold text-2xl mb-1 flex-1'>{courseData?.title}</div>
                    </div>
                    {/* <div class='flex w-full items-center justify-between mb-3'>
                        <div class='flex gap-1 w-max'>
                            <div class='text-blue-600 cursor-pointer border-r-2 pr-1'>Klara Weaver</div>
                            <img src={star} alt="" style={{ width: '20px', height: '20px' }} className="mx-2" />
                            <div class='flex font-bold'>4.5<span class='font-normal text-gray-500 border-r px-2'>(99 reviews)</span></div>
                        </div>
                    </div> */}
                    <div className='course_player flex w-[100%] h-[450px] relative'>
                        <ReactPlayer width={"100%"} height={"100%"} controls playing={playing} onPlay={() => { setPlaying(true) }} onPause={() => { setPlaying(false) }} url={url} onEnded={() => handleColor} />
                        {theater && <Fab size='small' sx={{ position: 'absolute', top: '10px', right: '10px' }} onClick={() => setTheater(false)}>
                            <KeyboardDoubleArrowLeftIcon color='primary' />
                        </Fab>}
                    </div>
                    <div className='mt-5'>
                        <Paper elevation={3} sx={{ width: '500px', height: '40px' }}>
                            <ButtonGroup variant='text'>
                                <Button disableRipple sx={{ width: '155px', padding: '8px 42px', textTransform: 'capitalize', fontWeight: 'bold', }}>Comments</Button>
                                <Button disableRipple sx={{ width: '185px', padding: '8px 42px', textTransform: 'capitalize', fontWeight: 'bold', }}>About Course</Button>
                                <Button disableRipple sx={{ width: '158px', padding: '8px 42px', textTransform: 'capitalize', fontWeight: 'bold', backgroundColor: reviews ? '#0A0A0A' : '#ffffff', color: reviews ? '#ffffff' : '', "&:hover": { backgroundColor: "#000000", color: '#ffffff' } }} onClick={()=>{setReviews(!reviews)}}>Reviews</Button>
                            </ButtonGroup>
                        </Paper>
                    </div>
                    <div className='mt-9'>
                        {reviews && 
                        <Reviews/>
                        }
                    </div>
                </div>
                {!theater &&
                    <div className='right flex mt-9 gap-6 flex-col w-[300px]'>
                        <div className="flex flex-col shadow-lg  w-full sticky top-[10px]">
                            <div className='sessions_header flex items-center justify-between bg-white w-[90%]'>
                                <div className='text-[24px] text-[#535CE8FF] pl-2.5 font-bold'>Lectures</div>
                                <Clear color='primary' className='cursor-pointer' onClick={() => setTheater(true)} />
                            </div>
                            <div className='flex flex-col gap-2 px-1.5 w-full min-h-[420px] overflow-scroll'>
                                {courseData?.lessons?.map((session, i) => (
                                    <div className='flex py-2 text-xl border-b border-gray-300 px-2 gap-2 cursor-pointer items-center hover:bg-gray-100 hover:rounded-md' onClick={() => handlePlay(session.url, session.id)}>
                                        <div>{i + 1}.</div>
                                        <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[200px]'>{session.name}</div>
                                        <div>
                                            {(playing && active === session.id) ? <PauseIcon color='error' /> : <PlayArrowIcon color='primary' />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};

export default Study;