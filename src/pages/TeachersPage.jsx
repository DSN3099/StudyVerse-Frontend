import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import cpgirl from '../assets/cpgirl.jpg'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const TeachersPage = () => {
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [alert,setAlert] = useState(false)
  const checkfunction = () => {
    setChecked(!checked)
    if(!checked) setAlert(true)
  }
  useEffect(() => {
    if (checked ) {
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }, [checked])

  useEffect(()=>{
    setTimeout(()=>{
      setAlert(false)
    },3000)
  })

  const dstyle = 'text-2xl font-medium bg-blue-600 opacity-50 cursor-not-allowed p-5 rounded-md text-white '
  const style = 'text-2xl font-medium bg-blue-600 p-5 rounded-md text-white '

  const navigate = useNavigate()
  return (
    <div className="main">
      <Navbar type="verified" page="Teacher" />

      {/* course creation button */}
      <div className="course-creation flex justify-between items-center  bg-white-100 shadow-lg shadow-slate-300 p-11 m-24 ">
        {alert && 
          <Alert msg='You can now create your course' type = 'SUCCESS' />
        }
        <h1 className=" text-2xl font-bold">Jump Into Course Creation</h1>
        <button
          className={disabled ? dstyle : style}
          disabled={disabled}
          onClick={() => {
            navigate('/createcourse')
          }}
          id="course"
        >
          Create Your Course
        </button>
      </div>
      <div className="text-center text-3xl font-medium ">
        Rules to be followed by the instructors.
      </div>
      {/* course creation */}
      <div className="course-creation flex bg-white-100 shadow-lg shadow-slate-300 rounded-md justify-evenly items-center  p-11 mx-20 my-10">
        <img src={cpgirl} alt="" className=" mb-20" />
        <div className="gap-5 flex  flex-col mb-24 w-1/2  p-5">
          <ul style={{ listStyleType: 'disc' }} className='text-2xl'>
            <li>The data you provide should be valid at all cost .</li>
            <li>
              The courses, you upload should be unique and not copied from some
              other site.
            </li>

            <li>
              If found violating any of the above rules strict actions will be
              taken against them.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <div
          className="flex gap-2 justify-center items-center ">
          <input
            style={{ width: '20px', height: '20px' }}
            type="checkbox"
            name=""
            id=""
            value={checked}
            onClick={() => {
            checkfunction()
          }}
          href="#course"
          />
          <div className="text-xl">
            "I hereby agree to all the above rules and regulations."
          </div>
        </div>
      </div>
      {/* rules checkbox */}

      {/* video */}
      {/* <div className="course-creation flex justify-between items-center gap-14 p-11   m-24">
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
      </div> */}
      {/* simple div have questions */}
      {/* <div className="text-center m-11">
        <h1 className="text-2xl font-semibold">
          Have Questions? Here are our most popular instructor resources
        </h1>
      </div> */}
      {/* footer */}
      <Footer />
    </div>
  )
}

export default TeachersPage
