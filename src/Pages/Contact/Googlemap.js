import React from 'react'
import { AiFillPhone } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { FaMapMarkerAlt } from "react-icons/fa"
export default function googlemap() {
  return (
    <div className=' w-full flex flex-col lg:flex-row justify-center flex-nowrap items-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9002317895956!2d36.88460891560783!3d37.58096693105864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddd582bf9755b%3A0x2551949b2bd17639!2sZDM%20Ofis%20ve%20E%C4%9Fitim%20Mobilyalar%C4%B1!5e0!3m2!1str!2str!4v1667566712526!5m2!1str!2str"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <div className='w-1/2 text-white font-Common bg-[#c5a47df2] h-[500px] flex flex-col justfy-center items-start'>
        <div className='flex flex-col justfy-start tracking-widest items-start p-8'>
          <div className='w-full  flex text-2xl flex-row justify-start mb-4 items-center'>
            <AiFillPhone className='mr-4'/>
            <h1>PHONE</h1>
          </div>
          <div className='text-lg'>
            <h1>+ 0 543 554 44-25</h1>
            <h1>+ 0 543 554 44-25</h1>
            <h1>+ 0 543 554 44-25</h1>
          </div>
        </div>
        <div className='flex flex-col justfy-start items-start tracking-widest p-8'>
          <div className='w-full text-2xl  flex flex-row justify-start mb-4 items-center'>
            <FiMail className='mr-4'/>
            <h1>EMAIL</h1>
          </div>
          <h1 className='text-lg'>goarch@domin.com</h1>
        </div>
        <div className='flex flex-col justfy-start tracking-widest items-start p-8'>
          <div className='w-full flex text-2xl flex-row justify-start mb-4 items-center'>
            <FaMapMarkerAlt className='mr-4'/>
            <h1>ADDRESS</h1>
          </div>
         <div className='text-lg'>
         <h1>USA, New York,</h1>
          <h1>648 Ivah Street Apt. 375</h1>
         </div>
        </div>
      </div>
    </div>
  )
}
