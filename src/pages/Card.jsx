import React from 'react';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';

const Card = ({title,course,level,img,price,id,type}) => {
  const navigate = useNavigate()
  return (
    <div class="flex flex-col bg-white-300 h-max w-64 rounded-md gap-2.5 border border-slate-500 shadow-lg shadow-teal-500/40  transform transition duration-500 hover:scale-[0.95] cursor-pointer" onClick={()=>{navigate(`/${type==='trending'?'courseinfo':'video'}/${id}`)}}>
      <div class="w-[254px] h-[172px] overflow-clip">
        <img class="w-full h-full object-cover" src={img} alt="cardIMG" />
      </div>
      <div class="flex flex-col gap-2.5 px-2 ">
        <div class="flex justify-between text-sm">
          <h2>{course}</h2>
          <button class="rounded-full bg-indigo-700 text-white p-1">
          {level}
          </button>
        </div>
        <div class="text-md font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-[200px]">
          {title}
        </div>
        <div class="flex justify-end ">
          <div>{price===0 ?'Free':`₹${price}`}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
