import React from 'react'
import img from '../../assets/img'

export default function About() {
  return (
    <div className='w-[100%] lg:w-[60%] mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#29303e] font-semibold'>ZDM NE<span className='text-[#34586e]'>LER YAPIYOR?</span></h1>
      <div className='flex flex-col mt-6  lg:flex-row justify-center items-center'>
        <div className='flex flex-col w-2/3 md:w-1/2 lg:w-1/3 justify-center items-center'>
          <h2 className='leading-[1.1] font-Common font-bold text-[#29303e] text-[1.8em]'>düşüncelerinizi sanatsal projelere çeviriyoruz<span className='text-[#34586e]'>.</span></h2>
          <p className='mt-4 text-[1em] leading-[1.65] text-[#3b535a]'>Çalıştığımız her bir projede, sizlerin fikirlerine tecrübemizi
          ekleyerek çalışma ortamınıza değer katacak ürün kalitesini sunmak için uzman tasarım ekibimizle her zaman hizmetinizdeyiz.
          
          Gerek devlet kurumlarımız gerekse özel sektör müşterilerimiz için diledikleri ortama en uygun projeleri gerçekleştirmeye 
          sahip olduğumuz tecrübe ile devam ediyoruz.
         </p>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/3 text-center justify-center items-center px-8'>
          <h2 className='leading-[1.1] w-[100%] text-center font-Common font-bold text-[#29303e] text-[1.8em] mt-4 lg:mt-0'>uzmanlık alanlarımız</h2>
          <div className='mt-4 flex flex-col justify-center items-center'>
            <img className='mb-4 w-1/4 py-2' src={img.iconArchitecture} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#29303e] tracking-[0.2em] font-Common'>iç mimari tasarımı</p>
            <img className='my-4 w-1/4 py-2' src={img.iconInteriors} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#29303e] tracking-[0.2em] font-Common'>ofis tasarımı</p>
            <img className='my-4 w-1/4 py-2' src={img.iconPlanning} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#29303e] tracking-[0.2em] font-Common'>plan ve proje</p>
          </div>
        </div>
        <img className='w-1/2 lg:w-1/3 p-4' src={img.portfolio} />
      </div>
    </div>
  )
}
