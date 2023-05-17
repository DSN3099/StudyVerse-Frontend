import Navbar from "../components/Navbar/Navbar";
import course from '../assets/piccourse.jpg'
import course1 from '../assets/piccourse1.jpg'
import Footer from "../components/Footer";
import {Avatar, Button, Paper} from '@mui/material';



function Teacher() {
    const data = [
        {
            id: 1,
            name: 'UI Design, A User-Centered Approach', price: '$49', created: 'May,2023', img: course, body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam minus sed corrupti voluptatem, rem distinctio? Officiis recusandae excepturi explicabo doloribus.'
        },
        {
            id: 2,
            name: 'How to set up a design system', price: '$49', created: 'May,2023', img: course1, body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam minus sed corrupti voluptatem, rem distinctio? Officiis recusandae excepturi explicabo doloribus.'
        },
        {
            id: 3,
            name: 'AWS course', price: '$49', created: 'May,2023', img: course, body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam minus sed corrupti voluptatem, rem distinctio? Officiis recusandae excepturi explicabo doloribus.'
        },

    ];


    return (
        <>
            <div className="nav">
                <Navbar type='verified' />
            </div>
            <div className="p-10 flex flex-col gap-7 ">
                <div className=" p-3 rounded-md gap-3  flex flex-col justify-between ">
                    <div className="flex w-full justify-between ">
                        <div className="flex gap-3 items-center">
                            <Avatar src="Ava" sx={{ width: '50px', height: '50px' }}>G</Avatar>
                            <div className="flex flex-col">
                                <span className="font-bold font-mono">Klara Weaver</span>
                                <span className="text-sm text-slate-500">Senior UI/UX</span>
                            </div>
                        </div>
                        <div className="bg-orange-100 w-[80px] h-[28px] flex items-center rounded-xl justify-center ">
                            <span className="text-xs text-orange-400">Top Teacher</span>
                        </div>
                    </div>
                    <div className="flex flex-col px-3">
                        <span className="text-2xl font-semibold font-mono ">Overview</span>
                        <span className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque error eum praesentium, ratione dolorum atque hic iusto fugiat magni tempore dolorem minus dolores repellat nisi. Repudiandae, provident consequatur rem deleniti repellendus at autem? Dicta commodi, ullam impedit hic, cumque blanditiis</span>
                    </div>
                </div>
                <hr style={{ height: "2px" }} />
                <Paper elevation={2}>
                    <div className=" px-5 rounded-md  flex flex-col gap-5 h-[630px] ">
                        <h1 className='font-bold text-lg pt-3'>Courses</h1>
                        <div className="overflow-scroll flex flex-col gap-3">
                            {data.map((value, i) => (
                                <div className="p-3 w-[90%] rounded-md mb-7 ">
                                    <div className="flex justify-between w-[90%]">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xl font-bold">{value.name}</span>
                                            <span className="text-xs text-gray-400 mb-2">{value.created}</span>
                                        </div>
                                        <span className="text-xl font-bold">{value.price}</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <img src={value.img} alt="course" style={{ width: "331px", height: "196px", borderRadius: "12px" }} />
                                        <div className="flex flex-col gap-5 ">
                                            <span className="text-[18px] text-gray-400">{value.body}</span>
                                            <div className="flex gap-5 justify-end w-[90%]">
                                                <Button variant="outlined">Add to Cart</Button>
                                                {/* <Button variant="contained">Buy Now</Button> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ marginTop: '3rem', width: '80%', marginLeft: '5rem ' }} />
                                </div>
                            ))
                            }

                        </div>
                    </div>
                </Paper>
            </div>
            <div>
                <Footer />
            </div>

        </>
    );
}

export default Teacher;