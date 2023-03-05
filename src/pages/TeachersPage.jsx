import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import cpgirl from '../assets/cpgirl.jpg'
import videocreation from '../assets/videocreation.jpg'
import Footer from '../components/Footer'
import buildaudience from '../assets/buildaudience.jpg'
import {useNavigate} from 'react-router-dom'

const TeachersPage = () => {
  const navigate=useNavigate()
  return (
    <div className="main">
      <Navbar type="verified" page="Teacher" />

      {/* course creation button */}
      <div className="course-creation flex justify-between items-center  bg-white-100 shadow-lg shadow-slate-300 p-11 m-24">
        <h1 className=" text-2xl font-bold">Jump Into Course Creation</h1>
        <button className="text-2xl font-medium bg-blue-600 p-5 rounded-md text-white" onClick={()=>{
          navigate("/createcourse")
        }}>
          Create Your Course
        </button>
      </div>
      <div className="text-center text-3xl font-medium">
        Based on your experience, we think these resources will be helpful.
      </div>
      {/* course creation */}
      <div className="course-creation flex bg-white-100 shadow-lg shadow-slate-300 rounded-md justify-evenly items-center  p-11 m-24">
        <img src={cpgirl} alt="" className=" mb-24" />
        <div className="gap-5 flex  flex-col mb-24 w-1/2  p-5">
          <h1 className="text-2xl font-medium ">Create an Engaging Course</h1>
          <p className="text-2xl ">
            Whether you've been teaching for years or are teaching for the first
            time, you can make an engaging course. We've compiled resources and
            best practices to help you get to the next level, no matter where
            you're starting.
          </p>
          <button className="text-violet-500 underline-offset-4 flex ">
            Get Started
          </button>
        </div>
      </div>
      {/* video */}
      <div className="course-creation flex justify-between items-center gap-14 p-11   m-24">
        <div className="w-1/2 h-full gap-8 flex py-24 px-9  bg-white-100 shadow-lg shadow-slate-300">
          <div className="w-1/2 ">
            <img src={videocreation} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl font-medium">Get Started with Video</h1>
            <p className="text-xl">
              Quality video lectures can set your course apart. Use our
              resources to learn the basics.
            </p>
            <button className="text-violet-500 underline-offset-4 flex">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full gap-8 flex py-24 px-9  bg-white-100 shadow-lg shadow-slate-300">
          <div className="w-1/2">
            <img src={videocreation} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-3xl font-medium">Build Your Audience</h1>
            <p className="text-xl">
              Quality video lectures can set your course apart. Use our
              resources to learn the basics.
            </p>
            <button className="text-violet-500 underline-offset-4 flex">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* simple div have questions */}
      <div className="text-center m-11">
        <h1 className="text-2xl font-semibold">
          Have Questions? Here are our most popular instructor resources
        </h1>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default TeachersPage
