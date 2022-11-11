import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import land from '../assets/land.png';
import design from '../assets/landesign.png';
import { useNavigate } from 'react-router-dom';
import ayush from '../assets/ayush.jpg';
import anup from '../assets/anup.jpg';
import gaurav from '../assets/gaurav.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Footer from '../components/Footer';

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
            <Navbar />
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
                <div class='flex p-10 justify-evenly '>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                image={anup}
                                alt="anup"
                            />
                            <CardContent class='flex flex-col gap-6 p-4'>
                                <Typography gutterBottom variant="h5" component="div" class='font-bold text-2xl'>
                                    Anup Pal
                                </Typography>
                                <Typography variant="body2" color="text.secondary" class='text-2xl text-center'>
                                    Frontend and Backend Developer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ayush}
                                alt="ayush"
                            />
                            <CardContent class='flex flex-col gap-6 p-4'>
                                <Typography gutterBottom variant="h5" component="div" class='font-bold text-2xl'>
                                    Ayush
                                </Typography>
                                <Typography variant="body2" color="text.secondary" class='text-2xl text-center'>
                                    Frontend and Backend Developer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={gaurav}
                                alt="gaurav"
                            />
                            <CardContent class='flex flex-col gap-6 p-4'>
                                <Typography gutterBottom variant="h5" component="div" class='font-bold text-2xl' >
                                    Gaurav
                                </Typography>
                                <Typography variant="body2" color="text.secondary" class='text-2xl text-center' >
                                    Frontend and Backend Developer
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;