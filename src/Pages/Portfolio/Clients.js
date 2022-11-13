import React from 'react'
import img from '../../assets/img'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Clients() {

  const clients = [
    img.client1,
    img.client2,
    img.client3,
    img.client4,
    img.client5,
    img.client1,
    img.client2,
    img.client3,
    img.client4,
    img.client5,
  ]

  return (
    <div className='w-[100%]  mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>REFERAN<span className='text-[#c5a47e]'>SLARIMIZ</span></h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-12 p-8 mt-4'>
        {clients.map(item => {
          return <div key={item}>
            <img className='hover:opacity-100 cursor-pointer transition-all ease-in-out duration-500 opacity-25' src={item} alt="" />
          </div>
        })}
      </div>
      {/* <div className='mt-8 text-[#fff] font-Common font-bold'>
        <button className='shadow-lg hover:shadow-none shadow-[#c5a47e] rounded-3xl  flex flex-row justify-center items-center px-8 py-[0.8em] transition-all ease-in-out duration-1000 bg-[#c5a47e] hover:bg-[#cb9c67]'>TEKLİF ALMAK İÇİN TIKLAYIN
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
      </div> */}
    </div>
  )
}
