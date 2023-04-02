import Navbar from "../components/Navbar/Navbar";
import Avatar from '../assets/Avatar1.jpg'
import Place1 from '../assets/Place1.png'
import logo3 from "../assets/coures.png"
import Footer from "../components/Footer";
// import { Link, Rating } from "@mui/material";


function Teacher() {

    
    const ui = [
        {
          id: 1,
          name: 'UI Design, A User-Centered Approach'
        }
      ];


    return (
        <>
            <div className="nav">
                <Navbar type='verified' />
            </div>

            <div className="relative h-12 w-72 left-36">
                <pre className="absolute left-0 ">Home / UI/UX Design / <span className="font-semibold">Teacher Profile</span></pre>
            </div>

            {/* Breadcrumb */}
            {/* <div className="relative h-12 w-72 left-36">
                <pre className="absolute left-0 ">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <span> / </span>
                    <Link underline="hover" color="inherit" href="/">
                        UI/UX Design
                    </Link>
                    <span> / </span>
                    <span className="font-semibold"> Teacher Profile</span>

                </pre>
            </div> */}




            <div className=" container mx-36 px-8 py-5 h-80 max-w-4xl rounded-md border-2">
                <div className=" w-20 top-11 max-w-none"><img src={Avatar} alt="logo1" /></div>
                <div className=" relative -top-20 left-24 font-bold">Klara Weaver</div>
                <div className=" relative -top-20 left-24 text-xs font-bold">UI/UX Designer</div>

                <div className="relative logo flex -top-20 -mx-1 left-24"><img src={Place1} alt="logo" />
                    <p className="relative text-xs font-bold">New-York</p>
                </div>

                <div className="relative -my-16 -top-3 left-20 mx-2 flex ">
                    <div className="border mx-2 text-xs font-medium bg-purple-100 text-purple-500 rounded p-2">Teacher</div>
                    <div className="border bg-orange-100 font-medium text-xs text-orange-500 rounded p-2">Designer</div>
                </div>

                <div
                    className="relative -top-7 -my-16 left-96 mx-80 rounded-full bg-orange-100 text-orange-400 
            text-center box-border h-8 w-32 p-1 font-medium">
                    Top Teacher
                </div>

                <div>
                    <h1 className='relative top-24 font-bold'>Overview</h1>
                    <p className="relative top-28">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati excepturi
                        est asperiores tenetur a errorconsequatur, quis dolore cumque similique cupiditate? Tempora voluptatem
                        doloremque accusantium, vitae culpa architecto nesciunt neque.</p>
                    <table className="relative top-32">
                        <tr>
                            <th className="pr-10">Rating</th>
                            <th className="pr-10">Review</th>
                            <th className="pr-10">Course</th>
                            <th className="pr-10">Students</th>
                        </tr>
                        <tr>
                            <td className="pr-10">4.8</td>
                            <td className="pr-10">1000+</td>
                            <td className="pr-10">12</td>
                            <td className="pr-10">1000+</td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* Container courses */}
            {/* Firstpart */}

            <div className=" container mx-36 px-8 py-5 max-w-4xl rounded-md border-2 mt-16 h-[670px]"
            >
                <div>
                    <h1 className='font-bold text-lg mb-7'>Courses</h1>
                </div>
                <div className="flex">
                    {/* <div className="pr-44 font-bold">UI Design, A User-Centered Approach</div> */}
                    <div id="newui" className="pr-44 font-bold">{ui.map((teacher)=>(<div>{teacher.name}</div>))}</div>
                    <div className="pl-72 font-bold">$49</div>
                </div>

                <div className="text-[10px]">May 21 ⭐⭐⭐</div>


                <div className="w-48 top-11 max-w-none mt-1 border-solid rounded-lg border-2 object-cover">
                    <img src={logo3} alt="logo" /></div>


                <div className="relative rounded-full border-2 px-1 font-medium text-white border-orange-500 bg-orange-500
                left-[214px] bottom-[188px] w-[72px] text-[9px]">
                    free document</div>
                <div className="relative font-medium left-[214px] bottom-[170px] w-[400px] text-[13px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non esse quo ipsa? Nobis, optio!</div>
                <p className="relative font-medium left-[214px] bottom-[155px] w-[400px] text-[13px]">
                    14hours/12lesson</p>

                <div className="relative left-96 top-10">
                    <button type="button" className="relative border-2 m-1 rounded-md font-medium left-[214px] bottom-[155px]
                    w-[70px] text-[12px]">Add to Cart</button>
                    <button type="button" className="relative border-2 rounded-md font-medium left-[214px] bottom-[155px] w-[65px]
                    text-[13px]">Buy Now</button>
                </div>

                {/* secondpart*/}

                <hr className="relative bottom-20"></hr>

                <div className="relative bottom-16">
                    <div className="flex">
                        {/* <div className="pr-44 font-bold">UI Design, A User-Centered Approach</div> */}
                        <div className="pr-44 font-bold"> {ui.map((teacher)=>(<div>{teacher.name}</div>))}</div>
                        <div className="pl-72 font-bold">$49</div>
                    </div>

                    <div className="text-[10px]">May 21 ⭐⭐⭐</div>


                    <div className="w-48 top-11 max-w-none mt-1 border-solid rounded-lg border-2 object-cover">
                        <img src={logo3} alt="logo" /></div>


                    <div className="relative rounded-full border-2 px-1 font-medium text-white border-orange-500 bg-orange-500
                    left-[214px] bottom-[188px] w-[72px] text-[9px]">free document</div>
                    <div className="relative font-medium left-[214px] bottom-[170px] w-[400px] text-[13px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non esse quo ipsa? Nobis, optio!</div>
                    <p className="relative font-medium left-[214px] bottom-[155px] w-[400px] text-[13px]">
                        14hours/12lesson</p>

                    <div className="relative left-96 top-10">
                        <button type="button" className="relative border-2 m-1 rounded-md font-medium
                        left-[214px] bottom-[155px] w-[70px] text-[12px]">Add to Cart</button>
                        <button type="button" className="relative border-2 rounded-md font-medium
                        left-[214px] bottom-[155px] w-[65px] text-[13px]">Buy Now</button>
                    </div>
                </div>

                {/* followandresposone */}

                <div className="absolute top-36 left-3/4 right-12 border-2 rounded-md bg-gray-50"
                    style={{ left: '1060px', height: '476px', width: '373px', top: '138px' }}>
                    <div className="relative text-center top-6 mx-3 rounded-md h-9 py-1 font-medium 
                    text-sm bg-blue-500 text-white pt-2 cursor-pointer">
                        Follow
                    </div>
                    <div className="relative border-2 text-center top-9 mx-3 rounded-md h-9 py-1 
                    font-medium text-sm text-blue-500 border-blue-500 cursor-pointer">
                        Message
                    </div>

                    <div className="relative top-12 h-24 ml-3 w-2/5">
                        <div className="font-semibold text-lg">4.8/5</div>
                        <div className="relative top-3 text-xs font-medium">(1000+review)</div>
                        <div className="relative top-5">⭐⭐⭐</div>
                        {/* <Rating className="half-rating relative top-5" defaultValue={2.5} precision={0.5} /> */}
                    </div>
                    <div className="relative left-60 bottom-12 h-24 ml-3 w-2/5">
                        <div className="grid grid-rows-5 grid-flow-col gap-1">
                            <div className="bg-slate-300 w-full rounded-lg h-2 mt-1">
                                <div className="bg-yellow-300 w-10 rounded-lg h-2"></div>
                            </div>
                            <div className="bg-slate-300 w-full rounded-lg h-2 mt-1">
                                <div className="bg-yellow-300 w-10 rounded-lg h-2"></div>
                            </div>
                            <div className="bg-slate-300 w-full rounded-lg h-2 mt-1">
                                <div className="bg-yellow-300 w-10 rounded-lg h-2"></div>
                            </div>
                            <div className="bg-slate-300 w-full rounded-lg h-2 mt-1">
                                <div className="bg-yellow-300 w-10 rounded-lg h-2"></div>
                            </div>
                            <div className="bg-slate-300 w-full rounded-lg h-2 mt-1">
                                <div className="bg-yellow-300 w-10 rounded-lg h-2"></div>
                            </div>
                            <div className="font-bold text-[11px]" >5</div>
                            <div className="font-bold text-[11px]" >4</div>
                            <div className="font-bold text-[11px]" >3</div>
                            <div className="font-bold text-[11px]" >2</div>
                            <div className="font-bold text-[11px]" >1</div>
                        </div>
                    </div>

                    <div className="relative bottom-8 left-3">
                        <h1 className="font-bold">Response Time</h1>
                        <p className="font-semibold text-sm">Very responsive to message</p>
                    </div>


                    <div className="relative left-3">
                        <h1 className="font-bold">Certificate</h1>
                        <p className="font-semibold text-sm">Google UX Design Professional</p>
                    </div>


                    <div className="relative top-3 left-3">
                        <h1 className="font-bold">Profile Link</h1>
                        <p className="relative font-semibold text-xs border-2 rounded-md h-9 py-1 top-3 pl-3 pt-2 w-11/12 bg-white">
                            Link</p>
                    </div>

                </div>

            </div>

            <div className="relative top-10">
                <Footer />
            </div>

        </>
    );
}

export default Teacher;