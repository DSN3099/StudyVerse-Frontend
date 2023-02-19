import { Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import Navbar from './Navbar/Navbar';
import axios from 'axios'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
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
  const config = {
    headers: {
      // 'Authorization': 'bearer ',
      'Content-Type': 'application/json'
    }
  }
  const inputImage = useRef()
  // const navigate = useNavigate()
  const handleChange = async (e) => {
    e.preventDefault()
    const file = e.target.files[0];
    setCourseData({
      ...courseData,
      image: file
    })
    document.getElementById('show').innerHTML = file.name;
  }
  const postData = async() =>{
    try {
      console.log(courseData)
      const { data } = await axios.post('http://localhost:5000/api/course/', courseData, config)
      alert(data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = await uploadBytes(storageRef,courseData.image)
    console.log(url)
    alert('uploaded...')
  }
  return (
    <div className='flex w-full flex-col items-center '>
      <Navbar type={"verified"} />
      <form onSubmit={handleSubmit} className='w-full' id='form'>
        <div className='flex flex-col w-full gap-2 p-5 items-center'>
          <div className='flex w-1/2 justify-between gap-5'>
            <TextField required sx={{ width: "50%" }} value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} size='small' type={"text"} label="Title" />
            <TextField required sx={{ width: "50%" }} value={courseData.category}
              onChange={(e) => setCourseData({ ...courseData, category: e.target.value })} size='small' type={"text"} label="Catergory" />
          </div>
          <div className='flex w-1/2 justify-between gap-5'>
            <TextField required sx={{ width: "50%" }} size='small' type={"text"} value={courseData.price} onChange={(e) => setCourseData({ ...courseData, price: e.target.value })} label="Price" />
            <TextField sx={{ width: "50%" }} size='small' type={"text"} label="Level" value={courseData.level} onChange={(e) => setCourseData({ ...courseData, level: e.target.value })} />
          </div>
          <div className='flex gap-2.5 border border-gray-300 w-1/2 p-1.5'>
            <input type="file" onChange={handleChange} accept='image/*' hidden ref={inputImage} />
            <button onClick={() => inputImage.current.click()}>Choose Image</button>
            <div id='show'></div>
          </div>
          <TextField required sx={{ width: "50%" }} multiline maxRows={4} type={"text"} value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} label="Description" />
          <div className='flex w-1/2 justify-end'>
            <Button variant='contained' sx={{ padding: "0.5rem 2rem", textTransform: "capitalize", fontSize: '16px' }} className='border border-gray-300' type='submit'>Create</Button>
          </div>
        </div>
      </form>
    </div>

  )
}
export default CreateCourse;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}