import React from 'react'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center mt-12'>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center lg:whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#29303e] font-semibold'>İLETİŞİM  <span className='text-[#34586e]'>BİLGİLERİ</span></h1>
      <div className='w-[100%] px-[18%] mt-20 flex flex-col lg:flex-row justify-between items-center'>
        <div className=' flex h-[100%] tracking-wide whitespace-nowrap pt-8  p-2 m-2 flex-col items-start justify-center text-[1.125em] text-[#3b535a] max-h-[7em] leading-[1.7]'>
          <p>+ 90 552 878 00 46</p>
          <p>info@zdmofis.com.tr</p>
          <p>pazarlama@zdmofis.com.tr</p>
          <h1>Maarif Mahallesi Turgut Özal Bulvarı</h1>
          <h1>No:83/E Onikişubat/Kahramanmaraş</h1>
          
        </div>
        <div className='mt-20 lg:mt-0 flex  flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className=' h-[3em] text-[1em]  rounded-lg text-[#3b535a] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#34586e]  m-2 p-2' placeholder='İSİM* ' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#3b535a] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#34586e]  m-2 p-2' placeholder='SOY İSİM*' />
          </div>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className='h-[3em] text-[1em] rounded-lg text-[#3b535a] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#34586e]  m-2 p-2' placeholder='TELEFON*' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#3b535a] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#34586e]  m-2 p-2' placeholder='FİRMA' />
          </div>
          <div className='h-[100%]'>
            <input className='h-[7em] text-[1em] rounded-lg text-[#3b535a] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#34586e]  m-2 p-2' placeholder='MESAJINIZ' />
          </div>
        </div>
      </div>
      <div className='w-[100%] px-[23%] my-4 flex flex-row justify-center lg:justify-end items-end'>
        <button className='mt-4  shadow-lg hover:shadow-none shadow-[#34586e] rounded-3xl text-[#fff] flex flex-row justify-center items-center px-4 py-4 transition-all ease-in-out duration-1000 bg-[#34586e] hover:bg-[#cb9c67]'>GÖNDER
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
      </div>
      <div className='flex my-12 flex-col lg:flex-row  justify-between items-center w-[100%] lg:px-[23%]'>
        <a className='font-Common font-bold cursor-pointer text-[4vmin] line-none text-[#29303e]'>
          zdm
          <span className='text-[#34586e]'>.</span>
          ofis
        </a>
        <a className='font-Common  text-[12px] line-none cursor-pointer text-[#d0d0d0] hover:text-[#34586e]'>
          by ARMS TEKNOLOJİ
        </a>
        <p className='font-Common  text-[12px] line-none text-[#d0d0d0] cursor-default'>
          © ZDM OFİS 2022. Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  )
}
