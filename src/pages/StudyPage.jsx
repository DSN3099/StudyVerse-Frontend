
import Navbar from '../components/Navbar/Navbar';
import ReactPlayer from "react-player";
import star from '../assets/star.png';




const sessionArray = [
    {   
        id : 1 ,
        name : "Lorem Ipsum is simply dummy text of  "
    },
    {   
        id : 2 ,
        name : "Lorem Ipsum is simply dummy text of  "
    },
    {   
        id : 3 ,
        name : "Lorem Ipsum is simply dummy text of "
    },
    {   
        id : 4 ,
        name : "Lorem Ipsum is simply dummy text of"
    },
    {   
        id : 5 ,
        name : "Lorem Ipsum is simply dummy text of"
    },
    {   
        id : 6 ,
        name : "Lorem Ipsum is simply dummy text of "
    }
];



function Study(){
    return(
        
        <div className='studyPage mx-20'>
            <Navbar type = "verified"></Navbar>
            <div className='mb-4 text-sm'>My course/In Progress</div>
            <div className='course_header flex'>
               <div class='font-bold text-4xl mb-1 flex-1'>UI Design ,A User Centered Approach</div>
               <div className='button_grp flex-1 flex  justify-end pr-5 w-80'>
                            <button className=' bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-24 '>Share</button>
                            <button className='ml-4 bg-indigo-200 hover:bg-indigo-700 hover:text-white text-[#535CE8FF] font-bold py-2 px-4 rounded w-24'>Save</button>
                </div>
            </div>
           
            <div class='flex w-full items-center justify-between mb-3'>
                    <div class='flex gap-1 w-max p-2'>
                        <div class='text-blue-600 cursor-pointer border-r-2 pr-2'>Klara Weaver</div>
                        <img src={star} alt="" style={{ width: '20px', height: '20px' }} className="mx-2"/>
                        <div class='flex font-bold'>4.5<span class='font-normal text-gray-500 border-r px-2'>(99 reviews)</span></div>
                        
                    </div>
            </div>       
            <div className='flex flex-row'>
                <div className='course_player '>
                   <ReactPlayer width={808} height = {416} controls url = "https://www.youtube.com/watch?v=-6_7NywjE6I"></ReactPlayer>
                </div>
                <div className='sessions ml-20'>
                    <div className='sessions_header flex'>
                        <div className= 'flex-1 text-xl text-[#535CE8FF] pl-2.5'>Sessions</div>
                        <div className='flex-1 text-sm pt-1 font-bold'>3/12 Completed</div>
                       
                    </div>
                    
                    <div className="session_list mt-5" style={{width : '400px' , height : 'auto'  }}>
                        {sessionArray.map(session => (
                           <div className='p-3.5  text-sm my-1.5 hover:border-[3px] hover:border-indigo-500' >0{session.id}. {session.name}</div>
                           ) )}
                    </div>
                 </div>
                 
            </div>
            
        </div>
    )
};

export default Study;

