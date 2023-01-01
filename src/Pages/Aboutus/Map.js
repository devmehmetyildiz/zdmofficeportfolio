import React from 'react'
import img from '../../assets/img'

export default function map() {
  return (
    <div className='mt-20 w-full  px-[20%] flex flex-col justify-center items-center'>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#29303e] font-semibold'>NERED<span className='text-[#34586e]'>EYİZ?</span></h1>
      <div className='mt-12 w-full block  relative '>
        <img  src={img.map} alt="" />
        <div className='border-2 border-[#34586e] rounded-full p-[5px] w-[1px] bg-[#34586e]  left-[56%] top-[41%] absolute'/>
      </div>
    </div>
  )
}
