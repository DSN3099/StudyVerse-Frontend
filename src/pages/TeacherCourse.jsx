import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios'

const TeacherCourse = () => {
    const [course, setCourse] = useState([])
    const [initial, setInitial] = useState(true)

    const Token = localStorage.getItem('token')
    const config = {
        withCredentials: true,
        headers: {
            'Authorization': `bearer ${Token}`,
            'Content-Type': 'application/json'
        }
    }

    const TeachersCourse = async()=>{
        try{
            const {data} = axios.get('http://localhost:5000/api/teacher/teachersCourse',config)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if (initial) {
            TeachersCourse()
            setInitial(false)
        }
    },[initial])

    return (
        <div>
            <Navbar type={'verified'} />

        </div>
    )
}

export default TeacherCourse