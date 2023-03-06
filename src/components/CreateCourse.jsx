import { Button, MenuItem, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import Navbar from './Navbar/Navbar';
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router-dom';
import { storage } from '../Firebase';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    price: '',
    level: '',
    category: '',
    image: '',
    description: '',
  })
  const storageRef = ref(storage, `courseImage/${courseData.image.name}`);
  const Token = sessionStorage.getItem('token')
  const config = {
    headers: {
      'Authorization': `Bearer ${Token}`,
      'Content-Type': 'application/json'
    }
  }
  const inputImage = useRef()
  const navigate = useNavigate()
  const handleChange = async (e) => {
    const file = e.target.files[0];
    setCourseData({
      ...courseData,
      image: file
    })
    document.getElementById('show').innerHTML = file.name;
  }
  const postData = async (post) => {
    try {
      console.log(courseData)
      const { data } = await axios.post('http://localhost:5000/api/course/', post, config)
      console.log(data)
      navigate(`/videoupload/${data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let url = ""
    if (courseData.image) {
      await uploadBytes(storageRef, courseData.image)
      url = await getDownloadURL(storageRef)
    }
    const data = {
      title: courseData.title,
      price: courseData.price,
      level: courseData.level,
      category: courseData.category,
      image: url,
      description: courseData.description,
    }
    postData(data)
    console.log(url)
  }
  return (
    <div className='flex w-full flex-col items-center '>
      <Navbar type={"verified"} />
      <form onSubmit={handleSubmit} className='w-full' id='form'>
        <div className='flex flex-col w-full gap-2 p-5 items-center'>
          <div className='flex w-1/2 justify-between gap-5'>
            <TextField autoComplete='false' sx={{ width: "50%" }} required value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} size='small' type={"text"} label="Title" />
            <TextField select autoComplete='false' required sx={{ width: "50%" }} value={courseData.category}
              onChange={(e) => setCourseData({ ...courseData, category: e.target.value })} size='small' type={"text"} label="Catergory">
                <MenuItem value = {'Frontend'}>Frontend</MenuItem>
                <MenuItem value = {'Backend'}>Backend</MenuItem>
                <MenuItem value = {'DSA'}>DSA</MenuItem>
                <MenuItem value = {'CP'}>Competitive Programming</MenuItem>
            </TextField>
          </div>
          <div className='flex w-1/2 justify-between gap-5'>
            <TextField autoComplete='false' required sx={{ width: "50%" }} size='small' type={"text"} value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} label="Price" />
            <TextField required select autoComplete='false' sx={{ width: "50%" }} size='small' type={"text"} label="Level" value={courseData.level} onChange={(e) => setCourseData({ ...courseData, level: e.target.value })}>
              <MenuItem value = 'Beginner'>Beginner</MenuItem>
              <MenuItem value = 'Intermediate'>Intermediate</MenuItem>
              <MenuItem value = 'Advance'>Advance</MenuItem>
            </TextField>
          </div>
          <div className='flex gap-2.5 border border-gray-300 w-1/2 p-1.5'>
            <input type="file" required onChange={handleChange} accept='image/*' hidden ref={inputImage} />
            <button type='button' onClick={() => inputImage.current.click()}>Choose Image *</button>
            <div id='show'></div>
          </div>
          <TextField autoComplete='false' required sx={{ width: "50%" }} multiline maxRows={4} type={"text"} value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} label="Description" />
          <div className='flex w-1/2 justify-end'>
            <Button variant='contained' sx={{ padding: "0.5rem 2rem", textTransform: "capitalize", fontSize: '16px' }} className='border border-gray-300' type='submit'>Create</Button>
          </div>
        </div>
      </form>
    </div>

  )
}
export default CreateCourse;