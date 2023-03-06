import Navbar from '../components/Navbar/Navbar';
import ReactPlayer from "react-player";
import star from '../assets/star.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import axios from 'axios'
import PauseIcon from '@mui/icons-material/Pause';
import { useParams } from 'react-router-dom';
import Discussion from './Discussion';

function Study() {
    const [color, setColor] = useState(false);
    const [active, setActive] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [courseData, setCoursedata] = useState([])
    const [url, setUrl] = useState(0);
    const [progress, setProgress] = useState(0);
    const [initial, setInitial] = useState(true);
    const [discussion,setdiscussion] = useState(true);

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

    useEffect(() => {
        const getCourse = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/course/${id}`)
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
                <div className="left flex flex-col w-[70%] gap-2.5">
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
                    <div className='course_player flex w-[100%] h-[400px]'>
                        <ReactPlayer width={"100%"} height={"100%"} controls playing={playing} onPlay={() => { setPlaying(true) }} onPause={() => { setPlaying(false) }} url={url} onEnded={() => handleColor}></ReactPlayer>
                    </div>
                    <div>
                        <div className='flex flex-row mx-10'>
                            <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Summary</button>
                            <button className='flex flex-row m-8 hover:bg-slate-200 p-4' onClick={() => { setdiscussion(true) }}>Reviews</button>
                            <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Resources & documents</button>
                            <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Transcript</button>
                        </div>
                    </div>
                    {discussion &&
                        <div>
                            <Discussion />
                        </div>}
                </div>
                <div className='right flex mt-5 gap-6 flex-col w-[300px]'>
                    {/* <div className='flex w-full justify-center'>
                        <button className=' bg-indigo-200 hover:bg-indigo-700 hover:text-white text-[#535CE8FF] font-bold py-2 rounded  w-[97px] h-[36px] text-[14px]'>< ShareIcon className='pr-2 pb-1'></ShareIcon>Share</button>

                        <button className='ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 rounded w-[92px] h-[36px] text-[14px] '><FavoriteIcon className='pr-2 pb-1'></FavoriteIcon>Save</button>
                    </div> */}
                    <div className="flex flex-col w-full sticky top-0">
                        <div className='sessions_header flex justify-between bg-white w-full'>
                            <div className='text-[20px] text-[#535CE8FF] pl-2.5 font-bold'>Lectures</div>
                        </div>
                        <div className='flex flex-col w-full max-h-[380px] overflow-scroll'>
                            {courseData?.lessons?.map((session, i) => (
                                <div className='flex py-2 px-2 gap-2 cursor-pointer items-center text-sm my-1.5 hover:bg-gray-200 hover:rounded-md' onClick={() => handlePlay(session.url, session.id)}>
                                    <div>{i + 1}.</div>
                                    <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[200px]'>{session.name}</div>
                                    <div>
                                        {(playing && active === session.id) ? <PauseIcon color='standard' /> : <PlayArrowIcon color='primary' />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Study;

