import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Card from './Card'
import card from '../assets/card.jpg'
import cartton from '../assets/cartton.jpg'
import Caraousel from '../components/Caraousel'
import Footer from '../components/Footer'
const Home = () => {
  const data = [
    {
      id: '1',
      title: 'Introduction to React',
      course: 'React',
      rating: '4.5',
      level: 'Beginner',
      img: { card },
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '2',
      title: 'Introduction to React',
      course: 'React',
      rating: '4.5',
      level: 'Advanced',
      img: { card },
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '3',
      title: 'Introduction to Python',
      course: 'React',
      rating: '4.5',
      level: 'Beginner',
      img: { card },
      description: 'A very light weight library for building user interfaces',
    },
    {
      id: '4',
      title: 'Introduction to React',
      course: 'React',
      rating: '4.5',
      level: 'Beginner',
      img: { cartton },
      description: 'A very light weight library for building user interfaces',
    },
  ]
  return (
    <div>
      <Navbar />
      <div class="flex justify-between px-14  ">
        <h2 class="text-black-200 font-bold text-xl">Recommended for you</h2>
        <h4 class="text-blue-500 cursor-pointer">View all {`>`}</h4>
      </div>
      {/* first card boxes */}
      <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              course={item.course}
              rating={item.rating}
              level={item.level}
              img={item.img}
            />
          )
        })}
      </div>
      {/* course carausel */}
      <div class="">
        <Caraousel />
      </div>

      {/* popular courses */}
      <div class="flex justify-between px-14">
        <h2 class="text-black-200 font-bold text-xl">Poular Courses</h2>
        <h4 class="text-blue-500 cursor-pointer">View all {`>`}</h4>
      </div>
      <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              course={item.course}
              rating={item.rating}
              level={item.level}
              img={item.img}
            />
          )
        })}
      </div>
      {/* trending courses */}
      <div class="flex justify-between px-14">
        <h2 class="text-black-200 font-bold text-xl">Trending Courses</h2>
        <h4 class="text-blue-500 cursor-pointer">View all {`>`}</h4>
      </div>
      <div class="flex  justify-around  p-10">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              course={item.course}
              rating={item.rating}
              level={item.level}
              img={item.img}
            />
          )
        })}
      </div>
      {/* footer component */}
      <Footer/>
    </div>
  )
}

export default Home
