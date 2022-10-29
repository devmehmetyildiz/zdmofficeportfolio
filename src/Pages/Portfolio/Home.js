import React, { useEffect } from 'react'
import img from "../../assets/img"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';
export function Home({ history }) {



  return (
    <div className='relative z-0 h-auto'>
      <div className='bg-[#f6f5f3] flex flex-col justify-center items-center absolute z-40 left-0 top-0 w-[40vmin] h-[40vmin] p-[4.8vmin 2em 4.8vmin] text-center transition-all'>
        <a className='font-Common font-bold text-[4vmin] line-none text-[#3d3d3d]'>
          zdm
          <span className='text-[#c5a47e]'>.</span>
          ofis
        </a>
        <div className='flex flex-row mt-[8vmin] font-Common'>
          <span className='text-[8vmin] tracking-widest leading-none text-[#c5a47e]'>01</span>
          <span className='mr-[0.4em] tracking-widest leading-none text-[2vmin] text-[#3d3d3d] align-top'>/</span>
          <span className='text-[#3d3d3d] tracking-widest leading-non text-[2vmin] align-top'>03</span>
        </div>
      </div>
      <div className='top-[44vmin] absolute left-[25vmin] flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center hover:text-[#c5a47e] text-[#3d3d3d] transition-all ease-in-out duration-300 cursor-pointer'>
          <FontAwesomeIcon className=' text-[2.4vmin]  mr-[5px] opacity-25' icon={faArrowLeft} />
          <p className=' text-[1em]  font-Common tracking-[0.32em]  mr-[4vmin]'>GERİ</p>
        </div>
        <div className='flex flex-row justify-center items-center hover:text-[#c5a47e] text-[#3d3d3d] transition-all ease-in-out duration-300 cursor-pointer'>
          <p className=' text-[1em] font-Common tracking-[0.32em]   mr-[5px]'>İLERİ
            
          </p>
          <FontAwesomeIcon className='  text-[2.4vmin]  mr-[2vmin] opacity-25' icon={faArrowRight} />
        </div>
      </div>
      <div className='top-[44vmin]  text-[#fff] w-1/3 absolute  right-[2vmin] md:right-[10vmin] lg:right-[25vmin] flex flex-col justify-center items-center'>
        <h1 className='sm:text-lg md:text-xl lg:text-6xl text-right tracking-widest leading-[1.3em]'>YENİ WEB SİTEMİZLE HİZMETİNİZDEYİZ</h1>
        <p className='font-semibold mt-12 text-[16px] lg:text-[18px] text-right'>Sizlere en iyi hizmeti vermek için 
        çağın önüne geçmeye devam ediyoruz.
        </p>
        <div className='mt-12 w-[100%] items-center flex justify-end'>
          <button className=' rounded-3xl   flex flex-row justify-center text-center items-center px-4 py-4 transition-all ease-in-out duration-300 bg-[#c5a47e] hover:bg-[#cb9c67]' onClick={() => { history.push('/AboutUs') }}> İNCELEMEK İÇİN TIKLAYINIZ
            <FontAwesomeIcon className=' ml-2 text-[2.4vmin]  mr-[2vmin] opacity-25 ' icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className='h-[100vh] w-[19.735vmin] z-30  absolute left-0 top-0 bg-[#f6f5f3]'>
        <div className='flex flex-col justify-center items-center bottom-0 z-10  absolute left-0 w-[100%]'>
          <p className='-rotate-90 mb-20 text-[10px] font-bold whitespace-nowrap uppercase tracking-[1em] font-Common text-[#3d3d3d] '>ZDM OFİS</p>
          <div className='h-[5vmin] mt-[3.8vmin] w-[1px] bg-[#c5c4c2]' />
          <AiOutlineLinkedin className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
          <CgInstagram className='hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin] ' />
          <CgFacebook className='mb-4 hover:text-[#c5a47e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
        </div>
      </div>
      <div className='absolute lg:left-[25%] md:left-[35%] sm:left-[45%] top-[11vmin] w-[60%] flex flex-row justify-between items-center'>
        <p className='font-Common font-light text-[0.75em] mr-4 tracking-[0.22em] text-[#3d3d3d]'>0 532 690 78 55</p>
        <div className=' sm:hidden md:hidden lg:flex flex-row justify-center items-center  font-light text-[0.75em]  cursor-pointer tracking-[0.22em]'>
          <a className='text-[#3d3d3d] mr-[8vmin] hover:text-[#c5a47e] font-Common' onClick={() => { history.push('/') }}>ZDM OFİS</a>
          <a className='text-[#3d3d3d] mr-[8vmin] hover:text-[#c5a47e] font-Common' onClick={() => { history.push('/AboutUs') }}>BİZ KİMİZ</a>
          <a className='text-[#3d3d3d] mr-[8vmin] hover:text-[#c5a47e] font-Common' onClick={() => { history.push('/Projects') }}>PROJELERİMİZ</a>
          <a className='text-[#3d3d3d] mr-[8vmin] hover:text-[#c5a47e] font-Common' onClick={() => { history.push('/') }}>ÜRÜNLERİMİZ</a>
          <a className='text-[#3d3d3d] mr-[8vmin] hover:text-[#c5a47e] font-Common' onClick={() => { history.push('/Contacts') }}>İLETİŞİM</a>
        </div>
      </div>
      <img className='w-[100vw]  h-[100vh] left-0 top-0 z-10' src={img.slide1} alt=""></img>
    </div>
  )
}
export default withRouter(Home)