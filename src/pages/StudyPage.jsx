
import Navbar from '../components/Navbar/Navbar';
import ReactPlayer from "react-player";
import star from '../assets/star.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DoneIcon from '@mui/icons-material/Done';
import { green } from '@mui/material/colors';
import jevon from '../assets/jevon.jpg';
import send from '../assets/send.png'
import add from '../assets/add.png'
import images from '../assets/image.png'
import tag from '../assets/attach.png'



const sessionArray = [
    {
        id: 1,
        name: "Lorem Ipsum is simply dummy text of  ",
        url: "https://www.youtube.com/watch?v=5SXK__rm6DM&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=1"
    },
    {
        id: 2,
        name: "Lorem Ipsum is simply dummy text of  ",
        url: "https://www.youtube.com/watch?v=tWslE3uejuI&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=2"
    },
    {
        id: 3,
        name: "Lorem Ipsum is simply dummy text of ",
        url: "https://www.youtube.com/watch?v=tWslE3uejuI&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=3"
    },
    {
        id: 4,
        name: "Lorem Ipsum is simply dummy text of",
        url: "https://www.youtube.com/watch?v=tWslE3uejuI&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=4"
    },
    {
        id: 5,
        name: "Lorem Ipsum is simply dummy text of",
        url: "https://www.youtube.com/watch?v=tWslE3uejuI&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=5"
    },
    {
        id: 6,
        name: "Lorem Ipsum is simply dummy text of ",
        url: "https://www.youtube.com/watch?v=tWslE3uejuI&list=PLSzsOkUDsvds51lVJYzKWhqr4Ie6UHLx7&index=6"
    }
];

const commentArray = [
    {
        id: 1,
        name: "Anna"
    },
    {
        id: 2,
        name: "John"
    },
    {
        id: 3,
        name: "Lisa"
    },
]



function Study() {
    return (
        <div>
            <div>
                <Navbar type="verified"></Navbar>
                <div className='studyPage mx-20'>

                    <div className='mb-4 text-sm'>My course/In Progress</div>
                    <div className='course_header flex'>
                        <div class='font-bold text-4xl mb-1 flex-1'>UI Design ,A User Centered Approach</div>
                        <div className='button_grp flex-1 flex  justify-end pr-5 w-80'>
                            <button className=' bg-indigo-200 hover:bg-indigo-700 hover:text-white text-[#535CE8FF] font-bold py-2 px-4 rounded  w-26 px-2'>< ShareIcon className='pr-2 pb-1'></ShareIcon>Share</button>
                            <button className='ml-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-26 px-2 '><FavoriteIcon className='pr-2 pb-1'></FavoriteIcon>Save</button>
                        </div>
                    </div>

                    <div class='flex w-full items-center justify-between mb-3'>
                        <div class='flex gap-1 w-max p-2'>
                            <div class='text-blue-600 cursor-pointer border-r-2 pr-2'>Klara Weaver</div>
                            <img src={star} alt="" style={{ width: '20px', height: '20px' }} className="mx-2" />
                            <div class='flex font-bold'>4.5<span class='font-normal text-gray-500 border-r px-2'>(99 reviews)</span></div>

                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='course_player '>
                            <ReactPlayer width={808} height={416} controls url={sessionArray[0].url}></ReactPlayer>
                        </div>
                        <div className='sessions ml-20'>
                            <div className='sessions_header flex'>
                                <div className='flex-1 text-xl text-[#535CE8FF] pl-2.5 font-bold'>Sessions</div>
                                <div className='flex-1 text-sm pt-1 font-bold'>3/12 Completed</div>

                            </div>

                            <div className="session_list mt-5" style={{ width: '400px', height: 'auto' }}>
                                {sessionArray.map(session => (
                                    <div className='p-3.5  text-sm my-1.5 hover:border-[3px] hover:border-indigo-500' >0{session.id}. {session.name} <DoneIcon className='ml-12 mr-0' style={{ fill: green }}></DoneIcon></div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <div className='flex flex-row my-2 mx-10'>
                    <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Summary</button>
                    <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Discussion</button>
                    <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Resources & documents</button>
                    <button className='flex flex-row m-8 hover:bg-slate-200 p-4'>Transcript</button>
                </div>
                <div class='flex items-center mx-10'>

                    <img src={jevon} class='rounded-full w-8 hover:scale-150 cursor-pointer ml-3' alt="profile" />

                    <form className='mx-4' action="" method='post'>

                        <button className='m-4'><img src={add} className='w-5 hover:scale-150' alt="add" /></button>
                        <button className='m-4'><img src={images} className='w-5 hover:scale-150' alt="images" /></button>
                        <button className='m-4'><img src={tag} className='w-5 hover:scale-150' alt="attach" srcset="" /></button>

                        <input className='m-4 bg-slate-200 rounded-lg w-96 p-2' type="text" placeholder='Leave a Public Comment...' autoComplete='off'/>

                        <button className='m-4' type='submit'><img src={send} className='w-5 hover:scale-150' alt='send' /></button>

                    </form>
                </div>

            </div>
        </div>
    )
};

export default Study;


