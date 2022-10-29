import React from 'react'
import img from '../../assets/img'

export default function services() {

  const items = [
    {
      img: img.iconArchitecture,
      title: 'İÇ MEKAN TASARIMI',
      text: 'Alanında uzman mimarlarımız ile birlikte bilgisayar ortamında çizimini yaptığımız projelerinizi, tecrübeli montoj ekibimizle eksiksiz bir şekilde teslim ediyoruz.',
    },
    {
      img: img.iconInteriors,
      title: 'OFİS TASARIMI',
      text: 'Çalışma ortamınızdan maksimum verimi alabilmeniz için ergonomik tasarıma sahip ofis ürünlerimizle birlikte hizmetinizdeyiz.',
    },
    {
      img: img.iconPlanning,
      title: 'PLAN VE PROJE',
      text: 'Siz düşüncelerinizi anlatın. Gerisini bize bırakın. Alanında uzman ekip arkadaşarımızla birlikte düşünceleriniz gerçeğe dönüşmek için sadece sizin onayınızı bekliyor.',
    },
  ]

  return (
    <div className='mt-20 w-full px-[20%] flex flex-col justify-center items-center'>
      <h1 className='text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#3d3d3d] font-semibold'>PROJE<span className='text-[#c5a47e]'>LERİMİZ</span></h1>
      <div className='mt-8 flex flex-col lg:flex-row justify-center items-center w-full'>
        {items.map(item => {
          return <div className='font-Common lg:px-8 flex flex-col justify-center items-start w-full'>
            <img src={item.img} alt="" />
            <h2 className='mt-4 tracking-[0.2em] text-[1.125em] leading-[1.35] font-bold text-[#3d3d3d]'>{item.title}</h2>
            <p className='mt-4 text-[1em] leading-[1.65] text-[#747474] font-Common'>
              {item.text}
            </p>
          </div>
        })}
      </div>
    </div>
  )
}
