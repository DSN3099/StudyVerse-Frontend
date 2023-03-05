import React from 'react';
import star from '../assets/star.png';

const Coursecard = ({title,course,rating,level,img}) => {
  return (
    <div class="flex flex-col bg-white-300 h-52 w-64 rounded-md gap-2.5 border border-slate-500 shadow-lg shadow-teal-500/40  transform transition duration-500 hover:scale-110">
      <div class="w-full h-[172px] overflow-clip">
        <img class="w-full h-full" src={img} alt="cardIMG" />
      </div>
      <div class="flex flex-col px-2 ">
        <div class="flex justify-between text-sm">
          <h2>{course}</h2>
          <button class="rounded-full bg-indigo-700 text-white p-1">
          {level}
          </button>
        </div>
        <div class="text-md font-bold ">
          {title}
        </div>
        <div class="flex justify-between ">
          <div class=" flex items-center gap-1 mb-1">
            <img class="h-4" src={star} alt="" />
            <h4>{rating}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursecard