import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from './Card';
import card from '../assets/card.jpg';
import Caraousel from '../components/Caraousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from '../components/Footer';
import Coursecard from '../components/Coursecard';
import spinner from '../assets/buffer.gif'
import banner from '../assets/banner.jpeg'
import coaching from '../assets/coaching.jpg'
import learn from '../assets/learn.jpg'
import axios from 'axios';
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const images = [
    { id: 0, img: banner },
    { id: 1, img: coaching },
    { id: 2, img: learn },
  ]

  const data = [
    {
      id: '1',
      title: 'Introduction to React',
      category: 'React',
      rating: '4.5',
      level: 'Beginner',
      image: card,
      price: 0,
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '2',
      title: 'Introduction to React',
      category: 'React',
      rating: '4.5',
      level: 'Advanced',
      image: card,
      price: 0,
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '3',
      title: 'Introduction to Python',
      category: 'React',
      rating: '4.5',
      level: 'Beginner',
      image: card,
      price: 0,
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '4',
      title: 'Introduction to React',
      category: 'React',
      rating: '4.5',
      level: 'Beginner',
      image: card,
      price: 0,
      description: 'A very light weight library for building user interfaces',
    }
  ]

  const [current, setCurrent] = useState(0)
  const [currentCourse, setCurrentCourse] = useState(0)
  const [myCourse, setMyCourse] = useState([])
  const [loading, setLoading] = useState(true)
  const [initial, setInitial] = useState(true)
  const [alert, setAlert] = useState()
  const timeOutRef = useRef(null)
  const scrollCourse = useRef(null)
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()

  const Token = sessionStorage.getItem('token')
  const config = {
    withCredentials: true,
    headers: {
      'Authorization': `bearer ${Token}`,
      'Content-Type': 'application/json'
    }
  }

  function resetTimeOut() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate('/signin')
  }, [navigate])

  useEffect(() => {
    const getCourses = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/course/', config)
        console.log(data)
        setLoading(false)
        setMyCourse(data)
      }
      catch (err) {
        console.log(err)
        if (err.response.data.name === 'TokenExpiredError' || err.response.data === 'Please login first') {
          localStorage.removeItem('token');
          localStorage.setItem('expired',"true")
          navigate('/signin')
        }
      }
    }
    if (initial) {
      getCourses()
    }
  }, [initial])

  useEffect(() => {
    if (initial) {
      const value = sessionStorage.getItem('signedin')
      console.log(value)
      setAlert(value)
      setInitial(false)
    }
    else {
      resetTimeOut();
      timeOutRef.current = setTimeout(() => {
        setCurrent(prev => prev === 2 ? 0 : prev + 1)
      }, 3000)
    }
  }, [current, initial])

  useEffect(() => {
    setTimeout(() => {
      setAlert('false')
      sessionStorage.removeItem('signedin')
    }, 3000)
  }, [initial])

  return (
    <div id='home'>
      <Navbar type='verified' page='Student' />
      <div class='px-14 mb-4 w-full flex flex-col gap-4'>
        {alert === 'true' &&
          <Alert msg={'You have successfully signed in...'} type={'SUCCESS'} />
        }
        <div className='w-full overflow-hidden relative'>
          <div className='w-full items-center whitespace-nowrap transition duration-[1000] ease ' style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
            {images.map((val, i) => (
              <div className='inline-block w-full'>
                < img src={val.img} alt="" className='w-full h-[350px]  object-cover' />
              </div>
            ))}
          </div>
          <div className='absolute left-1/2 bottom-2'>
            <div className='flex justify-center gap-2'>
              {images.map((val, i) => (
                <div className='cursor-pointer w-4 h-4 hover:w-3 hover:h-3 rounded-full' style={{ backgroundColor: i === current ? 'rgb(0,0,0)' : '#c4c4c4' }} onClick={() => setCurrent(i)}></div>
              ))}
            </div>
          </div>
        </div>
        <h6 class="text-black-200 font-bold text-xl">My Courses</h6>
        <div class='flex items-center relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className='absolute right-full -left-8 cursor-pointer' onClick={() => { setCurrentCourse(p => p === 0 ? p : p - 1) }}>
            <KeyboardArrowLeftIcon color={currentCourse === 0 ? 'disabled' : ''} sx={{ width: '40px', height: '40px' }} />
          </div>
          {loading &&
            <img src={spinner} alt="" width={'10%'} />
          }
          <div className='overflow-hidden '>
            <div className='flex w-full whitespace-nowrap transition duration-[1000] ease' style={{ transform: `translate3d(${-currentCourse * 100}%, 0, 0)` }} ref={scrollCourse}>
              {
                myCourse?.map((item, i) => {
                  return (
                    <div className={(i % 4 !== 0) ? 'inline-block pl-10' : 'inline-block pl-5'}>
                      <Card
                        id={item._id}
                        title={item.title}
                        course={item.category}
                        rating={item.rating}
                        level={item.level}
                        img={item.image}
                        price={item.price}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
          {<div className='absolute left-full flex justify-start items-center -right-8 cursor-pointer' onClick={() => { setCurrentCourse(p => p === Math.ceil(myCourse.length / 4) - 1 ? p : p + 1) }}>
            <KeyboardArrowRightIcon color={currentCourse === Math.ceil(myCourse.length / 4) - 1 ? 'disabled' : ''} sx={{ width: '40px', height: '40px' }} />
          </div>}
        </div>
      </div>
      {/* <div class="flex justify-between px-14  ">
        <h2 class="text-black-200 font-bold text-xl">Recommended for you</h2>
        <h4 class="text-blue-500 cursor-pointer">View all &gt;</h4>
      </div> */}
      {/* first card boxes */}
      {/* <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              course={item.category}
              rating={item.rating}
              level={item.level}
              img={item.image}
              price={item.price}
            />
          )
        })}
      </div> */}
      {/* course carausel */}
      <div class="">
        <Caraousel />
      </div>
      {/* popular courses */}
      {/* <div class="flex justify-between px-14">
        <h2 class="text-black-200 font-bold text-xl">Poular Courses</h2>
        <h4 class="text-blue-500 cursor-pointer">View all {`>`}</h4>
      </div>
      <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              course={item.category}
              rating={item.rating}
              level={item.level}
              img={item.image}
              price={item.price}
            />
          )
        })}
      </div> */}
      {/* trending courses */}
      <div class="flex justify-between px-14">
        <h2 class="text-black-200 font-bold text-xl">Trending Courses</h2>
        <h4 class="text-blue-500 cursor-pointer">View all {`>`}</h4>
      </div>
      <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              title={item.title}
              course={item.category}
              rating={item.rating}
              level={item.level}
              img={item.image}
              price={item.price}
            />
          )
        })}
      </div>
      {/* footer component */}
      <Footer />
    </div>
  )
}

export default Home
