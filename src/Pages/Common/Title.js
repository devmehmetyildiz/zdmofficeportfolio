import React from 'react'
import img from "../../assets/img"
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';

export function Title({ match,history, title, bg, isImg }) {
    console.log('match: ', match);
    return (
        <div className='relative z-0 '>
            <div className='bg-[#f6f5f3] flex flex-col justify-center items-center absolute z-40 left-0 top-0 w-[30vmin] h-[30vmin] p-[4.8vmin 2em 4.8vmin] text-center transition-all'>
                <a className='font-Common font-bold text-[4vmin] line-none text-[#29303e]'>
                    zdm
                    <span className='text-[#34586e]'>.</span>
                    ofis
                </a>
            </div>
            <div className='hidden md:hidden lg:visible absolute lg:left-[25%] md:left-[35%] sm:left-[45%] top-[14vmin] w-[60%] lg:flex flex-row justify-between items-center'>
                <p className='font-Common font-light text-[0.75em] tracking-[0.22em] text-[#fff]'>0552 878 00 46 </p>
                <div className=' sm:hidden md:hidden lg:flex flex-row justify-center items-center  font-light text-[0.75em]  cursor-pointer tracking-[0.22em]'>
                    <a className={`text-[#fff] mr-[8vmin] hover:text-[#34586e] font-Common`} onClick={() => { history.push('/') }}>ANA SAYFA</a>
                    <a className={`text-[#fff] mr-[8vmin] hover:text-[#34586e] font-Common`} onClick={() => { history.push('/AboutUs') }}>BİZ KİMİZ?</a>
                    <a className={`text-[#fff] mr-[8vmin] hover:text-[#34586e] font-Common`} onClick={() => { history.push('/Projects') }}>PROJELERİMİZ</a>
                    <a className={`text-[#fff] mr-[8vmin] hover:text-[#34586e] font-Common`} onClick={() => { history.push('/Products') }}>ÜRÜNLERİMİZ</a>
                    <a className={`text-[#fff] mr-[8vmin] hover:text-[#34586e] font-Common`} onClick={() => { history.push('/Contacts') }}>İLETİŞİM</a>
                </div>
            </div>
            <div className='top-[22vmin]  text-[#fff] w-1/2 lg:w-1/3 absolute  right-[2vmin] md:right-[10vmin] lg:right-[25vmin] flex flex-col justify-center items-center'>
                <h1 className='text-[8vmin] whitespace-normal text-right tracking-widest leading-[1.3em]'>{title}</h1>
            </div>
            <div className='h-[60vh] w-[19.735vmin] z-30  absolute left-0 top-0 bg-[#f6f5f3]'>
                <div className='flex flex-col justify-center items-center bottom-0 z-10   absolute left-0 w-[100%]'>
                    <div className='h-[5vmin] mt-[3.8vmin] w-[1px] bg-[#c5c4c2]' />
                    <CgFacebook className=' hover:text-[#34586e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
                    <CgInstagram className='hover:text-[#34586e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin] ' />
                    <AiOutlineLinkedin className='mb-4 hover:text-[#34586e] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
                </div>
            </div>
            {isImg ? <img className='w-[100vw]  h-[60vh] left-0 top-0 z-10 bg-repeat' src={bg} alt=""></img> :
                <div className='bg-gradient-to-r from-[#29303e] to-[#3b535a] w-full  h-[60vh] left-0 top-0 z-10 ' />
            }
        </div>
    )
}
export default withRouter(Title)