import React from 'react'
import { AiFillPhone } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { FaMapMarkerAlt } from "react-icons/fa"
export default function googlemap() {
  return (
    <div className=' w-full flex flex-col lg:flex-row justify-center flex-nowrap items-center'>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.7416139271993!2d36.836443900601594!3d37.59078476195477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ddb9f800966d5%3A0x2db018c68ad1c16b!2sZDM%20Ofis%20ve%20E%C4%9Fitim%20Mobilyalar%C4%B1!5e0!3m2!1str!2str!4v1672606281246!5m2!1str!2str"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <div className='w-full lg:w-1/2 text-white font-Common bg-[#34586e] h-[500px] flex flex-col justfy-center items-start'>
        <div className='flex flex-col justfy-start tracking-widest items-start p-8'>
          <div className='w-full  flex text-2xl flex-row justify-start mb-4 items-center'>
            <AiFillPhone className='mr-4' />
            <h1>Telefon</h1>
          </div>
          <div className='text-lg'>
            <h1>+90 552 878 00 46 </h1>
          </div>
        </div>
        <div className='flex flex-col justfy-start items-start tracking-widest p-8'>
          <div className='w-full text-2xl  flex flex-row justify-start mb-4 items-center'>
            <FiMail className='mr-4' />
            <h1>EMAIL</h1>
          </div>
          <h1 className='text-lg'>info@zdmofis.com.tr</h1>
          <h1 className='text-lg'>pazarlama@zdmofis.com.tr</h1>
        </div>
        <div className='flex flex-col justfy-start tracking-widest items-start p-8'>
          <div className='w-full flex text-2xl flex-row justify-start mb-4 items-center'>
            <FaMapMarkerAlt className='mr-4' />
            <h1>Adres</h1>
          </div>
          <div className='text-lg'>
            <h1>Maarif Mahallesi Turgut Özal Bulvarı</h1>
            <h1>No:83/E Onikişubat/Kahramanmaraş</h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}
