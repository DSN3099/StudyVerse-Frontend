import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Card from './Card'

const Home = () => {
  return (
    <div>
        <Navbar/>
        
        <div class='flex justify-around '>
          <h2 class='text-black-200 font-bold text-xl'>Recommended for you</h2>
          <h4 class='text-blue-500'>View all {`>`}</h4>
        </div>
        {/* first card boxes */}
        <Card/>

    </div>
  )
}

export default Home