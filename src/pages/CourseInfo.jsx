import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import star from '../assets/star.svg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import courseinfo1 from '../assets/courseinfo1.jpg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Avatar, Button, Rating } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import klara from '../assets/klara.jpg'
import images from '../images'
import Card from './Card';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';

export const ratingData = [
    { id: 1, img: `${images.jay}`, rating: 5, name: 'Jay Rutherford', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 2, img: `${images.annie}`, rating: 4.5, name: 'Annie Haley', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 3, img: `${images.jevon}`, rating: 5, name: 'Jevon Raynor', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 4, img: `${images.emily}`, rating: 5, name: 'Emily Rowey', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 5, img: `${images.jevon}`, rating: 5, name: 'Jevon Raynor', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 6, img: `${images.emily}`, rating: 5, name: 'Emily Rowey', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
]

export const cardData = [
    { id: 1, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5', price: 0 },
    { id: 2, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5', price: 0 },
    { id: 3, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5', price: 0 },
    { id: 4, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5', price: 0 },
]

const CourseInfo = () => {

    const [active, setActive] = useState({
        courseDesc: true,
        benefits: false,
        reviews: false,
        relCourse: false,
    })

    const [msg, setmsg] = useState(null)

    const [course, setCourse] = useState([])
    const [cart, setCart] = useState([])

    const [inital, setInitial] = useState(true)
    const [isCart, setIsCart] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) navigate('/signin')
    }, [navigate])



    const [showAll, setShowAll] = useState(false)

    const token = localStorage.getItem('token')

    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        const getCourse = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/course/${id}`, config)
            setCourse(data)
        }
        if (inital)
            getCourse()
        else
            setInitial(false)
    }, [inital, id])

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

    const addToCart = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/user/addToCart`, { courseId: id }, config)
            setIsCart(!isCart)
            setmsg(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div class='w-full h-full flex flex-col scroll-smooth'>
            <Navbar type={'verified'} isCart={isCart} setCart={setCart} />
            <div class='w-full h-full flex flex-col px-20 py-4 gap-5'>
                {msg && <Alert msg={msg} type='SUCCESS' />}
                <div class='font-bold text-2xl'>{course?.title}</div>
                <div class='flex w-full items-center justify-between'>
                    <div class='flex gap-1 w-max'>
                        <img src={star} alt="" />
                        <div class='flex font-bold'>4.5<span class='font-normal text-gray-500 border-r border-r-slate-500 border-left pr-1'>({course?.reviews?.length} reviews)</span></div>
                        <div class='text-blue-600 cursor-pointer'>{course?.authorData?.firstname} {course?.authorData?.lastname}</div>
                    </div>
                    <div class='flex gap-2.5'>
                        <div class='flex gap-2 bg-blue-100/50 rounded-md items-center px-2 py-1 cursor-pointer'>
                            <ShareIcon style={{ color: '#535CE8FF', width: '16px', height: '16px' }} />
                            <div class='text-blue-700'>Share</div>
                        </div>
                        <div class='flex gap-2 bg-blue-600 items-center justify-center rounded-md px-2 py-1 cursor-pointer'>
                            <FavoriteIcon style={{ color: 'white', width: '16px', height: '16px' }} />
                            <div class='text-white font-medium'>Save</div>
                        </div>
                    </div>
                </div>
                <div class='flex overflow-hidden w-full items-center justify-center gap-2'>
                    <img src={course.image} alt="" className='object-fill' />
                </div>
                <div class='flex border-b border-b-slate-300/70'>
                    <div onClick={() => { setActive({ courseDesc: true, benefits: false, reviews: false, relCourse: false }) }} class={active.courseDesc ? 'scroll-smooth text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}>
                        <a href="#courseDesc">Course Description</a></div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: true, reviews: false, relCourse: false }) }} class={active.benefits ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#benefits">Benefits</a></div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: false, reviews: true, relCourse: false }) }} class={active.reviews ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 flex font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#reviews">Reviews</a></div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: false, reviews: false, relCourse: true }) }} class={active.relCourse ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#relCourse">Related Course</a></div>
                </div>
                <div class='flex gap-10'>
                    <div class='flex flex-col gap-5 w-2/3'>
                        <div id='courseDesc' class='flex flex-col gap-5 w-full'>
                            <div class='font-bold text-2xl'>Course Description</div>
                            <div>{course?.description}</div>
                        </div>
                        <div id='benefits' class='flex flex-col gap-5 w-full'>
                            <div class='font-bold text-2xl'>Benefits</div>
                            <div class='flex w-full'>
                                <div class='flex flex-col gap-4 w-1/2'>
                                    <div class='flex items-start text-sm gap-2'>
                                        <VideocamOutlinedIcon style={{ color: '#535CE8FF' }} />
                                        <div>14 hours on-demand video</div>
                                    </div>
                                    <div class='flex items-start text-sm gap-2'>
                                        <LanguageIcon style={{ color: '#535CE8FF' }} />
                                        <div>Native teacher</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center gap-5 w-1/3'>
                        <div class='flex items-center justify-between w-full'>
                            <div class='flex gap-2'>
                                <img src={course?.authorData?.image} alt="" class='rounded-full w-11 h-11' />
                                <div>
                                    <div class='font-semibold '>{course?.authorData?.firstname} {course?.authorData?.lastname}</div>
                                    <div class='bg-orange-300/20 text-orange-500 rounded-full flex text-xs font-semibold py-1 justify-center'>Top Teacher</div>
                                </div>
                            </div>
                            <Button variant='outlined' sx={{ textTransform: 'capitalize', fontSize: '16px' }}>Follow</Button>
                        </div>
                        <div class='flex flex-col px-1 items-center w-full gap-5'>
                            <div class='flex items-center justify-between w-full'>
                                <div class='font-semibold '>UX: Design with a user...</div>
                                <div class='flex p-2 gap-1 items-center font-semibold'>
                                    <img src={star} alt="" />
                                    <div>4.5</div>
                                </div>
                            </div>

                            {!cart.includes(id) ?
                                <div class='w-1/2 bg-blue-600 text-white font-medium flex justify-evenly cursor-pointer rounded-md py-2' onClick={addToCart}>
                                    <AddShoppingCartIcon />
                                    <div>Add to my cart</div>
                                </div> :
                                <Button variant='outlined' sx={{ width: '50%' }} onClick={() => { navigate('/checkout') }}>Go to cart</Button>
                            }

                        </div>
                    </div>
                </div>
                <div class='flex flex-col gap-5' id='reviews'>
                    <div class='font-bold text-2xl'>Reviews</div>
                    <div class='flex gap-1 items-center font-semibold'>
                        <img src={star} alt="" />
                        <div class='flex text-sm font-bold'>
                            <div>4.5</div>
                            <div class='font-normal text-gray-500'>({course?.reviews?.length} reviews)</div>
                        </div>
                    </div>
                    <div class='flex flex-wrap gap-10 w-full'>
                        {course?.reviews?.slice(0, showAll ? ratingData.length : 4).map((val, i) => (
                            <div class='flex flex-col gap-2 w-2/5'>
                                <div class='flex items-center gap-2'>
                                    {/* <img src={val.img} alt="" class='rounded-full w-9 h-9' /> */}
                                    <Avatar sx={{ borderRadius: "50%", width: '40px', height: '40px' }} alt='' src={val.img}>{val.userData[0].firstname[0]}</Avatar>
                                    <div class='flex flex-col'>
                                        <div class='text-sm font-semibold'>{val.userData[0].firstname}{val.userData[0].lastname}</div>
                                        <Rating readOnly precision={0.5} defaultValue={val.rating} size='small' />
                                    </div>
                                </div>
                                <div class='text-sm'>{val.text}</div>
                            </div>
                        ))
                        }
                    </div>
                    {course?.reviews?.length > 4 && <button class='flex border-2 border-blue-500 w-max px-4 py-2 rounded-md text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition ease-out duration-300' onClick={() => { setShowAll(!showAll) }}>{showAll ? 'Show less' : 'Show more'}</button>}
                </div>
                <div id='relCourse' class='flex flex-col gap-5'>
                    <div class='flex justify-between'>
                        <div class='font-bold text-2xl'>Related Course</div>
                        <div class='flex items-center cursor-pointer'>
                            <div class='text-blue-600 text-sm'>View all</div>
                            <NavigateNextIcon sx={{ color: '#535CE8FF', width: '20px', height: '20px' }} />
                        </div>
                    </div>
                    <div class='flex gap-5'>
                        {
                            cardData.map((item, i) => (
                                <div class='cursor-pointer'>
                                    <Card
                                        id={item.id}
                                        title={item.title}
                                        course={item.course}
                                        rating={item.rating}
                                        level={item.level}
                                        img={item.img}
                                        price={item.price}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CourseInfo