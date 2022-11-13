import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "./Header.css"
export function Header({ history }) {

    const [togglemenu, setTogglemenu] = useState(false);
    const [showmenu, setshowmenu] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 800) {
            setTogglemenu(true);
        }
        else {
            setTogglemenu(false);
        }
    }, [])


    const toggleNavBar = () => {
        if (window.scrollY >= 100 || window.innerWidth < 800) {
            setTogglemenu(true);
        }
        else {
            setTogglemenu(false);
        }
    };
    window.addEventListener('scroll', toggleNavBar);
    return (
        <React.Fragment>
            {
                (togglemenu) ?
                    <motion.nav
                        initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2 }}
                        className={` w-[100%] bg-white px-[18%] mx-auto flex ${showmenu ? 'h-[100vh] flex-col justify-center ' : 'flex-row  justify-between'}  items-center top-0 z-10 fixed`}>
                        <div className='p-2 flex flex-row flex-nowrap' >
                            <a className='font-Common font-bold text-[4vmin] line-none text-[#3d3d3d] '>
                                zdm
                                <span className='text-[#c5a47e]'>.</span>
                                ofis
                            </a>
                            {showmenu ? <AiOutlineCloseCircle className='ml-8 text-[#3d3d3d]' fontSize={27} onClick={() => { setshowmenu(false) }} /> : null}
                        </div >
                        <ul className='hidden lg:flex flex-row justify-center uppercase items-center font-Common tracking-[0.22em] text-[0.77em] leading-[1.65] font-normal text-[#3d3d3d] '>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => { history.push('/') }}>ANA SAYFA</a> <div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => { history.push('/AboutUs') }} >BİZ KİMİZ?</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => { history.push('/Projects') }}>PROJELERİMİZ</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => { history.push('/Products') }}>ÜRÜNLERİMİZ</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => { history.push('/Contacts') }}>İLETİŞİM</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                        </ul>
                        {!showmenu ?
                            <div className='visible lg:hidden'>
                                <GiHamburgerMenu className='text-[#3d3d3d]' fontSize={27} onClick={() => { setshowmenu(true) }} />
                            </div>
                            : null}
                        {showmenu ?
                            <motion.ul
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2 }}
                                className='w-full flex flex-col justify-between uppercase items-center font-Common tracking-[0.22em] text-[0.77em] leading-[1.65] font-normal text-[#3d3d3d] '>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/')
                                }}>ANA SAYFA</a> <div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/AboutUs')
                                }} >BİZ KİMİZ?</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Projects')
                                }}>PROJELERİMİZ</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Products')
                                }}>ÜRÜNLERİMİZ</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#c5a47e]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Contacts')
                                }}>İLETİŞİM</a><div className='bg-[#c5a47e] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#c5a47e]' /></li>
                            </motion.ul>
                            : null}
                    </motion.nav >
                    : null}
        </React.Fragment>
    )
}
export default withRouter(Header)