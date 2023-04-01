import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import land from '../assets/land.png';
import design from '../assets/landesign.png';
import { useNavigate } from 'react-router-dom';
import ayush from '../assets/ayush.jpg';
import anup from '../assets/anup.jpg';
import rohit from '../assets/rohit.jpg';
import sanjeev from '../assets/sanjeev.jpg';
import dakshh from '../assets/dakshh.jpg';
import yash from '../assets/yash.jpg';
import gaurav from '../assets/gaurav.jpg';
import prabhat from '../assets/prabhat.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../components/Footer';

const data = [
    {
        id: 1,
        img: anup,
        name: 'Anup Pal',
        position: 'Frontend and Backend Developer'
    },
    {
        id: 2,
        img: ayush,
        name: 'Ayush Raj',
        position: 'Frontend and Backend Developer'
    },
    {
        id: 3,
        img: gaurav,
        name: 'Gaurav Rai',
        position: 'Frontend and Backend Developer'
    },
    {
        id: 4,
        img: yash,
        name: 'Yashvardhan Singh Bhadoria',
        position: 'Frontend Developer'
    },
    {
        id: 5,
        img: rohit,
        name: 'Rohit Gore',
        position: 'Frontend Developer'
    },
    {
        id: 6,
        img: sanjeev,
        name: 'Sanjeev',
        position: 'Frontend Developer'
    },
    {
        id: 7,
        img: dakshh,
        name: 'Dakshh',
        position: 'Frontend Developer'
    },
    {
        id: 8,
        img: prabhat,
        name: 'Prabhat Mishra',
        position: 'Frontend Developer'
    },
]

const Landing = () => {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/signup')
    }
    const handlenavigate1 = () => {
        navigate('/signin')
    }
    return (
        <div class='w-full '>
            <Navbar type='notVerified' />
            <div class='flex max-h-full'>
                <div class='flex flex-col w-2/3 '>
                    <div class='p-10'>
                        <span class='text-7xl text-black font-bold'>Online Learning wherever and whenever</span>
                    </div>
                    <div class='pl-10 text-3xl text-gray-500  font-semibold'>
                        <span>StudyVerse will make your online learning more quality with the presence of experienced and professional mentors.</span>
                    </div>
                    <div class=' flex gap-5 p-10'>
                        <button class='bg-orange-400 py-3 px-6 rounded-md text-xl text-white font-semibold' onClick={handlenavigate}>Get Started</button>
                        <button class='border-2 border-orange-400 bg-white-400 py-3 px-6 rounded-md text-xl text-orange-400 font-semibold' onClick={handlenavigate1}>Explore More</button>
                    </div>

                </div>
                <div class='relative h-fit pr-3 overflow-hidden'>
                    <img src={land} alt="land" class='z-10 h-128 w-full' />
                    <div class='absolute top-28 left-12'>
                        <img src={design} alt="design" />
                    </div>
                </div>
            </div>
            <div>
                <div class='flex justify-center '>
                    <div class='bg-orange-400 mt-8 p-8 flex justify-center w-1/2 rounded-lg'>
                        <span class='text-4xl text-white font-semibold font-serif'>About Us</span>
                    </div>
                </div>
                <div class='flex py-10 gap-10 justify-evenly flex-wrap'>
                    {data.map((d, i) => (
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width='250px'
                                    image={d.img}
                                    alt="dp"
                                    className='max-h-[237px]'
                                />
                                <CardContent class='flex flex-col gap-6 p-4'>
                                    <Typography gutterBottom variant="h5" component="div" class='font-bold text-2xl'>
                                        {d.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" class='text-2xl text-center'>
                                        {d.position}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;