import { TextField } from '@mui/material';
import { comment } from 'postcss';
import { useState } from 'react';
import add from '../assets/add.png';
import John from '../assets/annie.jpg';
import tag from '../assets/attach.png';
import Clara from '../assets/emily.jpg';
import SendIcon from '@mui/icons-material/Send';
import images from '../assets/image.png';
import Annie from '../assets/jay.jpg';
import jevon from '../assets/jevon.jpg';
import Lisa from '../assets/klara.jpg';
import send from '../assets/send.png';
import Likes from './Likes';

export const CommentDB = [
    {
        id: 1,
        img: Annie,
        name: "Annie",
        time: '12:30 pm',
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        reply: []
    },
    {
        id: 2,
        img: John,
        name: "Annie",
        time: '08:10 am',
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        reply: [
            {
                id: 21,
                img: Clara,
                name: "Annie",
                time: '08:20 am',
                comment: "Lorem ipsum dolor sit amet, consectetur adip."
            },
            {
                id: 21,
                img: Clara,
                name: "Annie",
                time: '08:20 am',
                comment: "Lorem ipsum dolor sit amet, consectetur adip."
            }
        ]
    },
    {
        id: 3,
        img: Lisa,
        name: "Annie",
        time: 'yesterday',
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        reply: [
            {
                id: 31,
                img: Clara,
                name: "Annie",
                time: '08:20 am',
                comment: "Lorem ipsum dolor sit amet, consectetur adip."
            }
        ]
    },
]

const Discussion = () => {

    const [comments, setComments] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <img src={jevon} class='rounded-full w-12 ' alt="profile" />
                <TextField required value={comments} multiline={true} rows={2} onChange={(e) => setComments(e.target.value)} className='m-4 rounded-lg w-[700px] p-2' placeholder='Leave a Public Comment...' autoComplete='off' />
                <SendIcon color='primary' onClick={handleSubmit} />
            </div>
            <div className='p-5 bg-gray-100 rounded-md'>
                {CommentDB.map((comment, i) => (
                    <div className='mb-5'>
                        <div key={comment.id}>
                            <div className='space-y-2'>
                                <div className='flex items-centre space-x-4 '>
                                    <img src={comment.img} class='rounded-full w-8 hover:scale-150 cursor-pointer' alt="profile" />
                                    <p>{comment.name}</p>
                                    <p>{comment.time}</p>
                                </div>
                                <div className='ml-12'>{comment.comment}</div>
                                <Likes />
                            </div>
                            {CommentDB.reply?.map((reply, i) => (
                                <div className='px-10 py-4 ' key={reply.id}>
                                    <div className='flex items-centre space-x-4'>
                                        <img src={reply.img} class='rounded-full w-8 hover:scale-150 cursor-pointer' alt="profile" />
                                        <p>{reply.name}</p>
                                        <p>{reply.time}</p>
                                    </div>
                                    <div className='ml-12'>{reply.comment}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button className='border-2 border-gray-500 rounded-lg p-5' type='submit'>Show more discussion</button>
            </div>
        </div>
    );
}

export default Discussion;