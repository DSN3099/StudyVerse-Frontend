import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import star from '../assets/star.svg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import courseinfo1 from '../assets/courseinfo1.jpg';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Rating } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import klara from '../assets/klara.jpg'
import images from '../images'
import Card from './Card';
import Footer from '../components/Footer';

export const ratingData = [
    { id: 1, img: `${images.jay}`, rating: 5, name: 'Jay Rutherford', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 2, img: `${images.annie}`, rating: 4.5, name: 'Annie Haley', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 3, img: `${images.jevon}`, rating: 5, name: 'Jevon Raynor', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 4, img: `${images.emily}`, rating: 5, name: 'Emily Rowey', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 5, img: `${images.jevon}`, rating: 5, name: 'Jevon Raynor', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
    { id: 6, img: `${images.emily}`, rating: 5, name: 'Emily Rowey', review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus ut dolorum at cum neque quod fugit dolore rem cumque!' },
]

export const cardData = [
    { id: 1, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5',price : 0 },
    { id: 2, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5',price : 0 },
    { id: 3, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5',price : 0 },
    { id: 4, title: 'Digital Poster Design: Best Practices', course: 'Graphic Design', img: `${images.card}`, level: 'Beginner', rating: '4.5',price : 0 },
]

const CourseInfo = () => {
    const [active, setActive] = useState({
        courseDesc: true,
        benefits: false,
        reviews: false,
        relCourse: false,
    })

    const [showAll, setShowAll] = useState(false)

    return (
        <div class='w-full h-full flex flex-col scroll-smooth'>
            <Navbar />
            <div class='w-full h-full flex flex-col px-20 py-4 gap-5'>
                <div class='font-normal text-gray-500 text-sm'>Home/Design/ <span class='font-normal text-black'>UI/UX Design</span></div>
                <div class='font-bold text-2xl'>UI Design, A User-Centered Approach</div>
                <div class='flex w-full items-center justify-between'>
                    <div class='flex gap-1 w-max'>
                        <img src={star} alt="" />
                        <div class='flex font-bold'>4.5<span class='font-normal text-gray-500 border-r border-r-slate-500 border-left pr-1'>(99 reviews)</span></div>
                        <div class='text-blue-600 cursor-pointer'>Klara Weaver</div>
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
                <div class='flex overflow-hidden items-center justify-center gap-2'>
                    <img src={courseinfo1} alt="" />
                </div>
                <div class='flex border-b border-b-slate-300/70'>
                    <div onClick={() => { setActive({ courseDesc: true, benefits: false, reviews: false, relCourse: false }) }} class={active.courseDesc ? 'scroll-smooth text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}>
                        <a href="#courseDesc">Course Description</a></div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: true, reviews: false, relCourse: false }) }} class={active.benefits ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#benefits">Benefits</a></div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: false, reviews: true, relCourse: false }) }} class={active.reviews ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#reviews">Reviews</a> (99)</div>
                    <div onClick={() => { setActive({ courseDesc: false, benefits: false, reviews: false, relCourse: true }) }} class={active.relCourse ? 'text-pink-500 border-b-4 transition-all linear duration-300 pb-2 border-b-pink-500 font-medium px-2 cursor-pointer' : 'hover:border-b-4 hover:border-b-pink-500 hover:text-pink-500 cursor-pointer px-2 font-medium transition-all linear duration-300 pb-2'}><a href="#relCourse">Related Course</a></div>
                </div>
                <div class='flex gap-10'>
                    <div class='flex flex-col gap-5 w-2/3'>
                        <div id='courseDesc' class='flex flex-col gap-5 w-full'>
                            <div class='font-bold text-2xl'>Course Description</div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui laboriosam laborum facilis soluta culpa sunt iure aut consequatur porro! Velit suscipit sed mollitia eligendi minima reiciendis eum nostrum, sequi quam assumenda, ut vitae esse perferendis dolores quidem saepe accusantium corrupti vel dolor nemo ea voluptatem reprehenderit. Eveniet facilis quisquam aperiam!</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quo laudantium facilis, vel soluta culpa velit nam cupiditate veritatis perferendis minima. Ipsa perspiciatis eum consectetur quis eveniet! Vel illo, alias minus omnis temporibus et rem hic, vitae voluptate repellendus adipisci.</div>
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
                                    <div class='flex items-start text-sm gap-2'>
                                        <DescriptionIcon style={{ color: '#535CE8FF' }} />
                                        <div>100% free document</div>
                                    </div>
                                </div>
                                <div class='flex flex-col gap-4 w-1/2'>
                                    <div class='flex items-start text-sm gap-2'>
                                        <AccessTimeIcon style={{ color: '#535CE8FF' }} />
                                        <div>100% free document</div>
                                    </div>
                                    <div class='flex items-start text-sm gap-2'>
                                        <MilitaryTechIcon style={{ color: '#535CE8FF' }} />
                                        <div>Certificate of Complete</div>
                                    </div>
                                    <div class='flex items-start text-sm gap-2'>
                                        <DoneAllIcon style={{ color: '#535CE8FF' }} />
                                        <div>100% free document</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='flex flex-col items-center gap-5 w-1/3'>
                        <div class='flex items-center justify-between w-full'>
                            <div class='flex gap-2'>
                                <img src={klara} alt="" class='rounded-full w-11 h-11' />
                                <div>
                                    <div class='font-semibold '>Klara Weaver</div>
                                    <div class='bg-orange-300/20 text-orange-500 rounded-full flex text-xs font-semibold py-1 justify-center'>Top Teacher</div>
                                </div>
                            </div>
                            <div class='text-blue-500 bg-blue-500/10 rounded-md p-2 cursor-pointer'>Follow</div>
                        </div>
                        <div class='flex flex-col px-1 w-full gap-5'>
                            <div class='flex items-center justify-between w-full'>
                                <div class='font-semibold '>UX: Design with a user...</div>
                                <div class='flex p-2 gap-1 items-center font-semibold'>
                                    <img src={star} alt="" />
                                    <div>4.5</div>
                                </div>
                            </div>
                            <div class='flex items-center justify-between w-full'>
                                <div class='flex text-sm'>Course (12 lessons)</div>
                                <div class='bg-teal-500 text-sm rounded-full px-4 py-1 cursor-default flex justify-center'>Free</div>
                            </div>
                            <div class='flex items-center justify-between w-full'>
                                <div class='flex text-sm'>Document</div>
                                <div class='bg-teal-500 rounded-full text-sm px-4 py-1 cursor-default flex justify-center'>Free</div>
                            </div>
                            <div class='w-full bg-blue-600 text-white flex justify-center cursor-pointer rounded-md py-2'>Add to My Courses</div>
                        </div>
                    </div>
                </div>
                <div class='flex flex-col gap-5' id='reviews'>
                    <div class='font-bold text-2xl'>Reviews</div>
                    <div class='flex gap-1 items-center font-semibold'>
                        <img src={star} alt="" />
                        <div class='flex text-sm font-bold'>
                            <div>4.5</div>
                            <div class='font-normal text-gray-500'>(99 reviews)</div>
                        </div>
                    </div>
                    <div class='flex flex-wrap gap-10 w-full'>
                        {ratingData.slice(0, showAll?ratingData.length:4).map((val, i) => (
                            <div class='flex flex-col gap-2 w-2/5'>
                                <div class='flex items-center gap-2'>
                                    <img src={val.img} alt="" class='rounded-full w-9 h-9' />
                                    <div class='flex flex-col'>
                                        <div class='text-sm font-semibold'>{val.name}</div>
                                        <Rating readOnly precision={0.5} defaultValue={val.rating} size='small' />
                                    </div>
                                </div>
                                <div class='text-sm'>{val.review}</div>
                            </div>
                        ))
                        }
                    </div>
                    <button class='flex border-2 border-blue-500 w-max px-4 py-2 rounded-md text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition ease-out duration-300' onClick = {()=>{setShowAll(!showAll)}}>{showAll? 'Show less' : 'Show more'}</button>
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
                                <div class = 'cursor-pointer'>
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