import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dropdown = ({page}) => {
  const navigate = useNavigate()
  const [name, SetName] = useState(page)
  const [hidden,setHidden] = useState("hidden")
  const handleClick = () => {
    if (name === 'Student') {
      SetName('Teacher')
      navigate('/teacher')
    } else {
      SetName('Student')
      navigate('/home')
    }
  }
  return (
    <div class="flex justify-center ">
      <div>
        <div class="relative" data-te-dropdown-ref>
          <button
            class="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 w-40  font-medium  leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-600 motion-reduce:transition-none"
            type="button"
            id="dropdownMenuButton1"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>setHidden(p=>p==="hidden"?null:"hidden")}
          >
            {name}
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <ul
            class={`absolute z-[1000] float-left  min-w-max list-none overflow-hidden rounded-lg border-none  bg-clip-padding text-left  shadow-lg bg-gray-100 [&[data-te-dropdown-show]]:block cursor-pointer ${hidden}`}
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
            onClick={handleClick}
          >
            <li>
              <div
                class="block text-center   w-40 whitespace-nowrap bg-transparent py-2 px-1  text-xl font-normal text-black "
                data-te-dropdown-item-ref
              >
                {name ==='Teacher' ? 'Student' : 'Teacher'}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
