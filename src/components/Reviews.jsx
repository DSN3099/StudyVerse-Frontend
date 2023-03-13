import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Rating, Typography, Avatar, Button,TextField } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import dp from '../assets/annie.jpg';
import { amber } from '@mui/material/colors';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';

function LinearProgressWithLabel(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%', marginRight: '2px' }}>
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div style={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

const labels = {

  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Amazing , above expectations!',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const reviews = [
  {
    id: 1, img: { dp }, name: 'Teddy Jones', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at sed iusto, illum adipisci magnam ullam ipsum sapiente qui? Error quas dolore optio earum itaque blanditiis dolor minima commodi? Iusto nisi ducimus neque animi ut, quo ullam inventore commodi excepturi aspernatur facilis incidunt debitis suscipit numquam asperiores est corporis explicabo iste cum laudantium iure mollitia.',
    likes: 2, dislikes: 4
  },
  {
    id: 2, img: { dp }, name: 'Teddy Jones', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at sed iusto, illum adipisci magnam ullam ipsum sapiente qui? Error quas dolore optio earum itaque blanditiis dolor minima commodi? Iusto nisi ducimus neque animi ut, quo ullam inventore commodi excepturi aspernatur facilis incidunt debitis suscipit numquam asperiores est corporis explicabo iste cum laudantium iure mollitia.',
    likes: 2, dislikes: 4
  },
  {
    id: 3, img: { dp }, name: 'Teddy Jones', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at sed iusto, illum adipisci magnam ullam ipsum sapiente qui? Error quas dolore optio earum itaque blanditiis dolor minima commodi? Iusto nisi ducimus neque animi ut, quo ullam inventore commodi excepturi aspernatur facilis incidunt debitis suscipit numquam asperiores est corporis explicabo iste cum laudantium iure mollitia.',
    likes: 2, dislikes: 4
  },
  {
    id: 4, img: { dp }, name: 'Teddy Jones', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at sed iusto, illum adipisci magnam ullam ipsum sapiente qui? Error quas dolore optio earum itaque blanditiis dolor minima commodi? Iusto nisi ducimus neque animi ut, quo ullam inventore commodi excepturi aspernatur facilis incidunt debitis suscipit numquam asperiores est corporis explicabo iste cum laudantium iure mollitia.',
    likes: 2, dislikes: 4
  },
  {
    id: 5, img: { dp }, name: 'Teddy Jones', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at sed iusto, illum adipisci magnam ullam ipsum sapiente qui? Error quas dolore optio earum itaque blanditiis dolor minima commodi? Iusto nisi ducimus neque animi ut, quo ullam inventore commodi excepturi aspernatur facilis incidunt debitis suscipit numquam asperiores est corporis explicabo iste cum laudantium iure mollitia.',
    likes: 2, dislikes: 4
  },
]


const Reviews = () => {
  const color = amber[400]

  const [open,setOpen] = useState(false)
  const [dialog,setDialog] = useState(false)
  const [value, setValue] = useState(0.5)
  const [hover, setHover] = useState(-1)
  const [reportdesc,setReportdesc] = useState(false)
  const [userreport,setUserReport] = useState()
  const [userreviews,setUserReviews] = useState()
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between'>
        <div className='flex gap-2 w-full'>
          <div className='flex gap-5 flex-col w-[200px]'>
            <span className='text-[24px] font-semibold'>Ratings & Reviews</span>
            <div className='flex gap-2 items-center'>
              <div className='border border-green-700 px-[8px] py-[4px] rounded-[20px] bg-green-700 items-center flex'>
                <span className='text-white text-[20px] '>4.1</span>
                <StarIcon sx={{ color: 'white', height: '22px' }} />
              </div>
              <span className='text-[16px] font-[400] text-gray-500'>1,198 reviews</span>
            </div>
          </div>
          <hr style={{ height: "130px", width: '1px', border: '1px solid #A0A0A0' }} />
          <div className='flex flex-col w-[400px]'>
            <div className='flex items-center gap-2 '>
              <span className='font-semibold'>5</span>
              <StarIcon sx={{ width: "14px", height: '18px' }} />
              <LinearProgressWithLabel sx={{ width: "320px", height: '4px', borderRadius: '8px' }} value={50} color='success' />
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>4</span>
              <StarIcon sx={{ width: "14px", height: '18px' }} />
              <LinearProgressWithLabel sx={{ width: "320px", height: '4px', borderRadius: '8px' }} value='0' color='success' />
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>3</span>
              <StarIcon sx={{ width: "14px", height: '18px' }} />
              <LinearProgressWithLabel sx={{ width: "320px", height: '4px', borderRadius: '8px' }} value='0' color='success' />
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>2</span>
              <StarIcon sx={{ width: "14px", height: '18px' }} />
              <LinearProgressWithLabel sx={{ width: "320px", height: '4px', borderRadius: '8px' }} value={25} />
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-semibold'>1</span>
              <StarIcon sx={{ width: "14px", height: '18px', marginLeft: '2px' }} />
              <LinearProgressWithLabel sx={{ width: "320px", height: '4px', borderRadius: '8px' }} value={25} color='error' />
            </div>
          </div>
        </div>  
        <div>
          <Button variant='contained' sx={{ textTransform: 'capitalize', padding: "0px 20px" }} onClick={()=>{setDialog(true);setOpen(true)}}>Rate this Course</Button>
        </div>
      </div>
      {reviews.map((values, i) => (
        <div className='flex flex-col justify-center'>
          <div className='flex justify-between '>
            <div className='flex items-center gap-2'>
              <Avatar sx={{ borderRadius: "50%", width: '46px', height: '46px' }} alt='G' src={values.dp}>T</Avatar>
              <div className='flex flex-col'>
                <span className='text-gray-600 text-lg mt-1'>{values.name}</span>
                <div className='flex gap-2'>
                  <Rating precision={0.5} readOnly defaultValue='2.5' emptyIcon={<StarBorderIcon sx={{ color: "#FAAF00" }} />} />
                  <span className='text-gray-600 text-[12px]'>2 days ago</span>
                </div>
              </div>
            </div>
            <Button variant='text' disableRipple sx={{ textTransform: 'capitalize' }} onClick={()=>{setReportdesc(true);setOpen(true)}}>Report</Button>
          </div>
          <div className='pl-12 flex flex-col gap-2'>
            <span className='w-[900px]'>{values.review}</span>
            <div className='flex gap-3 items-center'>
              <div className='flex gap-1 items-center cursor-pointer'>
                <ThumbUpAltIcon />
                <span className='text-gray-600'>{values.likes}</span>
              </div>
              <div className='flex gap-1 items-center cursor-pointer'>
                <ThumbDownAltOutlinedIcon sx={{ marginTop: '5px' }} />
                <span className='text-gray-600'>{values.dislikes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {dialog && (
                    <Dialog fullWidth
                        open={open}>
                        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #F0EFF2" }}>
                            Your reviews matter to us!
                            <div>
                                <ClearIcon onClick={() => { setDialog(false) }} sx={{ cursor: 'pointer' }} />
                            </div>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description" style={{ display: 'flex', flexDirection: "column", gap: "12px", marginTop: "5px" }}>
                                {value !== null && (
                                    <div style={{ ml: 2, color: '#282828', fontSize: '16px', fontWeight: '600' }}>{labels[hover !== -1 ? hover : value]}</div>
                                )}
                                <Rating
                                    name="hover-feedback"
                                    value={value}

                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarBorderIcon style={{ opacity: 0.55, color: '#FAAF00' }} fontSize="inherit" />}
                                />
                                <TextField label="Type your reviews here..." rows={10} onChange={(e) => { setUserReviews(e.target.value) }}></TextField>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ padding: '10px 20px' }}>
                            <Button variant='contained' sx={{ textTransform: "capitalize", width: '100%' }} onClick={() => {  }}>Rate Now </Button>
                        </DialogActions>
                    </Dialog>

                )}
      {reportdesc &&
        <Dialog fullWidth
          open={open}>
          <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #F0EFF2" }}>
            Your report matter to us!
            <div>
              <ClearIcon onClick={() => { setReportdesc(false) }} sx={{ cursor: 'pointer' }} />
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description" sx={{ display: 'flex', flexDirection: "column", gap: "12px", marginTop: "5px" }}>
              <TextField label="Type your report here..." rows={10} onChange={(e) => { setUserReport(e.target.value) }}></TextField>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ padding: '10px 20px' }}>
            <Button variant='contained' sx={{ textTransform: "capitalize", width: '100%' }} onClick={() => { setReportdesc(false) }}>Report </Button>
          </DialogActions>
        </Dialog>
      }
    </div>
  )
}

export default Reviews