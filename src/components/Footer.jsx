import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/Twitter.svg';
import youtube from '../assets/Youtube.svg';
import linkedin from '../assets/Linkedin.svg';
import emailjs from '@emailjs/browser';
import Alert from './Alert';

const Footer = () => {
  const [alert, setAlert] = useState(false)
  const form = useRef()
  const timeOutRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b4b4jnf', 'template_6ta3ezl', form.current, 'i2wpPinbB8m9ZVwLp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  function resetTimeOut() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current)
    }
  }

  useEffect(() => {
    if (alert) {
      resetTimeOut()
      timeOutRef.current = setTimeout(() => {
        setAlert(false)
      }, 3000)
    }
  }, [alert])

  return (
    <div className="bg-gray-200/40 w-full flex flex-col " id='form'>
      {alert &&
        <Alert type='SUCCESS' msg = 'Subscribed successfully' />
      }
      <div class="flex px-5 mt-9">
        {/* logo */}
        <div class="h-full w-1/5">
          <img src={logo} alt="" />
        </div>
        {/* newsletter */}
        <div class="flex flex-col items-center justify-center w-full gap-y-4">
          <div class="font-bold">Newsletter</div>
          <div class="font-thin">
            Subscribe to our newsletter to get the latest news and updates
          </div>
          <div class="flex justify-around">
            <form ref={form} onSubmit={sendEmail} class='flex gap-2'>
              <input
                type="text"
                placeholder="Enter your email"
                name='user-name'
                class="border border-gray-300 rounded-md px-2 w-[200px] py-2 focus:outline-none "
              />
              <button type='submit' class="bg-indigo-700 text-white rounded-md p-2" onClick={() => setAlert(true)} >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* border line */}
      <div class="border-t border-black-300 mt-9"></div>
      <div class="flex  justify-between">
        {/* privacy */}
        <div class=" m-7 px-3 py-2 h-full border border-gray-500  rounded-md ">
          English
        </div>
        {/* <div class="flex items-center  gap-4 cursor-pointer">
          <div>@2022 Brand Inc -</div>
          <div>Privacy -</div>
          <div>Terms -</div>
          <div>Sitemap </div>
        </div> */}
        {/* social media */}
        <div class="flex items-center gap-3 pr-5 cursor-pointer  ">
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={twitter} alt="twitter" />
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={facebook} alt="" />
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={linkedin} alt="" />
          <img class='h-8 w-8  transform transition duration-500 hover:scale-110' src={youtube} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
